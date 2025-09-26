// src/canister.js
import { Actor, HttpAgent } from "@dfinity/agent";
import { idlFactory } from "./my_canister.did.js";  // generated when you build with dfx

// Replace with your deployed canister ID
const canisterId = "ini77-5aaaa-aaaad-aanva-cai";

// Use mainnet boundary node
const agent = new HttpAgent({
  host: "https://ic0.app",   // or https://boundary.ic0.app
});

// Optional (useful if you're in local dev, remove for prod)
if (process.env.NODE_ENV !== "production") {
  agent.fetchRootKey().catch(err => {
    console.warn("Unable to fetch root key. Check local replica is running");
    console.error(err);
  });
}

export const myCanisterActor = Actor.createActor(idlFactory, {
  agent,
  canisterId,
});
