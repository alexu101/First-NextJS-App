import { MongoClient } from "mongodb";

const URI: string | undefined = process.env.MONGODB_URI
const options = {}

if (!URI){
    throw new Error("Please add your mongo db uri to your .env")
}

const client: MongoClient = new MongoClient(URI, options)
const connection: Promise<MongoClient> = client.connect()

export default connection





