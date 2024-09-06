ItemEvents.modification((event) => {
  event.modify("minecraft:ender_pearl", (item) => {
    item.maxStackSize = 64;
  });
  event.modify("kubejs:pumpkin_scythe", (item) => {
    item.setAttackSpeed(0.6)
  });
  event.modify("kubejs:nana_hammer", (item) => {
    item.setAttackSpeed(0.6);
  });
  event.modify("kubejs:dionisio_hammer", (item) => {
    item.setAttackSpeed(0.6);
  });
  event.modify("kubejs:kama", (item) => {
    item.setAttackSpeed(2.0);
  });
  event.modify("kubejs:matts_dagger", (item) => {
    item.setAttackSpeed(1.8);
  });
  event.modify("kubejs:azeroth_dagger", (item) => {
    item.setAttackSpeed(1.8);
  });
  event.modify("kubejs:zin_dagger", (item) => {
    item.setAttackSpeed(1.8);
  });
  event.modify("kubejs:zin_spear", (item) => {
    item.setAttackSpeed(1.6);
  });
  event.modify("kubejs:neeko_spear", (item) => {
    item.setAttackSpeed(1.6);
  });
  event.modify("kubejs:nana_spear", (item) => {
    item.setAttackSpeed(1.6);
  });
  event.modify("kubejs:ninguem_punch", (item) => {
    item.setAttackSpeed(3.0);
  });
  event.modify("kubejs:void_lightning", (item) => {
    item.setAttackSpeed(1.6);
  });
});
