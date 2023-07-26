import { MersenneTwister19937, Random } from "random-js"
import { newFilledArray } from "../util/util";

const rng = new Random(MersenneTwister19937.autoSeed());

let guestCount = 3

const guestTemplate = {
  id: undefined,
  name: undefined,
  roomId: null,
  checkInDate: null,
  checkOutDate: null,
  stayDuration: undefined,
  satisfaction: undefined,
  preferences: {
    roomType: null,
    food: null,
  },
}

function generateId() {
  return crypto.randomUUID();
}

function generateGuestName() {
  guestCount += 1;
  return `Adventurer ${guestCount}`;
}
function generateGuestStayDuration() {
  return rng.integer(1, 10)
}
function generateGuestSatisfaction() {
  return rng.integer(50, 100)
}

export function generateGuests() {
  const count = rng.integer(1, 5)
  return newFilledArray(count, () => ({
    ...guestTemplate,
    id: generateId(),
    name: generateGuestName(),
    stayDuration: generateGuestStayDuration(),
    satisfaction: generateGuestSatisfaction(),
  }))
}