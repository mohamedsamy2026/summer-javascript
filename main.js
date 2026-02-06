//Math Number Start

// دي بتجيب الجذر 
// console.log(Math.sqrt(100))

// دي بقا لو حطيط رقم موجب  او سالب بتحولهولك رقم موجب
// console.log(Math.abs(-50))

// دي بقا مثال بتقول  5 اضربهم في نفسها مرتين
// console.log(Math.pow(5,2))

// console.log(Math.round(5.4))

// console.log(Math.ceil(5.4))

// console.log(Math.floor(5.8))

// console.log(Math.trunc(5.6))

// console.log(Math.min(5.7,4,5))

// console.log(Math.max(5.7,4,5))

//Math Number end






// Math String Start

//   toUpperCase() 
// console.log("mohamed".toLocaleUpperCase())


//   toLowerCase()
// console.log("MOHAMED".toLocaleLowerCase())


//   trim()
// دي بتعمل بختصار انك لو المستحدم كتب مسافات من الاول والاخر  الميثود دي بتشلها
// let myname = "  Mohamed "

// console.log(myname)
// console.log(myname.trim())


//   indexOf(search value, start)
// دي بتديلو الحرف  ويديك الاندكس وفي خانه تانيه اختياريه  الي هي لو عايز تبدأ من اندكس معين


// let favPlayer = "Mohamed Salah";

// console.log(favPlayer.indexOf("S")); 

// console.log(favPlayer.indexOf("Salah")); 

// console.log(favPlayer.indexOf("Zidan")); 
// console.log(favPlayer.indexOf("a", 5)); 


//   lastIndexOf(search value, start)

// let favPlayer = "Mohamed Salah";

// console.log(favPlayer.lastIndexOf("S")); 

// console.log(favPlayer.lastIndexOf("Salah")); 

// console.log(favPlayer.lastIndexOf("Zidan")); 
// console.log(favPlayer.lastIndexOf("a", 5)); 



//   charAt()
// دي لو عايز تعرف مكان حرف معين الاندكس بتاعه

// let myname = "Ahmed";

// console.log(myname.charAt(0))



//   substring(start, end => Not Included)
// دي بتقص النصوص تمام سهله 

// let skills = "Hello Mohamed";

// console.log(skills.substring(6,))



//   slice(start, end => Not included)
// دس بتقص بردو تمام وبس ياباشا بس دي احسن

// let word = "JavaScript";

// console.log(word.slice(4, 10)); 



//   split()
// // دي لو جمله عايز تحولها لأرياي عشان تتعامل معاها

// let word = "I Love Mohamed";
// console.log(word.split(" "))


//   repeat()
// دي بتكرر النص عادي جدااا


//   replace(search value, replace value)
// دي ياباش لو عدنك استرنج وعايز تبدل حرف او كلمه  

// let words = "Hello Mohamed";

// console.log(words)
// console.log(words.replace("Hello","Hi"))


//   replaceAll()
// دي بقا زي الي فوقيها بس الاختلاف لو انت عندك كذا كلمه زي بع وعاز تبدلهم كلمه تستخدم دي

// let words = "Hello Mohamed Hello Ahmed";

// console.log(words)
// console.log(words.replaceAll("Hello","Hi"))


//   includes()
// دي علمه زي التحقق يا باشا لو عايز تشوف  كلمه موجوده في استرنج معين ولا لا

// let words = "My Name Mohamed  Age 16."

// console.log(words.includes("Mohamed"))



//   startsWith()
// دي بتتحقق لو عايز  تعرف مثلا او حرف او جلمه تبدبأ بأيه فبتسخدم دي 

// let words = "My Name Mohamed"

// console.log(words.startsWith("N"))



//   endsWith()
// دي زي الس فوق بالظبط بس الفرق انك  لو عايز تأكسس علي اخر كلمه او حرف  

// let words = "My Name Mohamed"

// console.log(words.endsWith("Mohamed"))



// Math String End




// local Storge start


