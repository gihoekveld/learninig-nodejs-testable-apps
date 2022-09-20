import { Appointment } from "../entities/appointment";

export interface AppointmentsRepository {
  create(appointment: Appointment): Promise<void>;
  findOverlappingAppointment(startsAt: Date, endsDate: Date): Promise<Appointment | null>
}