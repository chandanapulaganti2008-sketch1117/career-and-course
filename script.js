const chatform = document.getElementById("chatForm");
const userinput = document.getElementById("userInput");
const chatbox = document.getElementById("chatBox");

chatForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const question = userInput.value.trim();

  if (question === "") return;

  addMessage(question, "user");

  const answer = getAdvice(question.toLowerCase());

  setTimeout(function() {
    addMessage(answer, "bot");
  }, 400);

  userInput.value = "";
});

function addMessage(text, type) {
  const message = document.createElement("div");
  message.className = "message " + type;
  message.textContent = text;
  chatBox.appendChild(message);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getAdvice(question) {
  if (
    question.includes("computer") ||
    question.includes("coding") ||
    question.includes("programming") ||
    question.includes("software")
  ) {
    return "You could explore Software Development, Web Development, AI or Data Science. Start with programming basics and small projects. Which area interests you most?";
  }

  if (
    question.includes("design") ||
    question.includes("creative") ||
    question.includes("drawing")
  ) {
    return "You could explore UI/UX Design, Graphic Design or Animation. Try beginner design projects and build a portfolio.";
  }

  if (
    question.includes("business") ||
    question.includes("management")
  ) {
    return "You could explore Business Management, Marketing, Finance or Entrepreneurship. Courses in business and communication may help.";
  }

  if (
    question.includes("medical") ||
    question.includes("biology") ||
    question.includes("doctor")
  ) {
    return "You could explore healthcare, life sciences or biology-related courses. The right path depends on your qualifications and admission requirements.";
  }

  if (
    question.includes("course") ||
    question.includes("degree") ||
    question.includes("study")
  ) {
    return "Tell me your current class or degree, your favourite subjects, and your interests. I can suggest relevant courses and career paths.";
  }

  if (
    question.includes("hello") ||
    question.includes("hi")
  ) {
    return "Hello! 😊 Tell me your interests, favourite subjects or career goal, and let's explore your options.";
  }

  return "Let's find a suitable path for you! Tell me your favourite subject, skills, current qualification and what kind of work you enjoy.";
}
function findCareer() {

    const interest = document

        .getElementById("interest")

        .value.toLowerCase();

    const result = document.getElementById("result");

    if (interest.trim() === "") {

        result.textContent = "Please enter your interests!";

    } else if (interest.includes("computer") ||

               interest.includes("coding")) {

        result.textContent =

            "Suggested career: Software Developer 💻";

    } else if (interest.includes("biology") ||

               interest.includes("medical")) {

        result.textContent =

            "Suggested career: Healthcare Professional 🏥";

    } else if (interest.includes("business")) {

        result.textContent =

            "Suggested career: Business Analyst 📊";

    } else {

        result.textContent =

            "Explore careers in " + interest +

            " and learn which skills they require !";
    }
}
// Get HTML elements

const chatForm = document.getElementById("chatForm");

const userInput = document.getElementById("userInput");

const chatBox = document.getElementById("chatBox");

// Function to display messages

function addMessage(message, sender) {

    const messageDiv = document.createElement("div");

    messageDiv.classList.add("message", sender);

    messageDiv.textContent = message;

    chatBox.appendChild(messageDiv);

    // Scroll to the latest message

    chatBox.scrollTop = chatBox.scrollHeight;

}

// Career suggestion function

function getCareerAdvice(input) {

    const text = input.toLowerCase();

    if (

        text.includes("computer") ||

        text.includes("coding") ||

        text.includes("programming") ||

        text.includes("software")

    ) {

        return "💻 You may enjoy careers such as Software Developer, Web Developer, Data Analyst, or Cybersecurity Analyst. Start by learning programming languages like Python or JavaScript.";

    }

    else if (

        text.includes("doctor") ||

        text.includes("medical") ||

        text.includes("biology") ||

        text.includes("health")

    ) {

        return "🏥 You could explore careers in healthcare, medicine, biotechnology, or nursing. Research the required qualifications and entrance exams for each path.";

    }

    else if (

        text.includes("business") ||

        text.includes("management") ||

        text.includes("marketing")

    ) {

        return "📊 You could explore Business Management, Marketing, Human Resources, or Entrepreneurship. Communication and analytical skills can be useful.";

    }

    else if (

        text.includes("design") ||

        text.includes("drawing") ||

        text.includes("creative") ||

        text.includes("art")

    ) {

        return "🎨 You could explore Graphic Design, UI/UX Design, Animation, or Product Design. Start building a portfolio of your creative work.";

    }

    else if (

        text.includes("math") ||

        text.includes("mathematics") ||

        text.includes("statistics")

    ) {

        return "📐 You could explore Data Science, Statistics, Engineering, or Actuarial Science. Strengthening mathematics and problem-solving skills will help.";

    }

    else if (

        text.includes("teacher") ||

        text.includes("teaching") ||

        text.includes("education")

    ) {

        return "📚 You could explore Teaching, Educational Technology, Academic Counselling, or Training. Check the qualifications required for your chosen role.";

    }

    else if (

        text.includes("engineer") ||

        text.includes("engineering") ||

        text.includes("machines")

    ) {

        return "⚙️ You could explore engineering fields such as Mechanical, Civil, Electrical, or Computer Engineering. Choose based on your interests and qualifications.";

    }

    else if (

        text.includes("government") ||

        text.includes("civil services") ||

        text.includes("upsc")

    ) {

        return "🏛️ You could explore government careers and civil services. Research the eligibility criteria, exam syllabus, and preparation requirements for the role you want.";

    }

    else if (

        text.includes("law") ||

        text.includes("lawyer") ||

        text.includes("legal")

    ) {

        return "⚖️ You could explore Law, Legal Research, or Corporate Legal Services. Check the recognised law courses and qualifications required.";

    }

    else if (

        text.includes("finance") ||

        text.includes("accounting") ||

        text.includes("accounts")

    ) {

        return "💰 You could explore Accounting, Finance, Banking, or Financial Analysis. You can research courses such as B.Com, CA, and other relevant qualifications.";

    }

    else {

        return "🌟 Thanks for sharing your interest! Tell me more about the subjects you enjoy, your skills, or the work you would like to do. I can suggest some career paths to explore.";

    }

}

// Handle form submission

chatForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const message = userInput.value.trim();

    if (message === "") {

        return;

    }

    // Display user's message

    addMessage(message, "user");

    // Get and display career advice

    const advice = getCareerAdvice(message);

    setTimeout(function() {

        addMessage(advice, "bot");

    }, 400);

    // Clear input field

    userInput.value = "";

    userInput.focus();

});