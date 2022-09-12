
// ex1
document.getElementsByTagName("nav")[0].firstElementChild.style.color="red";
const myTimeout = setTimeout(()=>{
    //ex3
    document.getElementsByTagName("nav")[0].firstElementChild.style.color="green";
    document.getElementsByTagName("nav")[0].lastElementChild.style.color="green";
}, 2000);

// change li back ground color ex-4

Array.from(document.getElementsByTagName("li")).forEach((element) => {
    element.style.background="red";
});

console.log(document.getElementsByTagName("nav")[0].firstElementChild.style.color)

//ex-5
//which of the follewing is used tolook for the farthest ancestor that mathches a given css selector 
//  a> matches
//  b> closest
//  c> contains
//  ans is > none of these
