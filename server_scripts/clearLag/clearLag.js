// Interval for each cleanup and time until the cleaning occurs
let Interval = 30;
let cleaningTime = 1200 * Interval;

// Cleaning timer setter
let timerCheck = 1200;

// Notification times, times the user want to get the message how many minutes are left until Clearlag clears
const notifications = [5, 1];
// Second notification times, times showing user how many seconds are left until item clear
const second_notifications = [5, 4, 3, 2, 1];

let round = 0;
let lastClearLagResult = Utils.newList();
let lastTotalClearLagResult = Utils.newCountingMap();

// List of item IDs that shouldn't be deleted
let blacklist = [
  "minecraft:nether_star",
  "kubejs:neeko_spear",
  "kubejs:nana_spear",
  "kubejs:zin_spear",
  "kubejs:void_lightning",
  "kubejs:demon_sword",
  "kubejs:clown_stick",
  "kubejs:nana_sword",
  "kubejs:dionisio_sword",
  "kubejs:nana_staff",
  "kubejs:shadowfell",
  "kubejs:spiritual_scythe",
  "kubejs:kama",
  "kubejs:nana_scythe",
  "kubejs:the_end",
  "kubejs:nogitsune",
  "kubejs:brasa_katana",
  "kubejs:dentellion_katana",
  "kubejs:nana_hammer",
  "kubejs:dionisio_hammer",
  "kubejs:pumpkin_scythe",
  "kubejs:valhakyra",
  "kubejs:miguel_sword",
  "kubejs:old_cernunnos",
  "kubejs:new_cernunnos",
  "kubejs:nana_greatsword",
  "kubejs:dionisio_greatsword",
  "kubejs:zin_dagger",
  "kubejs:matts_dagger",
  "kubejs:azeroth_dagger",
  "kubejs:knife",
  "kubejs:dagger",
  "kubejs:ninguem_punch",
  "kubejs:dentellion_greataxe",
  "kubejs:neeko_greatsword",
];

let timeSchedule = (server) => {
  server.tell([
    Text.green("[SSMP - ClearLag]"),
    " Clearlag will start in ",
    `${Interval}`,
    " minutes!",
  ]);

  server.scheduleInTicks(timerCheck, (callback) => {
    // Calculate the currenttime with the delay for every schedule multiplied with the current count of repeated rounds
    let currentTime = timerCheck * ++round;
    // For notification propose: Get how many entities of type item are on the server
    let nextItems = server
      .getEntities()
      .filter((entity) => entity.type.equals("minecraft:item")).length;

    // The time left until cleaning of items
    let minutesLeft = (cleaningTime - currentTime) / 1200;

    // Delete every entity of type item on the server (Except Blacklist) and reschedule for the next item deletion
    if (cleaningTime <= currentTime) {
      clearLag(server, true);
    }

    // Send notifications for every time given in the notifications array
    if (notifications.includes(minutesLeft))
      server.tell([
        Text.green("[SSMP - ClearLag]"),
        " Removing ",
        `${nextItems}`,
        " items in ",
        `${minutesLeft}`,
        " minutes!",
      ]);

    if (minutesLeft === 1) {
      second_notifications.forEach((seconds) => {
        let delayTicks = (minutesLeft * 60 - seconds) * 20; // Converts seconds to ticks
        server.scheduleInTicks(delayTicks, (secondsCallback) => {
          server.tell([
            Text.green("[SSMP - ClearLag]"),
            " Removing ",
            `${nextItems}`,
            " items in ",
            `${seconds}`,
            " seconds!",
          ]);
        });
      });
    }
    callback.reschedule();
  });
};

// Nothing to do with the timer

ServerEvents.loaded((event) => {
  timeSchedule(event.server);
});

let clearLag = (server, reset) => {
  let itemList = server
    .getEntities()
    .filter((entity) => entity.type.equals("minecraft:item"));
  let lastResult = Utils.newCountingMap();

  lastClearLagResult.clear();
  lastTotalClearLagResult.clear();

  itemList.forEach((items) => {
    if (!blacklist.includes(items.getFullNBT().Item.id)) {
      var key = items.name;
      lastResult.add(key, items.item.count);
      lastTotalClearLagResult.add(key, items.item.count);
      items.kill();
    }
  });

  lastClearLagResult.addAll(lastResult.entries);
  lastClearLagResult.sort(null);

  server.tell([
    Text.green("[SSMP - ClearLag] "),
    `${lastTotalClearLagResult.totalCount}`,
    " Removed items.",
  ]);
  server.tell([
    Text.green("[SSMP - ClearLag]"),
    " Clearlag will start in ",
    `${Interval}`,
    " minutes!",
  ]);
  if (reset) round = 0;
};

ServerEvents.commandRegistry((event) => {
  const { commands: Commands, arguments: Arguments } = event;
  event.register(
    Commands.literal("clearlag")
      .requires((s) => s.hasPermission(4))
      .then(
        Commands.literal("clear").executes((ctx) => {
          let server = ctx.source.getServer();
          clearLag(server, false);
          return 1;
        })
      )
  );
});
