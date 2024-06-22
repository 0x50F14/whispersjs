StartupEvents.registry('block', e => {
    //! ZANEE BLOCK
    e.create("zanee_block") 
    .displayName("Bloco de Zanee")
    .material("metal")
    .hardness(1.0)
    .resistance(1.0)
    .noValidSpawns(true)
    .requiresTool(false)
    .textureAll('kubejs:block/zanee_head')
})