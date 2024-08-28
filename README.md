# Weather Forecast App

![Weather Forecast](https://img.shields.io/badge/Weather-Forecast-blue.svg)

A React-based weather forecast application that provides current weather conditions and a 5-day forecast for any city worldwide. The app fetches data from a Django backend that communicates with the OpenWeatherMap API.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Styling](#styling)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Features

- Search for weather conditions by city name.
- Display current temperature, weather description, humidity, and wind speed.
- Show a 5-day weather forecast with daily temperature and weather conditions.
- Handle invalid city names gracefully with user-friendly error messages.
- Visually appealing UI with support for weather icons and responsive design.

## Demo

Check out a live demo of the app [here](#).

## Technologies Used

- **Frontend:** React, Bootstrap, CSS
- **Backend:** Django, Django REST framework
- **API:** OpenWeatherMap API
- **Deployment:** Your preferred deployment method (e.g., Heroku, Vercel)

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v12+)
- [Python](https://www.python.org/) (v3.8+)
- [Django](https://www.djangoproject.com/) (v3.2+)
- [pip](https://pip.pypa.io/en/stable/)
- [OpenWeatherMap API Key](https://home.openweathermap.org/api_keys)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/weather-forecast-app.git
   cd weather-forecast-app

## Backend Setup (Django):

### Navigate to the backend directory:

```bash
cd backend
Create a virtual environment:

```bash
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

### Install the required dependencies:

```bash
pip install -r requirements.txt
Create a .env file in the backend directory and add your OpenWeatherMap API key:

```bash
OPEN_WEATHER_API=your_openweather_api_key
Run migrations and start the Django development server:

```bash
python manage.py migrate
python manage.py runserver

The Django server will be running at http://localhost:8000/.

## Frontend Setup (React):

### Navigate to the frontend directory:

```bash
cd ../frontend

Install the required dependencies:

```bash
npm install

Start the React development server:

```bash
npm start

The React app will be running at http://localhost:3000/.

## API Endpoints
The backend exposes the following API endpoint:

GET /api/weather/?city={city_name} - Fetches the current weather and 5-day forecast for the specified city.
## Usage
Open your browser and navigate to http://localhost:3000/.
Enter the name of the city you want to search for in the input field.
Click the "Get Weather" button to fetch and display the weather data.
## Project Structure
```bash
weather-forecast-app/
│
├── backend/                 # Django Backend
│   ├── manage.py
│   ├── weather/
│   │   ├── __init__.py
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── views.py
│   └── api/
│       └── views.py
│
├── frontend/                # React Frontend
│   ├── public/
│   ├── src/
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── index.js
│   └── package.json
│
├── .gitignore
├── README.md
└── requirements.txt         # Python dependencies
## Styling
The frontend is styled using a combination of Bootstrap and custom CSS. The main styling adjustments include:

Weather Cards: Weather data is displayed in cards with rounded corners, shadows, and padding.
Input Field and Button: The search input and button have rounded corners and are styled to fit the theme of the app.
Error Messages: Custom styling for error messages when an invalid city is entered.
Weather Icons: The UI supports displaying weather icons based on the weather conditions.
Contributing
Contributions are welcome! If you have any ideas or suggestions to improve the project, please open an issue or submit a pull request.

## Fork the repository.
Create a new branch (git checkout -b feature-branch).
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature-branch).
Open a pull request.
## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
OpenWeatherMap for the weather data API.
Bootstrap for the UI components.
Django REST framework for simplifying API development.
