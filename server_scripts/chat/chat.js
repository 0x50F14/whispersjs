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
    `title @a subtitle {"text":"no jogo","color":"green"}`
  );
  e.server.runCommandSilent(
    `title @a title {"text":"${extractedName} entrou","color":"green"}`
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
    `title @a subtitle {"text":"do jogo","color":"red"}`
  );
  e.server.runCommandSilent(
    `title @a title {"text":"${extractedName} saiu","color":"red"}`
  );
});
