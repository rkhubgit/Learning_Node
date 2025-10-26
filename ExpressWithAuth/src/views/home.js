
console.log("home page render")

fetch('http://localhost:5050/product')
.then((res) => {
    return res.json()
})
.then((data) => {
    console.log(data)
})
.catch((err) =>{
    console.log(err)
})