import type React from "react"; // Import the React type
import type Candidate from "../interfaces/Candidate.interface"; // Import the Candidate interface
import { IoIosRemoveCircleOutline } from "react-icons/io"; // Import the IoIosRemoveCircleOutline component from the react-icons/io module
import "./styles/SavedCandidatesList.css"; // Import the CandidatesAlreadySaved.css file

// Define the props type for the CandidatesAlreadySaved component
interface savedCandidatesProps {
    savedCandidates: Candidate[];
    removeFromStorage: (
        e: React.MouseEvent<SVGElement, MouseEvent>,
        currentlyOnSavedCandidatesList: boolean | null | undefined,
        name: string | null | undefined
    ) => void;
}

// This component is responsible for displaying the candidates that have already been saved to local storage
const CandidatesAlreadySaved = ({ savedCandidates, removeFromStorage }: savedCandidatesProps) => {
  return (
    <div>
      <ul className="candidates-list">
        {savedCandidates.map(candidate => (
          <li key={candidate.id} className="candidate-item">
            <img src={candidate.image} alt={candidate.name} className="candidate-image" />
            <div className="candidate-details">
              <h2 className="candidate-item">{candidate.name}</h2>
              <p className="candidate-item">{candidate.location}</p>
              <p className="candidate-item">{candidate.email}</p>
              <p className="candidate-item">{candidate.company}</p>
              <p className="candidate-item">{candidate.bio}</p>
            </div>
            <IoIosRemoveCircleOutline 
              onClick={(e) => removeFromStorage(e, true, candidate.name)} 
              className="remove-icon"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CandidatesAlreadySaved;