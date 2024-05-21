const filePath = '/my-project/assets/logo.png';   //Defining the file path

const basename = path.basename(filePath); //Getting the basename
const dirname = path.dirname(filePath); //Getting the directory
const extname = path.extname(filePath); //Getting the file type

//Outputs
console.log('Filename:', basename);
console.log('Directory:', dirname);
console.log('Extension:', extname);
