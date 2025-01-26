import type React from "react"; // Import the React type
import type Candidate from "../interfaces/Candidate.interface"; // Import the Candidate interface

// Define the props type for the CandidatesAlreadySaved component
interface savedCandidatesProps {
    savedCandidates: Candidate[];
    removeFromStorage:
    ((
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        currentlyOnSavedCandidatesList: boolean | null | undefined,
        name: string | null | undefined
    ) => void) | null;
}

// This component is responsible for displaying the candidates that have already been saved to local storage
const CandidatesAlreadySaved = ({ savedCandidates, removeFromStorage }: savedCandidatesProps) => {
    return (
      <div>
        {/** Loop through the savedCandidates array and display each candidate */}
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