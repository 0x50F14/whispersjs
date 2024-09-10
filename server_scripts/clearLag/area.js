PlayerEvents.tick((tick) => {
  let player = tick.player;
  if (player && player.username == "Kray342") {
    let inventory = player.inventory.getAllItems();
    for (const item of inventory)
      if (item.id == "kubejs:death") {
        let radius = 5;
        let world = player.getLevel();
        let entities = world.getEntitiesWithin(
          AABB.of(
            player.x - radius,
            player.y - radius,
            player.z - radius,
            player.x + radius,
            player.y + radius,
            player.z + radius
          )
        );
        entities.forEach((entity) => {
          if (entity != player && entity.isLiving()) {
            let hasWitherEffect = entity.hasEffect("minecraft:wither");
            if (!hasWitherEffect) {
              entity.potionEffects.add("wither", 66, 1);
            }
          }
        });
        break;
      }
  }
});
