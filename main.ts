namespace SpriteKind {
    export const PowerUp = SpriteKind.create()
    export const TrøjeP = SpriteKind.create()
    export const BukserP = SpriteKind.create()
    export const Prompt1 = SpriteKind.create()
    export const Prompt2 = SpriteKind.create()
    export const Prompt3 = SpriteKind.create()
    export const SKYDER1 = SpriteKind.create()
    export const PromptKlædeskab2 = SpriteKind.create()
    export const GivOp = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.GivOp, function (sprite, otherSprite) {
    game.gameOver(false)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -150
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.BukserP, function (sprite, otherSprite) {
    game.showLongText("8000 liter vand kræves for at producere et par bukser som svare til det årlige gennemsnits vandforbrug pr dansker. ", DialogLayout.Bottom)
    sprites.destroy(Bukser, effects.spray, 500)
})
function Ramt () {
    mySprite.setFlag(SpriteFlag.GhostThroughTiles, true)
    mySprite.setFlag(SpriteFlag.GhostThroughSprites, true)
    info.changeLifeBy(-1)
    info.startCountdown(2)
    for (let index = 0; index < 8; index++) {
        pause(100)
        mySprite.setFlag(SpriteFlag.Invisible, true)
        pause(100)
        mySprite.setFlag(SpriteFlag.Invisible, false)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    game.showLongText("Tillykke du har nu afleveret dit tøj i genbrug, og det kan nu få glæde i andres besidelse", DialogLayout.Bottom)
    pause(2000)
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Prompt1, function (sprite, otherSprite) {
    game.showLongText("Du kommer hjem fra VIA", DialogLayout.Bottom)
    sprites.destroy(Prompt12)
})
info.onCountdownEnd(function () {
    mySprite.setFlag(SpriteFlag.GhostThroughTiles, false)
    mySprite.setFlag(SpriteFlag.GhostThroughSprites, false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.PromptKlædeskab2, function (sprite, otherSprite) {
    game.showLongText("Hårdt at genbruge?", DialogLayout.Bottom)
    game.showLongText("Giv op, og lig tøjet ilbage i skabet", DialogLayout.Bottom)
    game.showLongText("Eller fortsæt din mission til venstre", DialogLayout.Bottom)
    sprites.destroy(PromptKlædeskab22)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile11`, function (sprite, location) {
    Trøje.setFlag(SpriteFlag.Invisible, false)
    Bukser.setFlag(SpriteFlag.Invisible, false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Prompt3, function (sprite, otherSprite) {
    game.showLongText("Du beslutter dig for at aflevere dit tøj i genbrug", DialogLayout.Bottom)
    game.showLongText("Men pas på at du ikke kommer til at tage \"det nemme valg\"", DialogLayout.Bottom)
    game.showLongText("Nemlig at smide tøjet i skaldespanden, til afbrænding eller i havet", DialogLayout.Bottom)
    sprites.destroy(Prompt32)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    Ramt()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    Ramt()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Prompt2, function (sprite, otherSprite) {
    game.showLongText("Du ser dit klædeskab og ved du burde få ryddet ud i noget gammelt tøj", DialogLayout.Bottom)
    sprites.destroy(Promtp2)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile13`, function (sprite, location) {
    Ramt()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.TrøjeP, function (sprite, otherSprite) {
    game.showLongText("Tøjindustrien alene står for en større udledning end internationale flyrejser ", DialogLayout.Bottom)
    game.showLongText("og skibsfart tilsammen, og den rangerer som den næstmest forurenende industri i verden efter olieindustrien", DialogLayout.Bottom)
    sprites.destroy(Trøje, effects.spray, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    Ramt()
})
let Skyder4: Sprite = null
let Game_Over: Sprite = null
let PromptKlædeskab22: Sprite = null
let Prompt32: Sprite = null
let Promtp2: Sprite = null
let Prompt12: Sprite = null
let Bukser: Sprite = null
let Trøje: Sprite = null
let Skraldespand: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    ........................
    .....ffff...............
    ...fff22fff.............
    ..fff2222fff............
    .fffeeeeeefff...........
    .ffe222222eef...........
    .fe2ffffff2ef...........
    .ffffeeeeffff...........
    ffefbf44fbfeff..........
    fee41fddf14eef..........
    .feeddddddeef...........
    ..fee4444eef............
    .e4f222222f4e...........
    .4df222222fd4...........
    .44f445544f44...........
    ....ffffff..............
    ....ff..ff..............
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
scene.cameraFollowSprite(mySprite)
mySprite.ay = 350
mySprite.setPosition(10, 210)
info.setLife(3)
for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
    Skraldespand = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . b b b b b . . . . . . 
        . . . . . b . . . b . . . . . . 
        . . . b b b b b b b b b . . . . 
        . . . . d d d d d d d . . . . . 
        . . . . d b d b d b d . . . . . 
        . . . . d b d b d b d . . . . . 
        . . . . d b d b d b d . . . . . 
        . . . . d b d b d b d . . . . . 
        . . . . d b d b d b d . . . . . 
        . . . . d b d b d b d . . . . . 
        . . . . d b d b d b d . . . . . 
        . . . . d b d b d b d . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnTile(Skraldespand, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
    Skraldespand.ay = 50
    Skraldespand.vx = 50
}
Trøje = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 3 3 3 3 3 3 . . . . . 
    . . . . . 3 3 3 3 3 3 . . . . . 
    2 3 2 3 2 2 2 2 2 2 2 2 3 2 3 2 
    2 3 2 3 2 2 2 2 2 2 2 2 3 2 3 2 
    . . . . 3 3 3 3 3 3 3 3 . . . . 
    . . . . 2 2 2 2 2 2 2 2 . . . . 
    . . . . 3 3 3 3 3 3 3 3 . . . . 
    . . . . 2 2 2 2 2 2 2 2 . . . . 
    . . . . 3 3 3 3 3 3 3 3 . . . . 
    . . . . 2 2 2 2 2 2 2 2 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.TrøjeP)
Trøje.setPosition(190, 212)
animation.runMovementAnimation(
Trøje,
animation.animationPresets(animation.bobbing),
2000,
true
)
Bukser = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f 5 f f . . . . . . 
    . . . . . 8 8 8 8 8 . . . . . . 
    . . . . . 8 8 . 8 8 . . . . . . 
    . . . . . 8 8 . 8 8 . . . . . . 
    . . . . . 8 8 . 8 8 . . . . . . 
    . . . . . 8 8 . 8 8 . . . . . . 
    . . . . . 8 8 . 8 8 . . . . . . 
    . . . . . 8 8 . 8 8 . . . . . . 
    . . . . . 8 8 . 8 8 . . . . . . 
    `, SpriteKind.BukserP)
Bukser.setPosition(175, 210)
animation.runMovementAnimation(
Bukser,
animation.animationPresets(animation.bobbing),
2000,
true
)
Trøje.setFlag(SpriteFlag.Invisible, true)
Bukser.setFlag(SpriteFlag.Invisible, true)
for (let value of tiles.getTilesByType(assets.tile`tile6`)) {
    Prompt12 = sprites.create(img`
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        `, SpriteKind.Prompt1)
    tiles.placeOnTile(Prompt12, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
for (let value of tiles.getTilesByType(assets.tile`tile9`)) {
    Promtp2 = sprites.create(img`
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        `, SpriteKind.Prompt2)
    tiles.placeOnTile(Promtp2, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
for (let value of tiles.getTilesByType(assets.tile`tile12`)) {
    Prompt32 = sprites.create(img`
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        `, SpriteKind.Prompt3)
    tiles.placeOnTile(Prompt32, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
for (let value5 of tiles.getTilesByType(assets.tile`tile17`)) {
    PromptKlædeskab22 = sprites.create(img`
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        `, SpriteKind.PromptKlædeskab2)
    tiles.placeOnTile(PromptKlædeskab22, value5)
    tiles.setTileAt(value5, assets.tile`transparency16`)
}
for (let value6 of tiles.getTilesByType(assets.tile`tile18`)) {
    Game_Over = sprites.create(img`
        . . e e e e e e e e e e e e . . 
        . . e e e e e e e e e e e e . . 
        . . e e e e e e e e e e e e . . 
        . . e e e e e e e e e e e e . . 
        . . e e e e e e e e e e e e . . 
        . . e e e e e e e e e e e e . . 
        . . e e e e e e e e e e e e . . 
        . . e e e e e e e e e e e e . . 
        . . e e e e e e e e e e e e . . 
        . . e e e e e e e e e e e e . . 
        . . e e e e e e e e e e e e . . 
        . . e e e e e e e e e e e e . . 
        . . e e e e e e e e e e e e . . 
        . . e e e e e e e e e e e e . . 
        . e e e e e e e e e e e e e e . 
        . e e . . . . . . . . . . e e . 
        `, SpriteKind.GivOp)
    tiles.placeOnTile(Game_Over, value6)
    tiles.setTileAt(value6, assets.tile`transparency16`)
}
let Skyder1 = sprites.createProjectileFromSide(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, 0, 0)
let Skyder2 = sprites.createProjectileFromSide(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, 0, 0)
let Skyder3 = sprites.createProjectileFromSide(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, 0, 0)
forever(function () {
    Skyder1 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 4 4 4 4 4 . . . . . . 
        . . . 4 4 4 5 5 5 d 4 4 4 4 . . 
        . . 4 d 5 d 5 5 5 d d d 4 4 . . 
        . . 4 5 5 1 1 1 d d 5 5 5 4 . . 
        . 4 5 5 5 1 1 1 5 1 1 5 5 4 4 . 
        . 4 d d 1 1 5 5 5 1 1 5 5 d 4 . 
        . 4 5 5 1 1 5 1 1 5 5 d d d 4 . 
        . 2 5 5 5 d 1 1 1 5 1 1 5 5 2 . 
        . 2 d 5 5 d 1 1 1 5 1 1 5 5 2 . 
        . . 2 4 d d 5 5 5 5 d d 5 4 . . 
        . . . 2 2 4 d 5 5 d d 4 4 . . . 
        . . 2 2 2 2 2 4 4 4 2 2 2 . . . 
        . . . 2 2 4 4 4 4 4 4 2 2 . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        `, Skyder1, 0, -30)
    Skyder1.setPosition(488, 220)
    pause(2000)
})
forever(function () {
    Skyder2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 4 4 4 4 4 . . . . . . 
        . . . 4 4 4 5 5 5 d 4 4 4 4 . . 
        . . 4 d 5 d 5 5 5 d d d 4 4 . . 
        . . 4 5 5 1 1 1 d d 5 5 5 4 . . 
        . 4 5 5 5 1 1 1 5 1 1 5 5 4 4 . 
        . 4 d d 1 1 5 5 5 1 1 5 5 d 4 . 
        . 4 5 5 1 1 5 1 1 5 5 d d d 4 . 
        . 2 5 5 5 d 1 1 1 5 1 1 5 5 2 . 
        . 2 d 5 5 d 1 1 1 5 1 1 5 5 2 . 
        . . 2 4 d d 5 5 5 5 d d 5 4 . . 
        . . . 2 2 4 d 5 5 d d 4 4 . . . 
        . . 2 2 2 2 2 4 4 4 2 2 2 . . . 
        . . . 2 2 4 4 4 4 4 4 2 2 . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        `, Skyder2, 0, -60)
    Skyder2.setPosition(620, 195)
    pause(1000)
})
forever(function () {
    Skyder3 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Skyder3, 0, 100)
    Skyder3.setPosition(872, 120)
    pause(2000)
})
forever(function () {
    Skyder4 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Skyder4, 0, 120)
    Skyder4.setPosition(900, 120)
    pause(2000)
    pause(200)
})
forever(function () {
    for (let value7 of sprites.allOfKind(SpriteKind.Enemy)) {
        if (tiles.tileAtLocationIsWall(value7.tilemapLocation().getNeighboringLocation(CollisionDirection.Left))) {
            value7.vx = 50
        } else if (tiles.tileAtLocationIsWall(value7.tilemapLocation().getNeighboringLocation(CollisionDirection.Right))) {
            value7.vx = -50
        }
        if (!(tiles.tileAtLocationIsWall(value7.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Left)))) {
            value7.vx = 50
        } else if (!(tiles.tileAtLocationIsWall(value7.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Right)))) {
            value7.vx = -50
        }
    }
})
