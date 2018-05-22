import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import membersRouter from './api/members';
import mongoose from 'mongoose';
import {loadMembers} from './memberData';
import {Mockgoose} from 'mockgoose';
import {loadUsers} from './userData';
import passport from './auth';
import userRouter from './api/users';


dotenv.config();

export const app = express();

const port = process.env.PORT;

// mongoose.connect(process.env.mongoDB);
// // Populate DB with sample data
// if (process.env.seedDb) {
//   loadMembers();
// }

// configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use('/api/members', membersRouter);
app.use(express.static('public'));
app.use('/api/users', userRouter);
app.use('/api/members', passport.authenticate('jwt', {session: false}), membersRouter);


app.listen(port, () => {
  console.info(`Server running at ${port}`);
});

// connect to database
if (process.env.NODE_ENV == 'test') {
  // mockgoose for testing
  const mockgoose = new Mockgoose(mongoose);
  mockgoose.prepareStorage().then(()=> {
    mongoose.connect(process.env.mongoDB);
  });
} else {
    // use real data
    mongoose.connect(process.env.mongoDB);
  }

 mongoose.connection.on('error', (err) => {
   console.error('MongoDB connection error: ' + err);
   process.exit(-1);
 });

 mongoose.connection.on('error', (err) => {
   console.error('MongoDB connection error: ' + err);
   process.exit(-1);
 });


  app.use('/api/members', passport.authenticate('jwt', {session: false}), membersRouter);

  // Populate DB with the sample data
  if (process.env.seedDb) {
    loadMembers();
    loadUsers();
  }
