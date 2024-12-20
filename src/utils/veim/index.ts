import 'viem/window';

import { chains } from '@lens-protocol/client';
import { type Address, createWalletClient, custom } from 'viem';

// hoist account
const [address] = (await window.ethereum!.request({
  method: 'eth_requestAccounts',
})) as [Address];

export const walletClient = createWalletClient({
  account: address,
  chain: chains.testnet,
  transport: custom(window.ethereum!),
});
