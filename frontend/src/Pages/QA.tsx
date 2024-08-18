import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../App';

const QuestionAnswer: React.FC = () => {
  const [url, setUrl] = useState<string>('');
  const [question, setQuestion] = useState<string>('');
  const [answer, setAnswer] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post<{ answer: string }>(`${BASE_URL}/ai/ask-question`, { url, question });
      setAnswer(response.data.answer);
    } catch (error) {
      console.error('Error fetching answer:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter the website URL"
        />
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask a question about the content"
        />
        <button type="submit">Ask</button>
      </form>
      {answer && <div><strong>Answer:</strong> {answer}</div>}
    </div>
  );
};

export default QuestionAnswer;
