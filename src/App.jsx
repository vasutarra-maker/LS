import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import DataScience from './pages/DataScience';
import DedicatedTeams from './pages/DedicatedTeams';
import Faq from './pages/Faq';
import IbmSterlingB2bIntegrator from './pages/IbmSterlingB2bIntegrator';
import IbmWatsonx from './pages/IbmWatsonx';
import Home from './pages/Home';
import Quote from './pages/Quote';
import Resources from './pages/Resources';
import Services from './pages/Services';
import StrategyAndDevelopment from './pages/StrategyAndDevelopment';
import SupplyChainSustainability from './pages/SupplyChainSustainability';
import Tracking from './pages/Tracking';

import Category1 from './pages/Category1';
import Category2 from './pages/Category2';
import Category3 from './pages/Category3';
import Category4 from './pages/Category4';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Layout>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/data-science" element={<DataScience />} />
          <Route path="/dedicated-teams" element={<DedicatedTeams />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/ibm-sterling-b2b-integrator" element={<IbmSterlingB2bIntegrator />} />
          <Route path="/ibm-watsonx" element={<IbmWatsonx />} />
          <Route path="/" element={<Home />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/services" element={<Services />} />
          <Route path="/strategy-and-development" element={<StrategyAndDevelopment />} />
          <Route path="/supply-chain-sustainability" element={<SupplyChainSustainability />} />
          <Route path="/tracking" element={<Tracking />} />

          {/* 4 Added Dummy Services (matching existing layout) */}
          <Route path="/category-1" element={<Category1 />} />
          <Route path="/category-2" element={<Category2 />} />
          <Route path="/category-3" element={<Category3 />} />
          <Route path="/category-4" element={<Category4 />} />

        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
