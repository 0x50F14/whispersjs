StartupEvents.registry('creative_mode_tab', event => {
	event.create('Musicas').icon(() => 'minecraft:music_disc_otherside').content(() => [
		'kubejs:chloe_disc',
        'kubejs:ayla_disc',
        'kubejs:power_disc',
        'kubejs:liz_disc',
        'kubejs:atlas_disc',
        'kubejs:newjeans_disc'
	])
    event.create('Cassino').icon(() => 'minecraft:music_disc_otherside').content(() => [
		'kubejs:rdf_blackjack'
	])
})