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

function App() {
  return (
    <Router>
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

        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
