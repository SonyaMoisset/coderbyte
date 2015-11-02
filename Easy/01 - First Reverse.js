function FirstReverse(str) {
    return str.split("") // splits the String Object into an array of strings
              .reverse() // reverses the array in place
              .join(""); //  joins all elements of the array into a string
}