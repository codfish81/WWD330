const quiz = [
    { name: "Superman",realName: "Clark Kent" },
    { name: "Wonder Woman",realName: "Diana Prince" },
    { name: "Batman",realName: "Bruce Wayne" },
    { name: "The Hulk",realName: "Bruce Banner" },
    { name: "Spider-man",realName: "Peter Parker" },
    { name: "Cyclops",realName: "Scott Summers" }
];

// View Object
const view = {
    score: document.querySelector('#score strong'),
    question: document.getElementById('question'),
    result: document.getElementById('result'),
    info: document.getElementById('info'),
    start: document.getElementById('start'),
    response: document.querySelector('#response'),
    render(target,content,attributes) {
        for(const key in attributes) {
            target.setAttribute(key, attributes[key]);
        }
        target.innerHTML = content;
    },
    show(element){
        element.style.display = 'block';
    },
    hide(element){
        element.style.display = 'none';
    },
    // resetForm(){
    //     this.response.answer.value = '';
    //     this.response.answer.focus();
    // },
    setup(){
        this.show(this.question);
        this.show(this.response);
        this.show(this.result);
        this.hide(this.start);
        this.render(this.score,game.score);
        this.render(this.result,'');
        this.render(this.info,'');
        //this.resetForm();
    },
    teardown(){
        this.hide(this.question);
        this.hide(this.response);
        this.show(this.start);
    },
    buttons(array){
        return array.map(value => `<button>${value}</button>`).join('');
    }
};

const game = {
    start(quiz){
        //view.hide(view.start);
        //this.questions = [...quiz];
        //this.score = 0;
        // main game loop
            this.score = 0;
            this.questions = [...quiz];
            view.setup();
            this.ask();
        //for(const question of this.questions){
        //this.question = question;
        //this.ask();
        //}
        // end of main game loop
        //this.gameOver();
    },
    ask(_name){
        console.log('ask() invoked');
        if(this.questions.length > 2) {
        shuffle(this.questions);
        this.question = this.questions.pop();
        const options = [this.questions[0].realName, this.questions[1].realName, this.question.realName];
        shuffle(options);
        const question = `What is ${this.question.name}'s real name?`;
        view.render(view.question,question);
        view.render(view.response,view.buttons(options));
        }
        else {
        this.gameOver();
        }
    },
    // ask(_name){
    //     //const question = `What is ${this.question.name}'s real name?`;
    //     //view.render(view.question,question);
    //     //const response =  prompt(question);
    //     //this.check(response);

    //     if(this.questions.length > 0) {
    //         this.question = this.questions.pop();
    //         const question = `What is ${this.question.name}'s real name?`;
    //         view.render(view.question,question);
    //     }
    //     else {
    //         this.gameOver();
    //     }
    // },
    // check(response){
    //     const answer = this.question.realName;
    //     if(response === answer){
    //     view.render(view.result,'Correct!',{'class':'correct'});
    //     alert('Correct!');
    //     this.score++;
    //     view.render(view.score,this.score);
    //     } else {
    //     view.render(view.result,`Wrong! The correct answer was ${answer}`,{'class':'wrong'});
    //     alert(`Wrong! The correct answer was ${answer}`);
    //     }
    // },
    check(event){
        console.log('check(event) invoked');
        const response = event.target.textContent;
        const answer = this.question.realName;
        if(response === answer){
        view.render(view.result,'Correct!',{'class':'correct'});
        this.score++;
        view.render(view.score,this.score);
        } else {
        view.render(view.result,`Wrong! The correct answer was ${answer}`,{'class':'wrong'});
        }
        this.ask();
    },
    // check(event){
    //     event.preventDefault();
    //     const response = view.response.answer.value;
    //     const answer = this.question.realName;
    //     if(response === answer){
    //         view.render(view.result,'Correct!',{'class':'correct'});
    //         this.score++;
    //         view.render(view.score,this.score);
    //     } else {
    //         view.render(view.result,`Wrong! The correct answer was ${answer}`,{'class':'wrong'});
    //     }
    //     view.resetForm();
    //     this.ask();
    // },
    gameOver(){
        
        view.render(view.info,`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
        view.teardown();
    }
}
view.response.addEventListener('click', (event) => game.check(event), false);
view.start.addEventListener('click', () => game.start(quiz), false);
//view.response.addEventListener('submit', (event) => game.check(event), false);
//view.hide(view.response);