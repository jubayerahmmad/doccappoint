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

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
}
