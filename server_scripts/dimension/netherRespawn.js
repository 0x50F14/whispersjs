PlayerEvents.respawned(event => {
    let player = event.player;
    const server = event.server;
    if (player.level.dimension === "minecraft:overworld") {
        player.tell("Alguma força faz você reviver na ilha");
    }
    if (player.level.dimension === "minecraft:nether") {
        player.tell("Alguma força que você ainda não conhece faz você reaparecer no inferno");
    }
});