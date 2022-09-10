var students =[]
var student = {
    names:'Joan Smith',
    birthYear:2002,
    course:'IFT 458',
    grade:90,
    active:true,
    age: function(){
        if(this.active){
            return 2022 - this.birthYear
        }else{
            return 0
        }
        
    }

}

var student2 = {
    names:'Andy Moore',
    birthYear:2000,
    course:'IFT 458',
    grade:100,
    active: false,
    age: function(){// arrow function cannot access this reference
        if(this.active){
            return 2022 - this.birthYear
        }else{
            return 0
        }
        
    }

}
students.push(student)
students.push(student2)
console.log(students);

students.forEach((items)=> console.log(items.age()))
// console.log(student['names']);
// console.log(student.names);

// console.log(student2.age());
// console.log(student.age());