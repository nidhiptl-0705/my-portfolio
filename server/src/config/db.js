const mongoose = require('mongoose');

const DEFAULT_URI = 'mongodb://127.0.0.1:27017/portfolio';

async function attemptConnect(mongoUri, attemptNumber) {
	try {
		await mongoose.connect(mongoUri, {
			serverSelectionTimeoutMS: 5000,
		});
		console.log(`MongoDB connected (attempt ${attemptNumber})`);
		return true;
	} catch (error) {
		console.error(`MongoDB connection error (attempt ${attemptNumber}):`, error.message);
		return false;
	}
}

const connectToDatabase = async () => {
	const envUri = process.env.MONGODB_URI && process.env.MONGODB_URI.trim();
	const mongoUri = envUri || DEFAULT_URI;

	if (!envUri) {
		console.warn(`MONGODB_URI not set. Falling back to local default: ${DEFAULT_URI}`);
	}

	// Basic retry loop (3 attempts)
	for (let attempt = 1; attempt <= 3; attempt++) {
		const ok = await attemptConnect(mongoUri, attempt);
		if (ok) break;
		if (attempt < 3) {
			await new Promise((r) => setTimeout(r, 1000 * attempt));
		}
	}

	// Attach connection event logs (once)
	const conn = mongoose.connection;
	if (!conn._hasEventLogs) {
		conn.on('disconnected', () => console.warn('MongoDB disconnected'));
		conn.on('reconnected', () => console.log('MongoDB reconnected'));
		conn.on('error', (err) => console.error('MongoDB error:', err?.message || err));
		conn._hasEventLogs = true;
	}
};

module.exports = { connectToDatabase };


