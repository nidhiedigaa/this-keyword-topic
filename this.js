console.log(this)

function check()
{
    console.log(this)
}


let object_one={name:'virat kohli',age:35,profession:'cricketer',details:function details()
{
    console.log(`${this.name}, ${this.age}, ${this.profession}`)
}}

object_one.details()


class Student
{
    constructor(name,age)
    {
        this.name=name
        this.age=age
    }
    details()
    {
        console.log(this.name,this.age)
    }
}

let student_one=new Student('monika',22)
student_one.details()