import { useState, useEffect } from 'react';
import Modal from './Modal';

export default function TermsAndConditions() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasRejected, setHasRejected] = useState(false);

  useEffect(() => {
    // Check if user has seen the terms before
    const hasSeenTerms = localStorage.getItem('hasSeenTerms');
    console.log('hasSeenTerms', hasSeenTerms);
    if (!hasSeenTerms || hasSeenTerms === 'false') {
      setIsOpen(true);
    }
  }, []);

  const handleReject = () => {
    localStorage.setItem('hasSeenTerms', 'false');
    setHasRejected(true);
  };

  const handleAccept = () => {
    localStorage.setItem('hasSeenTerms', 'true');
    setIsOpen(false);
  };

  return (
    <Modal 
      open={isOpen} 
      onClose={handleReject} 
      onUpdate={handleAccept}
      updateButtonText="Accept Terms"
      clearButtonText="Reject"
      title="Terms & Conditions"
      allowOutsideClick={false}
      showCloseButton={false}
    >
      <div className="mt-16 p-4">
        {hasRejected && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            <p className="font-bold">You must accept the terms to continue</p>
            <p className="text-sm">Access to FIREWALL requires acceptance of the Terms & Conditions.</p>
          </div>
        )}
        <div className="prose">
          <p className="text-sm mb-4"><span className="font-bold">Your participation in FIREWALL provides your consent.</span>
             Please review the following terms and conditions, before your FIREWALL Search Session.</p>

          <p className="text-sm mb-4"><span className="font-bold">FIREWALL does not monitor or review the content of your Search Session.</span>
            Opinions expressed or material appearing on your searches are not necessarily shared or endorsed by FIREWALL, and we should not be regarded as the publisher of such opinions or material.
            Please be aware that we are not responsible for the privacy practices, or content, of these sites.
          </p>

          <p className="text-sm mb-4">We encourage our users to be aware when they search to read the privacy statements of these sites.
            You should evaluate the security and trustworthiness of any other site connected to this site or accessed through this site yourself, before disclosing any personal information to them.
          </p>
          <p className="text-sm mb-4">FIREWALL will not accept any responsibility for any loss or damage in whatever manner,
            howsoever caused, resulting from your Search Session,
            nor any disclosure to third parties of personal information.
            We record all IP addresses for all transactions, investigate and prosecute all credit card frauds to the fullest extent of the International law.
          </p>
        </div>
      </div>
    </Modal>
  );
} 