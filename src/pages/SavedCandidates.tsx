import React, { useEffect, useState } from "react"; // import React and useState and useEffect hooks
import CandidatesAlreadySaved from "../components/CandidatesAlreadySaved"; // import CandidatesAlreadySaved component
import Candidate from "../interfaces/Candidate.interface"; // import Candidate interface
import "../components/styles/SavedCandidatesList.css"; // import SavedCandidatesList.css

// SavedCandidates functional component
const SavedCandidates = () => {
  // useState hook to set savedCandidates state
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  // removeFromStorage function to remove candidate from local storage
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
  };

  // useEffect hook to get addedCandidates from local storage
  useEffect(() => {
    const addedCandidates = JSON.parse(
      localStorage.getItem("addedCandidates") || "[]"
    );
    setSavedCandidates(addedCandidates);
  }, []);

  // return the CandidatesAlreadySaved component or a message if no candidates are saved
  return (
    <div style={{ padding: "20px", color: "#ffffff" }}>
      <h1 className="pageHeader">Potential Candidates</h1>
      {savedCandidates.length > 0 ? (
        <CandidatesAlreadySaved
          savedCandidates={savedCandidates}
          removeFromStorage={removeFromStorage}
        />
      ) : (
        <p>No candidates saved</p>
      )}
    </div>
  );
};

export default SavedCandidates;
