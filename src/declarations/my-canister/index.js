import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory } from './my_canister.did.js';

const canisterId = process.env.REACT_APP_CANISTER_ID;

const agent = new HttpAgent({ host: 'https://ic0.app' });
export const myCanisterActor = Actor.createActor(idlFactory, { agent, canisterId });
