import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  const currentPage = useLocation().pathname;

  return (
    <div>
      <nav>
        <ul>
          <li>
            <h2>
              <Link to="/" className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>
                Home
              </Link>
            </h2>
          </li>
          <li>
            <h2>
              <Link to="/saved-candidates" className={currentPage === '/saved-candidates' ? 'nav-link active' : 'nav-link'}>
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
