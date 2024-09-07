StartupEvents.registry('sound_event', e => {
  e.create('kubejs:chloe_music')
  e.create('kubejs:ayla_music')
  e.create('kubejs:newjeans_music')
  })
StartupEvents.registry("item", (e) => {
  //! CHLOE DISC
  e.create(`chloe_disc`, "music_disc")
    .song(`kubejs:chloe_music`, 159)
    .displayName("Música Favorita da Chloe")
    .texture(`kubejs:item/music_disc/chloe_disc`)
    .translationKey(`item.kubejs.chloe_disc`);
  //! AYLA DISC
  e.create(`ayla_disc`, "music_disc")
    .song(`kubejs:ayla_music`, 75)
    .displayName("Música Favorita da Ayla")
    .texture(`kubejs:item/music_disc/ayla_disc`)
    .translationKey(`item.kubejs.ayla_disc`);
    //! NEW JEANS - NEW JEANS
    e.create(`newjeans_disc`, "music_disc")
      .song(`kubejs:newjeans_music`, 109)
      .displayName("NewJeans - New Jeans")
      .texture(`kubejs:item/music_disc/newjeans_disc`)
      .translationKey(`item.kubejs.newjeans_disc`);
});
