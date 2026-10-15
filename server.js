const express = require("express");

const app = express();
const PORT = 3000;

// Allow the server to receive JSON data
app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.send("CareerGuide Backend is Running!");
});

// Career advisor API
app.post("/api/career", (req, res) => {
    const { interest } = req.body;

    if (!interest || typeof interest !== "string" || !interest.trim()) {
        return res.status(400).json({
            error: "Please enter your interests."
        });
    }

    const text = interest.toLowerCase();
    let advice;

    if (
        text.includes("computer") ||
        text.includes("coding") ||
        text.includes("programming")
    ) {
        advice =
            "You can explore Software Development, Web Development, or Data Science.";
    } else if (
        text.includes("biology") ||
        text.includes("medical") ||
        text.includes("health")
    ) {
        advice =
            "You can explore healthcare, medicine, biotechnology, or nursing.";
    } else if (
        text.includes("business") ||
        text.includes("management") ||
        text.includes("marketing")
    ) {
        advice =
            "You can explore Business Management, Marketing, or Entrepreneurship.";
    } else if (
        text.includes("design") ||
        text.includes("drawing") ||
        text.includes("art")
    ) {
        advice =
            "You can explore Graphic Design, UI/UX Design, or Animation.";
    } else if (
        text.includes("math") ||
        text.includes("mathematics")
    ) {
        advice =
            "You can explore Data Science, Statistics, or Engineering.";
    } else {
        advice =
            "Tell me more about your interests and favourite subjects so I can suggest career paths to explore.";
    }

    res.json({
        success: true,
        interest: interest.trim(),
        recommendation: advice
    });
});

// Start the backend server
app.listen(PORT, () => {
    console.log(`CareerGuide backend running at http://localhost:${PORT}`);
});