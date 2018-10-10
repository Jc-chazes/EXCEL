const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
var fs = require('fs');
var readXlsxFile = require('readXlsxFile');



// default options
app.use(fileUpload());

app.get('/',(req,res)=>{
    res.send('hii')
})


app.post('/upload', function(req, res) {
    
  if (!req.files)
    return res.status(400).send('No files were uploaded.');
    

  let sampleFile = req.files.sampleFile;
  console.log( req.files.sampleFile.data)
 


readXlsxFile(fs.createReadStream(sampleFile.data),{ schema })
.then((rows) => {
})
.catch((err)=>{
  console.log(err)
})
  

});

app.listen(3000,null,()=>{
    console.log('server')
});
