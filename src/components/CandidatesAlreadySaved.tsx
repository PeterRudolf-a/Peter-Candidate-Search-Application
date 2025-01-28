import React from "react"; // Import React
import { IoIosRemoveCircleOutline } from "react-icons/io"; // Import Icons
import "./styles/SavedCandidatesList.css"; // Import CSS
import Candidate from "../interfaces/Candidate.interface"; // Import Candidate interface

// SavedCandidatesProps interface
interface SavedCandidatesProps {
  savedCandidates: Candidate[];
  removeFromStorage: (
    e: React.MouseEvent<SVGElement, MouseEvent>,
    currentlyOnSavedCandidatesList: boolean | null | undefined,
    name: string | null | undefined
  ) => void;
}

// CandidatesAlreadySaved component
const CandidatesAlreadySaved = ({
  savedCandidates,
  removeFromStorage,
}: SavedCandidatesProps) => {
  return (
    <ul className="candidates-list">
      <li className="candidate-header"> {/* Header for the list */}
        <span>Image</span>
        <span>Name</span>
        <span>Location</span>
        <span>Email</span>
        <span>Company</span>
        <span>Bio</span>
        <span>Reject</span>
      </li>
      {savedCandidates.map((candidate) => ( // Map through the savedCandidates array and display the information if available
        <li key={candidate.id} className="candidate-item">
          <img
            src={candidate.image}
            alt={candidate.name || "No image available"}
            className="candidate-image"
          />
          <div className="candidate-details">
            <h2>{candidate.name}</h2>
            <p>{`(${candidate.name || "No name available"})`}</p>
          </div>
          <div className="candidate-details">
            <p>{candidate.location || "No location available"}</p>
          </div>
          <div className="candidate-details">
            <p>
              <a href={`mailto:${candidate.email}`} style={{ color: "#00aaff" }}>
                {candidate.email || "No email available"}
              </a>
            </p>
          </div>
          <div className="candidate-details">
            <p>{candidate.company || "No company available"}</p>
          </div>
          <div className="candidate-details">
            <p>{candidate.bio || "No bio available"}</p>
          </div>
          <IoIosRemoveCircleOutline
            onClick={(e) =>
              removeFromStorage(e, true, candidate.id.toString())
            }
            className="remove-icon"
          />
        </li>
      ))}
    </ul>
  );
};

export default CandidatesAlreadySaved;
