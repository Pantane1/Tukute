# MeetFlow

A full-stack Meeting Management and Payment Initialization System built with Node.js, Express, and MySQL.

---

## 🚀 Overview

MeetFlow is a web-based platform that allows an organizer to:

- Manage participants
- Schedule meetings
- Notify participants
- Initialize payment requests (STK Push integration planned)
- Track meeting status
- Maintain full meeting history

This project is structured with scalability in mind and prepared for integration with:

- Email services
- SMS gateways
- M-Pesa STK Push (Daraja API)

---

## 🏗 System Architecture

Client (Browser)
↓
Express Server (Node.js)
↓
MySQL Database
↓
External Services (Planned)
- Email Service
- SMS API
- M-Pesa Daraja API

---

## 📂 Project Structure
```
Tukute/ │ ├── server.js ├── package.json │ ├── config/ │   └── db.js │ ├── routes/ │   ├── participants.js │   └── meetings.js │ ├── controllers/ │   ├── participantController.js │   └── meetingController.js │ ├── services/ │   ├── emailService.js │   ├── smsService.js │   └── mpesaService.js │ ├── views/ │   ├── index.ejs │   ├── participants.ejs │   ├── addParticipant.ejs │   ├── createMeeting.ejs │   ├── initializeMeeting.ejs │   ├── dashboard.ejs │   └── history.ejs │ └── public/ └── style.css

```
---

## 🛠 Tech Stack

- Node.js
- Express.js
- MySQL
- EJS (Templating Engine)
- MVC Architecture

---

## 📌 Features

### 1️⃣ Participant Management
- Add new participants
- Store name, email, phone
- Persistent database storage

### 2️⃣ Meeting Creation
- Set meeting topic
- Add meeting message
- Select participants
- Schedule meeting date and time

### 3️⃣ Meeting Initialization
- Set contribution amount
- Prepare payment trigger logic
- Update meeting status

### 4️⃣ Dashboard
- View participants
- View payment status
- Monitor meeting progress

### 5️⃣ Meeting History
- View all past meetings
- Sorted by creation date
- Persistent record keeping

---

## 🗄 Database Schema

### Participants Table
- id
- name
- email
- phone
- created_at

### Meetings Table
- id
- topic
- message
- meeting_time
- amount
- status
- created_at

### Meeting Participants Table
- id
- meeting_id
- participant_id
- payment_status
- stk_checkout_id

---

## 🔧 Setup Instructions

### 1. Clone Repository
```bash
git clone <your-repo-url>
cd meeting-app

2. Install Dependencies

npm install

3. Setup Database

Create database in MySQL:

CREATE DATABASE meeting_app;

Import the provided SQL schema.

4. Configure Database

Edit config/db.js with your MySQL credentials.

5. Start Server

node server.js

Visit:

http://localhost:3000

```
---

🔮 Planned Integrations

Email notifications

SMS notifications

M-Pesa STK Push

Callback handling

Real-time dashboard updates

Authentication & admin control

Payment analytics



---

🎯 Future Enhancements

Role-based access control

Meeting reminders

PDF report export

Live meeting countdown

Multi-meeting concurrency handling

SaaS-ready architecture



---

📜 License

This project is built for educational and practical implementation purposes.


---

👨‍💻 Author

Developed by [Pantane](https://pantane1.github.io/nf/)

Bachelor of Science in Mathematics and Computer Science
Full-Stack Developer | AI Enthusiast | Systems Builder

