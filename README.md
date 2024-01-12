# Weather App

Weather App is a full-stack application built with React, Firebase, and Tailwind, Node and Express. It allows users to view weather forecasts and manage their profiles.

[Weather Api](https://www.weatherapi.com/)

[Geo Api](https://ipgeolocation.io/)

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Firebase**: A platform developed by Google for creating mobile and web applications. It provides backend services like authentication, database, storage, and hosting.
- **Tailwind CSS**: A utility-first CSS framework that makes styling a breeze with pre-defined classes.
- **Node.js and Express**: A runtime and web application framework for server-side JavaScript.
## How It Works

Users can sign in to the app using an email account and password. Once signed in, they can view their profile details, including their email and profile picture. Users can also update their profile picture by clicking on it. The updated profile picture is then saved in Firebase Storage and the image displayed on the page is updated.

Users can also view and update their locations. They can add new locations or update existing ones. Once they save their changes, the updated locations are saved in Firebase Realtime Database.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js and npm installed on your computer.
- A Firebase project with Firebase Authentication and Firebase Realtime Database enabled.

### Installing

1. Clone the repository:

```
git clone https://github.com/RafaelSdeS/weather-app.git
```

2. Navigate into the project directory:

```
cd weather-app
```

3. Install the dependencies, both for the client and server:

```
npm install
```

4. Create a `.env` file in the client directory and add your Firebase and the Geo Api Key and the server api configuration for the frontend:
```
VITE_SERVER_URL=your_server
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_GEOAPI_KEY=your_geoapi_key 
```

5. Create a `.env` file in the server directory and add you Weather Api Key:
```
API_KEY=your_weather_api_key
```

6. Start the development server, for both backend and backend:

```
npm run dev
```

Now, you should be able to access the app at `http://localhost:3000`.

## License

This project is licensed under the MIT License

## Contact

[LinkedIn](https://www.linkedin.com/in/rafael-silva-de-souza/)

