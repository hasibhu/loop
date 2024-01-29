


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

    let n = dailyItems.length-1;
    while (n >= 0) {
        console.log(dailyItems[n]);
        n--;
    }
    console.log ("Done");