import { useState, useEffect } from 'react';
import { account } from './lib/appwrite';
import LoginPage from './LoginPage';

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    // You can trigger the GraphQL query here once the user is logged in.
    console.log('Checking if user is logged in...');
    
    const checkSession = async () => {
      try {
        const user = await account.get();
        setLoggedInUser(user);
      } catch (error) {
        console.log('No active session:', error);
      }
    };

    checkSession();
  }, []);

  return (
    <div>
      <p>
        {loggedInUser ? `Logged in as ${loggedInUser.name}` : 'Not logged in'}
      </p>

      {!loggedInUser ? (
        <LoginPage setLoggedInUser={setLoggedInUser} />
      ) : (
        <button
          type="button"
          onClick={async () => {
            await account.deleteSession('current');
            setLoggedInUser(null);
          }}
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default App;
