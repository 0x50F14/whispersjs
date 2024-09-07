ItemEvents.toolTierRegistry((event) => {
  event.add("sussurros_spear", (tier) => {
    tier.uses = 999;
    tier.speed = 12.0;
    tier.attackDamageBonus = 10.0;
    tier.level = 5;
    tier.enchantmentValue = 14;
  });
});
StartupEvents.registry("item", (e) => {
  //? NEEKO SPEAR
  e.create("neeko_spear", "sword")
    .displayName("Lança do Neeko")
    .parentModel("kubejs:item/neeko_set/neeko_spear")
    .tier("sussurros_spear")
    .rarity("epic");
  //! Nana Spear
  e.create("nana_spear", "sword")
    .displayName("Lança da Nana")
    .parentModel("kubejs:item/nana_set/spear")
    .tier("sussurros_spear")
    .rarity("epic");
  //! Zin Spear
  e.create("zin_spear", "sword")
    .displayName("Lança do Zin")
    .parentModel("kubejs:item/zin_set/spear")
    .tier("sussurros_spear")
    .rarity("epic");
  //! Void Lightning
  e.create("void_lightning", "sword")
    .displayName("Void lightning")
    .parentModel("kubejs:item/junior/void_lightning")
    .rarity("epic");
  //! Ito Spear
  e.create("ito_lightning", "sword")
    .displayName("Lança da Ito")
    .parentModel("kubejs:item/kitt/spear")
    .rarity("epic");
});
