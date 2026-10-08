export type Role = 'CUSTOMER' | 'STAFF' | 'ADMIN';
export type AppointmentStatus = 'BOOKED' | 'CONFIRMED' | 'COMPLETED' | 'CANCELLED';
export type Service = { id: string; name: string; description: string; category: string; price: number; duration_minutes: number; required_skill: string; };
export type Staff = { id: string; name: string; specialization: string; services: string[]; };
export type Appointment = { id: string; customer: string; customer_id: string; staff_id: string; staff: string; service_id: string; service: string; appointment_date: string; start_time: string; end_time: string; status: AppointmentStatus; price: number; };
