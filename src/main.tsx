import ReactDOM from 'react-dom/client'; // Import ReactDOM from react-dom/client
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // Import createBrowserRouter and RouterProvider from react-router-dom
import './index.css'; // Import index.css
import App from './App.tsx'; // Import the App component
import CandidateSearch from './pages/CandidateSearch.tsx'; // Import the CandidateSearch component
import SavedCandidates from './pages/SavedCandidates.tsx'; // Import the SavedCandidates component
import ErrorPage from './pages/ErrorPage.tsx'; // Import the ErrorPage component

// Create a BrowserRouter with the App component as the root element
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <CandidateSearch />, // Render the CandidateSearch component when the path is '/'
      },
      {
        path: '/SavedCandidates',
        element: <SavedCandidates />, // Render the SavedCandidates component when the path is '/SavedCandidates'
      },
    ],
  },
]);

// Render the RouterProvider with the router
const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
