ItemEvents.toolTierRegistry((event) => {
  event.add("sussurros_dagger", (tier) => {
    tier.uses = 999;
    tier.speed = 1.0;
    tier.attackDamageBonus = 10.0;
    tier.level = 5;
    tier.enchantmentValue = 14;
  });
});
StartupEvents.registry("item", (e) => {
  //! Zin Dagger
  e.create("zin_dagger", "sword")
    .displayName("Adaga da Zin")
    .parentModel("kubejs:item/zin_set/dagger")
    .tier("sussurros_dagger")
    .rarity("epic");
  //! Matts Dagger
  e.create("matts_dagger", "sword")
    .displayName("Adaga do Matts")
    .parentModel("kubejs:item/matts/matts_dagger")
    .tier("sussurros_dagger")
    .rarity("epic");
  //! Matts Dagger
  e.create("azeroth_dagger", "sword")
    .displayName("Adaga do Azeroth")
    .parentModel("kubejs:item/gui/dagger")
    .tier("sussurros_dagger")
    .rarity("epic");
});
