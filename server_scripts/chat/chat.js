PlayerEvents.loggedIn((e) => {
  let fakeName = e.player.displayName.getSiblings();
  let playerName = fakeName ? fakeName : Component.string(e.getUsername());

  // Converte o playerName em string se for um objeto com componentes
  let playerNameString = playerName.toString();

  // Usando uma expressão regular para pegar o conteúdo dentro de {}
  let extractedName = playerNameString.match(/\{([^}]+)\}/);

  // Verifica se encontrou algo e extrai o nome dentro das chaves, caso contrário será null
  extractedName = extractedName ? extractedName[1] : null;
  e.server.runCommandSilent(
    `title @a actionbar {"text":"${extractedName} entrou no jogo","color":"green"}`
  );
});
PlayerEvents.loggedOut((e) => {
  let fakeName = e.player.displayName.getSiblings();
  let playerName = fakeName ? fakeName : Component.string(e.getUsername());

  // Converte o playerName em string se for um objeto com componentes
  let playerNameString = playerName.toString();

  // Usando uma expressão regular para pegar o conteúdo dentro de {}
  let extractedName = playerNameString.match(/\{([^}]+)\}/);

  // Verifica se encontrou algo e extrai o nome dentro das chaves, caso contrário será null
  extractedName = extractedName ? extractedName[1] : null;
  e.server.runCommandSilent(
    `title @a actionbar {"text":"${extractedName} saiu do jogo","color":"red"}`
  );
});
