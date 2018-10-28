module.exports = function sumOfOther(arr = []) {

    let all = arr.reduce(function(sum, current) {
        return sum + current;
    }, 0);
    console.log(all);

    arr1 = [];

    for (let i=0; i<arr.length; i++) {
        arr1.push(all-arr[i]);
    }
    console.log (arr1);
    return arr1;

}

