StartupEvents.registry("item", (e) => {
  //! CIGAS
  e.create("cigas")
    .food((food) => {
      food
        .hunger(5)
        .saturation(1)
        .eaten((ctx) => {});
    })
    .displayName("Cigarro de Palhaço")
    .parentModel("kubejs:item/cigas")
    .group("food")
    .rarity("epic");
  //! POTE
  e.create("pote")
    .food((food) => {
      food
        .hunger(5)
        .saturation(1)
        .eaten((ctx) => {});
    })
    .displayName("Sopa da Felicidade")
    .parentModel("kubejs:item/pote")
    .group("food")
    .rarity("epic");
  //???????????????????????
  e.create("f_fruit")
    .food((food) => {
      food
        .hunger(50)
        .saturation(50)
        .alwaysEdible()
        .fastToEat()
        .effect("instant_health", 500, 254, 1)
        .effect("rSegeneration", 500, 254, 1)
        .effect("strength", 500, 254, 1)
        .effect("haste", 500, 254, 1)
        .effect("resistance", 500, 254, 1)
        .effect("fire_resistance", 500, 254, 1)
        .effect("night_vision", 500, 254, 1)
        .effect("hero_of_the_village", 500, 254, 1)
        .effect("speed", 500, 1, 1)
        .eaten((ctx) => {});
    })
    .displayName("???")
    .texture("kubejs:item/foods/ffruit")
    .group("food")
    .rarity("epic");
});
