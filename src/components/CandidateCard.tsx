import React from "react"; // Import React
import { IoIosAddCircleOutline, IoIosRemoveCircleOutline } from "react-icons/io"; // Import Icons
import "./styles/CandidateCard.css"; // Import CSS
import Candidate from "../interfaces/Candidate.interface"; // Import the Candidate interface

// Define the CandidateCardProps type
type CandidateCardProps = {
  currentCandidate: Candidate;
  addToSavedCandidates?: () => void;
  removeFromStorage?: (
    e: React.MouseEvent<SVGElement>,
    currentlyOnSavedCandidatesList: boolean,
    name: string
  ) => void;
  fetchCandidate?: () => void;
};

// Define the CandidateCard component
const CandidateCard: React.FC<CandidateCardProps> = ({
  currentCandidate,
  addToSavedCandidates,
  removeFromStorage,
  fetchCandidate,
}) => {
  const handleRemove = (e: React.MouseEvent<SVGElement>) => {
    if (removeFromStorage) {
      removeFromStorage(e, true, currentCandidate.name);
    }
    if (fetchCandidate) {
      fetchCandidate();
    }
  };

  // Return the JSX for the CandidateCard component
  return (
    <div>
      <div className="candidate-card">
        <img
          src={currentCandidate.image || ""}
          alt={currentCandidate.name || "No Image"} // Set the alt attribute to the candidate's name or "No Image"
        />
        <div className="candidate-info">
          <h2>{currentCandidate.name || "No Name Provided"}</h2> {/* Set the h2 text to the candidate's name or "No Name Provided" */}
          <p>Location: {currentCandidate.location || "Not Available"}</p> {/* Set the p text to the candidate's location or "Not Available" */}
          <p>
            Email:{" "}
            <a href={`mailto:${currentCandidate.email || ""}`}> {/* Set the email link to the candidate's email or "" */}
              {currentCandidate.email || "Not Available"} {/* Set the email text to the candidate's email or "Not Available" */}
            </a>
          </p>
          <p>Company: {currentCandidate.company || "Not Available"}</p> {/* Set the company text to the candidate's company or "Not Available" */}
          <p>Bio: {currentCandidate.bio || "No Bio Available"}</p> {/* Set the bio text to the candidate's bio or "No Bio Available" */}
        </div>
      </div>
      <div className="candidate-actions">
        <IoIosRemoveCircleOutline onClick={handleRemove} className="remove" /> {/* Add an onClick event listener to the remove icon */}
        <IoIosAddCircleOutline
          onClick={addToSavedCandidates} // Add an onClick event listener to the add icon
          className="add"
        />
      </div>
    </div>
  );
};

export default CandidateCard;