export type Question = {
  question: string;
  options: string[];
  correctAnswer: string;
  subject: string;
  topic: string;
};

export const questions = [
  {
    //Algebra(Linear Equations)
    topic: "Algebra",
    subject: "Linear Equations",
    question: "2x + 5 = 11",
    options: ["3", "7", "5", "4"],
    correctAnswer: "3",
  },
  {
    topic: "Algebra",
    subject: "Linear Equations",
    question: "3x - 7 = 2x + 5",
    options: ["10", "8", "12", "5"],
    correctAnswer: "12",
  },
  {
    topic: "Algebra",
    subject: "Linear Equations",
    question: "4(x - 2) = 2x + 6",
    options: ["12", "7", "9", "2"],
    correctAnswer: "7",
  },
  {
    topic: "Algebra",
    subject: "Linear Equations",
    question: "5(2x - 1) = 3(3x + 2)",
    options: ["19", "15", "11", "13"],
    correctAnswer: "11",
  },
  {
    topic: "Algebra",
    subject: "Linear Equations",
    question: "(1/2)x + 3 = (3/4)x - 1",
    options: ["14", "15", "13", "16"],
    correctAnswer: "16",
  },
  {
    topic: "Algebra",
    subject: "Linear Equations",
    question: "-3x + 4 = -2x - 5",
    options: ["10", "9", "12", "3"],
    correctAnswer: "9",
  },
  {
    topic: "Algebra",
    subject: "Linear Equations",
    question: "3(x - 2) + 4 = 2(x + 3) - 1",
    options: ["7", "14", "15", "6"],
    correctAnswer: "7",
  },
  {
    topic: "Algebra",
    subject: "Linear Equations",
    question: "x/5 + 2 = 6",
    options: ["15", "7", "20", "14"],
    correctAnswer: "20"
  },
  {
    topic: "Algebra",
    subject: "Linear Equations",
    question: "2x - 3 = 7",
    options: ["14", "5", "8", "10"],
    correctAnswer: "5"
  },
  {
    topic: "Algebra",
    subject: "Linear Equations",
    question: "3(x + 4) = 2x + 15",
    options: ["1", "4", "2", "3"],
    correctAnswer: "3"
  },
  
  // Algebra (Quadratic Equations)
  {
    topic: "Algebra",
    subject: "Quadratic Equations",
    question: "x^2 - 5x = -6",
    options: ["x = 2 or x = 3", "x = -2 or x = -3", "x = 5 or x = -6", "x = -1 or x = 6"],
    correctAnswer: "x = 2 or x = 3"
  },
  {
    topic: "Algebra",
    subject: "Quadratic Equations",
    question: "x^2 - 6x + 9 = 0",
    options: ["x = 3", "x = 3 or x = -3", "x = -3", "x = 6 or x = -1"],
    correctAnswer: "x = 3"
  },
  {
    topic: "Algebra",
    subject: "Quadratic Equations",
    question: "3x^2 + x - 2 = 0",
    options: ["x = 2/3 or x = -1", "x = 1 or x = -2/3", "x = 1/3 or x = -2", "x = 2 or x = -3"],
    correctAnswer: "x = 2/3 or x = -1"
  },
  {
    topic: "Algebra",
    subject: "Quadratic Equations",
    question: "x^2 + 4x = 21",
    options: ["x = -7 or x = 3", "x = 7 or x = -3", "x = -4 or x = 5", "x = -3 or x = 7"],
    correctAnswer: "x = -7 or x = 3"
  },
  {
    topic: "Algebra",
    subject: "Quadratic Equations",
    question: "x^2 + 2x - 8 = 0",
    options: ["x = 4 or x = -2", "x = -4 or x = 2", "x = -2 or x = 4", "x = 2 or x = -4"],
    correctAnswer: "x = 2 or x = -4"
  },
  {
    topic: "Algebra",
    subject: "Quadratic Equations",
    question: "2x^2 - 3x - 2 = 0",
    options: ["x = 2 or x = -1/2", "x = -2 or x = 1/2", "x = 1 or x = -2", "x = -1 or x = 2"],
    correctAnswer: "x = 2 or x = -1/2"
  },
  {
    topic: "Algebra",
    subject: "Quadratic Equations",
    question: "x^2 - x - 12 = 0",
    options: ["x = 3 or x = -4", "x = -3 or x = 4", "x = -2 or x = 6", "x = 2 or x = -6"],
    correctAnswer: "x = 4 or x = -3"
  },
  {
    topic: "Algebra",
    subject: "Quadratic Equations",
    question: "x^2 + 7x + 12 = 0",
    options: ["x = -3 or x = -4", "x = 3 or x = 4", "x = -6 or x = -1", "x = -2 or x = -6"],
    correctAnswer: "x = -3 or x = -4"
  },
  {
    topic: "Algebra",
    subject: "Quadratic Equations",
    question: "x^2 - 9 = 0",
    options: ["x = 3 or x = -3", "x = 9 or x = -9", "x = 0 or x = 9", "x = 1 or x = -1"],
    correctAnswer: "x = 3 or x = -3"
  },
  {
    topic: "Algebra",
    subject: "Quadratic Equations",
    question: "2x^2 + 5x + 2 = 0",
    options: ["x = -2 or x = -1/2", "x = -2 or x = 1/2", "x = 2 or x = 1/2", "x = -1 or x = -2"],
    correctAnswer: "x = -2 or x = -1/2"
  },

  //Algebra (Polynomials)
  {
    topic: "Algebra",
    subject: "Polynomials",
    question: "2x + 5 = 11",
    options: ["3", "7", "5", "4"],
    correctAnswer: "3",
  },
  {
    topic: "Algebra",
    subject: "Polynomials",
    question: "3x - 7 = 2x + 5",
    options: ["10", "8", "12", "5"],
    correctAnswer: "12",
  },
  {
    topic: "Algebra",
    subject: "Polynomials",
    question: "4(x - 2) = 2x + 6",
    options: ["12", "7", "9", "2"],
    correctAnswer: "7",
  },
  {
    topic: "Algebra",
    subject: "Polynomials",
    question: "5(2x - 1) = 3(3x + 2)",
    options: ["19", "15", "11", "13"],
    correctAnswer: "11",
  },
  {
    topic: "Algebra",
    subject: "Polynomials",
    question: "(1/2)x + 3 = (3/4)x - 1",
    options: ["14", "15", "13", "16"],
    correctAnswer: "16",
  },
  {
    topic: "Algebra",
    subject: "Polynomials",
    question: "-3x + 4 = -2x - 5",
    options: ["10", "9", "12", "3"],
    correctAnswer: "9",
  },
  {
    topic: "Algebra",
    subject: "Polynomials",
    question: "3(x - 2) + 4 = 2(x + 3) - 1",
    options: ["7", "14", "15", "6"],
    correctAnswer: "7",
  },
  {
    topic: "Algebra",
    subject: "Polynomials",
    question: "x/5 + 2 = 6",
    options: ["15", "7", "20", "14"],
    correctAnswer: "20"
  },
  {
    topic: "Algebra",
    subject: "Polynomials",
    question: "2x - 3 = 7",
    options: ["14", "5", "8", "10"],
    correctAnswer: "5"
  },
  {
    topic: "Algebra",
    subject: "Polynomials",
    question: "4x - 3 = 2x + 5",
    options: ["x = 4", "x = -4", "x = 1", "x = 8"],
    correctAnswer: "x = 4",
  },

  //Geometry (Triangles)
  {
    topic: "Geometry",
    subject: "Triangles",
    question: "What is the sum of the interior angles of a triangle?",
    options: ["180°", "360°", "90°", "270°"],
    correctAnswer: "180°"
  },
  {
    topic: "Geometry",
    subject: "Triangles",
    question: "A triangle has angles 40° and 60°. What is the third angle?",
    options: ["90°", "100°", "80°", "60°"],
    correctAnswer: "80°"
  },
  {
    topic: "Geometry",
    subject: "Triangles",
    question: "Which triangle has all sides equal?",
    options: ["Equilateral", "Right", "Scalene", "Isosceles"],
    correctAnswer: "Equilateral"
  },
  {
    topic: "Geometry",
    subject: "Triangles",
    question: "A triangle with one 90° angle is called?",
    options: ["Obtuse", "Equilateral", "Right", "Acute"],
    correctAnswer: "Right"
  },
  {
    topic: "Geometry",
    subject: "Triangles",
    question: "Which triangle has all angles less than 90°?",
    options: ["Scalene", "Acute", "Right", "Obtuse"],
    correctAnswer: "Acute"
  },
  {
    topic: "Geometry",
    subject: "Triangles",
    question: "Which triangle has two equal sides?",
    options: ["Scalene", "Equilateral", "Right", "Isosceles"],
    correctAnswer: "Isosceles"
  },
  {
    topic: "Geometry",
    subject: "Triangles",
    question: "If a triangle has sides 3 cm, 4 cm, and 5 cm, it is a?",
    options: ["Right", "Isosceles", "Equilateral", "Scalene"],
    correctAnswer: "Right"
  },
  {
    topic: "Geometry",
    subject: "Triangles",
    question: "What is the longest side of a right triangle called?",
    options: ["Base", "Hypotenuse", "Opposite", "Adjacent"],
    correctAnswer: "Hypotenuse"
  },
  {
    topic: "Geometry",
    subject: "Triangles",
    question: "The area of a triangle is given by?",
    options: ["side × side", "length × breadth", "(1/2) × base × height", "base × height"],
    correctAnswer: "(1/2) × base × height"
  },
  {
    topic: "Geometry",
    subject: "Triangles",
    question: "What do we call a triangle with no equal sides?",
    options: ["Isosceles", "Equilateral", "Scalene", "Obtuse"],
    correctAnswer: "Scalene"
  },

  //Geometry (Perimeter & Area)
  {
    topic: "Geometry",
    subject: "Perimeter & Area",
    question: "What is the formula for the perimeter of a square?",
    options: ["length × width", "2 × (length + width)", "side × side", "4 × side"],
    correctAnswer: "4 × side"
  },
  {
    topic: "Geometry",
    subject: "Perimeter & Area",
    question: "Area of a rectangle is calculated by?",
    options: ["length ÷ width", "length × width", "2 × (length + width)", "length + width"],
    correctAnswer: "length × width"
  },
  {
    topic: "Geometry",
    subject: "Perimeter & Area",
    question: "A square has side length 6 cm. What is its perimeter?",
    options: ["36 cm", "12 cm", "24 cm", "18 cm"],
    correctAnswer: "24 cm"
  },
  {
    topic: "Geometry",
    subject: "Perimeter & Area",
    question: "A rectangle has length 10 cm and width 4 cm. What is the area?",
    options: ["40 cm²", "14 cm²", "20 cm²", "28 cm²"],
    correctAnswer: "40 cm²"
  },
  {
    topic: "Geometry",
    subject: "Perimeter & Area",
    question: "Which unit is used to measure area?",
    options: ["kg", "cm", "cm³", "cm²"],
    correctAnswer: "cm²"
  },
  {
    topic: "Geometry",
    subject: "Perimeter & Area",
    question: "Find the perimeter of a triangle with sides 5 cm, 6 cm, and 7 cm.",
    options: ["20 cm", "17 cm", "18 cm", "19 cm"],
    correctAnswer: "18 cm"
  },
  {
    topic: "Geometry",
    subject: "Perimeter & Area",
    question: "What is the area of a triangle with base 10 cm and height 5 cm?",
    options: ["25 cm²", "30 cm²", "20 cm²", "50 cm²"],
    correctAnswer: "25 cm²"
  },
  {
    topic: "Geometry",
    subject: "Perimeter & Area",
    question: "A circle has a radius of 7 cm. What is its perimeter (use π ≈ 3.14)?",
    options: ["21.98 cm", "43.96 cm", "44 cm", "38 cm"],
    correctAnswer: "43.96 cm"
  },
  {
    topic: "Geometry",
    subject: "Perimeter & Area",
    question: "Perimeter of a rectangle with length 8 cm and width 3 cm is?",
    options: ["24 cm", "22 cm", "18 cm", "20 cm"],
    correctAnswer: "22 cm"
  },
  {
    topic: "Geometry",
    subject: "Perimeter & Area",
    question: "Area of a square with side 9 cm is?",
    options: ["36 cm²", "72 cm²", "81 cm²", "18 cm²"],
    correctAnswer: "81 cm²"
  },
  
  //Geometry (Surface Area & Volume)
  {
    topic: "Geometry",
    subject: "Surface Area & Volume",
    question: "What is the volume of a cube with side length 5 cm?",
    options: ["150 cm³", "100 cm³", "25 cm³", "125 cm³"],
    correctAnswer: "125 cm³"
  },
  {
    topic: "Geometry",
    subject: "Surface Area & Volume",
    question: "What is the surface area of a cube with side length 6 cm?",
    options: ["144 cm²", "36 cm²", "216 cm²", "96 cm²"],
    correctAnswer: "216 cm²"
  },
  {
    topic: "Geometry",
    subject: "Surface Area & Volume",
    question: "What is the volume of a cylinder with radius 3 cm and height 10 cm? (Use π ≈ 3.14)",
    options: ["94.2 cm³", "314 cm³", "188.4 cm³", "282.6 cm³"],
    correctAnswer: "282.6 cm³"
  },
  {
    topic: "Geometry",
    subject: "Surface Area & Volume",
    question: "What is the surface area of a sphere with radius 7 cm? (Use π ≈ 3.14)",
    options: ["600 cm²", "615.75 cm²", "628 cm²", "616 cm²"],
    correctAnswer: "615.75 cm²"
  },
  {
    topic: "Geometry",
    subject: "Surface Area & Volume",
    question: "What is the volume of a rectangular prism with length 8 cm, width 3 cm, and height 2 cm?",
    options: ["24 cm³", "52 cm³", "36 cm³", "48 cm³"],
    correctAnswer: "48 cm³"
  },
  {
    topic: "Geometry",
    subject: "Surface Area & Volume",
    question: "What is the surface area of a rectangular prism with dimensions 5 cm × 4 cm × 3 cm?",
    options: ["94 cm²", "100 cm²", "112 cm²", "52 cm²"],
    correctAnswer: "94 cm²"
  },
  {
    topic: "Geometry",
    subject: "Surface Area & Volume",
    question: "What is the volume of a cone with radius 3 cm and height 4 cm? (Use π ≈ 3.14)",
    options: ["56.52 cm³", "50.24 cm³", "45.36 cm³", "37.68 cm³"],
    correctAnswer: "37.68 cm³"
  },
  {
    topic: "Geometry",
    subject: "Surface Area & Volume",
    question: "What is the surface area of a cylinder with radius 5 cm and height 7 cm? (Use π ≈ 3.14)",
    options: ["359 cm²", "345 cm²", "382.6 cm²", "376.8 cm²"],
    correctAnswer: "376.8 cm²"
  },
  {
    topic: "Geometry",
    subject: "Surface Area & Volume",
    question: "What is the volume of a sphere with radius 6 cm? (Use π ≈ 3.14)",
    options: ["904.32 cm³", "925.44 cm³", "905.6 cm³", "900 cm³"],
    correctAnswer: "904.32 cm³"
  },
  {
    topic: "Geometry",
    subject: "Surface Area & Volume",
    question: "What is the surface area of a cone with radius 4 cm and slant height 5 cm? (Use π ≈ 3.14)",
    options: ["113.04 cm²", "150 cm²", "125.6 cm²", "100.48 cm²"],
    correctAnswer: "113.04 cm²"
  },

  //Calculus (Deviratives)
  {
    topic: "Calculus",
    subject: "Derivatives",
    question: "What is the derivative of x²?",
    options: ["x³", "2x", "x", "1"],
    correctAnswer: "2x"
  },
  {
    topic: "Calculus",
    subject: "Derivatives",
    question: "What is the derivative of a constant value, like 5?",
    options: ["x", "0", "5", "1"],
    correctAnswer: "0"
  },
  {
    topic: "Calculus",
    subject: "Derivatives",
    question: "If f(x) = 3x³, what is f'(x)?",
    options: ["3x²", "x²", "9x", "9x²"],
    correctAnswer: "9x²"
  },
  {
    topic: "Calculus",
    subject: "Derivatives",
    question: "What rule is used to differentiate xⁿ?",
    options: ["Chain Rule", "Quotient Rule", "Power Rule", "Product Rule"],
    correctAnswer: "Power Rule"
  },
  {
    topic: "Calculus",
    subject: "Derivatives",
    question: "The derivative of sin(x) is?",
    options: ["cos(x)", "-sin(x)", "tan(x)", "-cos(x)"],
    correctAnswer: "cos(x)"
  },
  {
    topic: "Calculus",
    subject: "Derivatives",
    question: "The derivative of cos(x) is?",
    options: ["-cos(x)", "-sin(x)", "sin(x)", "cos(x)"],
    correctAnswer: "-sin(x)"
  },
  {
    topic: "Calculus",
    subject: "Derivatives",
    question: "What is the derivative of f(x) = 7x?",
    options: ["7", "0", "1", "x"],
    correctAnswer: "7"
  },
  {
    topic: "Calculus",
    subject: "Derivatives",
    question: "If f(x) = x⁴ + 2x², what is f'(x)?",
    options: ["x³ + x", "4x³ + 2x", "3x² + 2", "4x³ + 4x"],
    correctAnswer: "4x³ + 4x"
  },
  {
    topic: "Calculus",
    subject: "Derivatives",
    question: "The derivative of ln(x) is?",
    options: ["1/x", "e^x", "x", "ln(x)"],
    correctAnswer: "1/x"
  },
  {
    topic: "Calculus",
    subject: "Derivatives",
    question: "If f(x) = e^x, then f'(x) is?",
    options: ["1", "x^e", "e^x", "ln(x)"],
    correctAnswer: "e^x"
  },
  

  //Calculus (Power Rule)
  {
    topic: "Calculus",
    subject: "Power Rule",
    question: "Power rule: d/dx of xⁿ is?",
    options: ["xⁿ⁺¹", "n × xⁿ", "n × xⁿ⁻¹", "xⁿ"],
    correctAnswer: "n × xⁿ⁻¹"
  },
  {
    topic: "Calculus",
    subject: "Power Rule",
    question: "Using power rule, derivative of x⁵ is?",
    options: ["x⁵", "5x⁴", "4x⁵", "x⁴"],
    correctAnswer: "5x⁴"
  },
  {
    topic: "Calculus",
    subject: "Power Rule",
    question: "Find derivative of f(x) = x³ + 2x using power rule.",
    options: ["3x + 2", "x² + 2", "3x² + 2", "3x² + 1"],
    correctAnswer: "3x² + 2"
  },
  {
    topic: "Calculus",
    subject: "Power Rule",
    question: "What is the derivative of x⁷?",
    options: ["x⁶", "6x⁷", "7x⁶", "7x⁷"],
    correctAnswer: "7x⁶"
  },
  {
    topic: "Calculus",
    subject: "Power Rule",
    question: "Differentiate f(x) = x⁻² using power rule.",
    options: ["-2x⁻³", "x⁻³", "-x⁻²", "2x⁻²"],
    correctAnswer: "-2x⁻³"
  },
  {
    topic: "Calculus",
    subject: "Power Rule",
    question: "What is the derivative of x¹⁰?",
    options: ["x⁹", "9x¹⁰", "10x⁹", "10x"],
    correctAnswer: "10x⁹"
  },
  {
    topic: "Calculus",
    subject: "Power Rule",
    question: "Using power rule, d/dx of x² + x is?",
    options: ["2x", "x + 1", "x² + x", "2x + 1"],
    correctAnswer: "2x + 1"
  },
  {
    topic: "Calculus",
    subject: "Power Rule",
    question: "Find the derivative of x⁴ + x³.",
    options: ["4x² + 3x²", "x³ + x²", "4x³ + 3x²", "3x² + 4x"],
    correctAnswer: "4x³ + 3x²"
  },
  {
    topic: "Calculus",
    subject: "Power Rule",
    question: "If f(x) = x⁶, then f'(x) is?",
    options: ["x⁶", "x⁵", "5x⁶", "6x⁵"],
    correctAnswer: "6x⁵"
  },
  {
    topic: "Calculus",
    subject: "Power Rule",
    question: "Power rule can be applied to which functions?",
    options: ["Trigonometric", "Constant only", "Polynomial", "Exponential"],
    correctAnswer: "Polynomial"
  },
  

  //Calculus (Integrals)
  {
    topic: "Calculus",
    subject: "Integrals",
    question: "What is the integral of x with respect to x?",
    options: ["x²", "(1/3)x³", "(1/2)x²", "x"],
    correctAnswer: "(1/2)x²"
  },
  {
    topic: "Calculus",
    subject: "Integrals",
    question: "What is the integral of 2x with respect to x?",
    options: ["x²", "(2/3)x³", "2x²", "x² + C"],
    correctAnswer: "x² + C"
  },
  {
    topic: "Calculus",
    subject: "Integrals",
    question: "The integral of a constant function, f(x) = k, is?",
    options: ["kx + C", "x + C", "kx", "k/x"],
    correctAnswer: "kx + C"
  },
  {
    topic: "Calculus",
    subject: "Integrals",
    question: "What is the integral of x² with respect to x?",
    options: ["(1/3)x³", "(1/4)x⁴", "(1/3)x³ + C", "(1/2)x³"],
    correctAnswer: "(1/3)x³ + C"
  },
  {
    topic: "Calculus",
    subject: "Integrals",
    question: "Find the integral of 3x².",
    options: ["(1/4)x⁴ + C", "x³", "x³ + C", "(3/4)x³ + C"],
    correctAnswer: "x³ + C"
  },
  {
    topic: "Calculus",
    subject: "Integrals",
    question: "What is the integral of 5 with respect to x?",
    options: ["5/x + C", "5x² + C", "5x", "5x + C"],
    correctAnswer: "5x + C"
  },
  {
    topic: "Calculus",
    subject: "Integrals",
    question: "What is the integral of sin(x) with respect to x?",
    options: ["-cos(x) + C", "cos(x)", "sin(x) + C", "-sin(x) + C"],
    correctAnswer: "-cos(x) + C"
  },
  {
    topic: "Calculus",
    subject: "Integrals",
    question: "Find the integral of eˣ with respect to x.",
    options: ["ln(x) + C", "x + C", "eˣ + C", "eˣ"],
    correctAnswer: "eˣ + C"
  },
  {
    topic: "Calculus",
    subject: "Integrals",
    question: "What is the integral of cos(x) with respect to x?",
    options: ["sin(x) + C", "-sin(x)", "-cos(x) + C", "cos(x)"],
    correctAnswer: "sin(x) + C"
  },
  {
    topic: "Calculus",
    subject: "Integrals",
    question: "What is the integral of 1/x with respect to x?",
    options: ["1/x² + C", "x + C", "ln(x) + C", "x² + C"],
    correctAnswer: "ln(x) + C"
  },
  

  //Statisic (Basic Function)
  {
    topic: "Statistics",
    subject: "Basic Functions",
    question: "What is the function f(x) = 2x + 3 called?",
    options: ["Quadratic function", "Linear function", "Exponential function", "Cubic function"],
    correctAnswer: "Linear function"
  },
  {
    topic: "Statistics",
    subject: "Basic Functions",
    question: "What is the function f(x) = x² + 2x called?",
    options: ["Quadratic function", "Cubic function", "Linear function", "Exponential function"],
    correctAnswer: "Quadratic function"
  },
  {
    topic: "Statistics",
    subject: "Basic Functions",
    question: "What is the function f(x) = 3^x called?",
    options: ["Exponential function", "Quadratic function", "Linear function", "Cubic function"],
    correctAnswer: "Exponential function"
  },
  {
    topic: "Statistics",
    subject: "Basic Functions",
    question: "Which of the following is an example of a constant function?",
    options: ["f(x) = x + 1", "f(x) = 2x", "f(x) = 5", "f(x) = x²"],
    correctAnswer: "f(x) = 5"
  },
  {
    topic: "Statistics",
    subject: "Basic Functions",
    question: "Which function represents a line with slope 0?",
    options: ["f(x) = 5", "f(x) = x²", "f(x) = x", "f(x) = 2x + 3"],
    correctAnswer: "f(x) = 5"
  },
  {
    topic: "Statistics",
    subject: "Basic Functions",
    question: "What is the function f(x) = √x called?",
    options: ["Square root function", "Exponential function", "Quadratic function", "Linear function"],
    correctAnswer: "Square root function"
  },
  {
    topic: "Statistics",
    subject: "Basic Functions",
    question: "Which of the following is an example of a cubic function?",
    options: ["f(x) = x²", "f(x) = 2x", "f(x) = x³", "f(x) = x + 1"],
    correctAnswer: "f(x) = x³"
  },
  {
    topic: "Statistics",
    subject: "Basic Functions",
    question: "The function f(x) = 2^x is an example of which type of function?",
    options: ["Polynomial", "Exponential", "Linear", "Quadratic"],
    correctAnswer: "Exponential"
  },
  {
    topic: "Statistics",
    subject: "Basic Functions",
    question: "What is the function f(x) = |x| called?",
    options: ["Absolute value function", "Linear function", "Cubic function", "Exponential function"],
    correctAnswer: "Absolute value function"
  },
  {
    topic: "Statistics",
    subject: "Basic Functions",
    question: "Which function represents a parabola?",
    options: ["f(x) = 2x", "f(x) = x + 1", "f(x) = x²", "f(x) = x³"],
    correctAnswer: "f(x) = x²"
  },
  

  //Statistic (Probability)
  {
    topic: "Statistics",
    subject: "Probability",
    question: "What is the probability of getting a head in a fair coin toss?",
    options: ["1", "1/4", "1/2", "1/3"],
    correctAnswer: "1/2"
  },
  {
    topic: "Statistics",
    subject: "Probability",
    question: "A die is rolled. What is the probability of rolling an even number?",
    options: ["1/2", "1/6", "2/3", "1/3"],
    correctAnswer: "1/2"
  },
  {
    topic: "Statistics",
    subject: "Probability",
    question: "What is the probability of drawing a red card from a standard deck of 52 cards?",
    options: ["1/26", "1/2", "1/13", "1/4"],
    correctAnswer: "1/2"
  },
  {
    topic: "Statistics",
    subject: "Probability",
    question: "What is the probability of rolling a 5 on a fair die?",
    options: ["1/12", "1/6", "1/2", "1/3"],
    correctAnswer: "1/6"
  },
  {
    topic: "Statistics",
    subject: "Probability",
    question: "If two events A and B are independent, what is the probability of both A and B occurring?",
    options: ["P(A or B)", "P(A) × P(B)", "P(A) + P(B)", "P(A) - P(B)"],
    correctAnswer: "P(A) × P(B)"
  },
  {
    topic: "Statistics",
    subject: "Probability",
    question: "What is the probability of drawing a king from a standard deck of 52 cards?",
    options: ["1/52", "1/13", "1/4", "1/26"],
    correctAnswer: "1/52"
  },
  {
    topic: "Statistics",
    subject: "Probability",
    question: "What is the probability of drawing a card that is either a queen or a heart from a deck of cards?",
    options: ["4/52", "1/13", "17/52", "1/26"],
    correctAnswer: "17/52"
  },
  {
    topic: "Statistics",
    subject: "Probability",
    question: "If you roll two fair dice, what is the probability of the sum being 7?",
    options: ["1/36", "5/36", "1/6", "1/12"],
    correctAnswer: "1/6"
  },
  {
    topic: "Statistics",
    subject: "Probability",
    question: "What is the probability of drawing a red or black card from a deck of cards?",
    options: ["1", "1/13", "1/2", "1/4"],
    correctAnswer: "1"
  },
  {
    topic: "Statistics",
    subject: "Probability",
    question: "What is the probability of drawing a number card (2-10) from a standard deck of cards?",
    options: ["12/52", "26/52", "16/52", "24/52"],
    correctAnswer: "24/52"
  },
  

  //Stastistics (Linear Regression)
  {
    topic: "Statistics",
    subject: "Linear Regression",
    question: "In y = mx + b, what does 'm' mean?",
    options: ["Dependent variable", "Slope", "Error", "Intercept"],
    correctAnswer: "Slope"
  },
  {
    topic: "Statistics",
    subject: "Linear Regression",
    question: "In y = 3x + 4, the slope is?",
    options: ["7", "0", "3", "4"],
    correctAnswer: "3"
  },
  {
    topic: "Statistics",
    subject: "Linear Regression",
    question: "What does R² measure?",
    options: ["Prediction accuracy", "Strength of relationship", "Slope", "Model linearity"],
    correctAnswer: "Strength of relationship"
  },
  {
    topic: "Statistics",
    subject: "Linear Regression",
    question: "What is a residual?",
    options: ["Intercept", "Difference between observed and predicted", "Slope", "Correlation"],
    correctAnswer: "Difference between observed and predicted"
  },
  {
    topic: "Statistics",
    subject: "Linear Regression",
    question: "Key assumption in linear regression?",
    options: ["No correlation", "Variables have linear relation", "Categorical dependent variable", "Constant residuals"],
    correctAnswer: "Variables have linear relation"
  },
  {
    topic: "Statistics",
    subject: "Linear Regression",
    question: "In multiple regression, coefficients represent?",
    options: ["Error term", "Slopes for predictors", "Intercept", "Total variance"],
    correctAnswer: "Slopes for predictors"
  },
  {
    topic: "Statistics",
    subject: "Linear Regression",
    question: "Difference between simple and multiple regression?",
    options: ["Simple uses categorical data", "No difference", "Multiple predicts one variable", "Number of predictors"],
    correctAnswer: "Number of predictors"
  },
  {
    topic: "Statistics",
    subject: "Linear Regression",
    question: "R² value for perfect linear fit?",
    options: ["0.5", "0", "1", "2"],
    correctAnswer: "1"
  },
  {
    topic: "Statistics",
    subject: "Linear Regression",
    question: "Purpose of intercept b?",
    options: ["Shift line up/down", "Measure correlation", "Predict independent variable", "Define slope"],
    correctAnswer: "Shift line up/down"
  },
  {
    topic: "Statistics",
    subject: "Linear Regression",
    question: "Common method to estimate slope and intercept?",
    options: ["Maximum Likelihood", "Exponential Smoothing", "Least Squares", "Bayesian"],
    correctAnswer: "Least Squares"
  },
  

  //Trigonometry (Phtagorean Theorem)
  {
    topic: "Trigonometry",
    subject: "Pythagorean Theorem",
    question: "Legs: 3 & 4, hypotenuse?",
    options: ["6", "5", "7", "8"],
    correctAnswer: "5"
  },
  {
    topic: "Trigonometry",
    subject: "Pythagorean Theorem",
    question: "Formula of Pythagoras?",
    options: ["a² + b² = d²", "a² + b² = c²", "c² - a² = b²", "a² - b² = c²"],
    correctAnswer: "a² + b² = c²"
  },
  {
    topic: "Trigonometry",
    subject: "Pythagorean Theorem",
    question: "Hypotenuse 10, leg 6. Other leg?",
    options: ["8", "6", "9", "7"],
    correctAnswer: "8"
  },
  {
    topic: "Trigonometry",
    subject: "Pythagorean Theorem",
    question: "Legs: 8 & 15, hypotenuse?",
    options: ["18", "17", "16", "20"],
    correctAnswer: "17"
  },
  {
    topic: "Trigonometry",
    subject: "Pythagorean Theorem",
    question: "What’s true by the theorem?",
    options: ["Sum of leg squares = hypotenuse²", "Hypotenuse is shortest", "Sum of all sides = constant", "Legs are equal"],
    correctAnswer: "Sum of leg squares = hypotenuse²"
  },
  {
    topic: "Trigonometry",
    subject: "Pythagorean Theorem",
    question: "Leg: 12, hypotenuse: 13. Other leg?",
    options: ["10", "9", "8", "5"],
    correctAnswer: "5"
  },
  {
    topic: "Trigonometry",
    subject: "Pythagorean Theorem",
    question: "Legs: 9 & 12. Hypotenuse?",
    options: ["13", "14", "10", "15"],
    correctAnswer: "15"
  },
  {
    topic: "Trigonometry",
    subject: "Pythagorean Theorem",
    question: "Legs: 5 & 12. Hypotenuse?",
    options: ["14", "13", "11", "12"],
    correctAnswer: "13"
  },
  {
    topic: "Trigonometry",
    subject: "Pythagorean Theorem",
    question: "Legs: 7 & 24. Hypotenuse?",
    options: ["23", "26", "20", "25"],
    correctAnswer: "25"
  },
  {
    topic: "Trigonometry",
    subject: "Pythagorean Theorem",
    question: "Triangle 9, 12, 15 valid?",
    options: ["No", "Yes", "Not enough info", "Only if right triangle"],
    correctAnswer: "Yes"
  },

  //Trigonometry (Primary Trigonometric Function)
  {
    topic: "Trigonometry",
    subject: "Primary Trigonometric Function",
    question: "What is the sine of a 90° angle?",
    options: ["Undefined", "sin(θ)", "1", "0"],
    correctAnswer: "1"
  },
  {
    topic: "Trigonometry",
    subject: "Primary Trigonometric Function",
    question: "What is the cosine of a 0° angle?",
    options: ["0", "Undefined", "1", "sin(0°)"],
    correctAnswer: "1"
  },
  {
    topic: "Trigonometry",
    subject: "Primary Trigonometric Function",
    question: "What is the tangent of a 45° angle?",
    options: ["Undefined", "1", "0", "√2"],
    correctAnswer: "1"
  },
  {
    topic: "Trigonometry",
    subject: "Primary Trigonometric Function",
    question: "What is sin(0°)?",
    options: ["0.5", "Undefined", "0", "1"],
    correctAnswer: "0"
  },
  {
    topic: "Trigonometry",
    subject: "Primary Trigonometric Function",
    question: "What is cos(90°)?",
    options: ["0", "Undefined", "1", "0.5"],
    correctAnswer: "0"
  },
  {
    topic: "Trigonometry",
    subject: "Primary Trigonometric Function",
    question: "What is tan(0°)?",
    options: ["1", "Undefined", "∞", "0"],
    correctAnswer: "0"
  },
  {
    topic: "Trigonometry",
    subject: "Primary Trigonometric Function",
    question: "Which is the correct identity for tan(θ)?",
    options: ["1/sin(θ)", "1/cos(θ)", "cos(θ)/sin(θ)", "sin(θ)/cos(θ)"],
    correctAnswer: "sin(θ)/cos(θ)"
  },
  {
    topic: "Trigonometry",
    subject: "Primary Trigonometric Function",
    question: "What is the range of sine function?",
    options: ["0 to ∞", "-∞ to ∞", "-1 to 1", "0 to 1"],
    correctAnswer: "-1 to 1"
  },
  {
    topic: "Trigonometry",
    subject: "Primary Trigonometric Function",
    question: "Which trigonometric function is undefined at 90°?",
    options: ["sin(90°)", "cot(90°)", "cos(90°)", "tan(90°)"],
    correctAnswer: "tan(90°)"
  },
  {
    topic: "Trigonometry",
    subject: "Primary Trigonometric Function",
    question: "If sin(θ) = 0.5 and θ is in the first quadrant, what is θ?",
    options: ["30°", "60°", "90°", "45°"],
    correctAnswer: "30°"
  }
];