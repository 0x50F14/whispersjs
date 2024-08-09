ServerEvents.recipes(event => {
//! LEATHER
event.shaped('3x minecraft:leather', [
  ' A ', 
  'AAA',
  ' A '  
], {
  A: 'minecraft:rotten_flesh',
}
)
//! MAGATAMA DEFAULT CRAFT
event.shapeless('kubejs:default_magatama', [
  'kubejs:strength_magatama',
  'minecraft:stone',])
event.shapeless('kubejs:default_magatama', [
  'kubejs:speed_magatama',
  'minecraft:stone',])
event.shapeless('kubejs:default_magatama', [
  'kubejs:jump_magatama',
  'minecraft:stone',])
event.shapeless('kubejs:default_magatama', [
  'kubejs:nvision_magatama',
  'minecraft:stone',])
event.shapeless('kubejs:default_magatama', [
  'kubejs:invisibility_magatama',
  'minecraft:stone',])
//! MAGATAMA STRENGTH CRAFT
event.shapeless('kubejs:strength_magatama', [
  'kubejs:default_magatama',
  'minecraft:diamond_sword',]).replaceIngredient('minecraft:diamond_sword', 'minecraft:diamond_sword')
event.shapeless('kubejs:strength_magatama', [
  'kubejs:speed_magatama',
  'minecraft:diamond_sword',]).replaceIngredient('minecraft:diamond_sword', 'minecraft:diamond_sword')
event.shapeless('kubejs:strength_magatama', [
  'kubejs:jump_magatama',
  'minecraft:diamond_sword',]).replaceIngredient('minecraft:diamond_sword', 'minecraft:diamond_sword')
event.shapeless('kubejs:strength_magatama', [
  'kubejs:nvision_magatama',
  'minecraft:diamond_sword',]).replaceIngredient('minecraft:diamond_sword', 'minecraft:diamond_sword')
event.shapeless('kubejs:strength_magatama', [
  'kubejs:invisibility_magatama',
  'minecraft:diamond_sword',]).replaceIngredient('minecraft:diamond_sword', 'minecraft:diamond_sword')
//! MAGATAMA SPEED CRAFT
event.shapeless('kubejs:speed_magatama', [
  'kubejs:strength_magatama',
  'minecraft:bone',])
event.shapeless('kubejs:speed_magatama', [
  'kubejs:default_magatama',
  'minecraft:bone',])
event.shapeless('kubejs:speed_magatama', [
  'kubejs:jump_magatama',
  'minecraft:bone',])
event.shapeless('kubejs:speed_magatama', [
  'kubejs:nvision_magatama',
  'minecraft:bone',])
event.shapeless('kubejs:speed_magatama', [
  'kubejs:invisibility_magatama',
  'minecraft:bone',])
//! MAGATAMA JUMP BOOST CRAFT
event.shapeless('kubejs:jump_magatama', [
  'kubejs:strength_magatama',
  'minecraft:carrot',])
event.shapeless('kubejs:jump_magatama', [
  'kubejs:speed_magatama',
  'minecraft:carrot',])
event.shapeless('kubejs:jump_magatama', [
  'kubejs:default_magatama',
  'minecraft:carrot',])
event.shapeless('kubejs:jump_magatama', [
  'kubejs:nvision_magatama',
  'minecraft:carrot',])
event.shapeless('kubejs:jump_magatama', [
  'kubejs:invisibility_magatama',
  'minecraft:carrot',])
//! MAGATAMA NIGHT VISION CRAFT
event.shapeless('kubejs:nvision_magatama', [
  'kubejs:strength_magatama',
  'minecraft:ender_pearl',])
event.shapeless('kubejs:nvision_magatama', [
  'kubejs:speed_magatama',
  'minecraft:ender_pearl',])
event.shapeless('kubejs:nvision_magatama', [
  'kubejs:jump_magatama',
  'minecraft:ender_pearl',])
event.shapeless('kubejs:nvision_magatama', [
  'kubejs:default_magatama',
  'minecraft:ender_pearl',])
event.shapeless('kubejs:nvision_magatama', [
  'kubejs:invisibility_magatama',
  'minecraft:ender_pearl',])
//! MAGATAMA INVISIBILITY CRAFT
event.shapeless('kubejs:invisibility_magatama', [
  'kubejs:strength_magatama',
  'minecraft:glass',])
event.shapeless('kubejs:invisibility_magatama', [
  'kubejs:speed_magatama',
  'minecraft:glass',])
event.shapeless('kubejs:invisibility_magatama', [
  'kubejs:jump_magatama',
  'minecraft:glass',])
event.shapeless('kubejs:invisibility_magatama', [
  'kubejs:nvision_magatama',
  'minecraft:glass',])
event.shapeless('kubejs:invisibility_magatama', [
  'kubejs:default_magatama',
  'minecraft:glass',])
//! NOITOSFERAS
event.shapeless('kubejs:noitosfera', [
'minecraft:red_dye',
'kubejs:empty_noitosfera',])
event.shapeless('kubejs:noitosfera_with_wine', [
'croptopia:wine',
'kubejs:empty_noitosfera',])
event.shapeless('kubejs:noitosfera_with_juice', [
  'croptopia:strawberry_smoothie',
  'kubejs:empty_noitosfera',])
//! ZANEE BLOCK
event.shapeless('kubejs:zanee_block', [
  'minecraft:dirt',
  'minecraft:red_dye',
  'minecraft:black_dye',
  'minecraft:blue_dye',])
//! VACCINE VIAL
event.shapeless('kubejs:vaccine_vial', [
  'minecraft:glass_bottle',
  'minecraft:blue_dye',])
//! POTE
event.shapeless('kubejs:pote', [
  'minecraft:carrot',
  'minecraft:poisonous_potato',
  'minecraft:wither_rose',
  'minecraft:red_mushroom',
  'minecraft:brown_mushroom',
  'minecraft:wither_rose',
  'minecraft:bowl',])
//! CIGAS
event.shapeless('kubejs:cigas', [
  'minecraft:paper',
  'minecraft:flint_and_steel',])
//! REMOVE JETPACK CRAFT
event.remove({ output: 'create_sa:copper_jetpack_chestplate' })
event.remove({ output: 'create_sa:andesite_jetpack_chestplate' })
event.remove({ output: 'create_sa:brass_jetpack_chestplate' })
event.remove({ output: 'cgm:workbench' })
event.remove({ output: 'forbidden_arcanus:eternal_stella' })
})