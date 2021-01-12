// 17 Classes, Properties and methods

class Human {

    gender = 'Male';


    printGender = () =>  {
        console.log(this.gender);
    }
}

class Person extends Human {


    name = 'Max';
    gender = 'Female'


    printMyName = () => {
        console.log(this.name);
    }
}

const person = new Person();

person.printMyName();
person.printGender();
