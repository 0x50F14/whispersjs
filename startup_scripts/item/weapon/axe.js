ItemEvents.toolTierRegistry((event) => {
  event.add("sussurros_axe", (tier) => {
    tier.uses = 999;
    tier.speed = 8.0;
    tier.attackDamageBonus = 10.0;
    tier.level = 5;
    tier.enchantmentValue = 14;
  });
});
StartupEvents.registry("item", (e) => {
  
  //! D'ENTELLION GREATAXE
  e.create("dentellion_greataxe", "sword")
    .displayName("D'entellion Greataxe")
    .texture("kubejs:item/dentellion_greataxe")
    .tier("sussurro")
    //! NEEKO GREATSWORD
    .rarity("epic");
  e.create("neeko_greatsword", "sword")
    .displayName("GreatSword do Neeko")
    .parentModel("kubejs:item/neeko_set/neeko_greatsword")
    .tier("sussurro")
    .rarity("epic");
});
