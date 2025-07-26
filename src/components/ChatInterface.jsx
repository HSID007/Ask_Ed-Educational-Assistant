import React, { useState } from 'react';
import axios from 'axios';
import ResponseCard from './ResponseCard';

const ChatInterface = ({ selectedModel, addRecentChat }) => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSend = async () => {
    if (!message.trim()) return;

    try {
      setLoading(true);
      setResponse('');
      setError('');

      addRecentChat(message);
      console.log("chal rha hai");

      const res = await axios.post("https://ddb8-34-16-164-204.ngrok-free.app", { // Added /predict
        text: message,
      });

      //  ✅ Add these console logs to observe the response data
      console.log('Full response object:', res);
      console.log('Raw response data:', res.data);

      setResponse(res.data.response);
    } catch (error) {
      console.error(error);
      setError('Unable to get a response. Please try again later.');
    } finally {
      setLoading(false);
    }

    setMessage('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="card p-4 shadow-sm" style={{ backgroundColor: 'rgba(255,255,255,0.95)' }}>
      <h5>Ask your question:</h5>
      <textarea
        className="form-control mb-2"
        rows="3"
        placeholder="Type your question here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={loading}
      />
      <button className="btn btn-primary" onClick={handleSend} disabled={loading}>
        {loading ? 'Thinking...' : 'Send'}
      </button>

      {error && <div className="text-danger mt-2">{error}</div>}
      {response && <ResponseCard text={response} />}
    </div>
  );
};

export default ChatInterface;
