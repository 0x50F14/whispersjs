ItemEvents.toolTierRegistry(event => {
event.add('sussurro', tier => {
tier.uses = 999
tier.speed = 8.0
tier.attackDamageBonus = 20.0
tier.level = 5
tier.enchantmentValue = 14
})
})
StartupEvents.registry('item', e => {
//! SCYTHE
e.create('scythe', 'sword')
.displayName("Foice")
.texture('kubejs:item/weapons/scythe')
.tier('sussurro')
.rarity('epic')

//! KNIFE
e.create('knife', 'sword')
.displayName("Faca")
.texture('kubejs:item/weapons/knife')
.tier('sussurro')
.rarity('epic')

//! DAGGER 
e.create('dagger', 'sword')
.displayName("Adaga")
.texture('kubejs:item/weapons/dagger')
.tier('sussurro')
.rarity('epic')

//! TRIDENT
e.create('trident', 'sword')
.displayName("Tridente")
.texture('kubejs:item/weapons/trident')
.tier('sussurro')
.rarity('epic')

//! BLOOD KATANA
e.create('blood_katana', 'sword')
.displayName("Katana de Sangue")
.texture('kubejs:item/blood_katana')
.rarity('epic')
.tier('sussurro')
.unstackable()

//! KAMA
e.create('kama', 'sword')
.displayName("Kama")
.texture('kubejs:item/weapons/kama')
.rarity('epic')
.tier('sussurro')
.unstackable()
})


