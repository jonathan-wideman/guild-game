export const initialGameState = {
  currentDate: new Date(),
};

export const initialInn = {
  name: "The Adventurer's Rest",
  level: 1,
  money: 0,
  capacity: 10,
};

export const initialRooms = [
  {
    id: crypto.randomUUID(),
    number: 1,
    type: 'single',
    beds: 1,
    availability: true,
    price: 50,
  },
  {
    id: crypto.randomUUID(),
    number: 2,
    type: 'double',
    beds: 2,
    availability: true,
    price: 80,
  },
  // Add more rooms as needed
];

export const initialGuests = [
  {
    id: crypto.randomUUID(),
    name: 'Adventurer 1',
    roomId: null,
    checkInDate: new Date(2023, 6, 14),
    checkOutDate: new Date(2023, 6, 16),
    satisfaction: 80,
    preferences: {
      roomType: 'single',
      food: 'vegetarian',
    },
    payment: 200,
  },
  {
    id: crypto.randomUUID(),
    name: 'Adventurer 2',
    roomId: null,
    checkInDate: new Date(2023, 6, 13),
    checkOutDate: new Date(2023, 6, 15),
    satisfaction: 90,
    preferences: {
      roomType: 'double',
      food: 'meat lover',
    },
    payment: 300,
  },
  {
    id: crypto.randomUUID(),
    name: 'Adventurer 3',
    roomId: null,
    checkInDate: null,
    checkOutDate: null,
    satisfaction: 100,
    preferences: {
      roomType: 'single',
      food: 'barbecue',
    },
    payment: 400,
  },
  // Add more guests as needed
];

export const initialStaff = [
  {
    id: crypto.randomUUID(),
    name: 'Receptionist',
    role: 'receptionist',
    salary: 100,
    skillLevel: 1,
    happiness: 70,
    energy: 100,
    experience: 0,
  },
  {
    id: crypto.randomUUID(),
    name: 'Bartender',
    role: 'bartender',
    salary: 80,
    skillLevel: 2,
    happiness: 80,
    energy: 100,
    experience: 0,
  },
  // Add more staff members as needed
];
