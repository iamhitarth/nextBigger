module.exports = {
  /**
   * Return the next biggest number with the same digits
   *
   * @param {Number} num
   * @return {Number}
   */
  nextBigger: function(num) {
    let nb = num;
    let prev = 0;
    let nArr = num.toString().split('').reverse();
    let tempArr = [];
    nArr.some(function(curr, i, arr) {
      if (prev > curr) {
        //Swap the next biggest number from the nums we have seen with
        //the current number
        let swapNum = tempArr.sort().find((n) => n > curr);
        arr[arr.indexOf(swapNum)] = curr;
        arr[i] = swapNum;

        //Sort remaining numbers
        tempArr = arr.splice(0, i).sort();

        //Concatenate the untouched part of the array with the sorted part
        nb = parseInt(arr.reverse().concat(tempArr).join(''));

        return true;
      } else {
        tempArr.push(curr);
        prev = curr;
      }
    });

    return nb;
  }
}
