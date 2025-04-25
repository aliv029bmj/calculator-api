🧮 Calculator REST API with Frontend
A sleek and modern calculator application built with a Spring Boot REST API backend and a React frontend. This project allows users to perform basic arithmetic operations (addition, subtraction, multiplication, division) through a user-friendly interface. It’s my first full-stack project, built to learn and showcase REST API development, React frontend design, and modern UI styling with Tailwind CSS. 🚀
Built with ❤️ from Baku, Azerbaijan 🇦🇿

🌟 Features

Backend: REST API with a /calculate endpoint for arithmetic operations.
Frontend: Modern React-based UI with Tailwind CSS for a sleek design.
Operations: Supports add, subtract, multiply, and divide.
Error Handling: Handles invalid inputs and division by zero with clear error messages.
Responsive Design: Works seamlessly on both desktop and mobile devices.
Animations: Smooth fade-in animations for results and error messages.


🛠️ Tech Stack



Category
Technologies



Backend
   


Frontend
   


Testing




📂 Project Structure
calculator-api/
├── backend/               # Spring Boot backend
│   ├── src/
│   ├── pom.xml
│   └── ...
├── frontend/              # React frontend
│   ├── src/
│   ├── package.json
│   └── ...
├── postman/               # Postman collection for API testing
│   └── CalculatorAPI.postman_collection.json
├── screenshots/           # Screenshots and visuals
│   ├── frontend-light.png
│   ├── frontend-dark.png
│   ├── api-response.png
│   └── demo.gif
└── README.md


📋 Prerequisites
Before you begin, ensure you have the following installed:

Java 17: For the Spring Boot backend.
Maven: To manage backend dependencies.
Node.js (LTS, e.g., 20.x): For the React frontend.
Postman (optional): For API testing.


⚙️ Installation
Backend Setup

Clone the repository:git clone https://github.com/your-username/calculator-api.git


Navigate to the backend directory:cd calculator-api/backend


Build and run the backend:mvn spring-boot:run


The API will be available at http://localhost:8080.

Frontend Setup

Navigate to the frontend directory:cd calculator-api/frontend


Install dependencies:npm install


Run the frontend:npm run dev


The frontend will be available at http://localhost:5173.


🌐 API Endpoint
GET /calculate
Performs a calculation based on the provided operation and numbers.
Parameters

operation: add, subtract, multiply, or divide
num1: First number (double)
num2: Second number (double)

Example Request
GET http://localhost:8080/calculate?operation=add&num1=5&num2=3

Example Response
{ "result": 8 }

Error Response (e.g., division by zero)
{ "error": "Cannot divide by zero" }


🖥️ Frontend Usage

Open http://localhost:5173 in your browser.
Enter two numbers in the input fields.
Select an operation from the dropdown.
Click Calculate to see the result.
Use the Clear button to reset the form.
Check for error messages (e.g., division by zero).

Demo
Here’s a quick demo of the calculator in action:


📸 Screenshots
Light Theme Interface

Dark Theme Interface (Alternative Design)

API Response in Postman


🧪 Testing
API Testing

Import the Postman collection from postman/CalculatorAPI.postman_collection.json.
Run the requests to test the /calculate endpoint with different operations.
Verify the responses for both successful calculations and error cases.

Frontend Testing

Open the frontend UI at http://localhost:5173.
Test all operations (add, subtract, multiply, divide).
Test error scenarios (e.g., divide by zero, empty inputs).
Ensure the UI is responsive on different screen sizes.


📜 License
This project is licensed under the MIT License. See the LICENSE file for details.

🙌 Acknowledgments

Built with ❤️ from Baku, Azerbaijan 🇦🇿
This project was a great learning experience for me as I explored full-stack development with Java, Spring Boot, and React.
Special thanks to the open-source community for providing amazing tools like Tailwind CSS and Vite.


📬 Contact
Feel free to reach out if you have any questions or suggestions!

GitHub: your-username
LinkedIn: your-linkedin-profile
Email: your-email@example.com



"Mathematics is the language of the universe, and this calculator is my small step into that universe!" – Built with passion in Baku, Azerbaijan. 🧮

