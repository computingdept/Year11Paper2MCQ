const topics = [
  {
    "id": "languages-operators",
    "title": "Languages & operators",
    "subtitle": "high-level, low-level, arithmetic, trace tables",
    "summary": "Know the difference between high-level and low-level languages, OCR arithmetic operators and how to trace a loop.",
    "questions": [
      {
        "q": "Which statement best describes a high-level programming language?",
        "options": [
          "It can be used on different types of hardware with suitable translators",
          "It directly manipulates memory using processor-specific instructions",
          "It is machine code only",
          "It never needs translating"
        ],
        "answer": "It can be used on different types of hardware with suitable translators",
        "exp": "High-level languages are more portable because the same source code can be translated for different hardware."
      },
      {
        "q": "Which statement best describes a low-level programming language?",
        "options": [
          "It allows direct manipulation of memory",
          "It always uses English-like commands",
          "It is portable across all hardware",
          "It never relates to the processor"
        ],
        "answer": "It allows direct manipulation of memory",
        "exp": "Low-level languages are close to the hardware and can directly control memory or processor operations."
      },
      {
        "q": "Which type of language usually uses English-like words?",
        "options": [
          "High-level language",
          "Machine code",
          "Low-level language only",
          "Object code only"
        ],
        "answer": "High-level language",
        "exp": "High-level languages are designed to be easier for humans to read and write."
      },
      {
        "q": "Why does high-level code need translating?",
        "options": [
          "The CPU can only execute machine code",
          "The CPU can only execute pseudocode",
          "Translation removes the need for testing",
          "Translation changes all variables into strings"
        ],
        "answer": "The CPU can only execute machine code",
        "exp": "Processors execute machine code, so high-level code must be translated first."
      },
      {
        "q": "Which pseudocode correctly adds num1 and num2 and stores the result in total?",
        "options": [
          "total = num1 + num2",
          "num1 + num2 = total",
          "total == num1 + num2",
          "print = num1 + num2"
        ],
        "answer": "total = num1 + num2",
        "exp": "The assignment stores the sum of num1 and num2 in the variable total."
      },
      {
        "q": "Which arithmetic operator is used for \u201cto the power of\u201d in OCR-style pseudocode?",
        "options": [
          "^",
          "MOD",
          "-",
          "AND"
        ],
        "answer": "^",
        "exp": "OCR Exam Reference Language commonly uses ^ for exponentiation, for example 12 ^ 2."
      },
      {
        "q": "Which arithmetic operator is used to find the remainder after division?",
        "options": [
          "MOD",
          "^",
          "+",
          "OR"
        ],
        "answer": "MOD",
        "exp": "MOD returns the remainder, so it can be used to test odd/even numbers."
      },
      {
        "q": "What is 53 MOD 2?",
        "options": [
          "1",
          "0",
          "2",
          "26"
        ],
        "answer": "1",
        "exp": "53 divided by 2 leaves a remainder of 1, so 53 is odd."
      },
      {
        "q": "Which operator finds the difference between measurement1 and measurement2?",
        "options": [
          "-",
          "MOD",
          "^",
          "AND"
        ],
        "answer": "-",
        "exp": "Subtraction is used to find the difference between two values."
      },
      {
        "q": "In the trace table for start = 3, do...until start == -1, which values are printed before Finished?",
        "code": "01 start = 3\n02 do\n03 print(start)\n04 start = start - 1\n05 until start == -1\n06 print(\"Finished\")",
        "options": [
          "3, 2, 1, 0",
          "3, 2, 1, 0, -1",
          "2, 1, 0",
          "3 only"
        ],
        "answer": "3, 2, 1, 0",
        "exp": "The value is printed before it is reduced. The loop stops after start becomes -1, so -1 is not printed."
      },
      {
        "q": "Why is -1 not printed in the do-until trace?",
        "code": "01 start = 3\n02 do\n03 print(start)\n04 start = start - 1\n05 until start == -1\n06 print(\"Finished\")",
        "options": [
          "The condition is checked after start is reduced to -1",
          "The print line is missing",
          "The loop starts at -1",
          "The loop is a for loop"
        ],
        "answer": "The condition is checked after start is reduced to -1",
        "exp": "When start becomes -1, the until condition is met and the loop ends before another print(start)."
      }
    ]
  },
  {
    "id": "errors-arrays",
    "title": "Errors & arrays",
    "subtitle": "syntax, logic, array totals",
    "summary": "Syntax errors break language rules. Logic errors run but produce the wrong result. Array loops must include the correct indexes and update the correct variable.",
    "questions": [
      {
        "q": "What is a syntax error?",
        "options": [
          "An error that breaks the rules or grammar of the programming language",
          "An error where the program runs but gives the wrong output",
          "A sorted array",
          "A database record"
        ],
        "answer": "An error that breaks the rules or grammar of the programming language",
        "exp": "Syntax errors are rule/grammar mistakes that can stop the program translating or running."
      },
      {
        "q": "What is a logic error?",
        "options": [
          "An error where the program runs but gives an incorrect or unexpected result",
          "An error that always stops the program translating",
          "A missing bracket only",
          "A type of validation check"
        ],
        "answer": "An error where the program runs but gives an incorrect or unexpected result",
        "exp": "Logic errors do not necessarily crash the program, but the algorithm is wrong."
      },
      {
        "q": "Which is most likely to be a syntax error?",
        "options": [
          "Misspelling print as pritn",
          "Starting a loop at index 1 instead of 0",
          "Adding total + total instead of total + score",
          "Using the wrong comparison boundary"
        ],
        "answer": "Misspelling print as pritn",
        "exp": "A misspelled keyword may break the language rules."
      },
      {
        "q": "Which is a logic error in this array-total algorithm?",
        "code": "01 total = 0\n02 for scoreCount = 1 to scores.length - 1\n03 scores[scoreCount] = total + total\n04 next scoreCount\n05 print(total)",
        "options": [
          "Line 02 starts at 1 so it misses index 0",
          "Line 01 sets total to 0",
          "Line 04 uses next",
          "Line 05 prints total"
        ],
        "answer": "Line 02 starts at 1 so it misses index 0",
        "exp": "A 0-indexed array starts at index 0, so the loop should include scoreCount = 0."
      },
      {
        "q": "Which corrected loop line would include all items in a 0-indexed array?",
        "options": [
          "for scoreCount = 0 to scores.length - 1",
          "for scoreCount = 1 to scores.length - 1",
          "for scoreCount = scores.length to 0",
          "for scoreCount = 1 to 1"
        ],
        "answer": "for scoreCount = 0 to scores.length - 1",
        "exp": "For a 0-indexed array, the first index is 0 and the final index is length - 1."
      },
      {
        "q": "Which corrected line totals the array item into total?",
        "code": "scores[scoreCount] stores the current score",
        "options": [
          "total = total + scores[scoreCount]",
          "scores[scoreCount] = total + total",
          "total = total + total",
          "scores = total + scoreCount"
        ],
        "answer": "total = total + scores[scoreCount]",
        "exp": "The running total should be updated by adding the current array item."
      },
      {
        "q": "What is the purpose of scores.length in a loop?",
        "options": [
          "To find how many elements are in the array",
          "To convert scores to an integer",
          "To sort the array",
          "To output all scores automatically"
        ],
        "answer": "To find how many elements are in the array",
        "exp": "The length function returns the number of elements in the array."
      },
      {
        "q": "Why is scores.length - 1 often used with a 0-indexed array?",
        "options": [
          "Because the final index is one less than the number of items",
          "Because arrays start at 1",
          "Because the first item is always empty",
          "Because it sorts the data"
        ],
        "answer": "Because the final index is one less than the number of items",
        "exp": "For example, 5 items have indexes 0, 1, 2, 3 and 4."
      }
    ]
  },
  {
    "id": "sorting",
    "title": "Sorting algorithms",
    "subtitle": "insertion sort, bubble sort, temp variable",
    "summary": "Insertion sort moves a value into the correct position. Bubble sort repeatedly compares and swaps pairs. Both can use loops and temporary storage.",
    "questions": [
      {
        "q": "In the insertion sort code, what does the variable temp store?",
        "code": "temp = names[pos]\nnames[pos] = names[pos - 1]\nnames[pos - 1] = temp",
        "options": [
          "The name/value being temporarily moved",
          "The position number only",
          "The length of the array",
          "The final sorted array"
        ],
        "answer": "The name/value being temporarily moved",
        "exp": "temp temporarily stores a value so it is not lost when two array positions are swapped."
      },
      {
        "q": "Why is temp needed when swapping two array values?",
        "options": [
          "Without temporary storage, one value would be overwritten and lost",
          "It makes the array 2D",
          "It validates the input",
          "It converts strings into integers"
        ],
        "answer": "Without temporary storage, one value would be overwritten and lost",
        "exp": "A temporary variable safely holds one value during the swap."
      },
      {
        "q": "Why does the inner loop in insertion sort need to be condition-controlled?",
        "options": [
          "The number of swaps needed is not known in advance",
          "It always runs exactly 10 times",
          "It must never stop",
          "It is used to translate code"
        ],
        "answer": "The number of swaps needed is not known in advance",
        "exp": "A value may need to move left zero, one or many positions, so a condition controls when the loop stops."
      },
      {
        "q": "When should the inner insertion-sort loop stop?",
        "options": [
          "When the value is in the correct position or no more left values need checking",
          "Only after every value in the whole array has been printed",
          "When the array becomes a database",
          "After exactly one swap"
        ],
        "answer": "When the value is in the correct position or no more left values need checking",
        "exp": "The loop stops when the current value no longer needs to move left."
      },
      {
        "q": "Which statement describes insertion sort?",
        "options": [
          "It builds a sorted section by inserting values into the correct position",
          "It splits data into individual lists and merges them",
          "It only works on numbers greater than 10",
          "It never uses comparisons"
        ],
        "answer": "It builds a sorted section by inserting values into the correct position",
        "exp": "Insertion sort places each new item into its correct place within the sorted part."
      },
      {
        "q": "Which statement describes bubble sort?",
        "options": [
          "It compares adjacent pairs and swaps them if they are in the wrong order",
          "It always uses binary search",
          "It splits data into individual lists",
          "It can only sort strings"
        ],
        "answer": "It compares adjacent pairs and swaps them if they are in the wrong order",
        "exp": "Bubble sort repeatedly compares neighbouring values and swaps them when needed."
      },
      {
        "q": "Which is a similarity between insertion sort and bubble sort?",
        "options": [
          "Both compare values to put data into order",
          "Both require data to be sorted before starting",
          "Both are searching algorithms",
          "Both use SQL"
        ],
        "answer": "Both compare values to put data into order",
        "exp": "Both algorithms use comparisons to decide how to arrange values."
      },
      {
        "q": "Which is a difference between insertion sort and bubble sort?",
        "options": [
          "Insertion sort moves a value into a sorted section; bubble sort swaps adjacent pairs repeatedly",
          "Insertion sort is a database; bubble sort is a logic gate",
          "Bubble sort requires SQL but insertion sort does not",
          "Insertion sort cannot sort strings"
        ],
        "answer": "Insertion sort moves a value into a sorted section; bubble sort swaps adjacent pairs repeatedly",
        "exp": "This describes the key difference in how the algorithms rearrange the data."
      },
      {
        "q": "Which sorting algorithm usually has a sorted part and an unsorted part?",
        "options": [
          "Insertion sort",
          "Linear search",
          "Binary search",
          "Truth table"
        ],
        "answer": "Insertion sort",
        "exp": "Insertion sort builds up the sorted part of the array one item at a time."
      }
    ]
  },
  {
    "id": "logic-gates",
    "title": "Logic gates",
    "subtitle": "AND, OR, NOT, circuit interpretation",
    "summary": "Logic circuits combine inputs using AND, OR and NOT gates. The floodlight uses motion, switch and nighttime conditions.",
    "questions": [
      {
        "q": "The floodlight should be on when motion is detected, the switch is on and it is nighttime. Which Boolean expression matches this?",
        "image": "assets/floodlight-logic-template.png",
        "options": [
          "A AND NOT B AND C",
          "A OR B OR C",
          "NOT A AND B AND C",
          "A AND B AND C"
        ],
        "answer": "A AND NOT B AND C",
        "exp": "A is motion, C is switch on, and nighttime means B is 0, so NOT B is needed."
      },
      {
        "q": "In the floodlight circuit, why is B passed through a NOT gate?",
        "image": "assets/floodlight-logic-template.png",
        "options": [
          "B is 1 in daytime, but the light should work at nighttime",
          "B is the switch",
          "B is motion detected",
          "NOT gates are needed for every input"
        ],
        "answer": "B is 1 in daytime, but the light should work at nighttime",
        "exp": "The light should turn on at night, so the daytime signal must be inverted."
      },
      {
        "q": "Which inputs must be 1 for the floodlight to be on?",
        "image": "assets/floodlight-logic-template.png",
        "options": [
          "A and C, while B is 0",
          "A and B, while C is 0",
          "B only",
          "C only"
        ],
        "answer": "A and C, while B is 0",
        "exp": "Motion and switch must be on, and B must indicate nighttime, which is 0."
      },
      {
        "q": "Which gate gives output 1 when either input is 1?",
        "options": [
          "OR",
          "AND",
          "NOT",
          "MOD"
        ],
        "answer": "OR",
        "exp": "An OR gate outputs 1 if A or B or both are 1."
      },
      {
        "q": "Which gate gives output 1 only when both inputs are 1?",
        "options": [
          "AND",
          "OR",
          "NOT",
          "XOR is required in OCR"
        ],
        "answer": "AND",
        "exp": "AND requires all inputs to be 1 for the output to be 1."
      },
      {
        "q": "Truth table 1 has output 0 only when A=0 and B=0, and output 1 otherwise. Which gate is it?",
        "options": [
          "OR",
          "AND",
          "NOT",
          "NAND"
        ],
        "answer": "OR",
        "exp": "This is the standard OR truth table."
      },
      {
        "q": "Truth table 2 has output 1 only when A=1 and B=1. Which gate is it?",
        "options": [
          "AND",
          "OR",
          "NOT",
          "NOR"
        ],
        "answer": "AND",
        "exp": "This is the standard AND truth table."
      },
      {
        "q": "How many AND gates are commonly needed to combine A, NOT B and C using 2-input AND gates?",
        "options": [
          "Two",
          "One NOT gate only",
          "Zero",
          "Four OR gates"
        ],
        "answer": "Two",
        "exp": "Two 2-input AND gates can combine three conditions: first combine two, then combine the result with the third."
      }
    ]
  },
  {
    "id": "testing-validation-ide",
    "title": "Testing, validation & IDEs",
    "subtitle": "test types, IDE tools, validation checks",
    "summary": "Testing checks that a program works and helps find errors. Validation checks user input. IDE tools help write, run and debug code.",
    "questions": [
      {
        "q": "Why should programs be tested before use?",
        "options": [
          "To find errors and check the program works as intended",
          "To remove the need for users",
          "To convert the program into a database",
          "To guarantee no student ever makes mistakes"
        ],
        "answer": "To find errors and check the program works as intended",
        "exp": "Testing helps find bugs, check outputs and improve the program before release."
      },
      {
        "q": "What is final or terminal testing?",
        "options": [
          "Testing completed at the end of development before release",
          "Testing after every single line only",
          "Testing that removes all variables",
          "Testing only with invalid data"
        ],
        "answer": "Testing completed at the end of development before release",
        "exp": "Final testing checks the finished program as a whole before it is released."
      },
      {
        "q": "What is iterative testing?",
        "options": [
          "Testing during development as modules or changes are made",
          "Testing only after release",
          "Testing without running the code",
          "Testing only the database"
        ],
        "answer": "Testing during development as modules or changes are made",
        "exp": "Iterative testing happens throughout development, often after each part is built."
      },
      {
        "q": "Which IDE feature lets a programmer run code one line at a time?",
        "options": [
          "Stepping",
          "Keyword highlighting",
          "Commenting",
          "Concatenation"
        ],
        "answer": "Stepping",
        "exp": "Stepping helps trace execution and find where errors occur."
      },
      {
        "q": "Which IDE feature lets a programmer inspect changing variable values?",
        "options": [
          "Variable watch",
          "Syntax suggestion only",
          "SQL SELECT",
          "Range check"
        ],
        "answer": "Variable watch",
        "exp": "A variable watch shows the contents of variables while the program runs."
      },
      {
        "q": "Which IDE feature can stop execution at a chosen line?",
        "options": [
          "Breakpoint",
          "String length",
          "Presence check",
          "Object code"
        ],
        "answer": "Breakpoint",
        "exp": "Breakpoints pause the program at a chosen point for debugging."
      },
      {
        "q": "For the adding game, the answer to two numbers from 1 to 10 should be between what range?",
        "options": [
          "2 to 20",
          "1 to 10",
          "0 to 512",
          "40 to 180"
        ],
        "answer": "2 to 20",
        "exp": "The smallest possible sum is 1 + 1 = 2 and the largest is 10 + 10 = 20."
      },
      {
        "q": "Which validation method checks that an answer is within sensible limits such as 2 to 20?",
        "options": [
          "Range check",
          "Presence check",
          "Length check only",
          "Authentication"
        ],
        "answer": "Range check",
        "exp": "A range check ensures a numeric value is between a minimum and maximum."
      },
      {
        "q": "Which validation method checks that an answer has been entered and is not blank?",
        "options": [
          "Presence check",
          "Range check",
          "Merge sort",
          "Compiler"
        ],
        "answer": "Presence check",
        "exp": "A presence check makes sure a value exists."
      },
      {
        "q": "Which validation method checks that the user entered a whole number answer?",
        "options": [
          "Type check",
          "Length check only",
          "NOT gate",
          "Final testing"
        ],
        "answer": "Type check",
        "exp": "A type check ensures input is the expected data type, such as integer."
      },
      {
        "q": "In the adding game algorithm, what should happen when the answer is correct?",
        "options": [
          "Add 1 to the score",
          "Subtract 5 from position",
          "Call SoundAlarm",
          "Write to a text file"
        ],
        "answer": "Add 1 to the score",
        "exp": "The game rules say the score increases by 1 for each correct answer."
      },
      {
        "q": "How many addition questions should the game ask?",
        "options": [
          "3",
          "1",
          "10",
          "512"
        ],
        "answer": "3",
        "exp": "The game rules state that the player is asked 3 addition questions."
      }
    ]
  },
  {
    "id": "security-programming",
    "title": "Security system programming",
    "subtitle": "data types, selection, functions, constructs",
    "summary": "Security-system code uses Boolean data, selection, function calls, procedure calls and concatenation to create sensor IDs and trigger alarms.",
    "questions": [
      {
        "q": "What is the most appropriate data type for UserName with example Admin123?",
        "options": [
          "String",
          "Boolean",
          "Integer",
          "Real"
        ],
        "answer": "String",
        "exp": "Admin123 contains letters and digits, so it should be stored as a string."
      },
      {
        "q": "Why is EmergencyPhoneNumber best stored as a string?",
        "options": [
          "It may include a + symbol and is not used for arithmetic",
          "It is always True or False",
          "It must be sorted",
          "It is a real number"
        ],
        "answer": "It may include a + symbol and is not used for arithmetic",
        "exp": "Telephone numbers are identifiers, not quantities to calculate with."
      },
      {
        "q": "What is the most appropriate data type for DoorSensorActive?",
        "options": [
          "Boolean",
          "String",
          "Real",
          "Char"
        ],
        "answer": "Boolean",
        "exp": "DoorSensorActive stores True or False."
      },
      {
        "q": "What is the most appropriate data type for DoorActiveTime = 100 seconds?",
        "options": [
          "Integer",
          "Boolean",
          "Char",
          "String only"
        ],
        "answer": "Integer",
        "exp": "The time is counted to the nearest second, so it can be stored as a whole number."
      },
      {
        "q": "When should SoundAlarm() be called?",
        "options": [
          "When SystemArmed is True and either DoorSensorActive or WindowSensorActive is True",
          "Whenever any window exists",
          "Only when SystemArmed is False",
          "Whenever TestModeActive is True"
        ],
        "answer": "When SystemArmed is True and either DoorSensorActive or WindowSensorActive is True",
        "exp": "The alarm sounds only if the system is armed and at least one sensor is active."
      },
      {
        "q": "Which condition correctly handles operator precedence for the alarm?",
        "options": [
          "SystemArmed AND (DoorSensorActive OR WindowSensorActive)",
          "SystemArmed AND DoorSensorActive OR WindowSensorActive",
          "SystemArmed OR DoorSensorActive OR WindowSensorActive",
          "NOT SystemArmed AND DoorSensorActive"
        ],
        "answer": "SystemArmed AND (DoorSensorActive OR WindowSensorActive)",
        "exp": "Brackets ensure the sensor OR condition is grouped before combining with SystemArmed."
      },
      {
        "q": "Which line contains concatenation in this code?",
        "code": "01 sensorType = input(\"Enter code\")\n02 if(CheckSensorCode(sensorType)) then\n03 sensorNumber = input(\"Number\")\n04 sensorID = sensorType + sensorNumber\n05 ResetSensor(sensorID)\n06 endif",
        "options": [
          "Line 04",
          "Line 01",
          "Line 02",
          "Line 06"
        ],
        "answer": "Line 04",
        "exp": "Line 04 joins sensorType and sensorNumber to make sensorID."
      },
      {
        "q": "Which is a variable identifier from the sensor reset program?",
        "options": [
          "sensorType",
          "input",
          "if",
          "endif"
        ],
        "answer": "sensorType",
        "exp": "sensorType is a named variable used to store the sensor code."
      },
      {
        "q": "What data type is returned by CheckSensorCode() if it is used directly in an IF condition?",
        "options": [
          "Boolean",
          "Integer",
          "Real",
          "Char"
        ],
        "answer": "Boolean",
        "exp": "The function must return True or False so the IF statement can decide what to do."
      },
      {
        "q": "Which line contains a procedure call?",
        "code": "01 sensorType = input(\"Enter code\")\n02 if(CheckSensorCode(sensorType)) then\n03 sensorNumber = input(\"Number\")\n04 sensorID = sensorType + sensorNumber\n05 ResetSensor(sensorID)\n06 endif",
        "options": [
          "Line 05",
          "Line 04",
          "Line 06",
          "No line"
        ],
        "answer": "Line 05",
        "exp": "ResetSensor(sensorID) calls a prewritten procedure."
      },
      {
        "q": "Which two programming constructs are used in the sensor reset code?",
        "options": [
          "Sequence and selection",
          "Iteration and recursion",
          "Only iteration",
          "Only decomposition"
        ],
        "answer": "Sequence and selection",
        "exp": "The statements run in order, and the IF statement provides selection."
      },
      {
        "q": "Why is there no iteration in the sensor reset code?",
        "options": [
          "There is no loop such as for, while or do until",
          "There is an IF statement",
          "There is a variable",
          "There is a function call"
        ],
        "answer": "There is no loop such as for, while or do until",
        "exp": "Iteration means repetition using a loop. The code does not repeat."
      }
    ]
  },
  {
    "id": "sql-files-2darrays",
    "title": "SQL, files & 2D arrays",
    "subtitle": "SELECT, file writing, casting, 2D array totals",
    "summary": "SQL filters records with WHERE. File procedures need parameters, open/write/close. 2D arrays can be looped through to total matching records.",
    "questions": [
      {
        "q": "Which SQL statement displays the sensor IDs of door sensors triggered for more than 20 seconds?",
        "options": [
          "SELECT SensorID FROM events WHERE Length > 20 AND SensorType = \"Door\"",
          "SELECT SensorID FROM events WHERE Length < 20",
          "SELECT Door FROM SensorID WHERE events > 20",
          "SELECT * WHERE SensorType = Door"
        ],
        "answer": "SELECT SensorID FROM events WHERE Length > 20 AND SensorType = \"Door\"",
        "exp": "The query selects SensorID from events and filters for both Length > 20 and SensorType = \"Door\"."
      },
      {
        "q": "In SQL, which keyword chooses the field(s) to display?",
        "options": [
          "SELECT",
          "FROM",
          "WHERE",
          "ENDIF"
        ],
        "answer": "SELECT",
        "exp": "SELECT lists the fields that should be displayed."
      },
      {
        "q": "In SQL, which keyword identifies the table?",
        "options": [
          "FROM",
          "SELECT",
          "WHERE",
          "PRINT"
        ],
        "answer": "FROM",
        "exp": "FROM names the table that data is read from."
      },
      {
        "q": "In SQL, which keyword filters records?",
        "options": [
          "WHERE",
          "SELECT",
          "FROM",
          "MOD"
        ],
        "answer": "WHERE",
        "exp": "WHERE gives conditions that records must meet."
      },
      {
        "q": "Why must \"Door\" be in quotation marks in the SQL condition?",
        "options": [
          "It is string/text data",
          "It is a number",
          "It is a Boolean operator",
          "It is a table name"
        ],
        "answer": "It is string/text data",
        "exp": "String values in SQL conditions should be delimited with quotation marks."
      },
      {
        "q": "A procedure SaveLogs(data, filename) should use filename to do what?",
        "options": [
          "Open the correct text file",
          "Calculate the highest score",
          "Store a Boolean result",
          "Draw a NOT gate"
        ],
        "answer": "Open the correct text file",
        "exp": "The filename parameter tells the procedure which external text file to write to."
      },
      {
        "q": "A procedure SaveLogs(data, filename) should use data to do what?",
        "options": [
          "Write the string data to the file",
          "Choose a random number",
          "Check if a sensor is active",
          "Create a truth table"
        ],
        "answer": "Write the string data to the file",
        "exp": "The data parameter contains the string that should be saved."
      },
      {
        "q": "Which step should happen after writing to an external text file?",
        "options": [
          "Close the file",
          "Delete the variable names",
          "Run binary search",
          "Open the same file forever"
        ],
        "answer": "Close the file",
        "exp": "Closing the file helps ensure data is saved properly and releases the file resource."
      },
      {
        "q": "What process converts integer data to string data before storing it in a string array?",
        "options": [
          "Casting",
          "Selection",
          "Iteration",
          "Authentication"
        ],
        "answer": "Casting",
        "exp": "Casting converts data from one type to another, such as integer to string."
      },
      {
        "q": "In the events table, what does the Length field store?",
        "options": [
          "The number of seconds the sensor was triggered",
          "The number of characters in SensorID",
          "The date only",
          "Whether the system is armed"
        ],
        "answer": "The number of seconds the sensor was triggered",
        "exp": "Length is the duration of the sensor event in seconds."
      },
      {
        "q": "To total seconds for a chosen date in a 2D array, what should the program do first?",
        "options": [
          "Input the date to search for",
          "Sort the dates using bubble sort",
          "Call SoundAlarm every time",
          "Ignore the date column"
        ],
        "answer": "Input the date to search for",
        "exp": "The user\u2019s date is needed so the program can compare it with each event date."
      },
      {
        "q": "When looping through event records, what should be added to the total when the date matches?",
        "options": [
          "The Length value for that record",
          "The SensorID text",
          "The SensorType text",
          "The table name"
        ],
        "answer": "The Length value for that record",
        "exp": "The algorithm totals how long sensors were activated, so it adds the Length field."
      },
      {
        "q": "Which output is most appropriate after calculating the total for 05/02/2023?",
        "options": [
          "Sensors were activated for 40 seconds on 05/02/2023",
          "Finished only",
          "True",
          "SELECT SensorID"
        ],
        "answer": "Sensors were activated for 40 seconds on 05/02/2023",
        "exp": "For 05/02/2023, the two lengths shown are 38 and 2, giving 40 seconds."
      },
      {
        "q": "Why is iteration useful for the 2D events array?",
        "options": [
          "It lets the program check each event record",
          "It changes SQL into machine code",
          "It avoids using variables",
          "It makes all records Boolean"
        ],
        "answer": "It lets the program check each event record",
        "exp": "A loop can visit each row/event and compare the date."
      }
    ]
  }
];

