//! SOPHIE LETTERS
const users = ["Japoggers"];

ItemEvents.rightClicked("kubejs:wheel_of_fortune", (event) => {
  let player = event.player;

  if (users.includes(player.username)) {
  } else {
    event.player.tell(
      Text.white("Uma carta normal de tarot: A Roda da Fortuna")
    );
    player.addItemCooldown("kubejs:wheel_of_fortune", 700);
  }
});
