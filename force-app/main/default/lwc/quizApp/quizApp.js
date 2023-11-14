import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    selected ={} //for answers
    correctAnswers=0
    isSubmitted=false
    myQuestions = [
        {
            id:"Question1",
            question:"Which one of the Following is not a template Loop?",
            answers:{
                a:"for:each Loop",
                b:"Iterator",
                c:"map Loop"
            },
            correctAnswer: "c"
        },
        {
            id:"Question2",
            question:"Which one of the Following is invalid file in LWCComponent folder?",
            answers:{
                a:".svg",
                b:".apex",
                c:".js"
            },
            correctAnswer: "b"
        },
        {
            id:"Question3",
            question:"Which one of the Following is not a directive?",
            answers:{
                a:"for:each",
                b:"if:true",
                c:"@track"
            },
            correctAnswer: "c"
        },
    ];

    changeHandler(event){
        console.log('Name '+event.target.name)
        console.log('Value '+event.target.value)
        const{name,value} = event.target
        this.selected = {...this.selected, [name]: value}
    }
    submitHandler(event){
        event.preventDefault()
        let correct = this.myQuestions.filter(item => this.selected[item.id]=== item.correctAnswer)
        this.correctAnswers = correct.length
        console.log('Correct Answers :'+this.correctAnswers)
        this.isSubmitted = true
    }
    
    resetHandler(event){
        this.selected={}
        this.correctAnswers = 0;
        this.isSubmitted = false
    }

    get allNotSelected(){
        return  !(Object.keys(this.selected).length ===this.myQuestions.length)
    }
    get isScoredFull(){
        return `slds-text-heading_large ${this.myQuestions.length === this.correctAnswers? 
                `slds-text-color_success`: `slds-text-color_error`}`
    }
}