const express = require('express');
const router = express.Router();
const nanoid = require("nanoid");

const Link = require('../models/Link');

const generateId = async () => {
    const id = nanoid(6);
    const item = await Link.findOne({shortUrl: id});

    if (item !== null) {
        return generateId()
    }
    return id
};
router.get('/', async (req, res) => {

    const item = await Link.find();
    res.send(item)
});

router.get('/:id', async (req, res) => {

    try {
        const item = await Link.findOne({shortUrl: req.params.id});
        console.log('ok');
        return res.status(301).redirect(item.originalLink);
    } catch (e) {
        return res.status(404).send(e)
    }
});


router.post('/', async (req, res) => {
    const linkData = req.body;
    linkData.shortUrl = await generateId();
    try {
        const link = new Link(linkData);
        await link.save();
        res.send(link.shortUrl)
    } catch (e) {
        res.status(400).send(e)
    }


});


module.exports = router;