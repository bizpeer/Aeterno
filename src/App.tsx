import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { BrandStory } from './components/sections/BrandStory';
import { Science } from './components/sections/Science';
import { Products } from './components/sections/Products';
import { Engineering } from './components/sections/Engineering';
import { Contact } from './components/sections/Contact';
import { LangRedirect } from './components/common/LangRedirect';

import { Admin } from './pages/Admin';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<LangRedirect />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/:lang" element={
          <Layout>
            <Home />
          </Layout>
        } />
        <Route path="/:lang/brand-story" element={<Layout><BrandStory /></Layout>} />
        <Route path="/:lang/science" element={<Layout><Science /></Layout>} />
        <Route path="/:lang/products" element={<Layout><Products /></Layout>} />
        <Route path="/:lang/engineering" element={<Layout><Engineering /></Layout>} />
        <Route path="/:lang/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/:lang/career" element={<Layout><div className="pt-32 pb-20 text-center text-white min-h-screen">Careers content is coming soon.</div></Layout>} />
        <Route path="/:lang/privacy" element={<Layout><div className="pt-32 pb-20 text-center text-white min-h-screen">Privacy Policy content is coming soon.</div></Layout>} />
        <Route path="/:lang/terms" element={<Layout><div className="pt-32 pb-20 text-center text-white min-h-screen">Terms of Service content is coming soon.</div></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
