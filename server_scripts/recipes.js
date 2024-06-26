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
//! NOITOSFERAS
event.shapeless('kubejs:noitosfera', [
'minecraft:red_dye',
'kubejs:empty_noitosfera',])
event.shapeless('kubejs:noitosfera_with_wine', [
'croptopia:wine',
'kubejs:empty_noitosfera',]).replaceIngredient('croptopia:wine', 'croptopia:wine')
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
})