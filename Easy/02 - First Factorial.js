function FirstFactorial(num) {
    if (num === 1) { // base case
        return 1;    // breaks function if num equals 1
    }
    return num * FirstFactorial(num - 1); // factorial recursion
}