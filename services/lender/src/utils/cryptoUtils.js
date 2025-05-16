let commitmentStore = {};

// Simulated function to store commitment
export const storeCommitment = (party, commitment, zkp) => {
  commitmentStore[party] = { commitment, zkp };
};

// Simulated key aggregation
export const aggregateKeys = (commitments) => {
  return commitments.join('::'); // placeholder for real key aggregation
};

