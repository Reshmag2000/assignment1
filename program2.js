var num = [1,2,3,1,7,7,5,4,7,2,3,4,6,7,7,9,0,2,4];
obj = {};
let count;
let k = 0;
for (let i = 0; i < num.length; i++) {
    if (!obj[num[i]]) obj[num[i]] = 1;
    else obj[num[i]]++;
} 
for (const i in obj) {
    if (k < obj[i]) {
        k = obj[i];
        count = i;
    }
} 
console.log("The most frequent element is: " + count);