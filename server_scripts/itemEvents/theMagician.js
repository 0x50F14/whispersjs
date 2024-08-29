//! SOPHIE LETTERS
const hox = ["Hoxuspoxus"];
ItemEvents.rightClicked("kubejs:the_magician", (event) => {
  let player = event.player;

  if (hox.includes(player.username)) {
    if (e.entity.offHandItem == "kubejs:atlas_feather") {
      event.server.runCommandSilent(
        `gamemode creative ${event.player.username}`
      );
      event.player.tell(Text.blue("Você se transformou no Maguinho"));
    } else {
      event.server.runCommandSilent(
        `gamemode survival ${event.player.username}`
      );
      event.player.tell(Text.blue("Você voltou a ser o Atlas"));
    }
  } else {
    event.player.tell(Text.white("Uma carta normal de tarot: O Mago"));
    player.addItemCooldown("kubejs:the_magician", 700);
  }
});
