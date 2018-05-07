import userModel from './api/users/userModel';

const users = [
  {
    'username': 'cj',
    'password': 'njoipandacow',
  },
  {
    'username': 'luke',
    'password': 'dell',
  },
];

export const loadUsers = () => {
  userModel.find({}).remove(() => {
    users.forEach((user)=>{
                userModel.create(user, (err, docs)=>{
                if (err) {
                    console.log(`failed to Load User Data: ${err}`);
                }
                }
              );
});
    console.info(`${users.length} users were successfully stored.`);
});
};
