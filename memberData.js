import memberModel from './api/members/memberModel';

const members = [
  {
    name: 'Jeff Brownrigg',
    address: 'Graigue',
    dob: '21/03/1994',
    phoneNumber: '0867384927',
  },
  {
    name: 'Brian Hayden',
    address: 'Kilrush',
    dob: '11/05/1991',
    phoneNumber: '0872839473',
  },
  {
    name: 'Kevin Coleman',
    address: 'Tombrack',
    dob: '10/11/1992',
    phoneNumber: '0872381745',
  },
  {
    name: 'CJ O Sullivan',
    address: 'Tombrack',
    dob: '27/11/1994',
    phoneNumber: '0872893847',
  },
];

export const loadMembers = () => {
  memberModel.find({}).remove(function() {
    memberModel.collection.insert(members, (err, docs)=>{
    if (err) {
      console.log(`failed to Load Member Data: ${err}`);
    } else {
      console.info(`${members.length} members were successfully stored.`);
    }
  });
});
};
