const topics = [
  {
    id: "validation",
    title: "Validation & test data",
    subtitle: "normal, boundary, invalid",
    summary: "Check ranges carefully. Inclusive means the end values are accepted.",
    questions: [
      {
        q: "A program accepts whole numbers from 1 to 100 inclusive. Which value is boundary test data?",
        options: ["0", "1", "27", "Hello"],
        answer: "1",
        exp: "1 is on the accepted lower boundary, so it tests the edge of the valid range."
      },
      {
        q: "A program accepts integer values only. Which test data is invalid or erroneous?",
        options: ["27", "100", "Hello", "1"],
        answer: "Hello",
        exp: "The input is text, not an integer, so the system should reject it."
      },
      {
        q: "Which condition correctly accepts values from 1 to 100 inclusive?",
        code: "num = input(\"Enter a number\")\nif __________________ then\n  print(\"accepted\")\nendif",
        options: ["num > 1 AND num < 100", "num >= 1 AND num <= 100", "num >= 1 AND <= 100", "num < 1 OR num > 100"],
        answer: "num >= 1 AND num <= 100",
        exp: "Both comparisons must include the variable, and inclusive limits use >= and <=."
      },
      {
        q: "Which identifier is the variable in this line?",
        code: "num = input(\"Enter a number between 1 and 100\")",
        options: ["num", "input", "Enter a number between 1 and 100", "100"],
        answer: "num",
        exp: "num is the named storage location used by the algorithm."
      },
      {
        q: "Which Boolean operator means both conditions must be true?",
        options: ["AND", "OR", "NOT", "PRINT"],
        answer: "AND",
        exp: "AND only gives True when both sides of the condition are True."
      },
      {
        q: "What is the main reason to test boundary data?",
        options: ["To check the edges of accepted ranges", "To check that comments work", "To sort the data", "To remove all errors automatically"],
        answer: "To check the edges of accepted ranges",
        exp: "Boundary tests are used near the lowest and highest accepted values."
      }
    ]
  },
  {
    id: "iteration",
    title: "Flowcharts & iteration",
    subtitle: "loops, constructs, IDE tools",
    summary: "Iteration repeats steps. FOR is count controlled; WHILE is condition controlled.",
    questions: [
      {
        q: "Use the flowchart shown. If x starts at 3, how many times is OK output?",
        image: "assets/flowchart-ok-loop.png",
        options: ["1", "2", "3", "4"],
        answer: "2",
        exp: "OK is output for x = 3 and x = 1. After that x becomes -1, so the loop stops."
      },
      {
        q: "Use the flowchart shown. If x starts at 10, how many times is OK output?",
        image: "assets/flowchart-ok-loop.png",
        options: ["5", "6", "10", "11"],
        answer: "6",
        exp: "OK is output for 10, 8, 6, 4, 2 and 0. The stop check happens after the subtraction."
      },
      {
        q: "Which loop is usually count controlled?",
        options: ["FOR loop", "WHILE loop", "IF statement", "CASE statement"],
        answer: "FOR loop",
        exp: "A FOR loop usually repeats a known number of times."
      },
      {
        q: "Which statement best describes a WHILE loop?",
        options: ["It repeats while a condition is true", "It always runs exactly once", "It can only run five times", "It sorts data into order"],
        answer: "It repeats while a condition is true",
        exp: "A WHILE loop tests its condition before each repetition."
      },
      {
        q: "Which two are programming constructs?",
        options: ["Sequence and selection", "Compiler and editor", "String and integer", "Table and field"],
        answer: "Sequence and selection",
        exp: "The three main constructs are sequence, selection and iteration."
      },
      {
        q: "Which IDE tool lets a programmer run code line by line?",
        options: ["Stepping", "Casting", "Concatenation", "A primary key"],
        answer: "Stepping",
        exp: "Stepping is a debugging tool that executes one line at a time."
      },
      {
        q: "What does a variable watch window help a programmer see?",
        options: ["How the contents of variables change", "The final printed exam paper", "The size of the monitor", "Only syntax keywords"],
        answer: "How the contents of variables change",
        exp: "Variable watch is useful when tracing and debugging."
      }
    ]
  },
  {
    id: "sortsearch",
    title: "Sorting & searching",
    subtitle: "merge, insertion, bubble, linear",
    summary: "Know the key steps of sorting algorithms and when a linear search stops.",
    questions: [
      {
        q: "In a merge sort, what happens first?",
        options: ["The list is divided into smaller lists", "Adjacent items are swapped repeatedly", "The middle value is always chosen as a pivot", "The first item is deleted"],
        answer: "The list is divided into smaller lists",
        exp: "Merge sort divides the list, then merges the smaller lists back in order."
      },
      {
        q: "Which final list is the result of sorting 2, 7, 3, 1, 9, 6, 5, 4 into ascending order?",
        options: ["1, 2, 3, 4, 5, 6, 7, 9", "9, 7, 6, 5, 4, 3, 2, 1", "2, 3, 1, 4, 5, 6, 7, 9", "1, 2, 4, 3, 5, 6, 7, 9"],
        answer: "1, 2, 3, 4, 5, 6, 7, 9",
        exp: "Ascending order means smallest to largest."
      },
      {
        q: "Which description matches insertion sort?",
        options: ["It uses a sorted part and an unsorted part", "It always merges two lists", "It searches from the first item only", "It requires a truth table"],
        answer: "It uses a sorted part and an unsorted part",
        exp: "Insertion sort builds up a sorted section one item at a time."
      },
      {
        q: "In bubble sort, when are a pair of values swapped?",
        options: ["When they are in the incorrect order", "Always", "Only when both are equal", "Only at the end of the list"],
        answer: "When they are in the incorrect order",
        exp: "Bubble sort compares neighbouring values and swaps them if needed."
      },
      {
        q: "Which statement about an array is most accurate for GCSE J277?",
        options: ["It is declared with a fixed length", "It can only store one value", "Its values can never be changed", "It must always be 2D"],
        answer: "It is declared with a fixed length",
        exp: "An array is usually treated as a fixed-length structure at GCSE."
      },
      {
        q: "A search starts at the first item and checks each item in order until the value is found. What search is this?",
        options: ["Linear search", "Binary search", "Merge search", "Insertion search"],
        answer: "Linear search",
        exp: "Linear search checks items one by one from the start."
      },
      {
        q: "Apart from finding the target value, when should a linear search stop?",
        options: ["When every item has been checked", "After exactly two comparisons", "When the first item is smaller", "When the list is sorted"],
        answer: "When every item has been checked",
        exp: "If the search reaches the end without a match, the value has not been found."
      }
    ]
  },
  {
    id: "files",
    title: "Files & casting",
    subtitle: "readLine, close, int",
    summary: "Reading from a file normally opens the file, reads lines, processes them, then closes the file.",
    questions: [
      {
        q: "Which statement opens a text file called data.txt in OCR Exam Reference Language style?",
        options: ["myFile = open(\"data.txt\")", "open = myFile(\"data.txt\")", "myFile.writeLine(\"data.txt\")", "data.txt = input()"],
        answer: "myFile = open(\"data.txt\")",
        exp: "The file handle myFile is assigned the opened file."
      },
      {
        q: "Which statement reads the next line from a file object called myFile?",
        options: ["myFile.readLine()", "myFile.writeLine()", "myFile.close()", "input(myFile)"],
        answer: "myFile.readLine()",
        exp: "readLine() gets a line from the external text file."
      },
      {
        q: "Why is myFile.close() used after reading a file?",
        options: ["To close the file safely", "To convert text into an integer", "To print every line automatically", "To create a new array"],
        answer: "To close the file safely",
        exp: "Closing a file releases it and helps prevent file-handling problems."
      },
      {
        q: "What does int(temp) do?",
        options: ["Casts temp to an integer", "Opens temp as a file", "Joins temp to a string", "Checks whether temp is a variable name"],
        answer: "Casts temp to an integer",
        exp: "Casting changes a value from one data type to another."
      },
      {
        q: "Which condition checks that the value in temp is not 0 after casting?",
        options: ["if int(temp) != 0", "if temp = 0", "if int != temp", "if temp.writeLine()"],
        answer: "if int(temp) != 0",
        exp: "!= means not equal to, and int(temp) treats the line as a number."
      }
    ]
  },
  {
    id: "logic",
    title: "Logic & computational thinking",
    subtitle: "AND, OR, NOT, abstraction",
    summary: "Translate scenarios into Boolean expressions and match CT terms to examples.",
    questions: [
      {
        q: "A card payment is allowed when password OR PIN is correct, AND the card is NOT blocked. Which expression matches this?",
        options: ["(A OR B) AND NOT C", "A AND B AND C", "A OR B OR C", "NOT A AND NOT B"],
        answer: "(A OR B) AND NOT C",
        exp: "The user needs either credential, and the blocked input must be false."
      },
      {
        q: "For P = A AND B, when is P true?",
        options: ["Only when A and B are both true", "When A is false", "When B is false", "Whenever either A or B is true"],
        answer: "Only when A and B are both true",
        exp: "AND requires both inputs to be true."
      },
      {
        q: "Which truth table row gives P = 1 for P = A AND B?",
        options: ["A=1, B=1", "A=1, B=0", "A=0, B=1", "A=0, B=0"],
        answer: "A=1, B=1",
        exp: "The AND output is 1 only when both inputs are 1."
      },
      {
        q: "Which example best matches decomposition?",
        options: ["Breaking the system into modules", "Ignoring unnecessary details", "Designing a step-by-step process", "Increasing the amount of RAM"],
        answer: "Breaking the system into modules",
        exp: "Decomposition means splitting a problem into smaller parts."
      },
      {
        q: "Which example best matches abstraction?",
        options: ["Only keeping the user's identity, PIN and password details", "Breaking a program into modules", "Writing a loop", "Using more RAM"],
        answer: "Only keeping the user's identity, PIN and password details",
        exp: "Abstraction keeps the important details and ignores unnecessary ones."
      },
      {
        q: "Which example best matches algorithmic thinking?",
        options: ["Designing the step-by-step payment process", "Changing the monitor", "Making the database larger", "Using more stages at a festival"],
        answer: "Designing the step-by-step payment process",
        exp: "Algorithmic thinking is about designing ordered steps to solve a problem."
      },
      {
        q: "Which condition correctly rejects two blocked PIN values?",
        code: "pin = input(\"Enter PIN\")\nif __________________ then\n  print(\"INVALID PIN\")\nendif",
        options: ["pin == \"1234\" OR pin == \"4321\"", "pin == \"1234\" OR \"4321\"", "pin = \"1234\" AND \"4321\"", "pin != \"1234\" OR pin != \"4321\""],
        answer: "pin == \"1234\" OR pin == \"4321\"",
        exp: "Each side of OR must be a full comparison using the variable."
      }
    ]
  },
  {
    id: "programming",
    title: "Programming, SQL & trace",
    subtitle: "functions, arrays, SQL, loops",
    summary: "Watch parameters, return values, SQL syntax, and loop bounds carefully.",
    questions: [
      {
        q: "Which OCR-style statements correctly store two password inputs?",
        options: ["passA = input(\"enter your password\") and passB = input(\"enter your password again\")", "input(\"enter password\") = passA", "\"passA\" = input(\"enter password\")", "passA and passB = input(\"enter password twice\")"],
        answer: "passA = input(\"enter your password\") and passB = input(\"enter your password again\")",
        exp: "Each input should be stored in a separate variable."
      },
      {
        q: "Which condition checks whether two password variables match?",
        options: ["passA == passB", "passA = passB = input", "passA != passA", "passwords match"],
        answer: "passA == passB",
        exp: "A comparison checks whether the two variables hold the same value."
      },
      {
        q: "Which SQL statement correctly selects ActID and Stage from TblMusic for Saturday acts?",
        options: [
          "SELECT ActID, Stage FROM TblMusic WHERE Day = \"Saturday\"",
          "SELECT ActID AND Stage FROM TblActs IF Day = Saturday",
          "SELECT ActID Stage WHERE TblMusic = Saturday",
          "FROM TblMusic SELECT Day = Saturday"
        ],
        answer: "SELECT ActID, Stage FROM TblMusic WHERE Day = \"Saturday\"",
        exp: "SQL uses commas between fields, the correct table name, WHERE for filtering, and quotes around text."
      },
      {
        q: "Which is an example of one complete database record from a music table with ActID, Stage, Day and SetLength?",
        options: ["1, Platinum, Saturday, 0.5", "Stage only", "SetLength", "Saturday"],
        answer: "1, Platinum, Saturday, 0.5",
        exp: "A record is one complete row made from all relevant fields."
      },
      {
        q: "What is the most suitable data type for a field storing the stage name Platinum?",
        options: ["String", "Integer", "Boolean", "Real"],
        answer: "String",
        exp: "A name is text, so it should be stored as a string."
      },
      {
        q: "What is the most suitable data type for a field storing a set length of 1.5 hours?",
        options: ["Real", "Boolean", "Character only", "Integer"],
        answer: "Real",
        exp: "1.5 contains a decimal value, so real/float is suitable."
      },
      {
        q: "A function calculatePrice(num) should calculate tickets at £60 each. Which line correctly returns the price?",
        code: "function calculatePrice(num)\n  price = num * 60\n  ____________\nendfunction",
        options: ["return price", "print price", "input price", "price == 60"],
        answer: "return price",
        exp: "A function should return the value when the question asks for a returned result."
      },
      {
        q: "Which line correctly calls calculatePrice for 3 tickets and stores the answer?",
        options: ["totalPrice = calculatePrice(3)", "calculatePrice = totalPrice(3)", "totalPrice == calculatePrice(3)", "function totalPrice(3)"],
        answer: "totalPrice = calculatePrice(3)",
        exp: "The returned value from the function call is assigned to totalPrice."
      },
      {
        q: "An array actNumbers has 5 stages with indexes 0 to 4. Which FOR loop visits every item?",
        options: ["for x = 0 to 4", "for x = 0 to 2", "for x = 1 to 5", "for x = 4 to 0"],
        answer: "for x = 0 to 4",
        exp: "Five zero-indexed items use indexes 0, 1, 2, 3 and 4."
      },
      {
        q: "Which comparison allows a booking when the exact number of remaining tickets is requested?",
        options: ["if tickets >= requested", "if tickets > requested", "if tickets < requested", "if requested == 0"],
        answer: "if tickets >= requested",
        exp: ">= allows the booking when there are exactly enough tickets left."
      },
      {
        q: "Which line outputs a message and the value stored in count?",
        options: ["print(\"The total act count is \" + count)", "print(\"The total act count is count\")", "print(count = \"The total act count is\")", "count.print(\"The total act count is\")"],
        answer: "print(\"The total act count is \" + count)",
        exp: "The string and the variable value need to be joined or output together."
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
  reviewAnswers: {},
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
      state.reviewListMode = false;
      state.reviewAnswers = {};
      state.currentKey = null;
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
  const baseKey = keyFor(question);

  // In review mode, students should be able to answer the mistake again.
  // Use a separate temporary record so the original wrong answer does not
  // instantly lock the question as already marked.
  const record = state.reviewMode ? state.reviewAnswers[baseKey] : state.answers[baseKey];

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
    const qKey = keyFor(question);
    const record = { selected: state.selected, correct };

    if (state.reviewMode) {
      state.reviewAnswers[qKey] = record;
    }

    // Store the latest result as the main score, so a corrected mistake
    // improves the topic score and progress.
    state.answers[qKey] = record;
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
  state.reviewListMode = false;
  state.reviewAnswers = {};
  state.currentKey = null;
  topics.forEach(t => t.questions.forEach(q => delete q.shuffledOptions));
  buildQuestionSet();
  render();
});
el.shuffleBtn.addEventListener("click", () => {
  const topic = getTopic();
  topic.questions = shuffleArray(topic.questions);
  topic.questions.forEach(q => delete q.shuffledOptions);
  state.index = 0;
  state.selected = null;
  state.marked = false;
  state.currentKey = null;
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
