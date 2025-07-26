import React, { useState } from 'react';
import ModelSelector from '../components/ModelSelector';
import ChatInterface from '../components/ChatInterface';

const HomePage = () => {
  const [selectedModel, setSelectedModel] = useState('');
  const [showSidebar, setShowSidebar] = useState(false);
  const [recentChats, setRecentChats] = useState([
    "What is hashing ?",
    "Explain Stack Data Structure",
    "What is Recursion?"
  ]);

  const addRecentChat = (chat) => {
    setRecentChats((prevChats) => {
      const updated = [chat, ...prevChats.filter((c) => c !== chat)];
      return updated.slice(0, 10); // Keep most recent 10
    });
  };

  return (
    <div>
      {/* Sidebar Toggle Button */}
      <button
        className="btn btn-dark position-fixed top-0 end-0 m-4"
        style={{ zIndex: 1100, marginTop: '60px', backgroundColor: 'rgba(242, 242, 242, 0)' }}
        onClick={() => setShowSidebar(!showSidebar)}
      >
        {showSidebar ? '←' : '≡'}
      </button>

      {/* Sidebar Panel */}
      <div
        className="position-fixed top-0 end-0 h-100 shadow-lg"
        style={{
          width: showSidebar ? '250px' : '0',
          overflowX: 'hidden',
          backgroundColor: 'rgba(5, 95, 120, 0.66)',
          color: 'white',
          transition: 'width 0.1s ease-in-out',
          zIndex: 1050,
          padding: showSidebar ? '1rem' : '0'
        }}
      >
        {showSidebar && (
          <>
            <h5 className="fw-bold mb-3">Recent Chats</h5>
            <ul className="list-group">
              {recentChats.map((chat, idx) => (
                <li
                  key={idx}
                  className="list-group-item list-group-item-action"
                  onClick={() => {
                    setSelectedModel(selectedModel || 'default');
                    addRecentChat(chat);
                    const textarea = document.querySelector("textarea");
                    if (textarea) textarea.value = chat;
                  }}
                >
                  {chat}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      {/* Background image with dark overlay */}
      <div style={{ position: 'relative' }}>
        {/* Background image */}
        <div
          style={{
            backgroundImage: 'url("/background.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 0,
          }}
        >
          <div
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              width: '100%',
              height: '100%',
              position: 'absolute',
              zIndex: 0,
            }}
          />
        </div>

        <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh', color: 'white' }}>
          <div
            className="text-center p-5 mb-4"
            style={{
              backgroundColor: 'rgba(31, 70, 98, 0)',
              borderRadius: '10px',
              color: '#FFFFFF',
              maxWidth: '900px',
              margin: '0 auto',
              zIndex: 2,
              position: 'relative',
              boxShadow: '0 4px 12px rgba(252, 252, 252, 0)',
            }}
          >
            <h1 className="display-5 fw-bold">Welcome to AskEd</h1>
            <p className="lead">Fuel your curiosity. Start chatting with AskEd now!</p>
          </div>

          <div className="container mt-4">
            {/* Model Selector */}
            <div style={{ backgroundColor: 'rgba(6, 49, 80, 0.71)', borderRadius: '0.5px', padding: '0.5rem' }}>
              <ModelSelector selectedModel={selectedModel} setSelectedModel={setSelectedModel} />
            </div>

            {/* Chat UI or prompt to select model */}
            {selectedModel ? (
              <div className="mt-4">
                <ChatInterface selectedModel={selectedModel} addRecentChat={addRecentChat} />
              </div>
            ) : (
              <div className="text-center text-light mt-4">
                <p>Please choose a subject to begin chatting ⬆️</p>
              </div>
            )}

            {/* Suggested Prompts */}
            <div
              className="mt-5"
              style={{ backgroundColor: 'rgba(31, 70, 98, 0)', padding: '1rem', borderRadius: '10px' }}
            >
              <p className="fw-bold" style={{ color: '#E3F2FD', fontSize: '1.5rem' }}>Try one of these:</p>
              <div className="d-flex flex-wrap gap-2">
                {["What is hashing ?", "Explain Stack Data Structure ", "What is Recursion?"].map((prompt, idx) => (
                  <button
                    key={idx}
                    className="btn"
                    onClick={() => addRecentChat(prompt)}
                    style={{ border: '1px solid rgba(25, 118, 210, 0)', color: '#000000', backgroundColor: '#E3F2FD' }}
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>

            {/* Features Grid */}
            <div className="mt-5">
              <h3 className="text-center mb-4 text-white">What Can AskEd Help You With?</h3>
              <div className="row g-4">
                {[{ title: 'Lesson Planning', text: 'Get structured lesson plans tailored to your subject and class level.' },
                  { title: 'Quiz Generator', text: 'Instantly create quizzes from your desired topic and difficulty level.' },
                  { title: 'Grading Assistant', text: 'Automatically generate feedback or grading summaries.' }].map((item, idx) => (
                    <div className="col-md-4" key={idx}>
                      <div className="card shadow-sm" style={{ backgroundColor: 'rgba(255,255,255,0.9)' }}>
                        <div className="card-body">
                          <h5 className="card-title">{item.title}</h5>
                          <p className="card-text">{item.text}</p>
                        </div>
                      </div>
                    </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <footer className="text-center mt-5 p-2 bg-light text-muted" style={{ borderRadius: '1px' }}>
              Built with ❤️ by the EduChat Team | © 2025
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
