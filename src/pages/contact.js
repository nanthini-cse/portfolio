import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setStatus('Form submission functionality coming soon!');
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
        <div style={{ marginBottom: 10 }}>
          <label>Name</label><br />
          <input type="text" name="name" value={formData.name} onChange={handleChange} required style={{ width: '100%' }} />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>Email</label><br />
          <input type="email" name="email" value={formData.email} onChange={handleChange} required style={{ width: '100%' }} />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>Message</label><br />
          <textarea name="message" value={formData.message} onChange={handleChange} required rows="5" style={{ width: '100%' }}></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
      {status && <p style={{ marginTop: 10 }}>{status}</p>}
    </div>
  );
};

export default Contact;
