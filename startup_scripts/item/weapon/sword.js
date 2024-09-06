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
  //! DEMON SWORD
  e.create("demon_sword", "sword")
    .displayName("Demon Sword")
    .parentModel("kubejs:item/demon_sword")
    .tier("sussurros_sword")
    .rarity("epic");
  //! CLOWN STICK
  e.create("clown_stick", "sword")
    .displayName(":o)")
    .parentModel("kubejs:item/clown_weapon")
    .tier("sussurros_sword")
    .rarity("epic");
  //! Nana Sword
  e.create("nana_sword", "sword")
    .displayName("Espada da Nana")
    .parentModel("kubejs:item/nana_set/sword")
    .tier("sussurros_sword")
    .rarity("epic");
    //! Dio Sword
    e.create("dionisio_sword", "sword")
      .displayName("Espada do Dionisio")
      .parentModel("kubejs:item/junior/sword")
      .tier("sussurros_sword")
      .rarity("epic");
});