let state = {
  topicId: topics[0].id,
  index: 0,
  selected: null,
  marked: false,
  answers: {},
  reviewMode: false,
  reviewListMode: false,
  currentQuestions: [],
  currentKey: null
};

const el = {
  topicNav: document.getElementById("topicNav"),
  topicBadge: document.getElementById("topicBadge"),
  questionCounter: document.getElementById("questionCounter"),
  questionText: document.getElementById("questionText"),
  questionImageWrap: document.getElementById("questionImageWrap"),
  questionImage: document.getElementById("questionImage"),
  codeBlock: document.getElementById("codeBlock"),
  options: document.getElementById("options"),
  feedback: document.getElementById("feedback"),
  markBtn: document.getElementById("markBtn"),
  prevBtn: document.getElementById("prevBtn"),
  nextBtn: document.getElementById("nextBtn"),
  scoreText: document.getElementById("scoreText"),
  progressBar: document.getElementById("progressBar"),
  resetBtn: document.getElementById("resetBtn"),
  shuffleBtn: document.getElementById("shuffleBtn"),
  reviewBtn: document.getElementById("reviewBtn"),
  topicSummary: document.getElementById("topicSummary")
};

function getTopic() {
  return topics.find(t => t.id === state.topicId);
}

function keyFor(question) {
  return `${state.topicId}::${question.q}`;
}

