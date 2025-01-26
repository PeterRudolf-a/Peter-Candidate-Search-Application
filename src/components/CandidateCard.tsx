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
    removeFromStorage?:
    ((
        e: React.MouseEvent<SVGSVGElement, MouseEvent>,
        currentlyOnSavedCandidatesList: boolean | null | undefined,
        name: string | null | undefined
    ) => void) | null;
};

// Define the CandidateCard component
const CandidateCard = ({
    currentCandidate,
    addToSavedCandidates,
    onSavedCandidatesList,
    removeFromStorage,
}: CandidateCardProps) => {
    return (
        <div className="candidate-card">
            <img src={currentCandidate.image} alt={currentCandidate.name} />
            <div className="candidate-info">
                <h2>{currentCandidate.name}</h2>
                <p>{currentCandidate.location}</p>
                <p>{currentCandidate.email}</p>
                <p>{currentCandidate.company}</p>
                <p>{currentCandidate.bio}</p>
                {onSavedCandidatesList ? (
                    <IoIosRemoveCircleOutline
                        onClick={(e: React.MouseEvent<SVGSVGElement, MouseEvent>) =>
                            removeFromStorage &&
                            removeFromStorage(
                                e,
                                onSavedCandidatesList,
                                currentCandidate.name
                            )
                        }
                    />
                ) : (
                    <IoIosAddCircleOutline
                        onClick={() => addToSavedCandidates?.()}
                    />
                )}
            </div>
        </div>
    );
};

export default CandidateCard;