// frontend/src/pages/LandingPage.jsx
import { Link } from 'react-router-dom';
import SignatoriesList from '../components/SignatoriesList';

export default function LandingPage() {
  return (
    <div>
      <h1>An Urgent Call to Uphold KAIST's Ethical Standards</h1>
      <p>
        This letter serves to denounce the decision by KAIST and the National Museum of Korea to permit the Technion-Israel Institute of Technology (IIT) to participate in CIPA 2025.
      </p>

      <p>
        We urge KAIST to immediately cancel Technion's invitation. Technion has been credibly accused of complicity in grave ethical violations, leading to its removal from high-profile international events and boycotts by scholars and research institutes worldwide.
      </p>
      <p>By providing a platform to Technion, KAIST risks severe reputational damage and, more importantly, institutional complicity in these offenses. We therefore implore KAIST to rescind its invitation to Technion, a step necessary to:</p>
      <ol>
        <li>Uphold its own stated principles of ethics and social responsibility.</li>
        <li>Prevent its association with an institution implicated in systemic human rights violations.</li>
        <li>Align with the global academic community in holding institutions accountable and reaffirm its standing as a leader in ethical scientific progress.</li>
      </ol>


      <Link to="/sign">
        <button style={{ fontSize: '1.2rem', margin: '1rem 0' }}>
          Read the Full Letter & Add Your Signature
        </button>
      </Link>
      <hr />
      <h2>Current Signatories</h2>
      <SignatoriesList />
    </div>
  );
}