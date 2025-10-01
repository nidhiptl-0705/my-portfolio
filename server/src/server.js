const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const { config } = require('dotenv');
const { connectToDatabase } = require('./config/db');

config();

const app = express();

const corsOptions = {
	origin: true, // allow any origin during development
	methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
	allowedHeaders: ['Content-Type', 'Authorization'],
	optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.options(/^\/api\/.*$/, cors(corsOptions));
app.use(express.json());
app.use(morgan('dev'));
app.use('/public', express.static(path.join(__dirname, '../public')));

// API routes
app.use('/api', require('./routes'));

// Serve built client (after API routes)
const clientDistPath = path.join(__dirname, '../../client/dist');
app.use(express.static(clientDistPath));

// SPA fallback for non-API routes (Express 5 compatible)
app.get(/^(?!\/api\/).*/, (req, res, next) => {
	res.sendFile(path.join(clientDistPath, 'index.html'));
});

// 404 handler
app.use((req, res) => {
	res.status(404).json({ error: 'Not found', path: req.originalUrl });
});

// Error handler
app.use((err, _req, res, _next) => {
	console.error('Unhandled error:', err);
	res.status(500).json({ error: 'Internal Server Error' });
});

// Global process error logging
process.on('unhandledRejection', (reason) => {
	console.error('Unhandled Rejection:', reason);
});
process.on('uncaughtException', (err) => {
	console.error('Uncaught Exception:', err);
});

const BASE_PORT = Number(process.env.PORT) || 5000;
const HOST = process.env.HOST || '0.0.0.0';

(async () => {
	console.log('Attempting to connect to DB...');
	await connectToDatabase();

	const startServer = (port, retriesLeft) => {
		console.log(`Starting server on http://${HOST === '0.0.0.0' ? 'localhost' : HOST}:${port} (retries left: ${retriesLeft})`);
		const server = app.listen(port, HOST, () => {
			console.log(`Server listening on http://${HOST === '0.0.0.0' ? 'localhost' : HOST}:${port}`);
		});
		server.on('error', (err) => {
			if (err && err.code === 'EADDRINUSE' && retriesLeft > 0) {
				console.warn(`Port ${port} in use, trying ${port + 1}...`);
				startServer(port + 1, retriesLeft - 1);
			} else {
				console.error('Server listen error:', err && err.code ? `${err.code} - ${err.message}` : err);
				process.exit(1);
			}
		});
	};

	startServer(BASE_PORT, 5);
})();
