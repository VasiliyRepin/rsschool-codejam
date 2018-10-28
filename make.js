function sum(a, b) {
    return a + b;
}


function make(a) {
    arr = [];

    arr.push(a);
    function f(b, c, d){
        arr.push(b);
        arr.push(c);
        arr.push(d);
        return f;
    };


    return f;

}
make(5)(6,4,7)(3)(sum);
const l = arr.length-1
arr.splice(5, l);
const k =arr.reduce(sum,0);
console.log(arr);
console.log(k);
console.log(z);
