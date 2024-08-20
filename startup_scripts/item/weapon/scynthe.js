ItemEvents.toolTierRegistry((event) => {
  event.add("sussurros_scynthe", (tier) => {
    tier.uses = 999;
    tier.speed = 8.0;
    tier.attackDamageBonus = 11.0;
    tier.level = 5;
    tier.enchantmentValue = 14;
  });
  event.add("sussurros_mini_scynthe", (tier) => {
    tier.uses = 999;
    tier.speed = 8.0;
    tier.attackDamageBonus = 12.0;
    tier.level = 5;
    tier.enchantmentValue = 14;
  });
});
StartupEvents.registry("item", (e) => {
  
  //! SHADOWFELL
  e.create("shadowfell", "sword")
    .displayName("Shadowfell")
    .texture("kubejs:item/shadowfell")
    .tier("sussurros_scynthe")
    .rarity("epic");
  //! SPIRITUAL SCYTHE
  e.create("spiritual_scynthe", "sword")
  .displayName("Foice Espiritual")
  .parentModel("kubejs:item/spiritual_scythe")
  .tier("sussurros_scynthe")
  .rarity("epic");
  //! KAMA
  e.create("kama", "sword")
    .displayName("Kama")
    .texture("kubejs:item/weapons/kama")
    .rarity("epic")
    .tier("sussurros_mini_scynthe");
});
