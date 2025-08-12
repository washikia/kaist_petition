// frontend/src/pages/SignaturePage.jsx
import SignatureForm from '../components/SignatureForm';

export default function SignaturePage() {
  return (
    <div>
      <h1>Denounce KAIST's Decision to Platform Technion-IIT</h1>
      <p>
        This is a letter denouncing KAIST and the National Museum of Korea's decision to permit Technion-IIT to participate and hold workshops in CIP 2025. We urge KAIST to immediately cancel Technion's invitation to the event.
      </p>
      <p>
        {/* ... Add the rest of your letter text here ... */}
      </p>
      
      <hr />
      <h2>Add Your Signature</h2>
      <SignatureForm />
    </div>
  );
}