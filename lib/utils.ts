export function formatMoney(value: number) { return `₹${value.toLocaleString('en-IN')}`; }
export function formatDate(value: string) { return new Intl.DateTimeFormat('en-IN', { weekday:'short', day:'numeric', month:'short' }).format(new Date(`${value}T12:00:00`)); }
export function formatTime(value: string) { const [hour, minute] = value.split(':').map(Number); return new Intl.DateTimeFormat('en-IN', { hour:'numeric', minute:'2-digit' }).format(new Date(2026, 0, 1, hour, minute)); }
export function endTime(start: string, duration: number) { const [hours, minutes] = start.split(':').map(Number); const date = new Date(2026, 0, 1, hours, minutes + duration); return `${String(date.getHours()).padStart(2,'0')}:${String(date.getMinutes()).padStart(2,'0')}`; }
