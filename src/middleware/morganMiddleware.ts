import morgan, {StreamOptions} from "morgan";
import config from 'config';
import Logger from "../../config/logger";
import { deflate } from "zlib";

const stream: StreamOptions = {
    write: (message) => Logger.http(message),
};

const skip =() =>{
    const env = config.get<string>('env') || 'dveloper'
    return env !== 'developer'
};

const morganMiddleware = morgan(
    ':method :url :status :res[content-length] - response-time ms',
    {stream, skip}
);

export default morganMiddleware;