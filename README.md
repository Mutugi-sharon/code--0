# code--0
Net Salary Calculator
This web page serves as a Net Salary Calculator, allowing users to input their basic salary and benefits to determine their net salary after deductions for tax (PAYE), NHIF, and NSSF.

Features
Input Fields: Users can enter their basic salary and benefits in separate input fields.
Calculation: Upon clicking the "Calculate Net Salary" button, the page calculates:
Gross Salary: Sum of the basic salary and benefits.
Tax (PAYE): Progressive tax calculation based on predefined rates and thresholds.
NHIF Deductions: Calculated at a flat rate of 1.5% of the gross salary.
NSSF Deductions: Calculated at a flat rate of 6% of the gross salary.
Net Salary: Gross salary minus tax, NHIF deductions, and NSSF deductions.
Display: Results are displayed in the "Results" section of the page, showing:
Gross Salary
Tax (PAYE)
NHIF Deductions
NSSF Deductions
Net Salary
Technologies Used
HTML: Provides the structure of the web page, including input fields and result containers.
CSS: Styles the elements for better presentation and readability.
JavaScript: Implements the logic for calculating tax, NHIF, NSSF deductions, and updating the results dynamically.
Meta Tags: Include charset and viewport settings for compatibility and responsive design.
Usage
Enter Basic Salary: Input your basic salary in the first input field.
Enter Benefits: Input any benefits (e.g., allowances) in the second input field.
Calculate Net Salary: Click the "Calculate Net Salary" button to compute and display the net salary based on the entered values.
Example
Input:

Basic Salary: 60000 KES
Benefits: 10000 KES
Results:

Gross Salary: 70000 KES
Tax (PAYE): Calculated based on progressive rates
NHIF Deductions: 1050 KES (1.5% of 70000)
NSSF Deductions: 4200 KES (6% of 70000)
Net Salary: Calculated as Gross Salary minus Tax, NHIF Deductions, and NSSF Deductions
Notes
This calculator uses simplified assumptions for tax rates and deductions. Actual rates may vary based on specific tax laws and regulations applicable in your region.
Ensure to enter valid numeric values in the input fields for accurate calculations.
For production use, consider enhancing error handling and validation to improve user experience and accuracy.
Author/credits to
Developed by {sharon mutugi}
GitHub: (mutugi-sharon)
Feel free to modify and extend this calculator as needed for your specific requirements or to improve its functionality and usability.



Grade Calculator
This web page is a simple Grade Calculator that prompts the user to input student marks between 0 and 100. Based on the input, it calculates and displays the corresponding grade using predefined grade ranges.

Features
Input Field: Users can enter the student's marks in a numeric/number input field constrained between 0 and 100.
Calculation: Upon clicking the "Calculate Grade" button, the page evaluates the entered marks and determines the grade based on the following ranges:
A: 80 to 100
B: 60 to 79
C: 50 to 59
D: 40 to 49
E: Less than 40
Output: The determined grade is displayed dynamically below the input field in the gradeResult section of the page.
Technologies Used
HTML: Provides the structure of the web page, including input fields and result containers.
CSS: Styles the elements for improved presentation and user experience.
JavaScript: Implements the logic for evaluating marks and determining the corresponding grade based on predefined conditions.
Meta Tags: Includes charset and viewport settings for compatibility and responsive design.
Usage
Enter Marks: Input the student's marks in the provided field.
Calculate Grade: Click the "Calculate Grade" button to determine and display the grade corresponding to the entered marks.
Result Display: The calculated grade (A, B, C, D, or E) will be displayed immediately below the input field.

Notes
This calculator assumes the input will always be a valid number between 0 and 100.
Error handling for non-numeric input or values outside the specified range (0-100) is implemented to alert the user with a message.
The grade ranges (A, B, C, D, E) are defined using simple conditional statements in JavaScript (calculateGrade() function).
Author
Developed by Steve mutwiri
GitHub: steve_devops
Feel free to modify and expand upon this Grade Calculator as needed for your specific requirements or to enhance its functionality and usability.


Speed Checker Web Application
This is a simple web application that allows users to check the speed of a car and determine if any demerit points should be applied, based on predefined rules.

Features
Input: Users can enter the speed of the car in kilometers per hour (km/h) using an input field.
Validation: The input field ensures that only numeric values are accepted and that the value entered is required (cannot be empty).
Checking Speed: Upon clicking the "Check Speed" button, the application evaluates the entered speed against a  speed limit OF(70 km/h).
Outcome Display:
If the entered speed is less than the speed limit (70 km/h), it displays "Ok".
If the entered speed exceeds the speed limit, it calculates demerit points based on the number of 5 km/h increments over the limit and displays either the number of demerit points or "License suspended" if more than 12 demerit points are passed.
Responsive Design: The application is designed to be responsive, ensuring usability across different devices and screen sizes.
Technologies Used
HTML: Markup language for structuring the web page.
CSS: Stylesheet language for styling the web page elements.
JavaScript: Programming language for implementing the logic behind the speed checking functionality.
Meta Tags: Used for defining character set, viewport settings, and page title.
Usage
Entering Speed: Type the speed of the car into the input field (e.g., 80 km/h).
Checking: Click the "Check Speed" button to evaluate the entered speed.
Results:
If the speed is below 70 km/h, it will display "Ok".
If the speed exceeds 70 km/h, it calculates demerit points and displays either "Points: x" or "License suspended" based on the number of demerit points accrued.
This web application is open-source under the MIT License. You are free to modify and distribute the code as per the terms of the license.

Author
Developed by [sharon mutugi]
GitHub: [mutugi-sharon]
Feel free to enhance this application further by adding more features or improving the user interface as needed.


