import { GrowthBook } from "@growthbook/growthbook-react";

// Create a GrowthBook instance
export const growthbook = new GrowthBook({
  // Callback when a user is put into an A/B experiment
  trackingCallback: (experiment, result) => {
    // eslint-disable-next-line no-console
    console.log("Experiment Viewed", {
      experimentId: experiment.key,
      variationId: result.variationId,
    });
  },
});
