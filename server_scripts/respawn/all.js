PlayerEvents.respawned((event) => {
  const ally = ["4Help"];
  let player = event.player;
  let x = 0;
  let y = 135;
  let z = 0;
  let isAlly = ally.includes(player.username)
  let playerDimension = player.level.dimension 
  //? let isAlly = player.hasEffect("kubejs:corrupcao_infernal");

  if (isAlly) {
    if (playerDimension == "minecraft:the_nether") {
      event.server.schedule(1, () => {
        event.server.runCommandSilent(
          `execute in minecraft:the_nether run tp ${player.name.string} ${x} ${y} ${z}`
        );
        player.tell(
          "[SSMP] A força com a qual você se aliou fez você renascer no inferno"
        );

        console.log(
          `Jogador ${player.name.string} morreu no nether e respawnou.`
        );
      });
    } else if (playerDimension == "minecraft:overworld") {
      event.server.schedule(1, () => {
        event.server.runCommandSilent(
          `execute in minecraft:the_nether run tp ${player.name.string} ${x} ${y} ${z}`
        );
        player.tell(
          "[SSMP] A força com a qual você se aliou fez você renascer no inferno"
        );

        console.log(
          `Jogador ${player.name.string} morreu no overworld e respawnou no nether.`
        );
      });
    }
  } else {
    if (playerDimension == "minecraft:the_nether") {
      event.server.schedule(1, () => {
        event.server.runCommandSilent(
          `execute in minecraft:the_nether run tp ${player.name.string} ${x} ${y} ${z}`
        );
        player.tell(
          "[SSMP] Alguma força que você ainda não conhece fez você renascer no inferno"
        );

        console.log(
          `Jogador ${player.name.string} morreu no nether e respawnou.`
        );
      });
    } else if (playerDimension == "minecraft:overworld") {
      event.server.schedule(1, () => {

        player.tell(
          "[SSMP] Uma força bondosa o fez renascer na ilha"
        );
        console.log(
          `Jogador ${player.name.string} morreu no overworld e respawnou.`
        );
      });
    }
  }
});
