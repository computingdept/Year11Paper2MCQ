const topics = [
  {
    "id": "constructs-ct",
    "title": "Constructs & CT",
    "subtitle": "selection, iteration, abstraction, decomposition",
    "summary": "Recognise OCR Reference Language constructs and key computational thinking techniques.",
    "questions": [
      {
        "q": "Which construct is shown by a for loop?",
        "options": [
          "Iteration",
          "Selection",
          "Casting",
          "SQL"
        ],
        "answer": "Iteration",
        "exp": "A for loop repeats code, so it is iteration."
      },
      {
        "q": "Which construct is shown by a while loop?",
        "options": [
          "Iteration",
          "Selection",
          "A data type",
          "A truth table"
        ],
        "answer": "Iteration",
        "exp": "A while loop repeats while a condition is true."
      },
      {
        "q": "Which construct is shown by an if statement?",
        "options": [
          "Selection",
          "Iteration",
          "Concatenation",
          "File handling"
        ],
        "answer": "Selection",
        "exp": "An if statement chooses between paths."
      },
      {
        "q": "Which construct is shown by switch/case?",
        "options": [
          "Selection",
          "Iteration",
          "Casting",
          "Merge sort"
        ],
        "answer": "Selection",
        "exp": "switch/case selects a branch based on a value."
      },
      {
        "q": "Which pseudocode correctly increments score by one?",
        "options": [
          "score = score + 1",
          "score + 1",
          "score = +1",
          "score == score + 1"
        ],
        "answer": "score = score + 1",
        "exp": "The new value must be assigned back into score."
      },
      {
        "q": "What is decomposition?",
        "options": [
          "Breaking a complex problem into smaller problems",
          "Hiding irrelevant details",
          "Joining strings",
          "Converting data types"
        ],
        "answer": "Breaking a complex problem into smaller problems",
        "exp": "Decomposition splits a problem into manageable parts."
      },
      {
        "q": "What is abstraction?",
        "options": [
          "Hiding or removing irrelevant details",
          "Breaking code into loops",
          "Sorting values",
          "Creating executable files"
        ],
        "answer": "Hiding or removing irrelevant details",
        "exp": "Abstraction keeps the important details and removes what is not needed."
      },
      {
        "q": "Which is the best example of decomposition for the discount problem?",
        "options": [
          "Split it into inputs, decision and output",
          "Use one variable only",
          "Ignore Saturday",
          "Translate it first"
        ],
        "answer": "Split it into inputs, decision and output",
        "exp": "The problem can be broken into smaller stages: input, process, output."
      }
    ]
  },
  {
    "id": "logic-flowcharts",
    "title": "Logic & flowcharts",
    "subtitle": "logic gates, truth tables, discount flowchart, casting trace",
    "summary": "Build Boolean logic and flowcharts from conditions, then trace string/casting algorithms.",
    "questions": [
      {
        "q": "For P = (A OR B) AND NOT C, which gate combines A and B first?",
        "options": [
          "OR",
          "AND",
          "NOT",
          "MOD"
        ],
        "answer": "OR",
        "exp": "A OR B is inside the brackets.",
        "image": "assets/discount-logic-template.png",
        "imageAlt": "Discount logic diagram from the 2022 paper"
      },
      {
        "q": "For P = (A OR B) AND NOT C, what gate is applied to C?",
        "options": [
          "NOT",
          "OR",
          "AND",
          "No gate"
        ],
        "answer": "NOT",
        "exp": "The expression includes NOT C.",
        "image": "assets/discount-logic-template.png",
        "imageAlt": "Discount logic diagram from the 2022 paper"
      },
      {
        "q": "For P = (A OR B) AND NOT C, which final gate combines the results?",
        "options": [
          "AND",
          "OR",
          "NOT",
          "XOR"
        ],
        "answer": "AND",
        "exp": "The two parts are joined by AND.",
        "image": "assets/discount-logic-template.png",
        "imageAlt": "Discount logic diagram from the 2022 paper"
      },
      {
        "q": "What is the purpose of a truth table?",
        "options": [
          "To show the output for every possible input combination",
          "To sort data",
          "To store records",
          "To translate code"
        ],
        "answer": "To show the output for every possible input combination",
        "exp": "A truth table lists all input combinations and their matching output."
      },
      {
        "q": "How many rows are needed for a truth table with inputs A, B and C?",
        "options": [
          "8",
          "3",
          "6",
          "16"
        ],
        "answer": "8",
        "exp": "Three Boolean inputs give 2\u00b3 = 8 rows."
      },
      {
        "q": "In the meal discount flowchart, which inputs are required?",
        "options": [
          "Student status, discount card status and whether it is Saturday",
          "Only the meal price",
          "Only customer name",
          "Only table number"
        ],
        "answer": "Student status, discount card status and whether it is Saturday",
        "exp": "The logic depends on A, B and C.",
        "image": "assets/discount-flowchart-question.png",
        "imageAlt": "Flowchart design question from the 2022 paper"
      },
      {
        "q": "Which customer receives half price?",
        "options": [
          "Not Saturday and either student or discount card",
          "Saturday and student",
          "Saturday and discount card",
          "Not Saturday with no student/card"
        ],
        "answer": "Not Saturday and either student or discount card",
        "exp": "The offer is (student OR discount card) AND not Saturday."
      },
      {
        "q": "Which flowchart shape is used for input/output?",
        "options": [
          "Parallelogram",
          "Diamond",
          "Oval",
          "Circle"
        ],
        "answer": "Parallelogram",
        "exp": "OCR flowcharts use parallelograms for input and output."
      },
      {
        "q": "Which flowchart shape is used for a decision?",
        "options": [
          "Diamond",
          "Parallelogram",
          "Oval",
          "Plain line"
        ],
        "answer": "Diamond",
        "exp": "A decision uses a diamond with True/False or Yes/No branches."
      },
      {
        "q": "Which extra input is needed for the service charge change?",
        "options": [
          "Number of people at the table",
          "Staff ID only",
          "CPU type",
          "Surname only"
        ],
        "answer": "Number of people at the table",
        "exp": "The 5% charge depends on whether there are more than five people."
      },
      {
        "q": "Which extra input is needed for the tip change?",
        "options": [
          "Tip type and tip amount/percentage",
          "Only the date",
          "Only the table size",
          "Only whether the customer is a student"
        ],
        "answer": "Tip type and tip amount/percentage",
        "exp": "The algorithm must know whether the tip is a percentage or fixed value, and the chosen value."
      },
      {
        "q": "What does casting mean?",
        "options": [
          "Converting data from one data type to another",
          "Repeating code",
          "Drawing a flowchart",
          "Sorting a list"
        ],
        "answer": "Converting data from one data type to another",
        "exp": "Casting changes a value between data types."
      },
      {
        "q": "Which line uses casting in this algorithm?",
        "options": [
          "Line 03",
          "Line 01",
          "Line 04",
          "Line 07"
        ],
        "answer": "Line 03",
        "exp": "str(year) converts the year to a string.",
        "code": "01 surname = input(\"Enter surname\")\n02 year = input(\"Enter starting year\")\n03 staffID = surname + str(year)\n04 while staffID.length < 10\n05 staffID = staffID + \"x\"\n06 endwhile\n07 print(\"ID \" + staffID)"
      },
      {
        "q": "For surname Kofi and year 2021, what is output?",
        "options": [
          "ID Kofi2021xx",
          "ID Kofi2021",
          "ID Kofi2021x",
          "Kofi2021xx"
        ],
        "answer": "ID Kofi2021xx",
        "exp": "Kofi2021 has 8 characters, so two x characters are added before printing.",
        "code": "surname = \"Kofi\"\nyear = 2021\nstaffID = surname + str(year)\nwhile staffID.length < 10\n staffID = staffID + \"x\"\nendwhile\nprint(\"ID \" + staffID)"
      }
    ]
  },
  {
    "id": "search-sort",
    "title": "Search & sort",
    "subtitle": "merge sort, binary search, linear search",
    "summary": "Merge lists in order, use binary search only on sorted data, and linear search from start to end.",
    "questions": [
      {
        "q": "After the first merge of 45, 12, -99, 100, -13, 0, 17, -27, which sorted pairs are correct?",
        "options": [
          "12 45 / -99 100 / -13 0 / -27 17",
          "45 12 / -99 100 / -13 0 / 17 -27",
          "-99 -27 / -13 0 / 12 17 / 45 100",
          "12 -99 / 45 100 / -13 17 / 0 -27"
        ],
        "answer": "12 45 / -99 100 / -13 0 / -27 17",
        "exp": "Each pair must be merged into sorted order."
      },
      {
        "q": "What is the final ascending order?",
        "options": [
          "-99, -27, -13, 0, 12, 17, 45, 100",
          "100, 45, 17, 12, 0, -13, -27, -99",
          "-27, -13, -99, 0, 12, 17, 45, 100",
          "0, 12, 17, 45, 100, -99, -27, -13"
        ],
        "answer": "-99, -27, -13, 0, 12, 17, 45, 100",
        "exp": "Ascending order means smallest to largest."
      },
      {
        "q": "Which statement about merge sort is correct?",
        "options": [
          "Merged lists should be sorted at each stage",
          "It sorts only positive numbers",
          "It checks the middle value",
          "It swaps adjacent values only"
        ],
        "answer": "Merged lists should be sorted at each stage",
        "exp": "The merge step itself produces sorted lists."
      },
      {
        "q": "What is the first step in a binary search?",
        "options": [
          "Choose the middle value and compare it with the target",
          "Check every value from the start",
          "Randomly choose a value",
          "Always discard the right half"
        ],
        "answer": "Choose the middle value and compare it with the target",
        "exp": "Binary search starts at the middle of the remaining sorted list."
      },
      {
        "q": "What is required before a binary search can be used?",
        "options": [
          "The data must be sorted",
          "The data must be unsorted",
          "The data must be all text",
          "The data must be in a file"
        ],
        "answer": "The data must be sorted",
        "exp": "Binary search relies on ordered data to discard half."
      },
      {
        "q": "If the middle value is smaller than the target, what should happen?",
        "options": [
          "Discard the left half and search the right half",
          "Discard the right half",
          "Stop as not found",
          "Use a bubble sort"
        ],
        "answer": "Discard the left half and search the right half",
        "exp": "In ascending order, larger values are to the right."
      },
      {
        "q": "When can a binary search stop?",
        "options": [
          "When the target is found or no values remain",
          "Only after every item is checked",
          "After exactly two comparisons",
          "When the list is unsorted"
        ],
        "answer": "When the target is found or no values remain",
        "exp": "It stops on a match or when the search space is empty."
      },
      {
        "q": "How does a linear search look for a missing value?",
        "options": [
          "Checks each value in order from the start to the end",
          "Checks only the middle",
          "Splits the list repeatedly",
          "Sorts the list first"
        ],
        "answer": "Checks each value in order from the start to the end",
        "exp": "If the value is not present, a linear search must reach the end of the list."
      },
      {
        "q": "Which search is usually faster for a large sorted list?",
        "options": [
          "Binary search",
          "Linear search",
          "They are always identical",
          "Neither can search sorted lists"
        ],
        "answer": "Binary search",
        "exp": "Binary search halves the remaining values each step."
      }
    ]
  },
  {
    "id": "programming-translators",
    "title": "Programming & translators",
    "subtitle": "maintainability, arithmetic, interpreter, compiler, averages",
    "summary": "Use loops and meaningful names for maintainability, and understand translators and averages.",
    "questions": [
      {
        "q": "Which improvement helps maintainability in Jack\u2019s program with variables a, b, c, d and e?",
        "options": [
          "Use meaningful variable names",
          "Remove all comments",
          "Use shorter names",
          "Make every line longer"
        ],
        "answer": "Use meaningful variable names",
        "exp": "Meaningful identifiers make code easier to understand."
      },
      {
        "q": "Which improvement avoids repeated input lines?",
        "options": [
          "Use a loop",
          "Use a NOT gate",
          "Use SQL WHERE",
          "Use a truth table"
        ],
        "answer": "Use a loop",
        "exp": "A loop can repeat the input process."
      },
      {
        "q": "What does * do?",
        "options": [
          "Multiplication",
          "Division",
          "Modulus",
          "Selection"
        ],
        "answer": "Multiplication",
        "exp": "* is the multiplication operator."
      },
      {
        "q": "What does / do?",
        "options": [
          "Division",
          "Multiplication",
          "Subtraction",
          "Concatenation"
        ],
        "answer": "Division",
        "exp": "/ is the division operator."
      },
      {
        "q": "Jack writes code in a language that needs translating before execution. What type of language is it?",
        "options": [
          "High-level language",
          "Machine code",
          "Truth table",
          "Database table"
        ],
        "answer": "High-level language",
        "exp": "High-level code must be translated to machine code."
      },
      {
        "q": "What does an interpreter do when it finds an error?",
        "options": [
          "Stops at the error",
          "Produces an executable file",
          "Ignores it",
          "Deletes the code"
        ],
        "answer": "Stops at the error",
        "exp": "An interpreter runs line by line and stops when it hits an error."
      },
      {
        "q": "Compiled code will not run until there are...",
        "options": [
          "No errors",
          "Many errors",
          "No comments",
          "No variables"
        ],
        "answer": "No errors",
        "exp": "A compiler needs errors fixed before producing a working executable."
      },
      {
        "q": "What file can a compiler produce?",
        "options": [
          "Executable file",
          "Flowchart",
          "Truth table only",
          "Sensor record"
        ],
        "answer": "Executable file",
        "exp": "A compiler can create an executable file."
      },
      {
        "q": "A compiled executable can be run...",
        "options": [
          "Without the compiler",
          "Only one line at a time",
          "Only with pseudocode",
          "Only inside SQL"
        ],
        "answer": "Without the compiler",
        "exp": "Once compiled, the executable does not need the compiler each time."
      },
      {
        "q": "To add a user-chosen quantity of numbers, where should the input for each number be?",
        "options": [
          "Inside the loop",
          "Only after the loop",
          "Only before the loop once",
          "Inside a truth table"
        ],
        "answer": "Inside the loop",
        "exp": "Each iteration should ask for a new number."
      },
      {
        "q": "How is the average calculated?",
        "options": [
          "total / quantity",
          "quantity / total",
          "total + quantity",
          "total MOD quantity"
        ],
        "answer": "total / quantity",
        "exp": "Average is total divided by the number of values."
      },
      {
        "q": "Where should total normally be initialised?",
        "options": [
          "Before the loop",
          "Inside the loop every time",
          "After printing",
          "Never"
        ],
        "answer": "Before the loop",
        "exp": "The running total should start once, then be updated in the loop."
      }
    ]
  },
  {
    "id": "hotel-validation",
    "title": "Hotel, SQL & validation",
    "subtitle": "data types, SQL, validation, functions, arrays, parking",
    "summary": "Apply data types, SQL filtering, validation checks, functions, array totals and repeated price algorithms.",
    "questions": [
      {
        "q": "Hotel booking context: a customer can stay between 1 and 5 nights. What data type is most appropriate for the field Nights?",
        "options": [
          "Integer",
          "String",
          "Boolean",
          "Real"
        ],
        "answer": "Integer",
        "exp": "Nights stores a whole number of nights, for example 3, so Integer is most appropriate."
      },
      {
        "q": "Hotel booking context: room stores values such as Basic or Premium. What data type is most appropriate for the field Room?",
        "options": [
          "String",
          "Integer",
          "Boolean",
          "Real"
        ],
        "answer": "String",
        "exp": "Room stores text such as Basic or Premium, so String is most appropriate."
      },
      {
        "q": "Which booking field can be Boolean?",
        "options": [
          "stayComplete",
          "firstName",
          "surname",
          "room"
        ],
        "answer": "stayComplete",
        "exp": "stayComplete can be True or False."
      },
      {
        "q": "Which SQL keyword should replace IF?",
        "options": [
          "WHERE",
          "WHEN",
          "FILTER",
          "SORT"
        ],
        "answer": "WHERE",
        "exp": "SQL uses WHERE to filter rows."
      },
      {
        "q": "Which SQL finds bookings staying more than one night?",
        "options": [
          "Nights > 1",
          "Nights < 1",
          "Nights = 1",
          "Nights != 5"
        ],
        "answer": "Nights > 1",
        "exp": "More than one means greater than 1."
      },
      {
        "q": "Which SQL selects every field?",
        "options": [
          "SELECT *",
          "SELECT ALL",
          "SHOW ALL",
          "SELECT TblBookings"
        ],
        "answer": "SELECT *",
        "exp": "SELECT * is valid SQL for all fields."
      },
      {
        "q": "Which check correctly validates a non-empty firstName and surname?",
        "options": [
          "firstName != \"\" AND surname != \"\"",
          "firstName == \"\" OR surname != \"\"",
          "firstName MOD surname",
          "surname.length < 0"
        ],
        "answer": "firstName != \"\" AND surname != \"\"",
        "exp": "Both fields must contain data."
      },
      {
        "q": "Which check correctly validates room?",
        "options": [
          "room == \"basic\" OR room == \"premium\"",
          "room == \"basic\" OR \"premium\"",
          "room != \"basic\" OR room != \"premium\"",
          "room == basic OR room == premium"
        ],
        "answer": "room == \"basic\" OR room == \"premium\"",
        "exp": "Both sides of OR must be complete comparisons and strings need quotes."
      },
      {
        "q": "Which check validates nights from 1 to 5 inclusive?",
        "options": [
          "nights >= 1 AND nights <= 5",
          "nights > 1 AND nights < 5",
          "nights >= 1 AND <= 5",
          "nights < 1 OR nights < 5"
        ],
        "answer": "nights >= 1 AND nights <= 5",
        "exp": "The variable must be included in both comparisons; 1 and 5 are allowed."
      },
      {
        "q": "Which is normal test data for nights?",
        "options": [
          "2",
          "1",
          "6",
          "bananas"
        ],
        "answer": "2",
        "exp": "2 is a typical valid value."
      },
      {
        "q": "Which is boundary test data for nights with ALLOWED output?",
        "options": [
          "1",
          "0",
          "6",
          "six"
        ],
        "answer": "1",
        "exp": "1 is on the lower valid boundary. 5 would also work."
      },
      {
        "q": "Which is invalid test data for nights?",
        "options": [
          "6",
          "3",
          "1",
          "5"
        ],
        "answer": "6",
        "exp": "6 is outside the valid 1 to 5 range."
      },
      {
        "q": "What should newPrice(5, \"premium\") return if Premium is \u00a380 per night?",
        "options": [
          "400",
          "300",
          "80",
          "5"
        ],
        "answer": "400",
        "exp": "5 \u00d7 80 = 400."
      },
      {
        "q": "What should a function do with its calculated price?",
        "options": [
          "Return it",
          "Always print it only",
          "Store it in room",
          "Use it as a Boolean"
        ],
        "answer": "Return it",
        "exp": "A function should return the calculated value."
      },
      {
        "q": "What logic error is caused by for count = 1 to 8 for room indexes 0 to 8?",
        "options": [
          "It misses room 0",
          "It includes room 9",
          "It changes data type",
          "It sorts the array"
        ],
        "answer": "It misses room 0",
        "exp": "Starting at 1 skips index 0."
      },
      {
        "q": "Where should total = 0 be placed when totalling the room array?",
        "options": [
          "Before the loop starts",
          "Inside every iteration",
          "After print(total)",
          "Not used"
        ],
        "answer": "Before the loop starts",
        "exp": "Resetting inside the loop loses the running total."
      },
      {
        "q": "What are the two inputs for the car park algorithm?",
        "options": [
          "Hours parked and whether the car is electric",
          "Room and surname",
          "Student and Saturday",
          "Sensor and date"
        ],
        "answer": "Hours parked and whether the car is electric",
        "exp": "The price depends on hours and electric status."
      },
      {
        "q": "How much does an electric car cost for 3 hours?",
        "options": [
          "\u00a36",
          "\u00a312",
          "\u00a38",
          "\u00a33"
        ],
        "answer": "\u00a36",
        "exp": "Electric cars pay \u00a32 per hour, so 3 \u00d7 \u00a32 = \u00a36."
      },
      {
        "q": "When should the car park algorithm stop?",
        "options": [
          "When the user enters 0 hours",
          "When the car is electric",
          "After one calculation",
          "When price is 0 only"
        ],
        "answer": "When the user enters 0 hours",
        "exp": "The requirement says repeat until 0 hours is entered."
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
