import type React from "react"; // Import the React module
import type Candidate from "../interfaces/Candidate.interface"; // Import the Candidate interface
import { IoIosAddCircleOutline } from "react-icons/io"; // Import the IoIosAddCircleOutline component from the react-icons/io module
import { IoIosRemoveCircleOutline } from "react-icons/io"; // Import the IoIosRemoveCircleOutline component from the react-icons/io module
import "./styles/CandidateCard.css"; // Import the CandidateCard.css file

// Define the CandidateCardProps interface
type CandidateCardProps = {
    currentCandidate: Candidate;
    addToSavedCandidates?: (() => void) | null;
    onSavedCandidatesList?: boolean | null;
    removeFromStorage?: (
        e: React.MouseEvent<SVGSVGElement, MouseEvent>,
        currentlyOnSavedCandidatesList: boolean | null | undefined,
        name: string | null | undefined
    ) => void | null;
    fetchCandidate?: (() => void) | null; // Add fetchCandidate to props
};

// Define the CandidateCard component
const CandidateCard = ({
    currentCandidate,
    addToSavedCandidates,
    removeFromStorage,
    fetchCandidate,
}: CandidateCardProps) => {
    // Log the currentCandidate to check its properties
    console.log("Current Candidate:", currentCandidate);

    const handleRemoveCandidate = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
        removeFromStorage?.(e, true, currentCandidate.name);
        fetchCandidate?.(); // Call fetchCandidate after removing a candidate
    };

    return (
        <div>
            <div className="candidate-card">
                <img src={currentCandidate.image || ""} alt={currentCandidate.name || "no image"} />
                <div className="candidate-info">
                    <h2>{currentCandidate.name || "No Name Provided"}</h2>
                    <p>{currentCandidate.location || "No Location Provided"}</p>
                    <p>{currentCandidate.email || "No Email Provided"}</p>
                    <p>{currentCandidate.company || "No Company Provided"}</p>
                    <p>{currentCandidate.bio || "No Bio Provided"}</p>
                </div>
            </div>
            <div className="candidate-actions">
                <IoIosRemoveCircleOutline onClick={handleRemoveCandidate} className="remove" />
                <IoIosAddCircleOutline onClick={() => addToSavedCandidates?.()} className="add" />
            </div>
        </div>
    );
};

export default CandidateCard;