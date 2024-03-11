export const MINER_BODY = [WORK, CARRY, MOVE];

export function minerLogic(creep) {
  creep.say("Hi 😊");

  // Look for a nearby source to harvest
  const source = creep.pos.findClosestByRange(FIND_SOURCES);
  if (!source) {
    console.log("No source found for miner");
    return;
  }

  if (creep.pos.getRangeTo(source) > 1) {
    creep.moveTo(source);
  } else {
    creep.harvest(source);
  }
}
