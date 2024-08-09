//! SYMPHONY OF THE SEAS EFFECT
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

//! MAGATAMA
PlayerEvents.tick(tick =>{
    let player = tick.player
    let inventory = player.inventory.getAllItems();
    for(const item of inventory)
        if("kubejs:strength_magatama" == item.id){
            player.potionEffects.add('strength', 1, 1)
        }else if("kubejs:speed_magatama" == item.id){
            player.potionEffects.add('speed', 1, 1)
        }else if("kubejs:jump_magatama" == item.id){
            player.potionEffects.add('jump_boost', 1, 1)
        }else if("kubejs:nvision_magatama" == item.id){
            player.potionEffects.add('night_vision', 1, 1)
        }else if("kubejs:invisibility_magatama" == item.id){
            player.potionEffects.add('invisibility', 2, 1)
        }
  })