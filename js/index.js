//exemplo 1

// console.log(this)

// exemplo 2
// function myFunction () {
//     console.log(this)
// }

//  myFunction()

//exemplo 3
// var exemplo = 'mouse'
// console.log(exemplo)

//exemplo 4
// const number = 14; 

//exemplo 5
const person = {
    firstName: 'Nyna',
    lastName: 'Bernardes',
    nickName: 'Nininha',
    getFullName () {
        // return `${this.firstName} ${this.lastName} ou ${this.nickName}` 
        //refatorar usando destruct para remover o this'
        console.log(this) 
        const {firstName, lastName, nickName} = this
        return `${firstName} ${lastName} ou ${nickName}`
    },
    printBio () {
        const fullName = this.getFullName()
        return `${fullName} é nossa amada filha`
    }
}

console.log(person.toStri)

// const printBio = person.printBio

// printBio()

//exemplo 6

