import { useState, useEffect } from 'react';
import Modal from './Modal';
import useCookie from '../useCookie';

export default function TermsAndConditions() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasRejected, setHasRejected] = useState(false);
  const [showUsernameInput, setShowUsernameInput] = useState(false);
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [usernameCookie, setUsernameCookie] = useCookie("username");

  useEffect(() => {
    // Check if user has seen the terms before
    const hasSeenTerms = localStorage.getItem('hasSeenTerms');
    console.log('hasSeenTerms', hasSeenTerms);
    if (!hasSeenTerms || hasSeenTerms === 'false') {
      setIsOpen(true);
    }
  }, []);

  const generateRandomUsername = () => {
    const randomNum = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    return `user${randomNum}`;
  };

  const handleReject = () => {
    localStorage.setItem('hasSeenTerms', 'false');
    setHasRejected(true);
    setShowUsernameInput(false);
    setUsername('');
    setUsernameError('');
  };

  const handleAccept = () => {
    setShowUsernameInput(true);
    setHasRejected(false);
    setUsernameError('');
  };

  const validateUsername = (value) => {
    if (value.length > 30) {
      setUsernameError('Username must be 30 characters or less');
      return false;
    }
    if (value.length > 0 && !/^\w+$/.test(value)) {
      setUsernameError('Username can only contain letters, numbers, and underscores');
      return false;
    }
    setUsernameError('');
    return true;
  };

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);
    validateUsername(value);
  };

  const handleAccessFirewall = () => {
    let finalUsername = username;
    
    // If username is empty, generate a random one
    if (!username.trim()) {
      finalUsername = generateRandomUsername();
      setUsername(finalUsername);
    }

    // Validate username before proceeding
    if (!validateUsername(finalUsername)) {
      return;
    }

    localStorage.setItem('hasSeenTerms', 'true');
    
    // Set cookie with max expiration (effectively never expires)
    const maxDate = new Date('9999-12-31');
    setUsernameCookie(finalUsername, maxDate);
    
    setIsOpen(false);
  };

  return (
    <Modal 
      open={isOpen} 
      onClose={handleReject} 
      onUpdate={showUsernameInput ? handleAccessFirewall : handleAccept}
      updateButtonText={showUsernameInput ? "Access Firewall" : "Accept"}
      clearButtonText="Reject"
      title="Terms"
      allowOutsideClick={false}
      showCloseButton={false}
    >
      <div className="p-2">
        {hasRejected && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded my-4">
            <p className="font-bold">In order to access FIREWALL CAFE, you must accept the terms to continue.</p>
          </div>
        )}
        <div className="prose">
          {showUsernameInput ? (
            <div className="mb-4">
              <p className="text-sm mb-4">Enter an optional username for your FIREWALL session:</p>
              <input
                type="text"
                value={username}
                onChange={handleUsernameChange}
                placeholder="Username (optional)"
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  usernameError ? 'border-red-500' : 'border-gray-300'
                }`}
                maxLength={30}
              />
              {usernameError && (
                <p className="text-red-500 text-sm mt-1">{usernameError}</p>
              )}
            </div>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
    </Modal>
  );
} 