import express from 'express';
import Members from './memberModel';
import _ from 'lodash';

const router = express.Router(); // eslint-disable-line

router.get('/', (req, res) => {
  Members.find((err, members) => {
    if (err) return handleError(res, err);
    return res.json(200, members);
  });
});

// router.post('/', (req, res) => {
//   Member.create(req.body, function(err, member) {
//     if (err) return handleError(res, err);
//     return res.json(201, member);
//   });
// });

// Adding a member
router.post('/', (req, res) => {
        const newMember = req.body;
        if (newMember) {
               Members.create(newMember, (err, member) => {
                  if (err) return handleError(res, err);
                      return res.status(201).json(member);
              });
          } else {
             return handleError(res, err);
          }
    });

    // get member
    router.get('/:id', (req, res) => {
        const id = req.params.id;
        Members.findById(id, (err, member) => {
            if (err) return handleError(res, err);
            return res.status(201).json(member);
      } );
    });

// Update a member
router.put('/:id', (req, res) => {
  if (req.body._id) delete req.body._id;
  Members.findById(req.params.id, (err, member) => {
    if (err) return handleError(res, err);
    if (!member) return res.send(404);
    const updated = _.merge(member, req.body);
    updated.save((err) => {
     if (err) return handleError(res, err);
     return res.json(201, member);
      });
  });
});

// Delete a member
router.delete('/:id', (req, res) => {
    Members.findById(req.params.id, (err, member) => {
      if (err) return handleError(res, err);
      if (!member) return res.send(404);
      member.remove(function(err) {
        if (err) return handleError(res, err);
        return res.send(204).json(member);
      });
    });
});
// /**
//  * Handle general errors.
//  * @param {object} res The response object
//  * @param {object} err The error object.
//  * @return {object} The response object
//  */
function handleError(res, err) {
  return res.status(500).send(err);
};

export default router;
