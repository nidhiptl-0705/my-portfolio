const ContactMessage = require('../models/ContactMessage');
const fs = require('fs');
const path = require('path');

const submitContact = async (req, res) => {
	const { name, email, message } = req.body;
	if (!name || !email || !message) {
		return res.status(400).json({ error: 'All fields are required' });
	}

	// Attempt DB save (best-effort)
	try {
		await ContactMessage.create({ name, email, message });
	} catch (dbError) {
		console.warn('DB save failed, will try file fallback:', dbError?.message || dbError);
	}

	// Best-effort file fallback (non-blocking)
	try {
		const dir = path.join(__dirname, '../../public');
		const file = path.join(dir, 'contact_messages.log');
		if (!fs.existsSync(dir)) {
			fs.mkdirSync(dir, { recursive: true });
		}
		const entry = JSON.stringify({ name, email, message, createdAt: new Date().toISOString() }) + '\n';
		fs.appendFileSync(file, entry, 'utf8');
	} catch (fileErr) {
		console.warn('File fallback failed:', fileErr?.message || fileErr);
	}

	return res.status(201).json({ success: true });
};

module.exports = { submitContact };
