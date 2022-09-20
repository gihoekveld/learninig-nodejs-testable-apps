# API for testable apps 

This is a simple API for testable apps. 

Imagine the following scenario that a barber shop owner is having with his customers: 

>My clients need to make appointments, but they can't know the available times.

To solve this problem, the barber shop owner needs an API that allows his customers to book appointments.

To develop and test this simple API we will use the following technologies: <a href="https://vitest.dev/" target="_blank">vitest</a> and <a href="https://date-fns.org/">date-fns</a>.

```bash
## for tests
npm i vitest -D 
## for handle dates
npm i date-fns
```

## Entities

### Appointment

| Property | Type   | Description             |
| :------- | :----- | :---------------------- |
| customer | string | customer name           |
| startsAt | Date   | appointment starts date |
| endsAt   | Date   | appointment ends date   |

### Validations

- Cannot create an appointment with end date before start date.
- Cannot create an appointment with start date before of current date.
- Cannot create an appointment with overlapping dates.

## SOLID principles

This is the structure of the project. We will use the SOLID principles to develop this API.

```bash
src
├── entities
│   └── appointment.ts
├── repositories
│   └── in-memory
│      └── in-memory-appointments-repository.ts
│   └── appointment-repository.ts
├── use-cases
│   └── create-appointment.ts
```

I developed this simple project through Diego's Rocketseat lecture. You can check out the class on <a href="https://youtu.be/jBOLRzjEERk">YouTube</a>







