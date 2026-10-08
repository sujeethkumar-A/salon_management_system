import { Appointment, Service, Staff } from './types';
export const services: Service[] = [
 { id:'haircut', name:'Haircut', description:'A tailored cut with consultation, cleanse and finish.', category:'Hair', price:300, duration_minutes:45, required_skill:'Precision cutting' },
 { id:'styling', name:'Hair Styling', description:'Polished styling for your everyday or special occasion.', category:'Hair', price:500, duration_minutes:60, required_skill:'Styling & finish' },
 { id:'coloring', name:'Hair Coloring', description:'Dimensional, glossy color with a personalized consultation.', category:'Hair', price:1200, duration_minutes:120, required_skill:'Color artistry' },
 { id:'facial', name:'Facial', description:'A restorative facial ritual for clear, luminous skin.', category:'Skin', price:800, duration_minutes:60, required_skill:'Skin therapy' },
 { id:'manicure', name:'Manicure', description:'Shape, care and finish for beautifully kept hands.', category:'Nails', price:500, duration_minutes:45, required_skill:'Nail artistry' },
 { id:'pedicure', name:'Pedicure', description:'A soothing foot ritual with immaculate polish.', category:'Nails', price:600, duration_minutes:60, required_skill:'Nail artistry' },
 { id:'bridal', name:'Bridal Makeup', description:'Camera-ready makeup designed around your features and story.', category:'Makeup', price:5000, duration_minutes:150, required_skill:'Bridal artistry' },
 { id:'beard', name:'Beard Grooming', description:'A precise shape, hot towel and nourishing finish.', category:'Grooming', price:250, duration_minutes:30, required_skill:'Barbering' }
];
export const staff: Staff[] = [
 { id:'maya', name:'Maya Kapoor', specialization:'Color & styling', services:['haircut','styling','coloring'] },
 { id:'arjun', name:'Arjun Mehta', specialization:'Cuts & grooming', services:['haircut','styling','beard'] },
 { id:'zoya', name:'Zoya Rao', specialization:'Skin & nails', services:['facial','manicure','pedicure','bridal'] }
];
export const demoAppointments: Appointment[] = [
 { id:'apt-1', customer:'Ananya Sharma', customer_id:'demo-customer', staff_id:'maya', staff:'Maya Kapoor', service_id:'haircut', service:'Haircut', appointment_date:'2026-08-22', start_time:'10:00', end_time:'10:45', status:'CONFIRMED', price:300 },
 { id:'apt-2', customer:'Rhea Nair', customer_id:'customer-2', staff_id:'zoya', staff:'Zoya Rao', service_id:'facial', service:'Facial', appointment_date:'2026-08-22', start_time:'12:00', end_time:'13:00', status:'BOOKED', price:800 }
];
