// frontend/src/components/SignatoriesList.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function SignatoriesList() {
  // State for the list of signatories
  const [signatories, setSignatories] = useState([]);
  // State for UI feedback
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSignatories = async () => {
      try {
        // Fetch data from our backend's public endpoint
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/signature/`);
        setSignatories(response.data);
        setError(null);
      } catch (err) {
        setError('Failed to load the list of signatories. Please try refreshing the page.');
        console.error('Error fetching signatories:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSignatories();
  }, []); // Empty dependency array means this runs once on component mount

  // --- Render Logic ---

  if (isLoading) {
    return <p>Loading signatures...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  if (signatories.length === 0) {
    return <p>No verified signatures yet. Be the first to sign!</p>;
  }

  return (
    <div>
      <h3>Total Verified Signatures: {signatories.length}</h3>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {signatories.map((sig) => (
          <li key={sig.id} style={{ borderBottom: '1px solid #eee', padding: '0.5rem 0' }}>
            {/* Conditionally render based on whether the 'name' property exists */}
            <strong>{sig.name ? sig.name : 'Anonymous'}</strong>
            <br />
            <span style={{ color: '#555', fontSize: '0.9em' }}>{sig.affiliation}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}