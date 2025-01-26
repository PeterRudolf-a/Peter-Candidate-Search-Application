import type React from "react";
import type Candidate from "../interfaces/Candidate.interface";

interface savedCandidatesProps {
    savedCandidates: Candidate[];
    removeFromStorage:
    ((
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        currentlyOnSavedCandidatesList: boolean | null | undefined,
        name: string | null | undefined
    ) => void) | null;
}

const CandidatesAlreadySaved = ({ savedCandidates, removeFromStorage }: savedCandidatesProps) => {
    return (
      <div>
        {savedCandidates.map(candidate => (
          <div key={candidate.id}>
            <h2>{candidate.name}</h2>
            <button onClick={(e) => removeFromStorage && removeFromStorage(e, true, candidate.name)}>Remove</button>
          </div>
        ))}
      </div>
    );
  };

export default CandidatesAlreadySaved;