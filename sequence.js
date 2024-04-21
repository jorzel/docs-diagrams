
sequenceDiagram
    participant guest as Guest
    participant reservations as ReservationService
    participant table_availability as TableAvailabilityService
    participant notifications as NotificationsService

    guest ->> reservations: book reservations of a table (HTTP POST request)
    reservations ->> table_availability: reserve table (HTTP PUT request)
    table_availability ->> reservations : table availabe and reserved (HTTP response 200)
    reservations -->> notifications: async trigger sending a notification (HTTP POST request)
    reservations ->> guest: reservation of a table booked (HTTP response 201)
