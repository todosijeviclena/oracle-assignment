let even = 'Baz'
let five = 'inga!'
for (let i=1; i<100; i++) {
    if (i % 2 === 0) {
        if (i % 5 === 0) {
            console.log(even.concat(five))
        } else {
            console.log(even)
        }
    } else if (i % 5 === 0) {
        console.log(five)
    } else {
        console.log(i)
    }
}