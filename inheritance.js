let student=
{
    name:"Aashif",
    RollNo:11,
    getname:function(){
        console.log(this.name)
    },
    getage:function(){
        console.log(this.age);
    }
}
let teacher={
    name :"jhon",
    age:33,
    __proto__:student
}

let liberary={
    Books:"All",
    __proto__:teacher
}
// console.log(liberary.getname());//jhon
// console.log(liberary.getage());//33
console.log(liberary.RollNo);//11

