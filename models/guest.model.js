class Guest {
  constructor(
    guest_id,
    first_name,
    last_name,
    email,
    phone,
    room_n,
    cleaned_at
  ) {
    this.guest_id = guest_id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.phone = phone;
    this.room_n = room_n;
    this.cleaned_at = cleaned_at;
  }
}
module.exports = Guest;
