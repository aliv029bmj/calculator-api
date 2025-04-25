Calculator REST API with Frontend
A modern calculator application with a Spring Boot REST API backend and a React frontend. The API performs basic arithmetic operations (addition, subtraction, multiplication, division), and the frontend provides a sleek, user-friendly interface to interact with the API.
Features

Backend: REST API with /calculate endpoint for arithmetic operations.
Frontend: React-based UI with Tailwind CSS for modern styling.
Supports add, subtract, multiply, and divide operations.
Error handling for invalid operations and division by zero.

Tech Stack

Backend:
Java 17
Spring Boot 3.x
Maven
Lombok


Frontend:
React
Tailwind CSS
Axios
Vite


Testing: Postman

Prerequisites

Java 17
Maven
Node.js (LTS, e.g., 20.x)
Postman (optional, for API testing)

Project Structure
calculator-api/
├── backend/               # Spring Boot backend
│   ├── src/
│   ├── pom.xml
│   └── ...
├── frontend/              # React frontend
│   ├── src/
│   ├── package.json
│   └── ...
├── postman/               # Postman collection
│   └── CalculatorAPI.postman_collection.json
├── screenshots/           # Screenshots
│   ├── frontend.png
│   └── api-response.png
└── README.md

Installation
Backend

Clone the repository:git clone https://github.com/your-username/calculator-api.git


Navigate to the backend directory:cd calculator-api/backend


Run the backend:mvn spring-boot:run


The API will be available at http://localhost:8080.

Frontend

Navigate to the frontend directory:cd calculator-api/frontend


Install dependencies:npm install


Run the frontend:npm run dev


The frontend will be available at http://localhost:5173.

API Endpoint
GET /calculate
Performs a calculation based on the provided operation and numbers.
Parameters:

operation: add, subtract, multiply, or divide
num1: First number (double)
num2: Second number (double)

Example Request:
GET http://localhost:8080/calculate?operation=add&num1=5&num2=3

Example Response:
{ "result": 8 }

Error Response (e.g., division by zero):
{ "error": "Cannot divide by zero" }

Frontend Usage

Open http://localhost:5173 in your browser.
Enter two numbers and select an operation.
Click "Calculate" to see the result or any error messages.

Screenshots
Frontend Interface

API Response in Postman

Testing

API Testing: Import the Postman collection from postman/CalculatorAPI.postman_collection.json and run the requests.
Frontend Testing: Use the frontend UI to test calculations and error handling.

License
MIT License
Acknowledgments

Built with ❤️ from Baku, Azerbaijan

