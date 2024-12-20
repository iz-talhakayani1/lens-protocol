// import { privateKeyToAccount } from 'viem/accounts';

// const message =
//   'api.testnet.lens.dev wants you to sign in with your Ethereum account:\n0xAAD7D223E95acE70f58cCF7Bf387Ddd651C33403\n\nSign in with Ethereum to Lens API\n\nURI: https://api.testnet.lens.dev/\nVersion: 1\nChain ID: 37111\nNonce: 739f4c26-7902-40b3-9de2-4052d8679062\nIssued At: 2024-12-19T13:26:53.784452337+00:00';
// const account = privateKeyToAccount(
//   '0x9df0f4b0a10c88b4a3766ab75578ad14b88cc4d76d0ffd8a02e7460b7b2e6f51'
// );

// const signature = account.signMessage({ message });
// console.log('signature:', signature);
// export { signature };

import { Wallet } from 'ethers';

const message =
  'api.testnet.lens.dev wants you to sign in with your Ethereum account:\n0x476FEe58E3F1FcD36AF7fc0207cf1BeF67007dd3\n\nSign in with Ethereum to Lens API\n\nURI: https://api.testnet.lens.dev/\nVersion: 1\nChain ID: 37111\nNonce: a90654ea-2164-442e-afc5-f5e07bb0f645\nIssued At: 2024-12-19T13:33:13.102117613+00:00';
const signer = new Wallet(
  '0x9df0f4b0a10c88b4a3766ab75578ad14b88cc4d76d0ffd8a02e7460b7b2e6f51'
);

export const signature = signer.signMessage(message);
