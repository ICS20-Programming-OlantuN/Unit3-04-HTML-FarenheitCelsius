// Copyright (c) 2022 Olantu All rights reserved
//
// Created by: Olantu
// Created on: April 2022
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calcuates farenheit to celsius 
 */
/* JS file for the Fahrenheit to Celsius Converter web page */
document.getElementById('converterForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var fahrenheit = parseFloat(document.getElementById('fahrenheitInput').value);
  var celsius = (fahrenheit - 32) * 5 / 9;
  document.getElementById('celsiusOutput').textContent = celsius.toFixed(1);
});
