const users = ["luhgplays", "Kray342", "4Help"];

const items = [
  "kubejs:carte_de_credit_gamme",
  "kubejs:carte_de_credit_prestige",
  "kubejs:carte_de_credit",
];

ItemEvents.rightClicked((event) => {
  let player = event.player;
  let clickedItem = event.item.id;

  if (!items.includes(clickedItem)) return;

  if (users.includes(player.username)) {event.player.tell(
    Text.red("Au nom de la Société Générale, nous vous informons que nos services ne sont pas disponibles dans votre région.")
  );
    
    player.addItemCooldown(clickedItem, 700);
  } else {
    event.player.tell(
      Text.red("Vous n'êtes pas enregistré comme client de la Société Générale")
    );
    player.addItemCooldown(clickedItem, 700);
  }
});
