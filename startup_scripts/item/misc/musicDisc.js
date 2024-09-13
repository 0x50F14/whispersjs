StartupEvents.registry("sound_event", (e) => {
  e.create("kubejs:chloe_music");
  e.create("kubejs:ayla_music");
  e.create("kubejs:power_music");
  e.create("kubejs:ozzie_music");
  e.create("kubejs:ary_music");
  e.create("kubejs:korn_music");
  e.create("kubejs:atlas_music");
  e.create("kubejs:newjeans_music");

  e.create("kubejs:kmorse_1");
  e.create("kubejs:kmorse_2");
});
StartupEvents.registry("item", (e) => {
  //! KITTEN DISCs
  e.create(`k_disc`, "music_disc")
    .song(`kubejs:kmorse_1`, 7)
    .displayName("[K] Disco 1")
    .texture(`kubejs:item/music_disc/generic_disc`);
  e.create(`k_disc2`, "music_disc")
    .song(`kubejs:kmorse_2`, 9)
    .displayName("[K] Disco 2")
    .texture(`kubejs:item/music_disc/generic_disc`);

  //! CHLOE DISC
  e.create(`chloe_disc`, "music_disc")
    .song(`kubejs:chloe_music`, 159)
    .displayName("Música Favorita da Chloe")
    .texture(`kubejs:item/music_disc/chloe_disc`);

  //! AYLA DISC
  e.create(`ayla_disc`, "music_disc")
    .song(`kubejs:ayla_music`, 75)
    .displayName("Música Favorita da Ayla")
    .texture(`kubejs:item/music_disc/ayla_disc`);

  //! POWER DISC
  e.create(`power_disc`, "music_disc")
    .song(`kubejs:power_music`, 241)
    .displayName("Música Favorita de Power")
    .texture(`kubejs:item/music_disc/power_disc`);

  //! OZZIE DISC
  e.create(`ozzie_disc`, "music_disc")
    .song(`kubejs:ozzie_music`, 143)
    .displayName("Música Favorita de Ozzie")
    .texture(`kubejs:item/music_disc/generic_disc`);

  //! ARY DISC
  e.create(`ary_disc`, "music_disc")
    .song(`kubejs:ary_music`, 235)
    .displayName("Música Favorita de Ary")
    .texture(`kubejs:item/music_disc/generic_disc`);

  //! KORN DISC
  e.create(`korn_disc`, "music_disc")
    .song(`kubejs:korn_music`, 212)
    .displayName("Música Favorita de Korn")
    .texture(`kubejs:item/music_disc/generic_disc`);

  //! ATLAS DISC
  e.create(`atlas_disc`, "music_disc")
    .song(`kubejs:atlas_music`, 154)
    .displayName("Música Favorita de Atlas")
    .texture(`kubejs:item/music_disc/atlas_disc`);

  //! NEW JEANS - NEW JEANS
  e.create(`newjeans_disc`, "music_disc")
    .song(`kubejs:newjeans_music`, 109)
    .displayName("NewJeans - New Jeans")
    .texture(`kubejs:item/music_disc/newjeans_disc`);
});