function shuffleArray(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function buildQuestionSet() {
  const topic = getTopic();
  let questions = topic.questions;
  if (state.reviewMode) {
    questions = questions.filter(q => {
      const record = state.answers[keyFor(q)];
      return record && !record.correct;
    });
    if (questions.length === 0) {
      state.reviewMode = false;
      questions = topic.questions;
      alert("No mistakes recorded for this topic yet.");
    }
  }
  state.currentQuestions = questions;
  if (state.index >= state.currentQuestions.length) state.index = 0;
}

function renderNav() {
  el.topicNav.innerHTML = "";
  topics.forEach(topic => {
    const total = topic.questions.length;
    const correct = topic.questions.filter(q => state.answers[`${topic.id}::${q.q}`]?.correct).length;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `topic-btn ${topic.id === state.topicId ? "active" : ""}`;
    btn.innerHTML = `${topic.title}<small>${correct}/${total} complete • ${topic.subtitle}</small>`;
    btn.addEventListener("click", () => {
      state.topicId = topic.id;
      state.index = 0;
      state.selected = null;
      state.marked = false;
      state.reviewMode = false;
      buildQuestionSet();
      render();
    });
    el.topicNav.appendChild(btn);
  });
}

function renderSummary() {
  el.topicSummary.innerHTML = "";
  topics.forEach(topic => {
    const item = document.createElement("div");
    item.className = "summary-item";
    item.innerHTML = `<strong>${topic.title}</strong><span>${topic.summary}</span>`;
    el.topicSummary.appendChild(item);
  });
}

function renderScore() {
  const all = topics.flatMap(t => t.questions.map(q => ({ ...q, topicId: t.id })));
  const answered = all.filter(q => state.answers[`${q.topicId}::${q.q}`]);
  const correct = answered.filter(q => state.answers[`${q.topicId}::${q.q}`].correct).length;
  el.scoreText.textContent = `${correct} / ${answered.length}`;
  const pct = all.length ? Math.round((answered.length / all.length) * 100) : 0;
  el.progressBar.style.width = `${pct}%`;
}

function restoreQuestionState(question) {
  const record = state.answers[keyFor(question)];
  if (record) {
    state.selected = record.selected;
    state.marked = true;
  } else {
    state.selected = null;
    state.marked = false;
  }
}


function escapeHTML(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getJ277Fact(topic, question) {
  const text = `${topic.title} ${topic.subtitle || ""} ${topic.summary || ""} ${question.q} ${question.exp || ""}`.toLowerCase();

  if (text.includes("boolean") || text.includes("and") || text.includes("or") || text.includes("not") || text.includes("logic") || text.includes("truth table")) {
    return "OCR J277 fact: Boolean logic uses AND, OR and NOT. AND only gives True when both sides are True. OR gives True when at least one side is True. NOT reverses the value.";
  }
  if (text.includes("array") || text.includes("index")) {
    return "OCR J277 fact: arrays store multiple values of the same type. In exam questions they are often zero-indexed, so the first item is at index 0.";
  }
  if (text.includes("sql") || text.includes("select") || text.includes("where")) {
    return "OCR J277 fact: SQL uses SELECT for fields, FROM for the table, and WHERE for criteria. String values normally need quotation marks.";
  }
  if (text.includes("function") || text.includes("return") || text.includes("parameter")) {
    return "OCR J277 fact: a function should return a value. Data passed into a function should normally use parameters, not extra input statements inside the function.";
  }
  if (text.includes("procedure")) {
    return "OCR J277 fact: a procedure is a named block of code that performs a task. Unlike a function, it does not have to return a value.";
  }
  if (text.includes("while") || text.includes("for") || text.includes("iteration") || text.includes("loop")) {
    return "OCR J277 fact: iteration means repetition. A FOR loop is usually count-controlled. A WHILE loop repeats while a condition is true.";
  }
  if (text.includes("selection") || text.includes("if") || text.includes("switch") || text.includes("case")) {
    return "OCR J277 fact: selection chooses between different paths using conditions, such as IF, ELSEIF, ELSE or SWITCH/CASE.";
  }
  if (text.includes("merge") || text.includes("bubble") || text.includes("insertion") || text.includes("sort")) {
    return "OCR J277 fact: sorting algorithms put data into order. Merge sort divides then merges; bubble sort swaps adjacent pairs; insertion sort builds a sorted section.";
  }
  if (text.includes("binary search")) {
    return "OCR J277 fact: binary search only works on sorted data. It checks the middle value and discards half of the remaining data each time.";
  }
  if (text.includes("linear search")) {
    return "OCR J277 fact: linear search checks items one at a time from the start until the item is found or every item has been checked.";
  }
  if (text.includes("syntax") || text.includes("logic error")) {
    return "OCR J277 fact: a syntax error breaks the rules of the language. A logic error lets the program run but produces the wrong result.";
  }
  if (text.includes("validation") || text.includes("boundary") || text.includes("erroneous") || text.includes("invalid") || text.includes("test data")) {
    return "OCR J277 fact: validation checks whether input is sensible. Boundary data tests the edge of an allowed range; erroneous data should be rejected.";
  }
  if (text.includes("casting") || text.includes("int(") || text.includes("str(")) {
    return "OCR J277 fact: casting converts data from one type to another, such as string to integer or integer to string.";
  }
  if (text.includes("concatenate") || text.includes("concatenation") || text.includes("string")) {
    return "OCR J277 fact: concatenation joins strings together. In OCR-style pseudocode this is often shown with the + operator.";
  }
  if (text.includes("compiler") || text.includes("interpreter") || text.includes("translator")) {
    return "OCR J277 fact: translators convert high-level code into machine code. Compilers translate the whole program; interpreters translate and run line by line.";
  }
  if (text.includes("file") || text.includes("readline") || text.includes("writeline") || text.includes("close")) {
    return "OCR J277 fact: file handling usually follows this pattern: open the file, read or write data, then close the file.";
  }
  if (text.includes("decomposition") || text.includes("abstraction") || text.includes("algorithmic")) {
    return "OCR J277 fact: decomposition breaks a problem into smaller parts. Abstraction removes unnecessary detail. Algorithmic thinking designs clear steps.";
  }
  if (text.includes("data type") || text.includes("integer") || text.includes("real") || text.includes("boolean")) {
    return "OCR J277 fact: common data types include integer for whole numbers, real/float for decimals, string for text and Boolean for True/False values.";
  }
  return `OCR J277 fact: ${topic.summary || "Focus on the key command words, trace the logic carefully, and check each condition against the data in the question."}`;
}

function renderMistakeReviewList() {
  const topic = getTopic();
  const mistakes = topic.questions.filter(q => {
    const record = state.answers[`${topic.id}::${q.q}`];
    return record && !record.correct;
  });

  el.topicBadge.textContent = `${topic.title} • Mistake review`;
  el.questionCounter.textContent = `${mistakes.length} mistake${mistakes.length === 1 ? "" : "s"}`;
  el.questionText.textContent = "Incorrect questions to revise";
  el.questionImageWrap.classList.add("hidden");
  el.codeBlock.classList.add("hidden");
  el.options.innerHTML = "";
  el.feedback.classList.add("hidden");

  if (mistakes.length === 0) {
    el.options.innerHTML = `<div class="mistake-list empty"><strong>No mistakes in this topic yet.</strong><p>Answer some questions first, then this list will show what to revise.</p></div>`;
  } else {
    el.options.innerHTML = mistakes.map((q, index) => {
      const record = state.answers[`${topic.id}::${q.q}`];
      return `<article class="mistake-card">
        <div class="mistake-number">${index + 1}</div>
        <div class="mistake-content">
          <h4>${escapeHTML(q.q)}</h4>
          ${q.code ? `<pre>${escapeHTML(q.code)}</pre>` : ""}
          <p><strong>Your answer:</strong> ${escapeHTML(record.selected)}</p>
          <p><strong>Correct answer:</strong> ${escapeHTML(q.answer)}</p>
          <p><strong>Why:</strong> ${escapeHTML(q.exp || "Check the key terms in the question and eliminate distractors carefully.")}</p>
          <p class="ocr-fact"><strong>OCR J277 fact:</strong> ${escapeHTML(getJ277Fact(topic, q).replace(/^OCR J277 fact:\s*/i, ""))}</p>
        </div>
      </article>`;
    }).join("");
  }

  el.markBtn.textContent = "Back to questions";
  el.markBtn.disabled = false;
  el.prevBtn.disabled = true;
  el.nextBtn.disabled = true;
}

function renderQuestion() {
  if (state.reviewListMode) {
    renderMistakeReviewList();
    return;
  }
  const topic = getTopic();
  const question = state.currentQuestions[state.index];
  if (!question) return;

  const qKey = keyFor(question);
  if (state.currentKey !== qKey) {
    state.currentKey = qKey;
    restoreQuestionState(question);
  }
  el.topicBadge.textContent = state.reviewMode ? `${topic.title} • Review` : topic.title;
  el.questionCounter.textContent = `Question ${state.index + 1} of ${state.currentQuestions.length}`;
  el.questionText.textContent = question.q;

  if (question.image) {
    el.questionImage.src = question.image;
    el.questionImage.alt = question.imageAlt || "Flowchart question diagram";
    el.questionImageWrap.classList.remove("hidden");
  } else {
    el.questionImage.removeAttribute("src");
    el.questionImageWrap.classList.add("hidden");
  }

  if (question.code) {
    el.codeBlock.textContent = question.code;
    el.codeBlock.classList.remove("hidden");
  } else {
    el.codeBlock.classList.add("hidden");
  }

  el.options.innerHTML = "";
  if (!question.shuffledOptions) question.shuffledOptions = shuffleArray(question.options);
  question.shuffledOptions.forEach(optionText => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "option";
    btn.textContent = optionText;
    if (state.selected === optionText) btn.classList.add("selected");
    if (state.marked) {
      if (optionText === question.answer) btn.classList.add("correct");
      if (optionText === state.selected && optionText !== question.answer) btn.classList.add("incorrect");
    }
    btn.addEventListener("click", () => {
      if (state.marked) return;
      state.selected = optionText;
      renderQuestion();
    });
    el.options.appendChild(btn);
  });

  if (state.marked) {
    const correct = state.selected === question.answer;
    el.feedback.className = `feedback ${correct ? "good" : "bad"}`;
    el.feedback.innerHTML = `<strong>${correct ? "Correct" : "Not quite"}</strong><br>${question.exp}`;
    el.feedback.classList.remove("hidden");
    el.markBtn.textContent = state.index === state.currentQuestions.length - 1 ? "Finish & review" : "Next question";
  } else {
    el.feedback.classList.add("hidden");
    el.markBtn.textContent = "Mark";
  }

  el.prevBtn.disabled = state.index === 0;
  el.nextBtn.disabled = state.index === state.currentQuestions.length - 1;
}

function markOrNext() {
  if (state.reviewListMode) {
    state.reviewListMode = false;
    state.reviewMode = false;
    state.index = 0;
    state.selected = null;
    state.marked = false;
    state.currentKey = null;
    buildQuestionSet();
    render();
    return;
  }
  const question = state.currentQuestions[state.index];
  if (!question) return;

  if (!state.marked) {
    if (!state.selected) {
      el.feedback.className = "feedback bad";
      el.feedback.textContent = "Choose an answer first.";
      el.feedback.classList.remove("hidden");
      return;
    }
    const correct = state.selected === question.answer;
    state.answers[keyFor(question)] = { selected: state.selected, correct };
    state.marked = true;
    render();
    return;
  }

  if (state.index < state.currentQuestions.length - 1) {
    state.index++;
    render();
  } else {
    showEndSummary();
  }
}

function showEndSummary() {
  const topic = getTopic();
  const answered = topic.questions.filter(q => state.answers[`${topic.id}::${q.q}`]);
  const correct = topic.questions.filter(q => state.answers[`${topic.id}::${q.q}`]?.correct).length;
  el.feedback.className = "feedback good";
  el.feedback.innerHTML = `<strong>Topic complete</strong><br>You have ${correct} correct out of ${answered.length} answered in this topic. Use Review mistakes to practise the questions you missed.`;
  el.feedback.classList.remove("hidden");
}

function render() {
  renderNav();
  renderSummary();
  renderScore();
  renderQuestion();
}

el.markBtn.addEventListener("click", markOrNext);
el.prevBtn.addEventListener("click", () => { if (state.index > 0) { state.index--; render(); } });
el.nextBtn.addEventListener("click", () => { if (state.index < state.currentQuestions.length - 1) { state.index++; render(); } });
el.resetBtn.addEventListener("click", () => {
  state.answers = {};
  state.index = 0;
  state.selected = null;
  state.marked = false;
  state.reviewMode = false;
  topics.forEach(t => t.questions.forEach(q => delete q.shuffledOptions));
  buildQuestionSet();
  render();
});
el.shuffleBtn.addEventListener("click", () => {
  const topic = getTopic();
  topic.questions = shuffleArray(topic.questions);
  topic.questions.forEach(q => delete q.shuffledOptions);
  state.index = 0;
  buildQuestionSet();
  render();
});
el.reviewBtn.addEventListener("click", () => {
  state.reviewListMode = true;
  state.reviewMode = false;
  state.index = 0;
  state.selected = null;
  state.marked = false;
  state.currentKey = null;
  buildQuestionSet();
  render();
});

buildQuestionSet();
render();
