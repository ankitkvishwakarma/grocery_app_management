import serverless from 'serverless-http';
import app from '../server.js';

const serverlessHandler = serverless(app);

export const handler = async (req, res) => {
  try {
    return await serverlessHandler(req, res);
  } catch (err) {
    console.error("❌ Serverless Function Error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" })
    };
  }
};
