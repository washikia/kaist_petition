// frontend/src/App.jsx
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import SignaturePage from './pages/SignaturePage'
import CheckEmailPage from './pages/CheckEmailPage'
import VerificationPage from './pages/VerificationPage'
import ThankYouPage from './pages/ThankYouPage'

function App() {
  return (
    <>
      {/* This nav is just for testing, we can remove it later */}
      <nav>
        <Link to="/">Home</Link> | <Link to="/sign">Sign</Link>
      </nav>
      <hr />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sign" element={<SignaturePage />} />
        <Route path="/check-email" element={<CheckEmailPage />} />
        {/* The :token part is a URL parameter */}
        <Route path="/verify/:token" element={<VerificationPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </>
  )
}

export default App