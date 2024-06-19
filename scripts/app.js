// In this kata the function returns an array/list of numbers without its last element. The function is already written for you and the basic tests pass, but random tests fail. Your task is to figure out why and fix it.

// Good luck!

// Hint: watch out for side effects.

// Some good reading: MDN Docs about arrays


// so this code passes the basic tests but fails the random ones
function withoutLast(arr){
    arr.pop();
    return arr;
}

// assert.deepEqual(withoutLast([1, 2, 3, 4, 5]), [1, 2, 3, 4]);
// assert.deepEqual(withoutLast([6, 7, 8, 9]), [6, 7, 8]);

// looking at the what it tests I already see that we will need to remove the last number from the array
// I'm going to read the docs link thats provided.
// so this kata seems to be making the point that the input gets mutated on some katas after you test
// so we need to make sure it can't mutate, we will use const for this
// we will use slice to get the parts of the array we want

const withoutLast = array => array.slice(0, -1)

// also seeing other ways to make it work, just differnt 

function withoutLast(arr){
    return arr.slice(0, -1);
}