const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination : './public/images/',
    filename : (req , file , cb) => {
        cb(null , file.fieldname+'_'+Date.now()+path.extname(file.originalname));
    }
});

const fileUploader = multer({
    storage ,
    limits : {fileSize : 2 * 1024 * 1024 } // 2MB
}).any();

module.exports = fileUploader;