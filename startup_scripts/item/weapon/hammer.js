ItemEvents.toolTierRegistry((event) => {
    event.add("sussurros_hammer", (tier) => {
      tier.uses = 999;
      tier.speed = 1.0;
      tier.attackDamageBonus = 16.0;
      tier.level = 5;
      tier.enchantmentValue = 14;
    });
  });
  StartupEvents.registry("item", (e) => {
    //! NANA HAMMER
    e.create("nana_hammer", "sword")
      .displayName("Nana's Hammer")
      .parentModel("kubejs:item/nana_set/hammer")
      .tier("sussurros_hammer")
      .rarity("epic");
  //! DIONISIO HAMMER
      e.create("dionisio_hammer", "sword")
        .displayName("Dionisio's Hammer")
        .parentModel("kubejs:item/junior/hammer")
        .tier("sussurros_hammer")
        .rarity("epic");
  //! KING "hammer" SCYTHE
      e.create("pumpkin_scythe", "sword")
      .displayName("Pumpkin Scythe")
      .parentModel("kubejs:item/king/pumpkinscythe-a")
      .tier("sussurros_hammer")
      .rarity("epic");
  });
  