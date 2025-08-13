// frontend/src/pages/VerificationPage.jsx

import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function VerificationPage() {
  // Get the token from the URL using useParams hook
  const { token } = useParams();
  const navigate = useNavigate();

  const [verificationStatus, setVerificationStatus] = useState('Verifying your signature, please wait...');

  // useEffect will run once when the component is first loaded
  useEffect(() => {
    // Define an async function inside useEffect to handle the API call
    const verifyToken = async () => {
      if (!token) {
        setVerificationStatus('No verification token provided. Please use the link from your email.');
        return;
      }

      try {
        // Make the GET request to our backend verification endpoint
        // Note: The token is part of the URL, not a query parameter.
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/signature/verify/${token}`);

        // If the request is successful (200 OK)
        console.log('Verification successful:', response.data);
        
        // Update the status and navigate to the thank you page after a short delay
        setVerificationStatus('Verification successful! Redirecting...');
        setTimeout(() => {
          navigate('/thank-you');
        }, 2000); // 2-second delay before redirecting

      } catch (error) {
        // If the backend returns an error (e.g., 404 Not Found for an invalid token)
        const errorMessage = error.response?.data?.detail || 'Verification failed. The link may be invalid or expired.';
        console.error('Verification error:', error.response || error);
        setVerificationStatus(errorMessage);
      }
    };

    verifyToken(); // Call the async function

  }, [token, navigate]); // Dependency array ensures this effect runs only when token or navigate changes

  return (
    <div>
      <h1>Signature Verification</h1>
      <p>{verificationStatus}</p>
    </div>
  );
}