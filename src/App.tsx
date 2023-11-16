import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Trash from 'pages/Trash';
import Main from 'pages/Main';

import Layout from 'components/Layout';

import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <Layout>
              <Main />
            </Layout>
          }
        />
        <Route
          path='/trash'
          element={
            <Layout>
              <Trash />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
