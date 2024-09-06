ItemEvents.rightClicked("kubejs:wheel_of_fortune", (event) => {
  let player = event.player;
  event.player.tell(Text.white("Uma carta normal de tarot: A Roda da Fortuna"));
  player.addItemCooldown("kubejs:wheel_of_fortune", 700);
});
