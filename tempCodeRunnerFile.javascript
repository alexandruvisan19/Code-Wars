function test() {
    let variable = "test"
    return function test2() {
        return variable;
    }
}

console.log(test)