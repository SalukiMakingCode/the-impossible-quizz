let username : string ;
let counterQuestion : number = 0;
let response : string ;

const questionList : {[id: number]:any} = [
    {
        id:0,
        question:"question 1",
        response:"réponse 1",
        hint1:"",
        hint2:""
    },
    {
        id:1,
        question:"question 2",
        response:"réponse 2",
        hint1:"",
        hint2:""
    },
    {
        id:2,
        question:"question 3",
        response:"réponse 3",
        hint1:"",
        hint2:""
    },
    {
        id:3,
        question:"question 4",
        response:"réponse 4",
        hint1:"",
        hint2:""
    },
    {
        id:4,
        question:"question 5",
        response:"réponse 5",
        hint1:"",
        hint2:""
    },
    {
        id:5,
        question:"question 6",
        response:"réponse 6",
        hint1:"",
        hint2:""
    },
    {
        id:6,
        question:"question 7",
        response:"réponse 7",
        hint1:"",
        hint2:""
    },
    {
        id:7,
        question:"question 8",
        response:"réponse 8",
        hint1:"",
        hint2:""
    },
    {
        id:8,
        question:"question 9",
        response:"réponse 9",
        hint1:"",
        hint2:""
    },
    {
        id:9,
        question:"question 10",
        response:"réponse 10",
        hint1:"",
        hint2:""
    }
]

document.getElementById("sendUsername")?.addEventListener("click", ()=>{
    username = (document.getElementById("inputUsername") as HTMLInputElement).value;
    if (username===null || username==="") {
        alert("You must enter a Username to play this game");
    }
    else {
        const hideAskUserName = (document.getElementById("askUsername") as HTMLElement).style.display = 'none';
        const hideUserName = (document.getElementById("username") as HTMLElement).style.display = 'none';
        const hideSendUserName = (document.getElementById("sendUsername") as HTMLElement).style.display = 'none';

        const showQuestion = (document.getElementById("question") as HTMLElement).style.display = 'flex';
        const showResponse = (document.getElementById("response") as HTMLElement).style.display = 'flex';
        const showSendResponse = (document.getElementById("sendResponse") as HTMLElement).style.display = 'flex';

        (document.getElementById("question") as HTMLElement).textContent = questionList[counterQuestion].question;
    }
})

document.getElementById("sendResponse")?.addEventListener("click", ()=>{
    response = (document.getElementById("inputResponse") as HTMLInputElement).value;
    if (response === questionList[counterQuestion].response && counterQuestion<9) {
        counterQuestion++;
        (document.getElementById("question") as HTMLElement).textContent = questionList[counterQuestion].question;
    }
    else if (response === questionList[counterQuestion].response && counterQuestion===9) {
        alert("Yeah, you did it !");
    }
    else {
        alert("Nop, try again :");
    }
})




