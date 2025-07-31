type challenge = {
  title: string;
  category: string;
  level: string;
  submission: Submission[];
};

type Submission = {
  status: string;
};

export const getStatusFromChallenge = (challenge: challenge): string => {
  if (challenge.submission.length === 0) return "Pending";

  const hasPassed = challenge.submission.some(
    (submission) => submission.status === "Passed"
  );

  if (hasPassed) return "Completed";
  return "Attempted";
};
