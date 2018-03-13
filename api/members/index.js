import express from 'express';
import {members} from './members';

const router = express.Router(); // eslint-disable-line

router.get('/', (req, res) => {
  res.send({members: members});
});

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
     const index = members.map((contact)=>{
return members.phone_number;
}).indexOf(key);
            if (index !== -1) {
               members.splice(index, 1, {name: updateMember.name, address: updateMember.address,
               phone_number: updateContact.phone_number});
               res.status(200).send({message: 'Member Updated'});
              } else {
          res.status(400).send({message: 'Unable to find Member in request. No Member Found in body'});
      }
});

// Delete a member
router.delete('/:id', (req, res) => {
     const key = req.params.id;
     const index = members.map((members)=>{
return contact.phone_number;
}).indexOf(key);
    if (index > -1) {
members.splice(index, 1);
        res.status(200).send({message: 'Deleted contact with phone_number: ${key} '});
    } else {
      res.status(400).send({message: 'Unable to find Contact with phone_number: ${key}. No contact Deleted'});
      }
});

export default router;