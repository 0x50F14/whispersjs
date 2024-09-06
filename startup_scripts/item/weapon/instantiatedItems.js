const $bowItem = Java.loadClass('net.minecraft.world.item.BowItem')
const $tridentItem = Java.loadClass('net.minecraft.world.item.TridentItem')
const $ItemProperties = Java.loadClass('net.minecraft.world.item.Item$Properties')
const $kubejs = Java.loadClass('dev.latvian.mods.kubejs.KubeJS')

const $staffItem = Java.loadClass('net.minecraft.world.item.TridentItem')


StartupEvents.registry('item', event => {
    event.createCustom('kubejs:cupid_bow', () => new $bowItem(new $ItemProperties().tab($kubejs.tab).defaultDurability(23)))
    event.createCustom('kubejs:pink_trident', () => new $tridentItem(new $ItemProperties().tab($kubejs.tab).defaultDurability(23)))
})

ForgeEvents.onEvent('net.minecraftforge.event.entity.living.LivingGetProjectileEvent', event => {
    global.projectile(event)});
    ForgeEvents.onEvent('net.minecraftforge.event.entity.player.ArrowLooseEvent', event => {
        global.shoot(event)
})  

global.projectile = event => {
    if (event.entity.level.clientSide) return
    if (event.projectileWeaponItemStack.id != 'kubejs:cupid_bow') return
    event.setProjectileItemStack('minecraft:arrow')
}

global.shoot = event => {
    if (event.entity.level.clientSide) return
    if (event.bow.id != 'kubejs:cupid_bow') return

    let entity = event.entity
    let maxSlots = 41
    for (let slotIndex = 0; slotIndex < maxSlots; slotIndex++) {
        let slot = entity.getSlot(slotIndex)
        let itemStack = slot.get()

        if (!itemStack.count <= 0) {
            let itemId = itemStack.id
            if (itemId === 'minecraft:arrow') {
                if (event.charge <= 2 || event.entity.isCreative()) return
                itemStack.count--
                return
            }
        }

    }
    if (!entity.isCreative()) {
        event.setCanceled(true)
    }
}