import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { getApps, getPosts } from './utils/lens-protocol-api';
import { authenticateClientAsBuilder } from './utils/lens-protocol/authentication';
import { signature } from './utils/web3';

function App() {
  const [count, setCount] = useState(0);
  const [session, setSession] = useState(null);
  console.log('App ~ session:', session);

  useEffect(() => {
    // fetchPosts('0x01');
    // fetchFeed();
    getApps();
    getPosts();

    if (!session) {
      async function authentication() {
        const sessionRes = await authenticateClientAsBuilder();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        setSession(sessionRes as any);
        const res = await signature;
        console.log('authentication ~ res:', res);
      }

      authentication();
    }
  }, []);

  return (
    <>
      <div>
        <a href='https://vite.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
