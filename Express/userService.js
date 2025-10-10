


const express = require('express');
const fs = require('fs')
const app = express();
app.use(express.json())

const PORT = 5050;



// performing to the crud operation for using the express and 

// performing to the crud operation 
app.post('/user', (req, res) => {
    // first step to get the data from the req.body
    // console.log(req.body);

    // second step to read the file where be want to stored 
    try{
    const userListData = fs.readFileSync('./Data/userList.json');
    const data = JSON.parse(userListData);
    // console.log('dataaaaaaaa',data);

    // third step to update the stored data into the file
    const storedData = {id: data.userList.length+1, ... req.body}
    data.userList.push(storedData)
    console.log(data)

    // fourth step write / save the data into the file 
    fs.writeFile('./Data/userList.json', JSON.stringify(data, null, 3), (err) => {
        if(err){
            console.log(`Error is occured:  ${err.code} and message it ${err.message}`);
        }

    })


    }catch(err){
        console.log(`Error is Occured: ${err.code}, and error message is ${err.message}`)
    }
  




 

    res.send('user created successfully')
    
})

app.listen(PORT, () => {
    console.log(`server is running on the this ${PORT}`)
})

