ServerEvents.recipes(event => {
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
//! VACCINE VIALS
event.shapeless('kubejs:vaccine_vials', [
  'minecraft:glass_bottle',
  'minecraft:blue_dye',])
//! REMOVE JETPACK CRAFT
event.remove({ output: 'create_sa:copper_jetpack_chestplate' })
event.remove({ output: 'create_sa:andesite_jetpack_chestplate' })
event.remove({ output: 'create_sa:brass_jetpack_chestplate' })
})