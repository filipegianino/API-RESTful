import mongoose from "mongoose";
import config from 'config';

async function connect() {
    const dbUri = config.get<string>('dbUri')

    try {
        await mongoose.connect(dbUri)
            console.log('db connected!')
    }   catch (e) {
            console.log("can't connect db")
            console.log(`Error ${e}`)
    }
};

        

export default connect;