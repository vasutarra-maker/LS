import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import DataScience from './pages/DataScience';
import DedicatedTeams from './pages/DedicatedTeams';
import EdiServices from './pages/EdiServices';
import Faq from './pages/Faq';
import IbmSterlingB2bIntegrator from './pages/IbmSterlingB2bIntegrator';
import IbmWatsonx from './pages/IbmWatsonx';
import LegacyMigration from './pages/LegacyMigration';
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
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/tracking" element={<Tracking />} />

          {/* Services Main Page */}
          <Route path="/services" element={<Services />} />

          {/* 6 Official Service Lines */}
          <Route path="/edi-services" element={<EdiServices />} />
          <Route path="/strategy-and-development" element={<StrategyAndDevelopment />} />
          <Route path="/dedicated-teams" element={<DedicatedTeams />} />
          <Route path="/data-science" element={<DataScience />} />
          <Route path="/legacy-migration-and-modernization" element={<LegacyMigration />} />
          <Route path="/legacy-migration" element={<LegacyMigration />} />
          <Route path="/supply-chain-sustainability" element={<SupplyChainSustainability />} />

          {/* Production Platform & AI Specialties */}
          <Route path="/ibm-sterling-b2b-integrator" element={<IbmSterlingB2bIntegrator />} />
          <Route path="/ibm-watsonx" element={<IbmWatsonx />} />

          {/* Legacy Category Aliases (redirecting to official services) */}
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
