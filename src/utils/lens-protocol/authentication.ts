import { Hex } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';

// export { signer };

import { client } from './client';

// const privateKey = process.env.REACT_APP_WALLET_PRIVATE_KEY;
const privateKey =
  '0x9df0f4b0a10c88b4a3766ab75578ad14b88cc4d76d0ffd8a02e7460b7b2e6f51';
// if (privateKey && privateKey.startsWith('0x')) {
const signer = privateKeyToAccount(privateKey as Hex);
// Use signer here
// } else {
//   throw new Error('Invalid or missing REACT_APP_WALLET_PRIVATE_KEY');
// }

const authenticateClientAsBuilder = async () => {
  const authenticated = await client.login({
    builder: {
      address: signer.address,
    },
    signMessage: (message) => signer.signMessage({ message }),
  });

  if (authenticated.isErr()) {
    return console.error(authenticated.error);
  }

  // SessionClient: { ... }
  const sessionClient = authenticated.value;

  return sessionClient;
};

export { authenticateClientAsBuilder };
