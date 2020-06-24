class Form {

    constructor() {
        this.input = createInput("Name");
        this.email = createInput("E-mail")
        this.button = createButton('Submit');
        this.greeting = createElement('h2');
        this.text = createElement('h1', "Lets Do A Survey On Our School Students");
        this.question1 = createElement('h3', "Q1) Do you want to go back to school");
        this.radio = createRadio('h3');
        this.radio.option('yes');
        this.radio.option('No');
        this.question2 = createElement('h3', "Q2) How much do you miss school on a scal of 1-10");
        this.radio1 = createRadio('h3');
        this.radio1.option('1');
        this.radio1.option('2');
        this.radio1.option('3');
        this.radio1.option('4');
        this.radio1.option('5');
        this.radio1.option('6');
        this.radio1.option('7');
        this.radio1.option('8');
        this.radio1.option('9');
        this.radio1.option('10');
        this.question3 = createElement('h3', "Q3) Would you risk coming back to school");
        this.radio2 = createRadio('h3');
        this.radio2.option('yes');
        this.radio2.option('No');
    }


    display() {
        this.input.position(670, 255)
        this.email.position(670, 165)
        this.button.position(700, 700)
        this.greeting.position(600, 105)
        this.text.position(600, 5)
        this.question1.position(500, 360)
        this.radio.position(600, 420)
        this.question2.position(500, 450)
        this.radio1.position(600, 510)
        this.question3.position(500, 540)
        this.radio2.position(600, 600)

        this.button.mousePressed(() => {
            User.input = this.input.value();
            User.email = this.email.value();
            peopleCount += 1;
            User.index = peopleCount;
            User.update();
            User.updateCount(peopleCount);
        });

    }
}