package com.example.calculatorapi.service;

import com.example.calculatorapi.exception.InvalidOperationException;
import org.springframework.stereotype.Service;

@Service
public class CalculatorService {

    public double calculate(String operation, double num1, double num2) {
        switch (operation.toLowerCase()) {
            case "add":
                return num1 + num2;
            case "subtract":
                return num1 - num2;
            case "multiply":
                return num1 * num2;
            case "divide":
                if (num2 == 0) {
                    throw new InvalidOperationException("Cannot divide by zero");
                }
                return num1 / num2;
            default:
                throw new InvalidOperationException("Invalid operation: " + operation);
        }
    }
}