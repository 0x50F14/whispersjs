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
  //! OLD CERNUNNOS
  e.create("old_cernunnos", "sword")
    .displayName("Cernunnos")
    .parentModel("kubejs:item/stone/old_cernunnos")
    .tier("sussurros_greatsword")
    .rarity("epic");
  //! NEW CERNUNNOS
  e.create("new_cernunnos", "sword")
    .displayName("Cernunnos")
    .parentModel("kubejs:item/stone/new_cernunnos")
    .tier("sussurros_greatsword")
    .rarity("epic");
  //! NANA GREATSWORD
  e.create("nana_greatsword", "sword")
    .displayName("Nana's Greatsword")
    .parentModel("kubejs:item/nana_set/greatsword")
    .tier("sussurros_greatsword")
    .rarity("epic");
  //! DIO GREATSWORD
  e.create("dionisio_greatsword", "sword")
    .displayName("Dionisio's Greatsword")
    .parentModel("kubejs:item/junior/greatsword")
    .tier("sussurros_greatsword")
    .rarity("epic");
});
  