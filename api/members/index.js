import express from 'express';
import {members} from './members';

const router = express.Router(); // eslint-disable-line

router.get('/', (req, res) => {
  res.send({members: members});
});

// Adding a memeber
router.post('/', (req, res) => {
        let newMember = req.body;
        if (newMember) {
          members.push({name: newMember.name, address: newMember.address,
          phone_number: newMember.phone_number});
          res.status(201).send({message: 'Member Created'});
      } else {
            res.status(400).send({message:
            'Unable to find Member in request. No Member Found in body'});
      }
});
// Update a member
router.put('/:id', (req, res) => {
     const key = req.params.id;
     const updateMember = req.body;
     const index = members.map((members)=>{
return members.phone_number;
}).indexOf(key);
            if (index !== -1) {
               members.splice(index, 1, {name: updateMember.name, address: updateMember.address,
               phone_number: updateMember.phone_number});
               res.status(200).send({message: 'Member Updated'});
              } else {
          res.status(400).send({message: 'Unable to find Member in request. No Member Found in body'});
      }
});

// Delete a member
router.delete('/:id', (req, res) => {
     const key = req.params.id;
     const index = members.map((members)=>{
return members.phone_number;
}).indexOf(key);
    if (index > -1) {
members.splice(index, 1);
        res.status(200).send({message: 'Deleted member with phone_number: ${key} '});
    } else {
      res.status(400).send({message: 'Unable to find Member with phone_number: ${key} . No member has been Deleted'});
      }
});

export default router;