import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg"
    style={{
      zIndex: 10,
       position: 'relative',
      backgroundColor: '#155e75',
      paddingTop: '1rem',
      paddingBottom: '1rem',
    }}>
      <div className="container-fluid">
        <a href="/" className="d-flex align-items-center text-decoration-none">
          <img
            src="/logo512.png"
            alt="AskEd Logo"
            width="60"
            height="60"
            className="me-2 rounded-circle"
          />
          <span
            className="navbar-brand mb-0 h1"
            style={{
              color: 'white',
              fontWeight: '600',
              fontFamily: `'Segoe UI', 'Roboto', 'Open Sans', 'sans-serif'`,
              letterSpacing: '1.5px',
              fontSize: '2.5rem',
            }}
          >
            Ask<span style={{ color: '#67e8f9' }}>Ed</span>
          </span>
        </a>
      </div>
    </nav>
  );
}
