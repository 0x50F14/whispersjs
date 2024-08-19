ItemEvents.toolTierRegistry((event) => {
  event.add("sussurro", (tier) => {
    tier.uses = 999;
    tier.speed = 8.0;
    tier.attackDamageBonus = 8.0;
    tier.level = 5;
    tier.enchantmentValue = 14;
  });
});
StartupEvents.registry("item", (e) => {
  //! KNIFE
  e.create("knife", "sword")
    .displayName("Faca")
    .texture("kubejs:item/weapons/knife")
    .tier("sussurro")
    .rarity("epic");

  //! DAGGER
  e.create("dagger", "sword")
    .displayName("Adaga")
    .texture("kubejs:item/weapons/dagger")
    .tier("sussurro")
    .rarity("epic");

  //! KAMA
  e.create("kama", "sword")
    .displayName("Kama")
    .texture("kubejs:item/weapons/kama")
    .rarity("epic")
    .tier("sussurro");

  //! VALHAKYRA
  e.create("valhakyra", "sword")
    .displayName("Valhakyra")
    .texture("kubejs:item/weapons/valhakyra")
    .tier("sussurro")
    .rarity("epic");

  //! CERNUNNOS
  e.create("cernunnos", "sword")
    .displayName("Cernunnos")
    .texture("kubejs:item/weapons/cernunnos")
    .tier("sussurro")
    .rarity("epic");

  //* NOGITSUNE
  e.create("nogitsune", "sword")
    .displayName("Nogitsune")
    .texture("kubejs:item/weapons/nogitsune")
    .tier("sussurro")
    .rarity("epic");

  //! BRASA
  e.create("brasa_katana", "sword")
    .displayName("Brasa")
    .parentModel("kubejs:item/tiordakatana")
    .tier("sussurro")
    .rarity("epic");

  //! CLOWN STICK
  e.create("clown_stick", "sword")
    .displayName(":o)")
    .parentModel("kubejs:item/clown_weapon")
    .tier("sussurro")
    .rarity("epic");

  //! SCYTHE
  e.create("spiritual_scynthe", "sword")
    .displayName("Foice Espiritual")
    .parentModel("kubejs:item/spiritual_scythe")
    .tier("sussurro")
    .rarity("epic");

  //! DEMON SWORD
  e.create("demon_sword", "sword")
    .displayName("Demon Sword - Test")
    .parentModel("kubejs:item/demon_sword")
    .tier("sussurro")
    .rarity("epic");

  //* NINGUEM WEAPON
  e.create("ninguem_punch", "sword")
    .displayName("Soco de Ninguem")
    .texture("kubejs:item/weapons/ninguem_weapon")
    .tier("sussurro")
    .rarity("epic");

  //* NEEKO WEAPONS
  e.create("neeko_spear", "sword")
    .displayName("Lança do Neeko")
    .parentModel("kubejs:item/neeko_set/neeko_spear")
    .tier("sussurro")
    .rarity("epic");
  e.create("neeko_greatsword", "sword")
    .displayName("GreatSword do Neeko")
    .parentModel("kubejs:item/neeko_set/neeko_greatsword")
    .tier("sussurro")
    .rarity("epic");

  //* SHADOWFELL
  e.create("shadowfell", "sword")
    .displayName("Shadowfell")
    .texture("kubejs:item/shadowfell")
    .tier("sussurro")
    .rarity("epic");
  //* D'ENTELLION KATANA
  e.create("dentellion_katana", "sword")
    .displayName("D'entellion Katana")
    .texture("kubejs:item/dentellion_katana")
    .tier("sussurro")
    .rarity("epic");
  //* D'ENTELLION GREATAXE
  e.create("dentellion_greataxe", "sword")
    .displayName("D'entellion Greataxe")
    .texture("kubejs:item/dentellion_greataxe")
    .tier("sussurro")
    .rarity("epic");

});
