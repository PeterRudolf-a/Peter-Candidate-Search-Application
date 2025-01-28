import type React from "react"; // Import the React type
import { useEffect, useState } from "react"; // Import the useEffect and useState hooks
import CandidatesAlreadySaved from "../components/CandidatesAlreadySaved"; // Import the CandidatesAlreadySaved component
import type Candidate from "../interfaces/Candidate.interface"; // Import the Candidate interface
import "../components/styles/SavedCandidatesPage.css"; // Import the SavedCandidatesList.css file

// This component is responsible for displaying the saved candidates on the page
const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  // Remove a candidate from local storage
  const removeFromStorage = (
    e: React.MouseEvent<SVGElement, MouseEvent>,
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
      {savedCandidates.length > 0 ? (
        <div>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold" }}>
              <span>Image</span>
              <span>Name</span>
              <span>Location</span>
              <span>Email</span>
              <span>Company</span>
              <span>Bio</span>
              <span>Reject</span>
            </li>
          </ul>
          <CandidatesAlreadySaved
            savedCandidates={savedCandidates}
            removeFromStorage={removeFromStorage}
          />
        </div>
      ) : (
        <p>No candidates saved</p>
      )}
    </>
  );
};

export default SavedCandidates;