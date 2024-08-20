ItemEvents.toolTierRegistry((event) => {
  event.add("sussurros_sword", (tier) => {
    tier.uses = 999;
    tier.speed = 8.0;
    tier.attackDamageBonus = 9.0;
    tier.level = 5;
    tier.enchantmentValue = 14;
  });
});
StartupEvents.registry("item", (e) => {
  //! CERNUNNOS
  e.create("cernunnos", "sword")
    .displayName("Cernunnos")
    .texture("kubejs:item/weapons/cernunnos")
    .tier("sussurros_sword")
    .rarity("epic");
  //! DEMON SWORD
  e.create("demon_sword", "sword")
    .displayName("Demon Sword - Test")
    .parentModel("kubejs:item/demon_sword")
    .tier("sussurros_sword")
    .rarity("epic");
  //! MIGUEL'S SWORD
  e.create("miguel_sword", "sword")
    .displayName("Espada do Miguel")
    .texture("kubejs:item/weapons/miguel_sword")
    .tier("sussurros_sword")
    .rarity("epic");
  //! CLOWN STICK
  e.create("clown_stick", "sword")
  .displayName(":o)")
  .parentModel("kubejs:item/clown_weapon")
  .tier("sussurro")
  .rarity("epic");
});
