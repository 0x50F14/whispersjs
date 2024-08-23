ItemEvents.toolTierRegistry((event) => {
  event.add("sussurros_greatsword", (tier) => {
    tier.uses = 999;
    tier.speed = 8.0;
    tier.attackDamageBonus = 11.0;
    tier.level = 5;
    tier.enchantmentValue = 14;
  });
});
StartupEvents.registry("item", (e) => {
    
  //! VALHAKYRA
  e.create("valhakyra", "sword")
  .displayName("Valhakyra")
  .texture("kubejs:item/weapons/valhakyra")
  .tier("sussurros_greatsword")
  .rarity("epic");
  //! MIGUEL'S SWORD
  e.create("miguel_sword", "sword")
    .displayName("Espada do Miguel")
    .parentModel("kubejs:item/emojo")
    .tier("sussurros_greatsword")
    .rarity("epic");
});
  