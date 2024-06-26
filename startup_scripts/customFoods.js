StartupEvents.registry('item', e => {
//! NOITOSFERA
e.create('noitosfera').food(food => {
food
.hunger(30)
.saturation(30)
.alwaysEdible()
.fastToEat()
.eaten(ctx => {
    ctx.player.give('kubejs:empty_noitosfera')
})})
.displayName('Noitosfera')
.texture('kubejs:item/foods/noitosfera')
.group('food')
.rarity('epic')

//! NOITOSFERA WITH WINE
e.create('noitosfera_with_wine').food(food => {
food
.hunger(30)
.saturation(30)
.alwaysEdible()
.fastToEat()
.effect('nausea', 50, 1, 1)
.effect('instant_health', 600, 9, 1)
.effect('regeneration', 600, 9, 1)
.effect('strength', 600, 9, 1)
.effect('speed', 600, 0, 1)
.eaten(ctx => {
    ctx.player.give('kubejs:empty_noitosfera')
})})
.displayName('Noitosfera preenchida com vinho')
.texture('kubejs:item/foods/noitosfera')
.group('food')
.rarity('epic')

//! EMPTY NOITOSFERA
e.create('empty_noitosfera')
.displayName('Noitosfera Vazia')
.texture('kubejs:item/foods/empty_noitosfera')
.group('food')
.rarity('epic')

//! CIGAS
e.create('cigas').food(food => {
    food
    .hunger(10)
    .saturation(2)
    .eaten(ctx => {
        
    })})
    .displayName('Cigarro de Palhaço')
    .parentModel('kubejs:item/cigas')
    .group('food')
    .rarity('epic')

//! POTE
e.create('pote').food(food => {
    food
    .hunger(10)
    .saturation(2)
    .eaten(ctx => {
        
    })})
    .displayName('Sopa da Felicidade')
    .parentModel('kubejs:item/pote')
    .group('food')
    .rarity('epic')

})