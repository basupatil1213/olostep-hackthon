import express from 'express';
import * as tf from '@tensorflow/tfjs-node';
import * as qna from '@tensorflow-models/qna';
import WebScrap from '../backend/models/WebScrap.js';

const router = express.Router();

router.post('/ask-question', async (req, res) => {
  const { url, question } = req.body;

  try {
    console.log(`reached here`);
    
    // Fetch the scraped content from MongoDB based on the URL
    const webScrap = await WebScrap.findOne({ url });

    if (!webScrap) {
      return res.status(404).json({ error: 'Content not found for the given URL' });
    }

    const { body } = webScrap;

    // Load the QnA model
    const model = await qna.load();

    // Perform question answering
    const answers = await model.findAnswers(question, body);

    if (answers.length > 0) {
      res.json({ answer: answers[0].text });
    } else {
      res.json({ answer: 'No good answer found.' });
    }
  } catch (error) {
    console.error('Error generating answer:', error);
    res.status(500).json({ error: 'Failed to generate answer' });
  }
});

export default router;
