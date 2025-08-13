// frontend/src/components/SignatureForm.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// Define your backend API URL
const API_URL = import.meta.env.VITE_API_URL + '/api/signature/';

export default function SignatureForm() {
  const navigate = useNavigate(); // Hook for navigation

  // Form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [affiliation, setAffiliation] = useState('Undergraduate Student');
  const [isAnonymous, setIsAnonymous] = useState(false);

  // UI state
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent page reload
    setIsLoading(true);
    setError(null);

    const signatureData = {
      name,
      email,
      affiliation,
      is_anonymous: isAnonymous,
    };

    try {
      const response = await axios.post(API_URL, signatureData);
      console.log('Signature submitted:', response.data);
      // On success, navigate to the next step
      navigate('/check-email');
    } catch (err) {
      // Set error message from backend response if available
      const errorMessage = err.response?.data?.detail || 'An unexpected error occurred.';
      setError(errorMessage);
      console.error('Submission error:', err.response || err);
    } finally {
      setIsLoading(false); // Stop loading aether success or fail
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Full Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">KAIST Email Address</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="e.g., your.name@kaist.ac.kr"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="affiliation">Affiliation</label>
        <select
          id="affiliation"
          value={affiliation}
          onChange={(e) => setAffiliation(e.target.value)}
        >
          <option>Undergraduate Student</option>
          <option>Master's Student</option>
          <option>PhD Student</option>
          <option>Researcher</option>
          <option>Professor</option>
          <option>Staff</option>
          <option>Alumnus</option>
        </select>
      </div>

      <div className="form-group">
        <label>
          <input
            type="checkbox"
            checked={isAnonymous}
            onChange={(e) => setIsAnonymous(e.target.checked)}
          />
          {' '}I wish to sign anonymously (my affiliation will be shown, but not my name).
        </label>
      </div>
      
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Submitting...' : 'Submit Signature'}
      </button>

      {error && <p className="error-message">{error}</p>}
    </form>
  );
}