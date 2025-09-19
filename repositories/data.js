guests = [
  {
    guest_id: 1,
    first_name: "Anna",
    last_name: "Petrosyan",
    email: "anna.petrosyan@example.com",
    phone: "+374-91-123456",
    room_n: 101,
    cleaned_at: "2025-09-09T14:30:00Z",
  },
  {
    guest_id: 2,
    first_name: "David",
    last_name: "Hakobyan",
    email: "david.hakobyan@example.com",
    phone: "+374-93-654321",
    room_n: 102,
    cleaned_at: "2025-09-09T16:00:00Z",
  },
  {
    guest_id: 3,
    first_name: "Mariam",
    last_name: "Sargsyan",
    email: "mariam.sargsyan@example.com",
    phone: "+374-95-112233",
    room_n: 201,
    cleaned_at: "2025-09-10T09:15:00Z",
  },
  {
    guest_id: 4,
    first_name: "Arman",
    last_name: "Grigoryan",
    email: "arman.grigoryan@example.com",
    phone: "+374-99-445566",
    room_n: 202,
    cleaned_at: "2025-09-10T11:45:00Z",
  },
];

rooms = [
  {
    room_id: 1,
    room_number: 101,
    floor: 1,
    status: "occupied",
  },
  {
    room_id: 2,
    room_number: 102,
    floor: 1,
    status: "available",
  },
  {
    room_id: 3,
    room_number: 201,
    floor: 2,
    status: "occupied",
  },
  {
    room_id: 4,
    room_number: 202,
    floor: 2,
    status: "maintenance",
  },
];

bookings = [
  {
    booking_id: 1,
    guest_id: 1,
    room_id: 1,
    check_in_date: "2025-09-08",
    check_out_date: "2025-09-12",
    num_guests: 1,
    status: "checked_in",
  },
  {
    booking_id: 2,
    guest_id: 2,
    room_id: 2,
    check_in_date: "2025-09-10",
    check_out_date: "2025-09-14",
    num_guests: 2,
    status: "reserved",
  },
  {
    booking_id: 3,
    guest_id: 3,
    room_id: 3,
    check_in_date: "2025-09-05",
    check_out_date: "2025-09-09",
    num_guests: 1,
    status: "checked_out",
  },
  {
    booking_id: 4,
    guest_id: 4,
    room_id: 4,
    check_in_date: "2025-09-11",
    check_out_date: "2025-09-15",
    num_guests: 3,
    status: "canceled",
  },
];

module.exports = { guests, rooms, bookings };
