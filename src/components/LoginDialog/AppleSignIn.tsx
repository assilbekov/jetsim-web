"use client";

import React, { useEffect, useState } from 'react';

interface AppleAuthResponse {
  authorization: {
    code: string;
    id_token: string;
    state: string;
  };
  user?: {
    email?: string;
    name?: {
      firstName: string;
      lastName: string;
    };
  };
}

declare global {
  interface Window {
    AppleID: {
      auth: {
        init: (config: {
          clientId: string;
          scope: string;
          redirectURI: string;
          state?: string;
          usePopup?: boolean;
        }) => void;
        signIn: () => Promise<AppleAuthResponse>;
      };
    };
  }
}

export const AppleAuthButton: React.FC = () => {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initializeAppleAuth = () => {
      if (window.AppleID && window.AppleID.auth) {
        window.AppleID.auth.init({
          clientId: 'TF3SF4R2S8.com.IMIKO-L.JetSim',
          scope: 'name email',
          redirectURI: 'https://jetsim.app/auth/apple/callback',
          state: 'origin:web',
          usePopup: true
        });
        setIsInitialized(true);
      } else {
        console.error('Apple Auth SDK not loaded');
      }
    };

    if (document.readyState === 'complete') {
      initializeAppleAuth();
    } else {
      window.addEventListener('load', initializeAppleAuth);
      return () => window.removeEventListener('load', initializeAppleAuth);
    }
  }, []);

  const handleAppleSignIn = async () => {
    if (!isInitialized) {
      console.error('Apple Auth not initialized yet');
      return;
    }

    try {
      const response = await window.AppleID.auth.signIn();
      console.log('Apple Sign In Response:', response);
      // Handle the sign-in response here
    } catch (error) {
      console.error('Apple Sign In Error:', error);
    }
  };

  return (
    <button onClick={handleAppleSignIn} disabled={!isInitialized}>
      Sign in with Apple
    </button>
  );
};
