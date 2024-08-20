Platform.mods.kubejs.name = "Sussurros SMP";
StartupEvents.registry("item", (e) => {
  //! OCARINA
  e.create("ocarina")
    .displayName("Ocarina")
    .texture("kubejs:item/misc/ocarina")
    .rarity("epic")
    .unstackable();
  //! OCARINA MANUSCRIPTS
  e.create("clean_manuscript")
    .displayName("Manuscrito do Tempo Limpo")
    .texture("kubejs:item/misc/clear_manuscript")
    .rarity("epic")
    .unstackable();
  e.create("rain_manuscript")
    .displayName("Manuscrito da Chuva")
    .texture("kubejs:item/misc/rain_manuscript")
    .rarity("epic")
    .unstackable();
  e.create("thunder_manuscript")
    .displayName("Manuscrito da Tempestade")
    .texture("kubejs:item/misc/thunder_manuscript")
    .rarity("epic")
    .unstackable();
  //! SYRINGE
  e.create("syringe")
    .displayName("Seringa")
    .texture("kubejs:item/misc/syringe")
    .rarity("epic")
    .unstackable();
  //! VACCINE VIAL
  e.create("vaccine_vial")
    .displayName("Frasco de Vacina")
    .texture("kubejs:item/misc/vaccine_vial")
    .rarity("epic");
});
