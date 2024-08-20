//! NETUNO OCARINA WEATHER CHANGE
ItemEvents.rightClicked('kubejs:ocarina', e => {{
    if (e.entity.offHandItem == "kubejs:clean_manuscript")
        e.server.runCommandSilent(`weather clear`)
    if (e.entity.offHandItem == "kubejs:rain_manuscript")
        e.server.runCommandSilent(`weather rain`)
    if (e.entity.offHandItem == "kubejs:thunder_manuscript")
        e.server.runCommandSilent(`weather thunder`)
e.player.addItemCooldown('kubejs:ocarina', 5)}
})