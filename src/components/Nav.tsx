import { Link, useLocation } from 'react-router-dom'; // Import necessary files

const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  const currentPage = useLocation().pathname; // Get the current page path

  return (
    <div>
      <nav className='nav'>
        <ul>
          <li className='nav-item'>
            <h2>
              <Link to="/" className={currentPage === '/' ? 'nav-link active' : 'nav-link'}> {/* Add the necessary code to link to the Home page */}
                Home
              </Link>
            </h2>
          </li>
          <li className='nav-item'>
            <h2>
              <Link to="/SavedCandidates" className={currentPage === '/SavedCandidates' ? 'nav-link active' : 'nav-link'}> {/* Add the necessary code to link to the Saved Candidates page */}
                Saved Candidates
              </Link>
            </h2>
          </li>
        </ul>
      </nav>
    </div>
  )
};

export default Nav;
