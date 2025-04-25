# 🧮 Calculator REST API with Frontend

A sleek and modern **calculator application** built with a **Spring Boot REST API** backend and a **React + Tailwind CSS** frontend. This full-stack project allows users to perform basic arithmetic operations with a beautiful and responsive UI.  
  
> "Mathematics is the language of the universe, and this calculator is my small step into that universe."  
> — Built with ❤️ in Baku, Azerbaijan 🇦🇿

---

## 🌟 Features

- 🔁 **RESTful Backend** – `/calculate` endpoint supporting all basic operations  
- 🎨 **Modern Frontend** – Built with **React** and **Tailwind CSS** for sleek design  
- ➕ **Operations** – Add, Subtract, Multiply, Divide  
- ⚠️ **Error Handling** – Clear messages for invalid input and division by zero  
- 📱 **Responsive Design** – Works on desktop & mobile  
- ✨ **Smooth Animations** – Fade-in effects for results and errors  

---

## 🛠️ Tech Stack

| Category   | Technologies                  |
|------------|-------------------------------|
| Backend    | Java 17, Spring Boot, Maven   |
| Frontend   | React, Tailwind CSS, Vite     |
| Testing    | Postman (for API)             |

---

## 📂 Project Structure

```
calculator-api/
├── backend/               # Spring Boot backend
│   ├── src/
│   └── pom.xml
├── frontend/              # React frontend
│   ├── src/
│   └── package.json
├── postman/               # Postman collection for API testing
│   └── CalculatorAPI.postman_collection.json
├── screenshots/           # UI and API visuals
│   ├── frontend-light.png
│   ├── frontend-dark.png
│   ├── api-response.png
│   └── demo.gif
└── README.md
```

---

## 📋 Prerequisites

Make sure you have the following installed:

- 🧠 **Java 17**
- 🛠️ **Maven**
- 🌐 **Node.js (LTS, e.g., 20.x)**
- 🧪 **Postman** (optional, for API testing)

---

## ⚙️ Installation

### 🔧 Backend Setup

```bash
git clone https://github.com/your-username/calculator-api.git
cd calculator-api/backend
mvn spring-boot:run
```

API will be available at: [http://localhost:8080](http://localhost:8080)

---

### 💻 Frontend Setup

```bash
cd calculator-api/frontend
npm install
npm run dev
```

Frontend will run on: [http://localhost:5173](http://localhost:5173)

---

## 🌐 API Endpoint

### `GET /calculate`

**Query Parameters:**

| Parameter | Type    | Description                          |
|-----------|---------|--------------------------------------|
| operation | string  | `add`, `subtract`, `multiply`, `divide` |
| num1      | double  | First number                         |
| num2      | double  | Second number                        |

**Example:**
```
GET http://localhost:8080/calculate?operation=add&num1=5&num2=3
```

**Success Response:**
```json
{ "result": 8 }
```

**Error Response:**
```json
{ "error": "Cannot divide by zero" }
```

---

## 💽 Frontend Usage

1. Open `http://localhost:5173`
2. Enter two numbers
3. Choose an operation
4. Click **Calculate**
5. View the result or error
6. Use **Clear** to reset the form

---

## 🎮️ Demo

![Calculator Demo](screenshots/demo.gif)

---

## 📸 Screenshots

| Light Theme | Dark Theme | API Response |
|-------------|------------|--------------|
| ![](screenshots/frontend-light.png) | ![](screenshots/frontend-dark.png) | ![](screenshots/api-response.png) |

---

## 🧚️‍♂️ Testing

### 🔍 API Testing

- Open Postman
- Import `postman/CalculatorAPI.postman_collection.json`
- Run requests for different operations and test error cases

### 🧪 Frontend Testing

- Interact with the calculator at `http://localhost:5173`
- Try all operations and edge cases
- Test on various screen sizes for responsiveness

---

## 📜 License

Licensed under the **MIT License**. See the `LICENSE` file for details.

---

## 🙌 Acknowledgments

- Built with ❤️ from **Baku, Azerbaijan 🇦🇿**
- Thanks to the open-source community for tools like **Tailwind CSS**, **Spring Boot**, and **Vite**

---

## 📬 Contact

- 🔗 GitHub: [@your-username](https://github.com/your-username)  
- 💼 LinkedIn: [your-linkedin-profile](https://linkedin.com/in/your-linkedin-profile)  
- 📧 Email: your-email@example.com

