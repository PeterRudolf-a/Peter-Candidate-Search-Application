import type React from "react";
import type Candidate from "../interfaces/Candidate.interface";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosRemoveCircleOutline } from "react-icons/io";

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