// localStorage.setItem("name","Mohamed");

// localStorage.getItem("name")

// console.log(localStorage.getItem("name"))


// localStorage.setItem("array",JSON.stringify([1,2,3]));
// console.log(JSON.parse(localStorage.getItem("array")))

// localStorage.setItem("object",
//     JSON.stringify({
//         name:"Mohamed",
//         age:16
//     }));
// console.log(JSON.parse(localStorage.getItem("object")))



// local Storge Challenge 1


// let user = document.getElementById("text")

// if(localStorage.length > 0){
//     user.value = localStorage.getItem("text")
// }

// user.onkeyup  = function (){
//     localStorage.setItem("text",user.value)
// }




// if(localStorage.length > 0){
//    document.body.style.backgroundColor = localStorage.getItem("color")
// }

// function setColor(color){
//     localStorage.setItem("color",color)
//     document.body.style.backgroundColor = color
// }


// local Storge end




// if And Elase start

// let age = 16;

// age >= 16 ? console.log("True") : age < 16 ? console.log("False") : console.log("Thanks")

// if And Elase End






// methods array start

// let names = ["Mohamed","Ahmed","Rodina"]
// let names2 = ["samy","amar","sara"]

// console.log(names)

// unshift
// دي بتعمل  لو عايو تضيف عصر في اول الاري دي بتعمل كده

// names.unshift("Samy")

// console.log(names)





// push
// لو عايز تضيف عنصر في الاخر
// names.push("Samy")

// console.log(names)



// shift()
// دي بتشيل او عنصر من الاري خالص

// names.shift()

// console.log(names)


// pop()
// دي بقا بتشيل اخر عنصر في الاري

// names.pop()

// console.log(names)





// concat 
// دي بقا لو عايز تدمج 2 ارري

// let namesall = names.concat(names2)

// console.log(names)
// console.log(namesall)






// let namess = ["Mohamed","Ahmed","Sara","Rodina"]

// console.log(namess)




// slice()
// دي بقا لو نات عايز تشيل عناصر من الارري تمام

// console.log(namess.slice(1))






// splice()
// دي بتعمل تلت حجات يا باشا اول حاجه او ل خانه يعني دي عايز تضيف او تمسح العنصر من فين يعين تحط الاندكس بتاع العنصر الي عايز تضيفه او تمسحه تمام تاني خانه ياباشا دي عايز تمسح كام عنصر تمام تالت خناه لو عايز تضيف عنصر هضيفه في الخانه الاخيره

// namess.splice(0,0,"Samy")

// console.log(namess)


// remove name

// namess.splice(3,1)

// console.log(namess)


// replace name

// namess.splice(2,1,"Amar")

// console.log(namess)



// let names3 = ["Mohamed","Ahmed","Mohamed","Sara","Rodina"]

 
// console.log(names3)





// indexOf()
// دي بتديله اسم او العنصر ويقولك ده الاندكس بتاعه كام

// console.log(names3.indexOf("Ahmed"))


// console.log(names3)




// lastIndexOf()
// دي زي لي فوقيها بس بتجيب من الاخر

// console.log(names3.lastIndexOf("Mohamed"))




// includes()
// دي لو  انت عايز تشوف هل العنصر ده موجود في الاري 

// console.log(names3.includes("Mohamed"))





// let names4 = ["Mohamed","ahmed","sara","rodina"];

// console.log(names4.join(" "))

// let names5 = ["amar","samy"];

// دي عامله زي الكنكنيكات بتضمهم جمب بعض
// console.log(...names4,...names5)


// methods array End









// forloop start

// for(let i = 10; i >0 ; i--){
//    console.log(i)
// }


// let myfrouits = ["Apple","orange","Banana"];

// for(let i = 0; i <myfrouits.length ; i++){
//   console.log(`${myfrouits[i]}`)
// }


// let myfrouits = ["Apple","orange","Banana","Grape","watermelon","mango","Kiwi"];


