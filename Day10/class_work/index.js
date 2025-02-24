let str="sv univevrsity"
console.log(str.length)
console.log(str[str.length-1])

let arr=[1, 2, "soma", 1.2, true, false, null, undefined]
console.log(arr)
arr[2]="rai"
console.log(arr)
console.log(arr[arr.length-1])

arr.push("Nandu")
console.log(arr)
arr[4]="Nandu"
console.log(arr)

arr.pop(arr)
console.log(arr)

//object
//object liternal
//new key word
//constructor
let svuclass = []

const obj ={
    soma:{ class:"btech", year: 3, rn: 90, subject: ["dbms", "nm","rm"] },
    Rupsa:{ class:"btech", year: 3, rn: 90, subject: ["dbms", "nm","rm"] }
    
}
console.log(obj.soma)
console.log(obj["soma"])
console.log(obj.soma.subject[0])

obj["1"]="bhutu"
console.log(obj)

delete obj["Rupsa"]
console.log(obj)

obj.virat ={
     class:"btech", year: 3, rn: 90, subject: ["dbms", "nm","rm"] 
    }
obj.virat ={
        class:"bio tech", year: 3, rn: 90, subject: ["dbms", "nm","rm"] 
       }

console.log(obj) 

let name="Preet" 
let Class="BCCI" 
let sub = "fs" 

let newObj={name, Class, sub}
console.log(newObj)














