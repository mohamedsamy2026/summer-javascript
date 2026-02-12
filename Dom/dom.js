// DOM Selectors Start


/*
getElementById()

getElementsByClassName()

getElementsByTagName()

innerHTML()

querySelector()

querySelectorAll()
*/ 

// بص ياباشا انت دلوقتي ول عايز توصل  لعنصر في اي دي استخدم دي افضل وهتعرف ليه بعدين عشان دي مميزه استخدم الطريه دي ياباشا
// console.log(document.getElementById("main"))



// دي لو عايز تجيب عنصر من الاتش تي ام ال  بستخدام الكلاس نام تمام ودي بتجيب الكلاسات كلها الي بأسم العنصر ده  تمام
// console.log(document.getElementsByClassName("item"))



// دي لو عايز تجيب عنصر وتعدل عليه
// let h1 = (document.getElementsByTagName("h1")[0])
// h1.innerHTML = "<h1>Mohamed Programing</h1>"
// console.log(h1)




// ودي بقا لو عايز تجيب عناصر باسمها تمام ولو عايز تجيب عنصر معين هاته من خلال الاندكس تمام 
// console.log(document.getElementsByTagName("p")[0])




// دي ول عايز تأكسس علي اي حجاه اي دي كلاس عنصر عادي كله شغال ويفضل لما تيجي تستدعي كلاسات تسخدم ده ياباشا تمام
// console.log(document.querySelector(".item"))



// دي ول عايز تأكسس علي اي حجاه اي دي كلاس عنصر عادي كله شغال ويفضل لما تيجي تستدعي كلاسات تسخدم ده ياباشا تمام بس الفرق يبااش من الي فوق ان ده بيجيب كل العناصر الي بالامس الي انت كتبته الي فوق مش كده اول ما يلاقي عنصر واحد بالاسم الي كتبته خلاص يبطل تدوير
// console.log(document.querySelectorAll(".item")[2])


// DOM Selectors End


// Dom image links forms  Start


// console.log(document.documentElement)
// console.log(document.head)
// console.log(document.body)
// console.log(document.title)
// console.log(document.head.children)
// console.log(document.head.children[2])



// console.log(document.links)
// console.log(document.links[0])
// console.log(document.links[0].href)


// document.links[0].href = "https://github.com"

// document.links[0].innerHTML = "Github"

// console.log(document.links[0].href)




// console.log(document.forms)
// console.log(document.forms[0])
// console.log(document.forms[0].Name)
// console.log(document.forms[0].Email)



// console.log(document.images)
// console.log(document.images[0])
// console.log(document.images[0].src)

// document.images[0].src = "img/belt.webp"

// console.log(document.images[0].src)


// Dom image links forms End




