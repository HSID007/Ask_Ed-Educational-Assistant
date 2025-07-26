import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

export default function ResponseCard({ text, isUser }) {
  return (
    <div className={`card mt-3 ${isUser ? 'bg-light' : 'bg-info text-dark'}`}>
      <div className="card-body">
        <h6 className="card-subtitle mb-2 text-muted">
          {isUser ? 'You' : 'Assistant'}
        </h6>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
}

// Prop validation
ResponseCard.propTypes = {
  text: PropTypes.string.isRequired, // Ensure 'text' is always a string
  isUser: PropTypes.bool, // Ensure 'isUser' is a boolean
};

ResponseCard.defaultProps = {
  isUser: false, // Default value for 'isUser' is false (i.e., it's an assistant response)
};
