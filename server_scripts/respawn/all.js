PlayerEvents.respawned((event) => {
  const ally = ["4Help"];
  let player = event.player;
  let x = 0;
  let y = 129;
  let z = 0;
  if (player.level.dimension == "minecraft:the_nether") {
    if (ally.includes(player.username)) {
      event.server.schedule(1, () => {
        event.server.runCommandSilent(
          `execute in minecraft:the_nether run tp ${player.name.string} ${x} ${y} ${z}`
        );
        console.log(
          `Jogador ${player.name.string} morreu no nether e respawnou. [${x}, ${y}, ${z}]`
        );
      });
    } else {
      event.server.schedule(1, () => {
        event.server.runCommandSilent(
          `execute in minecraft:the_nether run tp ${player.name.string} ${x} ${y} ${z}`
        );
        console.log(
          `Jogador ${player.name.string} morreu no nether e respawnou. [${x}, ${y}, ${z}]`
        );
      });
    }
  } else if (player.level.dimension == "minecraft:overworld") {
    if (ally.includes(player.username)) {
      event.server.schedule(1, () => {
        event.server.runCommandSilent(
          `execute in minecraft:the_nether run tp ${player.name.string} ${x} ${y} ${z}`
        );

        console.log(
          `Jogador ${player.name.string} morreu no overworld e respawnou no nether. [${x}, ${y}, ${z}]`
        );
      });
    } else {
      event.server.schedule(1, () => {
        console.log(
          `Jogador ${player.name.string} morreu no overworld e respawnou. `
        );
      });
    }
  }
});
