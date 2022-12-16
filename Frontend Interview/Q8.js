
// make the solution



let obj = {
    value: 0,

    get a() {
        return ++this.value;
    }
}

console.log(obj.a, obj.a, obj.a) //1,2,3

// how to check user internet connectivity

console.log(navigator.onLine);