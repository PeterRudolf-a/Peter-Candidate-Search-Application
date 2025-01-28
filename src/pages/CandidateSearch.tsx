import { useState, useEffect } from 'react'; // Import the useState and useEffect hooks
import { searchGithub, searchGithubUser } from '../api/API'; // Import the searchGithub and searchGithubUser functions
import CandidateCard from '../components/CandidateCard'; // Import the CandidateCard component
import type Candidate from '../interfaces/Candidate.interface'; // Import the Candidate interface

// This component is responsible for fetching a random candidate from the GitHub API and displaying it on the page.
const CandidateSearch = () => {
  const [currentCandidate, setCurrentCandidate] = useState<Candidate>({
    id: 0,
    image: '',
    name: '',
    location: '',
    email: '',
    company: '',
    bio: '',
  });

  // Fetch a random candidate from the GitHub API
  const fetchCandidate = async () => {
    try {
      const data = await searchGithub();
      
      // Check if data is empty
      if (!data || data.length === 0) {
        console.error('No candidates found');
        return; // Exit the function if no candidates are available
      }
  
      // Generate a random index to select a random candidate
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomCandidate = data[randomIndex];
  
      // Check if randomCandidate is defined
      if (!randomCandidate || !randomCandidate.login) {
        console.error('Random candidate is undefined or missing login');
        return; // Exit the function if randomCandidate is undefined
      }
  
      // Fetch the full user data for the random candidate
      const candidateData = await searchGithubUser(randomCandidate.login);
      setCurrentCandidate({
        id: candidateData.id,
        image: candidateData.avatar_url,
        name: candidateData.name,
        location: candidateData.location,
        email: candidateData.email,
        company: candidateData.company,
        bio: candidateData.bio,
      });
    } catch (error) {
      console.error('Error fetching candidate:', error);
    }
  };

  // Save the current candidate to local storage
  const addToSavedCandidates = () => {
    let parsedAddedCandidates: Candidate[] = [];
    const addedCandidates = localStorage.getItem('addedCandidates');
    if (typeof addedCandidates === 'string') {
      parsedAddedCandidates = JSON.parse(addedCandidates);
    }
    parsedAddedCandidates.push(currentCandidate);
    localStorage.setItem('addedCandidates', JSON.stringify(parsedAddedCandidates));

    // Fetch a new candidate after saving
    fetchCandidate();
  };

  // Fetch a candidate when the component mounts
  useEffect(() => {
    fetchCandidate();
  }, []);

  return (
    <div>
      <h1>Candidate Search</h1>
      {currentCandidate.id !== 0 && ( // Ensure the candidate is valid before rendering
        <CandidateCard
          currentCandidate={currentCandidate}
          addToSavedCandidates={addToSavedCandidates}
        />
      )}
    </div>
  );
};

export default CandidateSearch;