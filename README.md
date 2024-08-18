# Web Scraping Tool

## Overview

The Web Scraping Tool is a modern web application designed to extract and manage data from various websites. It provides a user-friendly interface for scraping data, storing it in a database, and interacting with ChatGPT for insights and answers related to scraping tasks. Built with React, Tailwind CSS, and a variety of backend technologies, this tool aims to streamline the process of web scraping and data management.

## Architecture

![Architecture Image][architecture.png]

## Features

- **Data Scraping**: Enter a URL to scrape data from any website.
- **Data Management**: Save the scraped data to a database for future use.
- **Interactive Chat**: Engage with ChatGPT to get insights and assistance related to your scraping tasks.
- **User Authentication**: Secure login and registration to access the tool’s features.
- **Dashboard**: View and manage your scraped data on the dashboard.

## Technologies Used

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Code Highlighting**: Highlight.js
- **Authentication**: JSON Web Tokens (JWT)
- **Deployment**: Vercel (for frontend), Docker (for backend)

## Setup Instructions

### Prerequisites

- Node.js and npm (Node Package Manager) installed on your machine.
- MongoDB instance running (local or cloud-based).
- Access to a ChatGPT API (if implementing the interactive chat feature).

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/web-scraping-tool.git
   cd web-scraping-tool```
2. **Install Frontend Dependencies**
    Navigate to the frontend directory and install the necessary packages:
    ```bash
    cd frontend
    npm install```
3. **Install Backend Dependencies**
    Navigate to the backend directory and install the necessary packages:
    ```bash
    cd ../backend
    npm install```
4. **Configure Environment Variables**
    Create a .env file in the backend directory and add the necessary environment variables:
5. **Start the Backend Server**
    ```bash
    npm start```
6. **Start the Frontend Application**
    In a new terminal window, navigate to the frontend directory and start the development server:
    ```bash
    cd ../frontend
    npm start```

 ## Usage

### Authentication

- **Register**: Sign up with your email, password, and name.
- **Login**: Access the tool with your email and password.

### Scraping Data

- Enter a URL in the input field on the "Scrap" page and click "Scrap".
- View and manage the scraped data on the "Dashboard" page.

### Interactive Chat

- Navigate to the "Chat" page to interact with ChatGPT for insights and assistance.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
