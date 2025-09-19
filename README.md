# Hotel Management API

A simple Node.js + Express project demonstrating a layered architecture with:

**Middleware** → logging, validation, error handling

**Controller** → handles HTTP request/response only

**Service** → business rules (room availability, booking dates, etc.)

**Repository** → data access (in-memory arrays via data.js, no DB yet)

**Models** → describe object shapes (DTOs)

## Project Structure
```
hotel-management/
│── server.js # App entrypoint
│
├── routes/
│ ├── guests.routes.js
│ ├── rooms.routes.js
│ └── bookings.routes.js
│
├── controllers/
│ ├── guests.controller.js
│ ├── rooms.controller.js
│ └── bookings.controller.js
│
├── services/
│ ├── guests.service.js
│ ├── rooms.service.js
│ └── bookings.service.js
│
├── repositories/
│ ├── guests.repository.js
│ ├── rooms.repository.js
│ └── bookings.repository.js
│ └── data.js # In-memory data store (guests, rooms, bookings)
│
├── models/
│ ├── guest.model.js
│ ├── room.model.js
│ └── booking.model.js
│
├── middleware/
│ ├── logger.js
│ ├── validate.js
│ └── error.js
│
└── utils/
└── http-errors.js
```

## Setup& Run

1. Clone the repo or unzip the project.

2. Install dependencies:

```bash
npm install
```

3. Run the server:

```bash
npm run dev   # starts with nodemon
# or
npm start     # plain node
```

4. The API will be available at:
   http://localhost:3000/api

## Data Shapes (Models)

### Guest

```json
{
  "guest_id": "1",
  "first_name": "Alice",
  "last_name": "Smith",
  "email": "alice@mail.com",
  "phone": "123456",
  "room_n": 101,
  "cleaned_at": null
}
```

### Room

```json
{
  "room_id": "101",
  "room_number": "101",
  "floor": 1,
  "status": "available"
}
```

### Booking

```json
{
  "booking_id": "b1",
  "guest_id": "1",
  "room_id": "101",
  "check_in_date": "2025-09-01",
  "check_out_date": "2025-09-05",
  "num_guests": 2,
  "status": "reserved"
}
```

## API Endpoints

**Guests** → /api/guests

- GET / → list all guests

- GET /:id → get guest by ID

- POST / → create guest

- PATCH /:id → update guest

- DELETE /:id → delete guest

Example POST /api/guests:

```json
{
  "first_name": "John",
  "last_name": "Doe",
  "email": "john@mail.com",
  "phone": "999999",
  "room_n": 102
}
```

**Rooms** → /api/rooms

- GET / → list all rooms

- GET /:id → get room by ID

- POST / → create room

- PATCH /:id → update room

- DELETE /:id → delete room

Example POST /api/rooms:

```json
{
  "room_number": "201",
  "floor": 2,
  "status": "available"
}
```

**Bookings** → /api/bookings

- GET / → list all bookings

- GET /:id → get booking by ID

- POST / → create booking

- PATCH /:id → update booking

- DELETE /:id → delete booking

Example POST /api/bookings:

```json
{
  "guest_id": "1",
  "room_id": "101",
  "check_in_date": "2025-09-10",
  "check_out_date": "2025-09-15",
  "num_guests": 2,
  "status": "reserved"
}
```

## Testing the API

In file test.http the basic request are written.
Open the file in VS Code, click Send Request above each block to test.
