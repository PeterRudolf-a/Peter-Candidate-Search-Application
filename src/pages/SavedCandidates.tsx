import type React from "react";
import { useEffect, useState } from "react";
import CandidatesAlreadySaved from "../components/CandidatesAlreadySaved";
import type Candidate from "../interfaces/Candidate.interface";

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  const removeFromStorage = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    currentlyOnSavedCandidatesList: boolean | null | undefined,
    name: string | null | undefined
  ) => {
    e.preventDefault();
    if (currentlyOnSavedCandidatesList) {
      const updatedCandidates = savedCandidates.filter(
        (candidate) => candidate.name !== name
      );
      setSavedCandidates(updatedCandidates);
      localStorage.setItem("addedCandidates", JSON.stringify(updatedCandidates));
    }
  }

  useEffect(() => {
    const addedCandidates = JSON.parse(localStorage.getItem('addedCandidates') || '[]');
    console.log("Retrieved candidates", addedCandidates);
    setSavedCandidates(addedCandidates);
  }, []);

  return (
    <>
      <h1 className="pageHeader">Potential Candidates</h1>
      {
        savedCandidates.length > 0 ? (
          <CandidatesAlreadySaved
            savedCandidates={savedCandidates}
            removeFromStorage={removeFromStorage}
          />
        ) : (
          <p>No candidates saved</p>
        )
      }
    </>
  );
};

export default SavedCandidates;
