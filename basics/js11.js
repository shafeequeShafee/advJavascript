/////////////////  Set  /////////////////
// set is unorderd list , only contain unique value, can not have index value
let nums = new Set();

nums.add(3);
nums.add(3);
nums.add(4);
nums.add(3);
nums.add(5);
nums.add(4);
nums.add(3);
nums.add(5);
nums.add(7)
nums.add("shafeeeque")
console.log(nums)

let nums2 = new Set("bookkeeper");
console.log(nums2)

nums2.forEach( (value)=>{
    console.log(value)
} )

console.log('checking value')
console.log(nums2.has('e'))


/////////////// Map ////////////////

// map basically a key value pair

let map = new Map();

map.set("sfq","vue js")
map.set("anu","java")
map.set("mandu","snowflake")

console.log(map.keys())

console.log(map.has("sfq"))

console.log(map.get("sfq"))

for(let [k,v] of map){
    console.log(k, ":",v)
}

// update the value not add new key value pair
map.set("mandu","tcs")

for(let [k,v] of map){
    console.log(k, ":",v)
}

map.forEach( (v,k)=>{
    console.log(k, "==", v)
} )


