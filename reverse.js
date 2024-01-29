


let list = ["1",
                "2",
                "3",
                "4"
]

let num = list.length-1;
console.log(`the length is ${num}`);
let i = 0;
while( num >= i){
    
    console.log(list[num]);
    num--;
}


const dailyItems = [
    "i. Unlock module at 8 PM.",
    "ii. Watch and practice.",
    "iii. Take notes.",
    "iv. Then practice the full module.",
    "v. Join the support session, If you have any problem."];

let makeList = [];
// from length -1 has been removed to show the mistake for the group member
let n = dailyItems.length;
    while (n >= 0) {
        console.log(dailyItems[n]);
        makeList.push(dailyItems[n]);
        n--;

    }
console.log ("Done");
console.log(makeList);