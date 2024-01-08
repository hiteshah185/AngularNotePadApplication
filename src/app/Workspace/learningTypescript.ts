type answer= string|number;

export interface TeranetUser{
    username:string|number;
    password:string;
    email:TeranetEmail;
    login():boolean;
}

interface TeranetGuestUser{
    username:string;
    password:string;
    email?:string
}


let Rakesh:TeranetGuestUser ={
    username:'rakesh1101',
    password:'rakesh@2024'
}



//type TeranetEmail = `${string|number}@teranet.ca`




type idCard = string | number;

function add(a:string,b:string){
    return a+b;
}







interface Bird {
    wings: number;
    claws: string;
    takeOff(): string;
}

interface Question {
    question: string;
    answer: string;
    marks: number;
}
export interface User {
    identity: idCard;
    age?: number;
}
const player: User = {
    identity: 222,
    age: 1
}
type Answer = string | number;
type MCQOption = Answer[];

type TeranetEmployee = {
    username: string;
    password: string;
    email: TeranetEmail;
}
const apiKey: string = '232324244'

let user: {
    username: string,
    password: string
} = {
    username: 'benny12',
    password: 'benny@2024'
}

enum Welcome{
    inEnglish= "Welcome",
    inHindi="Namaste"
}
console.log(Welcome.inHindi)






type TeranetEmail = `${string | number}@teranet.ca`
enum QuizMessageBox {
    CORRECT_ANSWER = 'Your answer is correct',
    WRONG_ANSWER = 'Your answer is wrong',
    NOT_ATTENDED = 'You have skipped this question'
}

const meetingAttendance: string[] = ['Benny', 'Reshmi', 'Devika',];

meetingAttendance.forEach(person => {
    console.log(`${person} is learning Angular.`)
})


function evaluateAnswers(question: string, yourAnswer?: Answer): boolean | undefined {
    if (typeof (yourAnswer) == 'string') {
        return question.length > 0 && question == yourAnswer ? true : false;
    }
    return false;
}


console.log(QuizMessageBox.WRONG_ANSWER)






export class Car {
    public id:number;
    protected license: number;
    private owner: string;

    constructor(id: number, license: number, owner: string) {
        this.id = id;
        this.license = license;
        this.owner = owner
    }
    static pollutionEmissionRate: number = 900;
    static getProductionYear(): number {
        return 2024;
    }
    // set id(id: number) {
    //     this.id = id;
    // }
    // get id(): number {
    //     return this.id;
    // }

}


export class RacingCar extends Car {
    racer: string;
    maxSpeed: number;
    constructor(id: number, license: number, owner: string, racer: string, maxSpeed: number) {
        super(id, license, owner);
        this.racer = racer;
        this.maxSpeed = maxSpeed;
    }
}

export class Employee {
    firstName!: string;
    lastName!: string;
    email!: string;
    phoneNumber!: number;
    age?: number;
    teamName!: TeranetTeam;
    employeeType!: string;
    isActive!: boolean
    yearOfExperience?: number
}
type TeranetTeam = 'CMS' | 'RPS';
