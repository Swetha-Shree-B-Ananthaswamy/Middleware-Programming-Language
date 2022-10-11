const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const connectDB = require('./db/connect')


const app = require('./app');
//new code

const start = async () =>{
  try{
      const port = process.env.PORT || 2000;
      await connectDB(process.env.MONGO_URI)
      app.listen(port ,console.log(`app is listening to the port ${port}...`));
  }catch(err){
      console.log(err);
  }
}
start()
