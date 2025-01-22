import type React from "react";
import type Candidate from "../interfaces/Candidate.interface";
import CandidateCard from "./CandidateCard";

interface savedCandidatesProps {
    savedCandidates: Candidate[];
    removeFromStorage:
    ((
        e: React.MouseEvent<SVGSVGElement, MouseEvent>,
        currentlyOnSavedCandidatesList: boolean | null | undefined,
        name: string | null | undefined
    ) => void) | null;
}

const CandidatesAlreadySaved = ({
    savedCandidates,
    removeFromStorage,
}: savedCandidatesProps) => {
    return (
        <div>
            <h1>Saved Candidates</h1>
            {savedCandidates.map((candidate) => (
                <CandidateCard
                    key={candidate.id}
                    currentCandidate={candidate}
                    onSavedCandidatesList={true}
                    removeFromStorage={removeFromStorage}
                />
            ))}
        </div>
    );
};

export default CandidatesAlreadySaved;