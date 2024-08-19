ItemEvents.toolTierRegistry((event) => {
  event.add("sussurro", (tier) => {
    tier.uses = 999;
    tier.speed = 8.0;
    tier.attackDamageBonus = 8.0;
    tier.level = 5;
    tier.enchantmentValue = 14;
  });
});
StartupEvents.registry("item", (e) => {
  //! KNIFE
  e.create("knife", "sword")
    .displayName("Faca")
    .texture("kubejs:item/weapons/knife")
    .tier("sussurro")
    .rarity("epic");
  //! DAGGER
  e.create("dagger", "sword")
    .displayName("Adaga")
    .texture("kubejs:item/weapons/dagger")
    .tier("sussurro")
    .rarity("epic");
  //* NINGUEM WEAPON
  e.create("ninguem_punch", "sword")
    .displayName("Soco de Ninguem")
    .texture("kubejs:item/weapons/ninguem_weapon")
    .tier("sussurro")
    .rarity("epic");    
});
