
Platform.mods.kubejs.name = "Sussurros SMP"
StartupEvents.registry('item', e => {
//! OCARINA
e.create('ocarina')
.displayName("Ocarina")
.texture('kubejs:item/misc/ocarina')
.rarity('epic')
.unstackable()
//! OCARINA MANUSCRIPTS
e.create('clean_manuscript')
.displayName("Manuscrito do Tempo Limpo")
.texture('kubejs:item/misc/clear_manuscript')
.rarity('epic')
.unstackable()
e.create('rain_manuscript')
.displayName("Manuscrito da Chuva")
.texture('kubejs:item/misc/rain_manuscript')
.rarity('epic')
.unstackable()
e.create('thunder_manuscript')
.displayName("Manuscrito da Tempestade")
.texture('kubejs:item/misc/thunder_manuscript')
.rarity('epic')
.unstackable()
//! SYMPHONY OF THE SEAS
e.create('symphony_of_the_seas')
.displayName("Sinfonia dos Mares")
.tooltip('Esquecido, achado, e depois esquecido novamente.')
.texture('kubejs:item/misc/symphony_of_the_seas')
.rarity('epic')
.unstackable()
//! CLOWN HORN
e.create('clown_horn')
.displayName("Buzina do Palhaço")
.texture('kubejs:item/misc/clown_horn')
.rarity('epic')
.unstackable()
//! SHELL WHISTLE
e.create('shell_whistle')
.displayName("Concha")
.texture('kubejs:item/misc/shell_whistle')
.rarity('epic')
.unstackable()
//! SYRINGE
e.create('syringe')
.displayName("Seringa")
.texture('kubejs:item/misc/syringe')
.rarity('epic')
.unstackable()
//! VACCINE VIAL
e.create('vaccine_vial')
.displayName("Frasco de Vacina")
.texture('kubejs:item/misc/vaccine_vial')
.rarity('epic')
//! DUCK
e.create('duck')
.displayName("Patinho de Borracha")
.texture('kubejs:item/misc/duck')
.rarity('epic')
.unstackable()
//! POLAROID
e.create('polaroid_camera')
.displayName("Polaroid")
.texture('kubejs:item/misc/polaroid')
.rarity('epic')
.unstackable()
//! STAR WAND
e.create('star_wand')
.displayName("Varinha de Estrela")
.texture('kubejs:item/wands/star_wand')
.rarity('epic')
.unstackable()
//! STRAWBERRY WAND
e.create('strawberry_wand')
.displayName("Varinha de Morango")
.texture('kubejs:item/wands/strawberry_wand')
.rarity('epic')
.unstackable()
//! STAR 
e.create('star')
.displayName("star")
.texture('kubejs:item/star')
.rarity('epic')
.unstackable()
//! BUSSOLA
e.create('cbussola')
.displayName("Bussola")
.texture('kubejs:item/cbussola')
.rarity('epic')
.unstackable()
})