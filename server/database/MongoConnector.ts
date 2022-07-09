import mongoose, { ConnectionOptions } from 'mongoose';
import * as models from './schema';

interface MongoOptions {
  mongoHost?: string;
  mongoPort?: string;
  mongoUser?: string;
  mongoPwd?: string;
  mongoDb?: string;
  mongoUrl?: string;
}

const defaultMongooseConnectionOptions: ConnectionOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
};

export class MongoConnector {
  private readonly options: MongoOptions;

  private readonly mongoConnectionOptions: ConnectionOptions = defaultMongooseConnectionOptions;

  private db: any;

  constructor(options: MongoOptions) {
    this.options = options;
    mongoose.connection.on('error', this.onError);
    mongoose.connection.on('connected', this.onConnected);
    mongoose.connection.on('reconnected', this.onReconnected);
  }

  private onError = (e: Error) => {
    console.log(`${e.name}: ${e.message}`);
  }

  private onConnected = () => {
    console.log(`Connected to MongoDB at ${this.mongoConnectionString()}`);
  }

  private onReconnected = () => {
    console.log('Reconnect');
  }

  private mongoConnectionString = () => {
    // return process.env.NODE_ENV == 'development'
    //   ? `mongodb://${this.options.mongoHost}:${this.options.mongoPort}/${this.options.mongoDb}`
    //   : `mongodb://${this.options.mongoUser}:${this.options.mongoPwd}@${this.options.mongoHost}:${this.options.mongoPort}/${this.options.mongoDb}`;

    return this.options.mongoUrl || '';
  }

  public connect = (): this => {
    const db = mongoose.createConnection(this.mongoConnectionString(), this.mongoConnectionOptions);

    db.on('error', (error) => {
      console.log(`MongoDB :: connection ${this.mongoConnectionString()} ${JSON.stringify(error)}`);
      db.close().catch(() => console.log(`MongoDB :: failed to close connection ${this.mongoConnectionString()}`));
    });

    db.on('connected', () => {
      // mongoose.set('debug', function (col, method, query, doc) {
      //   console.log(`MongoDB :: ${this.conn.name} ${col}.${method}(${JSON.stringify(query)},${JSON.stringify(doc)})`);
      // });
      console.log(`MongoDB :: connected ${this.mongoConnectionString()}`);
    });

    db.on('disconnected', () => {
      console.log(`MongoDB :: disconnected ${this.mongoConnectionString()}`);
    });

    this.db = db;
    return this;
  }

  public registerSchema = () => {
    this.db.model('User', models.userSchema);

    return this.db;
  }
}
