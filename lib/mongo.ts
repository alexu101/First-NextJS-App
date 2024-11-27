import mongoose, { Connection } from "mongoose";

const globalWithMongoose = global as typeof globalThis &{
    mongooseConnection: {conn: Connection | null; promise: Promise<Connection> | null }
}

const uri = process.env.MONGODB_URI as string

if (!uri)
    throw new Error("Place mongodb uri in your env.local file!")

let cachedConnection = globalWithMongoose.mongooseConnection

if (!cachedConnection){
    globalWithMongoose.mongooseConnection = {conn: null, promise: null}
    cachedConnection = globalWithMongoose.mongooseConnection
}

async function dbConnect(): Promise<Connection> {
    if(cachedConnection.conn){
        return cachedConnection.conn;
    }

    if (!cachedConnection.promise){
        cachedConnection.promise = mongoose
            .connect(uri, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
              } as mongoose.ConnectOptions)
            .then((mongoose) => mongoose.connection)
    }

    cachedConnection.conn = await cachedConnection.promise;
    return cachedConnection.conn;
}

export default dbConnect;
