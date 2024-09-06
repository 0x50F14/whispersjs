StartupEvents.registry('sound_event', e => {
  e.create('kubejs:chloe_music')
  e.create('kubejs:ayla_music')
  })
StartupEvents.registry("item", (e) => {
  e.create(`chloe__disc`, "music_disc")
    .song(`kubejs:chloe_music`, 159)
    .displayName("Música Favorita da Chloe")
    .texture(`kubejs:item/music_disc/chloe_disc`);
  e.create(`ayla__disc`, "music_disc")
    .song(`kubejs:ayla_music`, 75)
    .displayName("Música Favorita da Ayla")
    .texture(`kubejs:item/music_disc/ayla_disc`);
});
