ServerEvents.commandRegistry((event) => {
  const { commands: Commands } = event;

  // Registrar o comando '/kitten'
  event.register(
    Commands.literal("kitten").executes((c) => {
      let player = c.getSource().getPlayerOrException();
      let playerNameRaw = player.getName().getString();
      let world = player.getLevel();
      let server = world.getServer();
      let playerDimension = player.level.dimension.toString();

      if (playerNameRaw != "helokitten") return 0;

      if (playerDimension == "minecraft:overworld") {
        console.log(
          `${playerNameRaw} executando o comando /kitten no overworld`
        );
        server.runCommandSilent(
          `dimension minecraft:the_nether players whitelist add helokitten`
        );
        server.runCommandSilent(
          `dimension minecraft:the_nether players whitelist add plsneves`
        );
        server.runCommandSilent(
          `dimension minecraft:the_nether players whitelist add zanee_7`
        );
        server.runCommandSilent(
          `dimension minecraft:the_nether players whitelist add zinmood`
        );
        server.runCommandSilent(
          `dimension minecraft:the_nether players whitelist add anatw`
        );
        server.runCommandSilent(
          `dimension minecraft:the_nether players whitelist add immatts`
        );
        server.runCommandSilent(
          `dimension minecraft:the_nether players whitelist add nana01s`
        );
        server.runCommandSilent(
          `dimension minecraft:the_nether players whitelist add zeelxy`
        );
        server.runCommandSilent(
          `execute in minecraft:the_nether run tp helokitten 501204 91 501109`
        );
        server.runCommandSilent(
          `execute in minecraft:the_nether run tp plsneves 501204 91 501109`
        );
        server.runCommandSilent(
          `execute in minecraft:the_nether run tp zanee_7 501204 91 501109`
        );
        server.runCommandSilent(
          `execute in minecraft:the_nether run tp zinmood 501204 91 501109`
        );
        server.runCommandSilent(
          `execute in minecraft:the_nether run tp anatw 501204 91 501109`
        );
        server.runCommandSilent(
          `execute in minecraft:the_nether run tp immatts 501204 91 501109`
        );
        server.runCommandSilent(
          `execute in minecraft:the_nether run tp nana01s 501204 91 501109`
        );
        server.runCommandSilent(
          `execute in minecraft:the_nether run tp zeelxy 501204 91 501109`
        );
        server.runCommandSilent(`gamemode adventure helokitten`);
        server.runCommandSilent(`gamemode adventure plsneves`);
        server.runCommandSilent(`gamemode adventure zanee_7`);
        server.runCommandSilent(`gamemode adventure zinmood`);
        server.runCommandSilent(`gamemode adventure anatw`);
        server.runCommandSilent(`gamemode adventure immatts`);
        server.runCommandSilent(`gamemode adventure nana01s`);
        server.runCommandSilent(`gamemode adventure zeelxy`);
      } else if (playerDimension == "minecraft:the_nether") {
        console.log(`${playerNameRaw} executando o comando /kitten no nether`);
        server.runCommandSilent(
          `dimension minecraft:the_nether players whitelist remove helokitten`
        );
        server.runCommandSilent(
          `dimension minecraft:the_nether players whitelist remove plsneves`
        );
        server.runCommandSilent(
          `dimension minecraft:the_nether players whitelist remove zanee_7`
        );
        server.runCommandSilent(
          `dimension minecraft:the_nether players whitelist remove zinmood`
        );
        server.runCommandSilent(
          `dimension minecraft:the_nether players whitelist remove anatw`
        );
        server.runCommandSilent(
          `dimension minecraft:the_nether players whitelist remove immatts`
        );
        server.runCommandSilent(
          `dimension minecraft:overworld players whitelist remove nana01s`
        );
        server.runCommandSilent(
          `dimension minecraft:overworld players whitelist remove zeelxy`
        );
        server.runCommandSilent(
          `execute in minecraft:overworld run tp helokitten 501204 91 501109`
        );
        server.runCommandSilent(
          `execute in minecraft:overworld run tp plsneves 501204 91 501109`
        );
        server.runCommandSilent(
          `execute in minecraft:overworld run tp zanee_7 501204 91 501109`
        );
        server.runCommandSilent(
          `execute in minecraft:overworld run tp zinmood 501204 91 501109`
        );
        server.runCommandSilent(
          `execute in minecraft:overworld run tp anatw 501204 91 501109`
        );
        server.runCommandSilent(
          `execute in minecraft:overworld run tp immatts 501204 91 501109`
        );
        server.runCommandSilent(
          `execute in minecraft:overworld run tp nana01s 501204 91 501109`
        );
        server.runCommandSilent(
          `execute in minecraft:overworld run tp zeelxy 501204 91 501109`
        );
        server.runCommandSilent(`gamemode survival helokitten`);
        server.runCommandSilent(`gamemode survival plsneves`);
        server.runCommandSilent(`gamemode survival zanee_7`);
        server.runCommandSilent(`gamemode survival zinmood`);
        server.runCommandSilent(`gamemode survival anatw`);
        server.runCommandSilent(`gamemode survival immatts`);
        server.runCommandSilent(`gamemode survival nana01s`);
        server.runCommandSilent(`gamemode survival zeelxy`);
      }

      return 1;
    })
  );
});
