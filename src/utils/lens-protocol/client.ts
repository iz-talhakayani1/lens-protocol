import { PublicClient, testnet } from '@lens-protocol/client';

export const client = PublicClient.create({
  environment: testnet,
  storage: window.localStorage,
  // origin: "https://myappdomain.xyz", // Ignored if running in a browser
});
