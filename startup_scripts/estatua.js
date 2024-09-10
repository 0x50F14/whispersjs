StartupEvents.registry("block", (e) => {
    e.create("estatua")
      .displayName("Bloco de Zanee")
      .material("heavy_metal")
      .unbreakable()
      .lightLevel(1)
      .noValidSpawns(true)
      .fullBlock(false)
      .noItem()
      .box(0, 0, 0, 1, 2, 1, true)
      .textureAll("kubejs:block/zanee_head");
  });
  