ServerEvents.commandRegistry((event) => {
  const { commands: Commands, arguments: Arguments } = event;

  event.register(
    Commands.literal("fly")
      .requires((s) => s.hasPermission(4))
      .executes((c) => fly(c.source.player))
      .then(
        Commands.argument("target", Arguments.PLAYER.create(event)).executes(
          (c) => fly(Arguments.PLAYER.getResult(c, "target"))
        )
      )
  );

  let fly = (player) => {
    console.log(`${player.getName().getString()} executando o comando /fly`);
    if (player.abilities.mayfly) {
      player.abilities.mayfly = false;
      player.abilities.flying = false;
      player.displayClientMessage(
        Component.gold("Flying: ").append(Component.red("disabled")),
        true
      );
    } else {
      player.abilities.mayfly = true;
      player.displayClientMessage(
        Component.gold("Flying: ").append(Component.green("enabled")),
        true
      );
    }
    player.onUpdateAbilities();
    return 1;
  };
});
