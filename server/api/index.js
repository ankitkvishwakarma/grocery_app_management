import serverless from 'serverless-http';
import app from '../server.js';

const handler = serverless(app);

// Wrap in try-catch to prevent crashing
export const handler = async (req, res) => {
  try {
    return await handler(req, res);
  } catch (err) {
    console.error("❌ Serverless Function Error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" })
    };
  }
};
