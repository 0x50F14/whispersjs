ItemEvents.toolTierRegistry((event) => {
  event.add("sussurros_scythe", (tier) => {
    tier.uses = 999;
    tier.speed = 8.0;
    tier.attackDamageBonus = 11.0;
    tier.level = 5;
    tier.enchantmentValue = 14;
  });
  event.add("sussurros_mini_scythe", (tier) => {
    tier.uses = 999;
    tier.speed = 15.0;
    tier.attackDamageBonus = 12.5;
    tier.level = 5;
    tier.enchantmentValue = 14;
  });
});
StartupEvents.registry("item", (e) => {
  //! SHADOWFELL
  e.create("shadowfell", "sword")
    .displayName("Shadowfell")
    .texture("kubejs:item/shadowfell")
    .tier("sussurros_scythe")
    .rarity("epic");
  //! SPIRITUAL SCYTHE
  e.create("spiritual_scythe", "sword")
    .displayName("Foice Espiritual")
    .parentModel("kubejs:item/spiritual_scythe")
    .tier("sussurros_scythe")
    .rarity("epic");
  //! KAMA
  e.create("kama", "sword")
    .displayName("Kama")
    .texture("kubejs:item/weapons/kama")
    .rarity("epic")
    .tier("sussurros_mini_scythe");
  //! Nana Scythe
  e.create("nana_scythe", "sword")
    .displayName("Foice da Nana")
    .parentModel("kubejs:item/nana_set/scythe")
    .tier("sussurros_scythe")
    .rarity("epic");
  //! THE END
  e.create("the_end", "sword")
    .displayName("The End")
    .parentModel("kubejs:item/kray/the_end")
    .tier("sussurros_mini_scythe")
    .rarity("epic");
  //! Nana Scythe
  e.create("ito_scythe", "sword")
    .displayName("Foice da Ito")
    .parentModel("kubejs:item/kitt/scythe")
    .tier("sussurros_scythe");
});
