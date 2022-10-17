/**
 * This function removes the first and last character from an input string
 * @param {*} str The input string to be modified
 * @returns The input string without the first and last characters
 */
function removeChar(str){
    return str.substring(1, str.length-1) //returns substring of the input string starting at the second letter and ending at the second to last letter
   }