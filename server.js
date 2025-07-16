require('dotenv').config(); // Load environment variables from .env
const express = require('express');
const cors = require('cors');
const { google } = require('googleapis');

const app = express();
app.use(cors());
app.use(express.json());

// --- Configuration ---
// The ID of your Google Sheet
const SPREADSHEET_ID = '146soe3lFluGNngsB71NSisI48aQh5fI879N6YvnV8fE';
const SHEET_NAME = 'Logs';

// Global variable to store authenticated client
let sheetsClient;

async function initializeSheetsClient() {
    try {
        // Check if the base64 environment variable is set
        if (!process.env.GOOGLE_CREDENTIALS_BASE64) {
            throw new Error('GOOGLE_CREDENTIALS_BASE64 environment variable is not set.');
        }

        // Decode the Base64 string back to JSON string
        const decodedJsonString = Buffer.from(process.env.GOOGLE_CREDENTIALS_BASE64, 'base64').toString('utf8');
        console.log('Base64 decoded successfully.');

        // Parse the JSON string into an object
        const credentials = JSON.parse(decodedJsonString);
        console.log('JSON parsed successfully from decoded string.');
        console.log('Client Email (from decoded):', credentials.client_email);

        // Authenticate using the parsed credentials
        const auth = new google.auth.GoogleAuth({
            credentials, // Pass the parsed JSON object
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        sheetsClient = await auth.getClient();
        console.log('Google Sheets API client initialized successfully.');
        return sheetsClient;

    } catch (error) {
        console.error('Error initializing Google Sheets API client:', error.message);
        if (error instanceof SyntaxError) {
            console.error('Possible JSON parsing issue after Base64 decode. Check your base64 string and original JSON.');
            //console.error('Decoded String (first 500 chars):', decodedJsonString ? decodedJsonString.substring(0, 500) : 'N/A');
        } else if (error.message.includes('GOOGLE_CREDENTIALS_BASE64')) {
            console.error('Make sure your .env file is loaded and the variable is correctly set.');
        } else {
            console.error('This error often indicates a malformed private_key within the JSON, even after decoding.');
        }
        // Exit the process if critical component fails
        process.exit(1);
    }
}

// Call this once when the server starts
initializeSheetsClient();

async function logToSheet(name, email, message) {
    if (!sheetsClient) {
        console.error('Sheets client not initialized. Cannot log data.');
        throw new Error('Sheets client not ready.');
    }

    const sheets = google.sheets({ version: 'v4', auth: sheetsClient });
    const timestamp = new Date().toISOString();
    const values = [[timestamp, name, email, message]];

    try {
        await sheets.spreadsheets.values.append({
            spreadsheetId: SPREADSHEET_ID,
            range: `${SHEET_NAME}!A:D`,
            valueInputOption: 'RAW',
            resource: { values },
        });
    } catch (error) {
        console.error('Error appending data to sheet:', error.message);
        throw error; // Re-throw to be caught by the express route
    }
}

app.post('/api/send-message', async (req, res) => {
    const { name, email, message } = req.body;
    try {
        if (!sheetsClient) {
            return res.status(503).json({ success: false, error: 'Service temporarily unavailable: Sheets client not ready.' });
        }
        await logToSheet(name, email, message);
        res.status(200).json({ success: true, message: 'Message sent and logged!' });
    } catch (error) {
        console.error('Failed to log to sheet:', error);
        res.status(500).json({ success: false, error: 'Failed to process message. Please try again.' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));