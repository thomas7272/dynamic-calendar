# Dynamic Event Calendar

## Overview

This project is a **Dynamic Event Calendar** built using **React**. It allows users to view a monthly calendar, add, edit, and delete events, and manage them in a user-friendly interface. The events are stored in **localStorage**, ensuring data persistence even after page refreshes.

### Key Features:
- **Calendar View**: Display the current month with day-wise navigation.
- **Event Management**: Add, edit, and delete events for any given day.
- **Event List**: View all events for a selected day in a modal.
- **Data Persistence**: Events are saved in local storage, allowing data persistence across page reloads.
- **UI Design**: Modern and clean design with responsiveness.
  
### Bonus Features:
- **Event Filtering**: Allows filtering events based on keywords.
- **Responsive UI**: The calendar and event details are responsive to screen sizes.

---

## Installation

### Prerequisites:
- Node.js (version 14 or higher)
- npm or yarn (for package management)

### Steps to Install and Run Locally:

1. **Clone the Repository**:

    ```bash
    git clone https://github.com/your-username/dynamic-event-calendar.git
    cd dynamic-event-calendar
    ```

2. **Install Dependencies**:

    ```bash
    npm install
    ```

    Or, if you're using Yarn:

    ```bash
    yarn install
    ```

3. **Run the Development Server**:

    ```bash
    npm run dev
    ```

    Or with Yarn:

    ```bash
    yarn dev
    ```

    The app will be running on [http://localhost:3000](http://localhost:3000).

---

## How to Use the App

1. **Navigate Through Months**: Use the "Previous" and "Next" buttons to switch between months.
2. **Add an Event**: Click on a date, enter event details like name, start time, end time, and an optional description, then click "Add Event."
3. **View Events**: Click on a day to open a modal displaying all events for that day.
4. **Edit an Event**: To edit, simply update the event details and save the changes.
5. **Delete an Event**: Click "Delete" next to any event you want to remove.
6. **Data Persistence**: Events are automatically saved in **localStorage**, meaning the events will persist even after refreshing the page.

---

## Tech Stack

- **Frontend**: React (JavaScript)
- **UI Framework**: Custom CSS (You can add or modify styles)
- **State Management**: React's `useState` and `useEffect`
- **Data Persistence**: Local Storage for saving events
- **Date Handling**: `date-fns` library for calendar and date operations

---

## Deployment

The app can be deployed using platforms like **Vercel**, **Netlify**, or any other hosting service.

