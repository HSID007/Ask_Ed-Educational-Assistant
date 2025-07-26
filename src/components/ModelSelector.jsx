import React from 'react';

export default function ModelSelector({ selectedModel, setSelectedModel }) {
  return (
    <div className="mb-3">
      <label className="form-label">Choose a Subject:</label>
      <select
        className="form-select"
        value={selectedModel}
        onChange={(e) => setSelectedModel(e.target.value)}
      >
        <option value="">Select Subject</option>
        <option value="dsa">Data Structures</option>
        <option value="os">Operating Systems</option>
        <option value="dbms">DBMS</option>
      </select>
    </div>
  );
}
