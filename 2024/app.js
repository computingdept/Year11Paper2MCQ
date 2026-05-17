const topics = [
  {
    id: "constructs",
    title: "Constructs & flowcharts",
    subtitle: "selection, iteration, flowchart shapes",
    summary: "Know whether keywords belong to selection or iteration, and use correct flowchart shapes for input, output and decisions.",
    questions: [
      {q:"Which programming construct uses the keyword if?", options:["Selection","Iteration","Sequence","Concatenation"], answer:"Selection", exp:"if is used to choose between different paths, so it is selection."},
      {q:"Which programming construct uses the keywords for and while?", options:["Iteration","Selection","Casting","Defensive design"], answer:"Iteration", exp:"for and while create loops, so they are examples of iteration."},
      {q:"In a flowchart, which shape should be used for INPUT num?", image:"assets/odd-even-flowchart.png", options:["Parallelogram","Diamond","Rectangle","Terminator only"], answer:"Parallelogram", exp:"Inputs and outputs are shown using parallelograms in OCR flowcharts."},
      {q:"In the odd/even flowchart, what shape should contain the condition num MOD 2 == 0?", image:"assets/odd-even-flowchart.png", options:["Diamond","Parallelogram","Rectangle","Circle"], answer:"Diamond", exp:"A decision uses a diamond because it has True/False or Yes/No branches."},
      {q:"For the condition num MOD 2 == 0, which output should the True branch lead to?", image:"assets/odd-even-flowchart.png", options:["Even","Odd","Start","Input num"], answer:"Even", exp:"If the remainder after dividing by 2 is 0, the number is even."},
      {q:"Why must decision branches be labelled True/False or Yes/No?", options:["So the route through the algorithm is clear","So the program becomes encrypted","So the flowchart needs no End symbol","So all variables become strings"], answer:"So the route through the algorithm is clear", exp:"The label shows which path is followed when the condition is met or not met."}
    ]
  },
  {
    id: "errors-search-sort",
    title: "Errors, search & sort",
    subtitle: "syntax, logic, binary search, merge sort",
    summary: "Syntax errors break the language rules. Logic errors run but give the wrong result. Binary search needs sorted data.",
    questions: [
      {q:"What is a syntax error?", options:["An error that breaks the rules of the programming language","An error where the program runs but gives the wrong answer","A type of sorting algorithm","A database field name"], answer:"An error that breaks the rules of the programming language", exp:"Syntax errors are grammar/rule mistakes that may stop code from running or translating."},
      {q:"Which is the best example of a syntax error?", options:["Misspelling print as pritn","Adding num1 + num1 instead of num1 + num2","Using a sorted list for binary search","Entering 40 as valid height"], answer:"Misspelling print as pritn", exp:"A misspelled keyword can break the programming language rules."},
      {q:"A program should calculate total = num1 + num2. Which line contains a logic error?", code:"01 num1 = input(\"Enter a number\")\n02 num2 = input(\"Enter a number\")\n03 total = num1 + num1", options:["Line 03","Line 01","Line 02","No line has an error"], answer:"Line 03", exp:"Line 03 uses num1 twice instead of adding num1 and num2."},
      {q:"Which condition correctly checks if total is between 10 and 20 inclusive?", options:["total >= 10 AND total <= 20","total >= 10 AND <= 20","total > 10 AND total < 20","total <= 10 OR total >= 20"], answer:"total >= 10 AND total <= 20", exp:"Both comparisons must include the variable, and inclusive limits use >= and <=."},
      {q:"Binary search is used to find 10 in 1, 2, 5, 6, 7, 10, 20. What value is compared first?", options:["6","1","10","20"], answer:"6", exp:"The middle value of the seven-item sorted list is 6."},
      {q:"After comparing 10 with 6 in the binary search, which side is kept?", options:["The right side, because 10 is greater than 6","The left side, because 10 is less than 6","Both sides are kept","No values are kept"], answer:"The right side, because 10 is greater than 6", exp:"Values smaller than or equal to 6 on the left can be discarded when searching for 10."},
      {q:"What is a pre-requisite for binary search?", options:["The data must be sorted","The data must be encrypted","The data must be in a database","The data must contain strings only"], answer:"The data must be sorted", exp:"Binary search relies on knowing which half of the ordered data to discard."},
      {q:"Which sorting algorithm splits data into individual items before recombining in order?", options:["Merge sort","Bubble sort","Insertion sort","Linear search"], answer:"Merge sort", exp:"Merge sort divides the data, then merges it back together in sorted order."}
    ]
  },
  {
    id: "defensive-logic",
    title: "Defensive design & logic",
    subtitle: "inputs, outputs, validation, truth tables",
    summary: "Defensive design reduces misuse and bad data. Boolean logic needs careful use of AND, OR and NOT.",
    questions: [
      {q:"For a video search program, which is a suitable input?", options:["Search text entered by the user","The speaker sound","The search results shown","The average rating displayed"], answer:"Search text entered by the user", exp:"The user provides search text as input to the program."},
      {q:"For a video search program, which is a suitable output?", options:["A list of search results","A mouse click","A rating typed by the user","A password entered by the user"], answer:"A list of search results", exp:"Search results are produced by the program and shown to the user."},
      {q:"Which is an example of validation?", options:["Only allowing a rating from 1 to 10","Making code comments clearer","Changing Python into machine code","Sorting videos alphabetically"], answer:"Only allowing a rating from 1 to 10", exp:"Validation checks whether input data is sensible or allowed."},
      {q:"Which defensive design method checks that a user is allowed to access a system?", options:["Authentication","Concatenation","Iteration","Merge sort"], answer:"Authentication", exp:"Authentication checks identity, often using a username and password."},
      {q:"For P = (A AND B) OR C, what is P when A=0, B=0, C=1?", options:["1","0","A","B"], answer:"1", exp:"A AND B is 0, but OR C makes the final output 1 because C is 1."},
      {q:"For P = (A AND B) OR C, what is P when A=1, B=1, C=0?", options:["1","0","C","NOT A"], answer:"1", exp:"A AND B is 1, so the whole expression is 1 even though C is 0."},
      {q:"For P = (A AND B) OR C, which rows make P equal to 0?", options:["000, 010 and 100","001, 011 and 101","110 and 111 only","All rows"], answer:"000, 010 and 100", exp:"P is 0 only when C is 0 and A AND B is also 0."},
      {q:"The circuit P = NOT A AND (B OR C) needs which gate directly connected to A?", image:"assets/logic-circuit-template.png", options:["NOT gate","OR gate","AND gate","XOR gate"], answer:"NOT gate", exp:"A must be inverted first because the expression uses NOT A."},
      {q:"In P = NOT A AND (B OR C), which inputs go into the OR gate?", image:"assets/logic-circuit-template.png", options:["B and C","A and B","A and C","P and A"], answer:"B and C", exp:"The bracketed part of the expression is B OR C."}
    ]
  },
  {
    id: "strings-translators",
    title: "Strings & translators",
    subtitle: "string handling, concatenation, low-level languages",
    summary: "OCR Exam Reference Language can use .length, .upper, .left() and .right(). Compilers translate high-level code before execution.",
    questions: [
      {q:"Given message = \"abcd1234\", what is message.length?", options:["8","4","1234","abcd"], answer:"8", exp:"There are 8 characters in abcd1234."},
      {q:"Given message = \"abcd1234\", what is message.upper?", options:["ABCD1234","abcd1234","ABCD","1234"], answer:"ABCD1234", exp:"upper converts letters to uppercase. The digits stay the same."},
      {q:"Given message = \"abcd1234\", what is message.left(4)?", options:["abcd","1234","ABCD","cd12"], answer:"abcd", exp:"left(4) returns the first four characters."},
      {q:"Given message = \"abcd1234\", what is int(message.right(4)) * 2?", options:["2468","12341234","abcdabcd","8"], answer:"2468", exp:"right(4) gives 1234. Casting to integer allows 1234 * 2 = 2468."},
      {q:"Which pseudocode correctly concatenates word1 and word2 into message?", code:"word1 = \"Hello\"\nword2 = \"Everyone\"", options:["message = word1 + word2","message == word1 + word2","message = word1, word2","word1 + word2 = message"], answer:"message = word1 + word2", exp:"The assignment stores the joined string HelloEveryone in message."},
      {q:"Why might some programs be written in a low-level language?", options:["To give direct control of hardware","To make every command English-like","To avoid using memory completely","To remove all logic errors"], answer:"To give direct control of hardware", exp:"Low-level languages can give close control over hardware and memory."},
      {q:"Which is a benefit of using a compiler instead of an interpreter?", options:["It can produce an executable file","It always prevents logic errors","It removes the need for testing","It makes source code visible to all users"], answer:"It can produce an executable file", exp:"A compiler can produce executable code that can run without translating every time."},
      {q:"Why can compiled programs run faster than interpreted ones?", options:["They do not need to be translated line by line each time","They contain no variables","They cannot use functions","They are always written in assembly language"], answer:"They do not need to be translated line by line each time", exp:"Compilation translates the program before execution, so repeated line-by-line translation is not needed at runtime."}
    ]
  },
  {
    id: "maintain-functions",
    title: "Maintainability & functions",
    subtitle: "comments, identifiers, constants, parameters",
    summary: "Maintainable code is easier to understand and change. Functions should use their parameters and return values.",
    questions: [
      {q:"Which change would improve the maintainability of variable p in a movement algorithm?", options:["Rename it to position","Rename it to x","Remove the variable","Change it to a random keyword"], answer:"Rename it to position", exp:"position is a meaningful identifier because it describes what the variable stores."},
      {q:"Why are comments useful for maintainability?", options:["They explain what sections of code do","They make the program run faster","They automatically fix errors","They replace all variables"], answer:"They explain what sections of code do", exp:"Comments help another programmer understand and maintain the code."},
      {q:"Why could the value 512 be stored as a constant in the movement algorithm?", options:["It is a boundary value that should not change during execution","It must be input every time","It is the name of a function","It proves the code is encrypted"], answer:"It is a boundary value that should not change during execution", exp:"Constants make important fixed values clearer and easier to change in one place."},
      {q:"A function moveCharacter(direction, position) should do what with its parameters?", options:["Use direction and position without asking for them again","Ignore both parameters","Overwrite them with input every time","Print them and stop"], answer:"Use direction and position without asking for them again", exp:"The data has already been passed into the function through parameters."},
      {q:"If direction is left, what should happen to position?", options:["Subtract 5","Add 5","Set it to 512 every time","Return False"], answer:"Subtract 5", exp:"The question states that moving left subtracts 5 from the position."},
      {q:"If direction is right, what should happen to position?", options:["Add 5","Subtract 5","Set it to 1 every time","Convert it to a string"], answer:"Add 5", exp:"The question states that moving right adds 5 to the position."},
      {q:"If the new position is less than 1, what should moveCharacter return after correction?", options:["1","0","-5","512"], answer:"1", exp:"The minimum allowed position is 1, so values below 1 are capped at 1."},
      {q:"If the new position is greater than 512, what should moveCharacter return after correction?", options:["512","513","1","True"], answer:"512", exp:"The maximum allowed position is 512, so values above 512 are capped at 512."}
    ]
  },
  {
    id: "sports-day",
    title: "Sports day program",
    subtitle: "arrays, trace tables, validation, SQL, decomposition",
    summary: "The sports day context links data types, arrays, trace tables, input validation, SQL and computational thinking.",
    questions: [
      {q:"Which is the most appropriate data type for teamName = \"Super-Team\"?", options:["String","Integer","Real","Boolean"], answer:"String", exp:"The value contains text, so string is the most appropriate data type."},
      {q:"Which is the most appropriate data type for studentYearGroup = 11?", options:["Integer","String","Real","Boolean"], answer:"Integer", exp:"Year group is a whole number."},
      {q:"Which is the most appropriate data type for javelinThrow = 18.2?", options:["Real / Float","Integer","String","Boolean"], answer:"Real / Float", exp:"The value contains a decimal, so a real or float is appropriate."},
      {q:"In a linear search through theTeam, what should be used as the array index inside the loop?", code:"for count = 0 to theTeam.length() - 1\n  if theTeam[ ? ] == studentName then", options:["count","studentName","True","theTeam"], answer:"count", exp:"count changes each loop and is used to access each array position."},
      {q:"In the linear search function, what should be returned when the student is found?", options:["True","False","count + 1","theTeam.length"], answer:"True", exp:"The function returns True if the student name is in the array."},
      {q:"A Year 10 student throws 14.3m. What score is first set after checking the throw distance?", code:"if javelinThrow >= 20.0 then score = 3\nelseif javelinThrow >= 10.0 then score = 2\nelse score = 1", options:["2","3","1","4"], answer:"2", exp:"14.3 is at least 10.0 but less than 20.0, so score becomes 2."},
      {q:"The same Year 10 student has score 2. What is the final score after year group is checked?", code:"if yearGroup != 11 then\n  score = score * 2\nendif", options:["4","2","3","11"], answer:"4", exp:"Year 10 is not equal to 11, so the score doubles from 2 to 4."},
      {q:"Which condition correctly validates a high jump height between 40.0 and 180.0 inclusive?", options:["height >= 40.0 AND height <= 180.0","height >= 40.0 AND <= 180.0","height > 40.0 AND height < 180.0","height < 40.0 AND height > 180.0"], answer:"height >= 40.0 AND height <= 180.0", exp:"Both comparisons need the variable and the limits are inclusive."},
      {q:"Which is boundary test data for a valid high jump height?", options:["40.0","50.0","39.9","hello"], answer:"40.0", exp:"40.0 is exactly on the lower valid boundary."},
      {q:"Which is erroneous test data for high jump height?", options:["hello","40.0","180.0","100.5"], answer:"hello", exp:"The height should be numeric, so text is erroneous."},
      {q:"Complete the SQL: SELECT StudentID, ___ FROM TblResult WHERE YearGroup = 11", options:["TeamName","TblResult","YearGroup = 11","StudentID AND TeamName"], answer:"TeamName", exp:"The question asks to show StudentID and team name, so TeamName is the second selected field."},
      {q:"Complete the SQL: SELECT StudentID, TeamName FROM ___ WHERE YearGroup = 11", options:["TblResult","TblResults","TeamName","StudentID"], answer:"TblResult", exp:"The table name given in the question is TblResult, singular."},
      {q:"Which example best shows abstraction in the sports day program?", options:["Using StudentID instead of storing every personal detail","Breaking the program into separate event routines","Writing every possible detail about each student","Using a loop forever"], answer:"Using StudentID instead of storing every personal detail", exp:"Abstraction focuses on relevant data and ignores unnecessary details."},
      {q:"Which example best shows decomposition in the sports day program?", options:["Splitting the program into separate routines for events","Ignoring irrelevant personal details","Making all variables one letter","Removing validation"], answer:"Splitting the program into separate routines for events", exp:"Decomposition breaks a large problem into smaller parts."},
      {q:"For an algorithm that repeatedly enters team scores until stop is entered, which construct is needed?", options:["Iteration","Casting","Concatenation only","A NOT gate"], answer:"Iteration", exp:"The inputs repeat until a stopping condition is met."},
      {q:"To find the winning team, what must the algorithm keep track of?", options:["The current highest score and matching team name","Only the last team entered","Only teams with zero points","The number of characters in each team name"], answer:"The current highest score and matching team name", exp:"The winner is the team with the highest score, so both the score and team name must be stored."}
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
