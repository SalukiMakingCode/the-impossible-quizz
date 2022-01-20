"use strict";
var _a, _b;
var username;
var counterQuestion = 0;
var response;
var questionList = [
    {
        id: 0,
        question: "question 1",
        response: "réponse 1",
        hint1: "",
        hint2: ""
    },
    {
        id: 1,
        question: "question 2",
        response: "réponse 2",
        hint1: "",
        hint2: ""
    },
    {
        id: 2,
        question: "question 3",
        response: "réponse 3",
        hint1: "",
        hint2: ""
    },
    {
        id: 3,
        question: "question 4",
        response: "réponse 4",
        hint1: "",
        hint2: ""
    },
    {
        id: 4,
        question: "question 5",
        response: "réponse 5",
        hint1: "",
        hint2: ""
    },
    {
        id: 5,
        question: "question 6",
        response: "réponse 6",
        hint1: "",
        hint2: ""
    },
    {
        id: 6,
        question: "question 7",
        response: "réponse 7",
        hint1: "",
        hint2: ""
    },
    {
        id: 7,
        question: "question 8",
        response: "réponse 8",
        hint1: "",
        hint2: ""
    },
    {
        id: 8,
        question: "question 9",
        response: "réponse 9",
        hint1: "",
        hint2: ""
    },
    {
        id: 9,
        question: "question 10",
        response: "réponse 10",
        hint1: "",
        hint2: ""
    }
];
(_a = document.getElementById("sendUsername")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    username = document.getElementById("inputUsername").value;
    if (username === null || username === "") {
        alert("You must enter a Username to play this game");
    }
    else {
        var hideAskUserName = document.getElementById("askUsername").style.display = 'none';
        var hideUserName = document.getElementById("username").style.display = 'none';
        var hideSendUserName = document.getElementById("sendUsername").style.display = 'none';
        var showQuestion = document.getElementById("question").style.display = 'flex';
        var showResponse = document.getElementById("response").style.display = 'flex';
        var showSendResponse = document.getElementById("sendResponse").style.display = 'flex';
        document.getElementById("question").textContent = questionList[counterQuestion].question;
    }
});
(_b = document.getElementById("sendResponse")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    response = document.getElementById("inputResponse").value;
    if (response === questionList[counterQuestion].response && counterQuestion < 9) {
        counterQuestion++;
        document.getElementById("question").textContent = questionList[counterQuestion].question;
    }
    else if (response === questionList[counterQuestion].response && counterQuestion === 9) {
        alert("Yeah, you did it !");
    }
    else {
        alert("Nop, try again :");
    }
});
//# sourceMappingURL=quizz.js.map