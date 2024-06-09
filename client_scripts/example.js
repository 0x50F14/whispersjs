ItemEvents.rightClicked('kubejs:nana_bow', event => {
    let entity = event.entity
    let maxSlots = 41
    for (let slotIndex = 0; slotIndex < maxSlots; slotIndex++) {
        let slot = entity.getSlot(slotIndex)
        let itemStack = slot.get()
        if (!itemStack.count <= 0) {
            let itemId = itemStack.id
            if (itemId === 'minecraft:arrow') {
                return
            }
        }
    }
    if (!event.player.isCreative()) {
        event.cancel()
    }
})