StartupEvents.registry("item", (e) => {
  //? DUCK
  e.create("duck")
    .displayName("Patinho de Borracha")
    .texture("kubejs:item/misc/duck")
    .rarity("epic")
    .unstackable();
  //? POLAROID
  e.create("polaroid_camera")
    .displayName("Polaroid")
    .texture("kubejs:item/misc/polaroid")
    .rarity("epic")
    .unstackable();
  //? STAR WAND
  e.create("star_wand")
    .displayName("Varinha de Estrela")
    .texture("kubejs:item/wands/star_wand")
    .rarity("epic")
    .unstackable();
  //? CLOWN HORN
  e.create("clown_horn")
    .displayName("Buzina do Palhaço")
    .texture("kubejs:item/misc/clown_horn")
    .rarity("epic")
    .unstackable();
  //? SHELL WHISTLE
  e.create("shell_whistle")
    .displayName("Concha")
    .texture("kubejs:item/misc/shell_whistle")
    .rarity("epic")
    .unstackable();
  //! SOPHIE'S RIFLE
  e.create("sforza_rifle")
    .displayName("Sophie's Rifle")
    .parentModel("kubejs:item/sforza_rifle")
    .rarity("epic")
    .unstackable();
  //! SOPHIE PROTESE
  e.create("sophie_protese")
    .displayName("Prótese da Sophie")
    .parentModel("kubejs:item/bracin")
    .rarity("epic")
    .unstackable();
  //! ATLAS FEATHER
  e.create("atlas_feather")
    .displayName("Pena do Atlas")
    .parentModel("kubejs:item/atlasfeather")
    .rarity("epic")
    .unstackable();
  //! BUSSOLA
  e.create("cbussola")
    .displayName("Bussola")
    .texture("kubejs:item/cbussola")
    .rarity("epic")
    .unstackable();
  //! CRIMSON HEART
  e.create("crimson_heart")
    .displayName("crimson_heart")
    .texture("kubejs:item/crimson_heart")
    .rarity("epic")
    .unstackable();
  //! CC - Chloe
  e.create("carte_de_credit_gamme")
    .displayName("Carte de Crédit")
    .tooltip("Cet objet appartient à Chloe. Si vous le trouvez, veuillez le retourner")
    .texture("kubejs:item/misc/carte_chloe")
    .rarity("epic")
    .unstackable();
  //! CC - Amelia
  e.create("carte_de_credit")
    .displayName("Carte de Crédit")
    .tooltip("Cet objet appartient à Amélia. Si vous le trouvez, veuillez le retourner")
    .texture("kubejs:item/misc/carte_amelia")
    .rarity("epic")
    .unstackable();
  //! CC - Sophie
  e.create("carte_de_credit_prestige")
    .displayName("Carte de Crédit")
    .tooltip("Cet objet appartient à Sophie. Si vous le trouvez, veuillez le retourner")
    .texture("kubejs:item/misc/carte_sophie")
    .rarity("epic")
    .unstackable();
});
