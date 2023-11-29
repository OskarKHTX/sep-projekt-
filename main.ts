namespace SpriteKind {
    export const PowerUp = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -150
    }
})
function Ramt () {
    mySprite.setFlag(SpriteFlag.GhostThroughTiles, true)
    mySprite.setFlag(SpriteFlag.GhostThroughSprites, true)
    info.changeLifeBy(-1)
    info.startCountdown(2)
    for (let index = 0; index < 8; index++) {
        mySprite.setFlag(SpriteFlag.Invisible, true)
        pause(100)
        mySprite.setFlag(SpriteFlag.Invisible, false)
        pause(100)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.PowerUp, function (sprite, otherSprite) {
    game.showLongText("Jeans, bruger 1000 liter vand at producere.", DialogLayout.Bottom)
    sprites.destroy(Bukser, effects.spray, 500)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    game.splash("Tillykke du har nu afleveret dit tøj i genbrug, og det kan nu få glæde i andres besidelse")
    pause(2000)
    game.gameOver(true)
})
info.onCountdownEnd(function () {
    mySprite.setFlag(SpriteFlag.GhostThroughTiles, false)
    mySprite.setFlag(SpriteFlag.GhostThroughSprites, false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    Ramt()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    Ramt()
})
let Skraldespand: Sprite = null
let Bukser: Sprite = null
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
    .ffffdddddeef...........
    fddddf444eef............
    fbbbbf2222f4e...........
    fbbbbf2222fd4...........
    .fccf45544f44...........
    ..ffffffff..............
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
Bukser = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f 5 f f . . . . . . 
    . . . . . f f 5 f f . . . . . . 
    . . . . . 8 8 . 8 8 . . . . . . 
    . . . . . 8 8 . 8 8 . . . . . . 
    . . . . . 8 8 . 8 8 . . . . . . 
    . . . . . 8 8 . 8 8 . . . . . . 
    . . . . . 8 8 . 8 8 . . . . . . 
    . . . . . 8 8 . 8 8 . . . . . . 
    . . . . . 8 8 . 8 8 . . . . . . 
    `, SpriteKind.PowerUp)
Bukser.setPosition(55, 195)
animation.runMovementAnimation(
Bukser,
animation.animationPresets(animation.bobbing),
2000,
true
)
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
forever(function () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        if (tiles.tileAtLocationIsWall(value.tilemapLocation().getNeighboringLocation(CollisionDirection.Left))) {
            value.vx = 50
        } else if (tiles.tileAtLocationIsWall(value.tilemapLocation().getNeighboringLocation(CollisionDirection.Right))) {
            value.vx = -50
        }
        if (!(tiles.tileAtLocationIsWall(value.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Left)))) {
            value.vx = 50
        } else if (!(tiles.tileAtLocationIsWall(value.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Right)))) {
            value.vx = -50
        }
    }
})
