import mongoose from "mongoose";
import config from 'config';

// Logger
import Logger from "./logger";

async function connect() {
    const dbUri = config.get<string>('dbUri')

    try {
        await mongoose.connect(dbUri)
            Logger.info('db connected!')
    }   catch (e) {
            Logger.error("can't connect db");
            Logger.error(`Error ${e}`);
            process.exit(1);
    }
};

        

export default connect;