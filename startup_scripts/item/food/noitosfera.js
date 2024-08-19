StartupEvents.registry("item", (e) => {
  //! NOITOSFERA
  e.create("noitosfera")
    .food((food) => {
      food
        .hunger(5)
        .saturation(1)
        .alwaysEdible()
        .fastToEat()
        .eaten((ctx) => {
          ctx.player.give("kubejs:empty_noitosfera");
        });
    })
    .displayName("Noitosfera")
    .texture("kubejs:item/foods/noitosfera")
    .group("food")
    .rarity("epic");
  //! BLOOD NOITOSFERA
  e.create("noitosfera_with_blood")
    .food((food) => {
      food
        .hunger(5)
        .saturation(1)
        .alwaysEdible()
        .fastToEat()
        .effect("instant_health", 150, 2, 1)
        .effect("strength", 150, 2, 1)
        .effect("speed", 150, 0, 1)
        .eaten((ctx) => {
          ctx.player.give("kubejs:empty_noitosfera");
        });
    })
    .displayName("Noitosfera preenchida com sangue")
    .texture("kubejs:item/foods/noitosfera")
    .group("food")
    .rarity("epic");

  //! JUICE NOITOSFERA
  e.create("noitosfera_with_juice")
    .food((food) => {
      food
        .hunger(5)
        .saturation(1)
        .alwaysEdible()
        .fastToEat()
        .effect("instant_health", 10, 1, 1)
        .effect("regeneration", 10, 0, 1)
        .eaten((ctx) => {
          ctx.player.give("kubejs:empty_noitosfera");
        });
    })
    .displayName("Noitosfera preenchida com suquinho de morango")
    .texture("kubejs:item/foods/noitosfera")
    .group("food")
    .rarity("epic");

  //! WINE NOITOSFERA
  e.create("noitosfera_with_wine")
    .food((food) => {
      food
        .hunger(5)
        .saturation(1)
        .alwaysEdible()
        .fastToEat()
        .effect("nausea", 20, 2, 1)
        .effect("instant_health", 150, 1, 1)
        .effect("regeneration", 150, 0, 1)
        .effect("strength", 150, 0, 1)
        .effect("speed", 150, 0, 1)
        .eaten((ctx) => {
          ctx.player.give("kubejs:empty_noitosfera");
        });
    })
    .displayName("Noitosfera preenchida com vinho")
    .texture("kubejs:item/foods/noitosfera")
    .group("food")
    .rarity("epic");

  //! EMPTY NOITOSFERA
  e.create("empty_noitosfera")
    .displayName("Noitosfera Vazia")
    .texture("kubejs:item/foods/empty_noitosfera")
    .group("food")
    .rarity("epic");
});
