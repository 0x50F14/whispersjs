ItemEvents.toolTierRegistry((event) => {
  event.add("sussurros_staff", (tier) => {
    tier.uses = 999;
    tier.speed = 3.5;
    tier.attackDamageBonus = 0.2;
    tier.level = 5;
    tier.enchantmentValue = 14;
  });
});
StartupEvents.registry("item", (e) => {
  e.create("nana_staff", "sword")
    .displayName("Nana's Staff")
    .parentModel("kubejs:item/nana_set/staff")
    .tier("sussurros_staff")
    .rarity("epic");
});
