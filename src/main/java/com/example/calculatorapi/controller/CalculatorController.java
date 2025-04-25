package com.example.calculatorapi.controller;

import com.example.calculatorapi.model.CalculationResponse;
import com.example.calculatorapi.service.CalculatorService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CalculatorController {

    private final CalculatorService calculatorService;

    public CalculatorController(CalculatorService calculatorService) {
        this.calculatorService = calculatorService;
    }

    @GetMapping("/calculate")
    public CalculationResponse calculate(
            @RequestParam String operation,
            @RequestParam double num1,
            @RequestParam double num2) {
        double result = calculatorService.calculate(operation, num1, num2);
        CalculationResponse response = new CalculationResponse();
        response.setResult(result);
        return response;
    }
}