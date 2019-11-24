// Write a function that returns a new array containing all of the strings in the 
// original array uppercased.

let arr =  [{}, 1, "cat", 3, ["hi"], {name: "dog"}, "dog", "bear"]
// Output: ["CAT", "DOG", "BEAR"]

const upperCaseStrings = (arr) => {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        if(typeof arr[i] === 'string') {
            result.push(arr[i].toUpperCase());
        }
    }
    return result;
}

console.log(upperCaseStrings(arr));















// Given an array, return a new array where every non-string element is converted 
// to an empty string.

// Input: ["a", 123, "b", "c", {name: "cat"}]
// Output: ["a", "", "b", "c", ""]