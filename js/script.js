'use strict';

function getInverseNum(num) {
    return Number(num.toString().split('').reverse().join(''));
}

function isPalindrome(num) {
    return num === getInverseNum(num);
}

function getPalindromeWithStep(num, step = 0) {

    if(isPalindrome(num)) return {result: num, steps: step};

    return getPalindromeWithStep(num + getInverseNum(num), step + 1);

}

console.log(getPalindromeWithStep(96));