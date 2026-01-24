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
    <Router>
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
      </Routes>
    </Router>
  );
}

export default App;
