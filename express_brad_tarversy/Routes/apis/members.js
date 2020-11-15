const express = require('express')
const router = express.Router()
const members = require('../../Members')
const uuid = require('uuid')

//* gets all the member
router.get('/', (req, res) => {
    res.json(members)
})
//* get a single member
router.get('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id))
    if(found) return res.json(members.filter(member => member.id === parseInt(req.params.id)))
    res.status(400).send({msg:`No member with the ID number: ${req.params.id}`})
})
//* create a new member
router.post('/', (req, res) => {
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: "active"
    }
    if(!req.body.name || !req.body.email) {
        return res.status(400).send('please fill up the whole form')
    }
    members.push(newMember)
    // res.send(members)
    res.redirect('/handle')
})

//* update a member
router.put('/:id', (req, res) => {
    const member = members.some(member => member.id === parseInt(req.params.id))
    console.log(member)
    if(!member)  return res.status(400).json({msg: `you have to Check if The id ${req.params.id} exist`})
    
    members.forEach(item => {
        if(item.id === parseInt(req.params.id)) {
            item.name = req.body.name ? req.body.name : item.name,
            item.email = req.body.email ? req.body.email : item.email
        }
        return item
    });
    res.send(members)
})
//* delete a member
router.delete('/:id', (req, res) => {
    const index = parseInt(req.params.id);
    let member = members.some(item => item.id === index)
    if(!member) return res.status(404).json({msg: `the given id ${req.params.id} does not exist`})
    let newMembers = members.filter(item => item.id === index ? "": item)
    res.send(newMembers)
})


module.exports = router;
