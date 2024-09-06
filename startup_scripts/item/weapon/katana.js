
ItemEvents.toolTierRegistry((event) => {
  event.add("sussurros_katana", (tier) => {
    tier.uses = 999;
    tier.speed = 8.0;
    tier.attackDamageBonus = 11.0;
    tier.level = 5;
    tier.enchantmentValue = 14;
  });
});
StartupEvents.registry("item", (e) => {
  //// NOGITSUNE
  e.create("nogitsune", "sword")
    .displayName("Nogitsune")
    .texture("kubejs:item/weapons/nogitsune")
    .tier("sussurros_sword")
    .rarity("epic");
  //! BRASA
  e.create("brasa_katana", "sword")
    .displayName("Brasa")
    .parentModel("kubejs:item/tiordakatana")
    .tier("sussurros_sword")
    .rarity("epic");
  //! D'ENTELLION KATANA
  e.create("dentellion_katana", "sword")
    .displayName("D'entellion Katana")
    .texture("kubejs:item/dentellion_katana")
    .tier("sussurros_katana")
    .rarity("epic");
});
