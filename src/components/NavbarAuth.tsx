import React, { useContext } from 'react';
import { useHistory } from '@docusaurus/router';
import { AuthContext } from '../lib/better-auth-client';

export default function NavbarAuth() {
  const history = useHistory();
  const authClient = useContext(AuthContext);

  // If the authClient is not yet available, don't render anything.
  if (!authClient) {
    return null;
  }

  // Better-auth ka built-in hook use karein session track karne ke liye
  const { data: session, isPending } = authClient.useSession();

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          history.push('/login');
        },
      },
    });
  };

  if (isPending) return null;

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {session ? (
        <>
          <span style={{ fontSize: '0.9rem', fontWeight: '500', marginRight: '10px' }}>
            Hi, {session.user.name || 'User'}
          </span>
          <button onClick={handleLogout} className="button button--secondary button--sm">
            Logout
          </button>
        </>
      ) : (
        <>
          <button onClick={() => history.push('/login')} className="button button--primary button--sm" style={{ marginRight: '5px' }}>
            Login
          </button>
          <button onClick={() => history.push('/register')} className="button button--outline button--secondary button--sm">
            Sign Up
          </button>
        </>
      )}
    </div>
  );
}