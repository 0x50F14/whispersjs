//! MAGATAMA
PlayerEvents.tick((tick) => {
  let player = tick.player;
  if (player && player.username == "helokitten") {
    let inventory = player.inventory.getAllItems();
    for (const item of inventory)
      if ("kubejs:strength_magatama" == item.id) {
        player.potionEffects.add("strength", 1, 1);
      } else if ("kubejs:speed_magatama" == item.id) {
        player.potionEffects.add("speed", 1, 1);
      } else if ("kubejs:jump_magatama" == item.id) {
        player.potionEffects.add("jump_boost", 1, 1);
      } else if ("kubejs:nvision_magatama" == item.id) {
        player.potionEffects.add("night_vision", 1, 1);
      } else if ("kubejs:invisibility_magatama" == item.id) {
        player.potionEffects.add("invisibility", 2, 1);
      }
  }
});
//! CRIMSON HEART
const checkForIDs = ["kubejs:crimson_heart"];
PlayerEvents.tick((tick) => {
  let player = tick.player;
  if (player) {
    let inventory = player.inventory.getAllItems();
    for (const item of inventory)
      if (checkForIDs.includes(item.id)) {
        player.potionEffects.add("regeneration", 1, 2);
      }
  }
});

//! :p
const checkForMS = ["kubejs:zane_motoserra"];
PlayerEvents.tick((tick) => {
  let player = tick.player;
  if (player && player.username != "Zanee_7") {
    let inventory = player.inventory.getAllItems();
    for (const item of inventory)
      if (checkForMS.includes(item.id)) {
        tick.server.runCommandSilent(
          `clear ${player.username} kubejs:zane_motoserra`
        );
      }
  }
});
