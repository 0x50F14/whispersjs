StartupEvents.registry("item", (e) => {
    e.create("azeroth_axe", "axe")
      .displayName("Machado do Azeroth")
      .parentModel("kubejs:item/gui/axe")
      .tier("netherite")
      .rarity("epic");
    e.create("azeroth_pickaxe", "pickaxe")
      .displayName("Picareta do Azeroth")
      .parentModel("kubejs:item/gui/pickaxe")
      .tier("netherite")
      .rarity("epic");
    e.create("azeroth_hoe", "hoe")
      .displayName("Enxada do Azeroth")
      .parentModel("kubejs:item/gui/hoe")
      .tier("netherite")
      .rarity("epic");
    e.create("azeroth_shovel", "shovel")
      .displayName("Pá do Azeroth")
      .parentModel("kubejs:item/gui/shovel")
      .tier("netherite")
      .rarity("epic");
  });
  