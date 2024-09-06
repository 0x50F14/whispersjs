StartupEvents.registry("item", (e) => {
  e.create("nana_axe", "axe")
    .displayName("Machado da Nana")
    .parentModel("kubejs:item/nana_set/axe")
    .tier("netherite")
    .rarity("epic");
  e.create("nana_pickaxe", "pickaxe")
    .displayName("Picareta da Nana")
    .parentModel("kubejs:item/nana_set/pickaxe")
    .tier("netherite")
    .rarity("epic");
  e.create("nana_hoe", "hoe")
    .displayName("Enxada da Nana")
    .parentModel("kubejs:item/nana_set/hoe")
    .tier("netherite")
    .rarity("epic");
  e.create("nana_shovel", "shovel")
    .displayName("Pá da Nana")
    .parentModel("kubejs:item/nana_set/shovel")
    .tier("netherite")
    .rarity("epic");
});
