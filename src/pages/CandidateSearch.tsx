import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import CandidateCard from '../components/CandidateCard';
import type Candidate from '../interfaces/Candidate.interface';


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

  const addToSavedCandidates = () => {
    let parsedAddedCandidates: Candidate[] = [];
    const addedCandidates = localStorage.getItem('addedCandidates');
    if (typeof addedCandidates === 'string') {
      parsedAddedCandidates = JSON.parse(addedCandidates);
    }
    parsedAddedCandidates.push(currentCandidate);
  }

  useEffect(() => {
    const fetchCandidate = async () => {
      const data = await searchGithub();
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomCandidate = data[randomIndex];
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
    };
    fetchCandidate();
  }, []);

  return (
    <div>
      <h1>CandidateSearch</h1>
      <CandidateCard
        currentCandidate={currentCandidate}
        addToSavedCandidates={addToSavedCandidates}
      />
    </div>
  );
};

export default CandidateSearch;
