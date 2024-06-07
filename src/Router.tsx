// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { HomePage } from './pages/Home.page';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <HomePage />,
//   },
// ]);

// export function Router() {
//   return <RouterProvider router={router} />;
// }

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/Home.page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
