import { MongoClient } from 'mongodb'

const MONGO_URL = 'mongodb://localhost:27017/hackernews'

export default async () => {
  const db = await MongoClient.connect(MONGO_URL)
  return {
    Links: db.collection('links'),
    Users: db.collection('users'),
  }
}
