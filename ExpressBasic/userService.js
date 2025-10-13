


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
    // console.log(data)

    // fourth step write / save the data into the file 
    fs.writeFile('./Data/userList.json', JSON.stringify(data, null, 3), (err) => {
        if(err){
            console.log(`Error is occured:  ${err.code} and message it ${err.message}`);
            return 
        }
    })
    res.send(data)

    }catch(err){
        console.log(`Error is Occured: ${err.code}, and error message is ${err.message}`)
    }
   
})

// For getting the response from the userList.json file
app.get('/user', (req, res) => {
    const GetData = fs.readFileSync('./Data/userList.json', (err) => {
        if(err){
            console.log(`Error is occured: ${err.code} and error message is ${err.message}`);
            return;
        }

    })
    res.send(JSON.parse(GetData))
})


// updating the value
// First read the file where be want to update the data
// store the updated data into the read File
// write or save data into the file 
app.put('/user/:id' , (req, res) => {

    const GetData = fs.readFileSync('./Data/userList.json');
    let data = JSON.parse(GetData)
    // console.log(data)

    data.userList.forEach((item, index) => {
        if(item.id === parseInt(req.params.id)){
           data.userList[index] = {...item, ...req.body}
        }
    })


    fs.writeFile('./Data/userList.json', JSON.stringify(data, null, 3) ,(err) => {
        if(err){
            console.log(`Error is occured ${err.code} and error message is ${err.message}`)
        }
    })

    res.send(data)

})

// Delete the data 
app.delete('/user/:id', (req, res) => {
    try{

         const ReadFile = fs.readFileSync('./Data/userList.json');
         const Data = JSON.parse(ReadFile)

         Data.userList = Data.userList.filter((item) => {
            return item.id !== parseInt(req.params.id)
         })

         fs.writeFileSync('./Data/userList.json', JSON.stringify(Data, null, 3), (err) => {
            if(err){
                console.log(`Error is occured: ${err.code} and error message is ${err.message}`);
                return 
            }
         })

         res.send(Data)


    }catch(err){
        console.log(err)
    }
   
})


app.listen(PORT, () => {
    console.log(`server is running on the this ${PORT}`)
})

