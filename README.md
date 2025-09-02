# Doctor Appointment Management System (Frontend)

A modern, responsive Doctor Appointment Management System built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **TanStack Query**.

---

## 🚀 Features

### Authentication & Registration

- **Login** with role selection (Doctor / Patient)
- **Registration**
  - Patient: name, email, password, optional photo
  - Doctor: name, email, password, specialization, optional photo
- Real-time validation with **Zod**

### Patient Dashboard

- 📋 **Doctor Directory**
  - Doctor cards with name, specialization, and photo
  - **Search by name**
  - **Filter by specialization**
  - **Pagination**
- 📅 **Book Appointment**
  - Booking modal UI with date picker (functionality WIP)
- 📖 **My Appointments**
  - View all scheduled appointments
  - Filter by status (Pending, Completed, Cancelled)
  - Cancel pending appointments with confirmation

### Doctor Dashboard

- 📋 **Appointment Management**
  - Paginated list of patient appointments
  - Filter by date and status
- ✅ **Update Status**
  - Mark appointments as Completed or Cancelled
  - Real-time UI update with confirmation dialogs

---

## 🛠 Tech Stack

- **Framework**: Next.js (React + TypeScript)
- **Styling**: Tailwind CSS, shadcn/ui components
- **Data Fetching**: TanStack Query
- **Forms & Validation**: React Hook Form + Zod
- **HTTP Client**: Axios

---

## ⚙️ Installation & Setup

### Prerequisites

- Node.js (v18+)
- npm or yarn

### Steps

1. Clone the repository:

```bash
   git clone https://github.com/jubayerahmmad/doccappoint.git

   cd doccappointment
```

2. Install dependencies:

```bash
   npm install
```

3. Start the dev server:

```bash
   npm run dev
```

4. Visit the app at:

```bash
http://localhost:3000

```
