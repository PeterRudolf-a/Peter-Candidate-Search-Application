import type React from "react";
import { useEffect, useState } from "react";
import CandidatesAlreadySaved from "../components/CandidatesAlreadySaved";
import type Candidate from "../interfaces/Candidate.interface";

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  const removeFromStorage = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>,
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
    const addedCandidates = localStorage.getItem("addedCandidates");
    if (typeof addedCandidates === "string") {
      setSavedCandidates(JSON.parse(addedCandidates));
    }
  }, []);

  return (
    <>
      <h1>Potential Candidates</h1>
      <p>Here are the candidates you have saved:</p>
      <CandidatesAlreadySaved
        savedCandidates={savedCandidates}
        removeFromStorage={removeFromStorage}
      />
    </>
  );
};

export default SavedCandidates;
