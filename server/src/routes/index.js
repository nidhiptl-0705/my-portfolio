const express = require('express');
const path = require('path');
const fs = require('fs');
const router = express.Router();
const { submitContact } = require('../controllers/contactController');

router.get('/health', (_req, res) => {
	res.json({ status: 'ok' });
});

router.post('/contact', submitContact);

router.get('/cv', (req, res) => {
	const cvPath = path.join(__dirname, '../../public/Nidhi Patel.html');
	res.download(cvPath, 'Nidhi Patel.html');
});

module.exports = router;
