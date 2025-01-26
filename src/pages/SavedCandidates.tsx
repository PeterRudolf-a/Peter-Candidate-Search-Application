import type React from "react"; // Import the React type
import { useEffect, useState } from "react"; // Import the useEffect and useState hooks
import CandidatesAlreadySaved from "../components/CandidatesAlreadySaved"; // Import the CandidatesAlreadySaved component
import type Candidate from "../interfaces/Candidate.interface"; // Import the Candidate interface

// This component is responsible for displaying the saved candidates on the page
const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  // Remove a candidate from local storage
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

  // Retrieve saved candidates from local storage
  useEffect(() => {
    const addedCandidates = JSON.parse(localStorage.getItem('addedCandidates') || '[]');
    console.log("Retrieved candidates", addedCandidates);
    setSavedCandidates(addedCandidates);
  }, []);

  return (
    <>
      <h1 className="pageHeader">Potential Candidates</h1>
      { // Check if savedCandidates is not empty and display the CandidatesAlreadySaved component
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
