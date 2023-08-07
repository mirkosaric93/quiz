const quizData = [
    {
        question: 'How many time zones are there in Russia?',
        a: '7',
        b: '11',
        c: '9',
        d: '5',
        correct: 'b'
    },
    {
        question: 'Which of the following empires had no written language?',
        a: 'Incan',
        b: 'Roman',
        c: 'Egyptain',
        d: 'Aztec',
        correct: 'a'
    },
    {
        question: 'Who invented the World Wide Web, and when?',
        a: 'Bill Gates, 1992',
        b: 'James Goslin, 1994',
        c: 'Tim Berners-Lee, 1990',
        d: 'Dennis Ritchie, 1988',
        correct: 'c'
    },
    {
        question: 'Name the longest river in the world?',
        a: 'The Nile',
        b: 'Amazon',
        c: 'Mississippi',
        d: 'Yangtze',
        correct: 'a'
    },
    {
        question: 'Which driver has won the most Formula 1 championships?',
        a: 'Lewis Hamilton',
        b: 'Juan Manuel Fangio',
        c: 'Ayrton Senna',
        d: 'Michael Schumacher',
        correct: 'd'
    },
]

const quiz = document.querySelector('#quiz');
const questionEl = document.querySelector('#question');
const answersEls = document.querySelectorAll('.answer');
const a_text = document.querySelector('#a_text');
const b_text = document.querySelector('#b_text');
const c_text = document.querySelector('#c_text');
const d_text = document.querySelector('#d_text');
const submitBtn = document.querySelector('#submit');
let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswer();
    const currentQuestion = quizData[currentQuiz];

    questionEl.innerText = currentQuestion.question;
    a_text.innerText = currentQuestion.a;
    b_text.innerText = currentQuestion.b;
    c_text.innerText = currentQuestion.c;
    d_text.innerText = currentQuestion.d;
}

function deselectAnswer(){
    answersEls.forEach(ansverEl => {ansverEl.checked = false})
}

function getSelected(){
    let answer;
    answersEls.forEach(ansverEl =>{
        if(ansverEl.checked){
            answer = ansverEl.id;
            // answer = ansverEl.getAttribute('id'); Ovo je isto, ali kod iznas je skracen
        }
    })
    return answer;
}

submitBtn.addEventListener('click', ()=>{
    const answer = getSelected();
    
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++
        if(currentQuiz < quizData.length){
            loadQuiz()
        }else{
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly.</h2>
            <button onclick="location.reload()">Reload</button>
            `
        }
    }else{
        alert('Please, give the answer.')
    }
});

/*const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "Javascript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "None of the above",
        correct: "b",
    },
];*/