// for(let i = 1 ; i < myfrouits.length; i++){
//     if(myfrouits[i] === "mango"){
//        break;
//     }
//    console.log(myfrouits[i])
// }

// let myfrouits = ["Apple",1,"orange",3,5,4,"Banana","Grape","watermelon","mango","Kiwi"];



// for(let i = 0; i < myfrouits.length; i++){
//     if(typeof myfrouits[i] == "number"){
//       continue;
//     }

//     console.log(myfrouits[i])
// }

// let num = window.prompt("Please Enter The number")

// let number = (Number(num))

// for(let i = 1; i <=12;i++){
//   console.log(`${number} X ${i} = ${number * i}`)
// }


// for(let i = 1; i<= 12; i++){
//    for(let j = 1 ; j <= 12 ; j++){
//       console.log(`${i} X ${j} = ${i * j}`)
//    }
//    console.log("_".repeat(20))
// }


// forloop end


// while lop Start

// example 1 

// let number = prompt("Plaese Enter number from 10 to 50")

// while(number < 10 || number > 50){
//     number = prompt("Sorry wrong number from 10 to 50")
// }

// console.log(`Number your ${number}`)



// let yourpassword = "123123"

// let password = prompt("Please Enter The your Password")

// while(password !== yourpassword){
//    password = prompt("Wrong Password. Try Again")
// }

// console.log("Login Successfully")

// while lop End

// function Start

// Example 1

// function add(num1,num2){
//     return num1 + num2;
// }

// console.log(add(10,6))


// Example 2

// function say(fullname,age){
//     console.log(`Hello ${fullname} Your age is ${age} Years Old`)
// }

// say("Mohamed",16)



// Example 3

// function drive(name,age){
//    if(age < 18){
//      console.log(`Sorry ${name} Not drive`)
//    }

//    else if(age < 100){
//      console.log(`Yes ${name} YOur Drive OK.`)
//    }

//    else{
//     console.log("Please Enter Number Normaly")
//    }
// }

// drive("Mohamed",16)


// Example 4
    
// function rec(length,width){
//     length =  prompt("please Enter The number Lenth") 
//     width =  prompt("please Enter The number Width") 

//     return `Result Lenth X Width = ${length * width}`
// }

// console.log(rec())


// Example 5


// function circle(number){
//    return number * number * 3.14
// }

// console.log(circle(10))



// Example 6

// function opretor(num1,num2,opretor){
//      if(opretor == "+"){
//         console.log(num1 + num2) 
//      }
//      else if(opretor == "-"){
//         console.log(num1 - num2) 
//      }
//      else if(opretor == "x" || opretor == "*"){
//         console.log(num1 * num2) 
//      }
//      else if(opretor == "/"){
//         console.log(num1 / num2) 
//      }
//      else if(opretor == "%"){
//         console.log(num1 % num2) 
//      }
//      else{
//         console.log("Please Enter The num1 , num2")
//      }
// }

// opretor(10,10,"+")


// function End


// Arrow Function Start

// let add = (num1,num2) => {
//     return num1 + num2
// }

// console.log(add(10,10))

// Arrow Function End


// local scope and global scope Start

// سهل بصراحه

// local scope and global scope End


// object Start

// let object = {
//  name: "Mohamed",
//  age:16,
//  location: "Egypt",
//  married: true,

//  skills: ["HTML","CSS","javaScript"],

//  object2:{
//     city: "Giza",
//     country: "Egypt",
//     married: false,
//  } ,
 
//  fun1: function(){
//     return `Name ${object.name} Age ${object.age} , My Skills, ${object.skills.join(" ")}`
//  }
// }
// // object.age = 21
// console.log(object.fun1())



// دي طريقه تانيه لعمل الاوبجيكت
// let object = new Object({
//  name: "Mohamed",
//  age:16,
//  location: "Egypt",
//  married: true,
//  skills: ["HTML","CSS","javaScript"],
// })

// console.log(Object.keys(object))
// console.log(Object.values(object))

// object End