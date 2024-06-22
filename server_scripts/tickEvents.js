//! UMBRELLA SLOW FALL EFFECT
PlayerEvents.tick(tick => {
if (tick.player.mainHandItem != 'kubejs:umbrella') return
if (!tick.player.isOnGround()) tick.player.potionEffects.add('slow_falling', 1, 0)
})
//! SYMPHONY OF THE SEAS EFFECT
PlayerEvents.tick(tick =>{
    if (tick.player.mainHandItem != 'kubejs:symphony_of_the_seas') return
    if (tick.player.isInWater()) {
        tick.player.potionEffects.add('strength', 1, 0)
        tick.player.potionEffects.add('water_breathing', 1, 0)}
})
const checkForIDs = [
    "kubejs:symphony_of_the_seas"
];
PlayerEvents.tick(tick =>{
    let player = tick.player
    let inventory = player.inventory.getAllItems();
    for(const item of inventory)
        if(checkForIDs.includes(item.id) && tick.player.isInWater()){
            player.potionEffects.add('strength', 1, 2)
            player.potionEffects.add('water_breathing', 1, 0)
        }
})