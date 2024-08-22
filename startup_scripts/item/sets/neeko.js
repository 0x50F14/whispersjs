StartupEvents.registry("item", (e) => {
  e.create("neeko_axe", "axe")
    .displayName("Machado do Neeko")
    .parentModel("kubejs:item/neeko_set/neeko_axe")
    .tier("netherite")
    .rarity("epic");
  e.create("neeko_pickaxe", "pickaxe")
    .displayName("Picareta do Neeko")
    .parentModel("kubejs:item/neeko_set/neeko_pickaxe")
    .tier("netherite")
    .rarity("epic");
  e.create("neeko_hoe", "hoe")
    .displayName("Enxada do Neeko")
    .parentModel("kubejs:item/neeko_set/neeko_hoe")
    .tier("netherite")
    .rarity("epic");
  e.create("neeko_shovel", "shovel")
    .displayName("Pá do Neeko")
    .parentModel("kubejs:item/neeko_set/neeko_shovel")
    .tier("netherite")
    .rarity("epic");
});
