StartupEvents.registry('item', e => {
//! NOITOSFERA
e.create('noitosfera').food(food => {
food
.hunger(5)
.saturation(1)
.alwaysEdible()
.fastToEat()
.eaten(ctx => {
    ctx.player.give('kubejs:empty_noitosfera')
})})
.displayName('Noitosfera')
.texture('kubejs:item/foods/noitosfera')
.group('food')
.rarity('epic')
//! NOITOSFERA WITH BLOOD
e.create('noitosfera_with_blood').food(food => {
    food
.hunger(5)
.saturation(1)
.alwaysEdible()
.fastToEat()
.effect('instant_health', 150, 2, 1)
.effect('strength', 150, 2, 1)
.effect('speed', 150, 0, 1)
.eaten(ctx => {
    ctx.player.give('kubejs:empty_noitosfera')
})})
.displayName('Noitosfera preenchida com sangue')
.texture('kubejs:item/foods/noitosfera')
.group('food')
.rarity('epic')

//! NOITOSFERA WITH JUICE
e.create('noitosfera_with_juice').food(food => {
    food
    .hunger(5)
    .saturation(1)
    .alwaysEdible()
    .fastToEat()
    .effect('instant_health', 10, 1, 1)
    .effect('regeneration', 10, 0, 1)
    .eaten(ctx => {
        ctx.player.give('kubejs:empty_noitosfera')
    })})
    .displayName('Noitosfera preenchida com suquinho de morango')
    .texture('kubejs:item/foods/noitosfera')
    .group('food')
    .rarity('epic')

//! NOITOSFERA WITH WINE
e.create('noitosfera_with_wine').food(food => {
food
.hunger(5)
.saturation(1)
.alwaysEdible()
.fastToEat()
.effect('nausea', 20, 2, 1)
.effect('instant_health', 150, 1, 1)
.effect('regeneration', 150, 0, 1)
.effect('strength', 150, 0, 1)
.effect('speed', 150, 0, 1)
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
    .hunger(5)
    .saturation(1)
    .eaten(ctx => {
    })})
    .displayName('Cigarro de Palhaço')
    .parentModel('kubejs:item/cigas')
    .group('food')
    .rarity('epic')

//! POTE
e.create('pote').food(food => {
    food
    .hunger(5)
    .saturation(1)
    .eaten(ctx => {
    })})
    .displayName('Sopa da Felicidade')
    .parentModel('kubejs:item/pote')
    .group('food')
    .rarity('epic')

//! ?????????????
e.create('f_fruit').food(food => {
    food
    .hunger(50)
    .saturation(50)
    .alwaysEdible()
    .fastToEat()
    .effect('instant_health', 500, 254, 1)
    .effect('regeneration', 500, 254, 1)
    .effect('strength', 500, 254, 1)
    .effect('haste', 500, 254, 1)
    .effect('resistance', 500, 254, 1)
    .effect('fire_resistance', 500, 254, 1)
    .effect('night_vision', 500, 254, 1)
    .effect('hero_of_the_village', 500, 254, 1)
    .effect('speed', 500, 1, 1)
    .eaten(ctx => {
    })})
    .displayName('???')
    .texture('kubejs:item/foods/ffruit')
    .group('food')
    .rarity('epic')
})