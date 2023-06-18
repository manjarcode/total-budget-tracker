import Factory from 'dynamodb-adapter'
import {  injectable } from "inversify"
import "reflect-metadata"
import process from "process"

@injectable()
export default class DynamoDbAdapterFactory {
  static CONFIG = {
    accessKeyId: process.env.DB_ACCESS_KEY_ID,
    secretAccessKey: process.env.DB_SECRET_ACCESS_KEY,
    region: process.env.DB_REGION
  }

  private factory: Factory

  constructor() {
    this.factory = Factory
  }

  instance(tableName) {
    const client = this.factory.create(tableName, DynamoDbAdapterFactory.CONFIG)
    return client
  }
}
