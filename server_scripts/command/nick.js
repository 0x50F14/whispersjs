ServerEvents.commandRegistry((event) => {
  const { commands: Commands, arguments: Arguments } = event;

  // Registrar o comando '/nick'
  event.register(
    Commands.literal("nick").then(
      Commands.argument("name", Arguments.GREEDY_STRING.create(event)) // Argumento para o nome composto
        .executes((c) => {
          let player = c.getSource().getPlayerOrException(); // Obtém o jogador que executou o comando
          let chosenName = Arguments.GREEDY_STRING.getResult(c, "name"); // Obtém o nome escolhido

          // Garantir que o nome composto seja tratado corretamente
          chosenName = chosenName.split(" ").join(" "); // Juntar as partes separadas por espaços

          // Obtém o mundo e o servidor a partir do jogador
          let world = player.getLevel();
          let server = world.getServer();

          // Função para alterar o nick
          let setNickname = (player, chosenName) => {
            try {
              // Usa .getString() para garantir que o nome seja extraído corretamente
              let playerNameRaw = player.getName().getString(); // Converte diretamente para string

              console.log(
                `Alterando o nickname de ${playerNameRaw} para "${chosenName}"`
              );

              if (chosenName === "*") {
                // Se o nome for "*", definir como string vazia e ocultar o nome
                server.runCommandSilent(
                  `hiddennames setName ${playerNameRaw} white breathe ""`
                );
                server.runCommandSilent(
                  `hiddennames nameplateVisible ${playerNameRaw} false`
                );
                server.runCommandSilent(`fakename set ${playerNameRaw} ""`);

                player.displayClientMessage(
                  Component.green(`Nickname e nameplate ocultados`),
                  true
                );
              } else {
                // Caso contrário, definir o nome escolhido e mostrar o nameplate
                server.runCommandSilent(
                  `hiddennames setName ${playerNameRaw} white breathe "${chosenName}"`
                );
                server.runCommandSilent(
                  `hiddennames nameplateVisible ${playerNameRaw} true`
                );
                server.runCommandSilent(
                  `fakename set ${playerNameRaw} "${chosenName}"`
                );

                // Mensagem de confirmação para o jogador
                player.displayClientMessage(
                  Component.green(`Nickname alterado para: ${chosenName}`),
                  true
                );
              }
            } catch (error) {
              console.error(`Erro ao alterar o nickname: ${error}`);
              player.displayClientMessage(
                Component.red(`Erro ao alterar o nickname: ${error.message}`),
                true
              );
            }
          };

          // Chama a função para alterar o nick do próprio jogador
          setNickname(player, chosenName);

          return 1;
        })
    )
  );
});
