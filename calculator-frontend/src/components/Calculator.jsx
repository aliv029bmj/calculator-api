import { useState } from 'react';
import axios from 'axios';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('add');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleCalculate = async () => {
    setError('');
    setResult(null);
    try {
      const response = await axios.get('http://localhost:8080/calculate', {
        params: { operation, num1, num2 }
      });
      setResult(response.data.result);
    } catch (err) {
      setError(err.response?.data || 'An error occurred');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 flex items-center justify-center p-6">
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-full max-w-md border border-white/20">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-white flex items-center justify-center tracking-wide">
          <span className="mr-3">🧮</span> Calculator
        </h1>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2 text-gray-200">Number 1</label>
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            className="w-full p-4 bg-white/5 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400 transition-all duration-300"
            placeholder="Enter first number"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2 text-gray-200">Number 2</label>
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            className="w-full p-4 bg-white/5 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400 transition-all duration-300"
            placeholder="Enter second number"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2 text-gray-200">Operation</label>
          <select
            value={operation}
            onChange={(e) => setOperation(e.target.value)}
            className="w-full p-4 bg-white/5 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
          >
            <option value="add" className="bg-gray-800">Add (+)</option>
            <option value="subtract" className="bg-gray-800">Subtract (-)</option>
            <option value="multiply" className="bg-gray-800">Multiply (×)</option>
            <option value="divide" className="bg-gray-800">Divide (÷)</option>
          </select>
        </div>
        <button
          onClick={handleCalculate}
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
        >
          Calculate
        </button>
        {result !== null && (
          <div className="mt-6 p-4 bg-white/10 rounded-xl text-center animate-fadeIn">
            <p className="text-lg font-semibold text-purple-300">Result: {result}</p>
          </div>
        )}
        {error && (
          <div className="mt-6 p-4 bg-red-500/20 rounded-xl text-center animate-fadeIn">
            <p className="text-red-300">{error}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calculator;
