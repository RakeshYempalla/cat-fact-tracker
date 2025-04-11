# 🐱 Cat Fact Tracker – Full Stack Project (FastAPI + React)

This is a full-stack project built as part of a new hire intro assignment. The goal is to build a complete application that fetches cat facts from a public API, stores them in a SQLite database, and allows users to view and add facts through a web interface. It includes:

- A Python script to fetch and store random cat facts
- A FastAPI backend with RESTful endpoints
- A React frontend to display and submit facts

---

## 🎯 Features

- 🔄 Fetches 5 random cat facts from [catfact.ninja](https://catfact.ninja/fact)
- 💾 Stores facts in a local SQLite database (no duplicates)
- ⚙️ FastAPI backend provides:
  - `GET /catfacts`: All cat facts
  - `GET /catfacts/random`: One random fact
  - `POST /catfacts`: Add a new fact
- 🖥️ React frontend:
  - Displays a random fact on load
  - Toggle visibility of all facts
  - Form to add a new fact

---

## 🧰 Tech Stack

| Layer     | Technology       |
|-----------|------------------|
| Frontend  | React, Axios     |
| Backend   | FastAPI, Python  |
| Database  | SQLite           |
| Styling   | Basic CSS        |

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/cat-fact-tracker.git
cd cat-fact-tracker

### 2. Backend Setup (FastAPI)
> python3 -m venv venv
> source venv/bin/activate

Install dependencies
> pip install -r requirements.txt

Pre-load database (if required)
> python backend/import_cat_facts.py

Start FastAPI server
> uvicorn backend.main:app --reload

### 3. Frontend Setup (React)
>cd frontend
>npm install
>npm start

## Trouble shooting issues :
Backend : ERROR:    [Errno 48] Address already in use . Find the proces and kill the process id
> lsof -i : PORT_NUMBER         (to find the pid)
> kill -9 PID
Frontend : Warning: " Something is already running on port"
> lsof -i : PORT_NUMBER         (to find the pid)
> kill -9 PID
> Or chanhge the PORT_NUMBER



