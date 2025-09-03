export interface Doctor {
  id: string;
  name: string;
  email: string;
  specialization: string;
  photo_url?: string;
}

export interface Appointment {
  id: string;
  date: string;
  status: "PENDING" | "COMPLETED" | "CANCELLED";
  doctor: Doctor;
  patient?: {
    id: string;
    name: string;
    email: string;
    photo_url?: string;
  };
  created_at: string;
  updated_at: string;
}
