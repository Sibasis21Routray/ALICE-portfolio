import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './components/about/Experience';
// import Projects from './pages/Projects';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import GenericPage from './pages/GenericPage';
import Education from './components/about/Education';
import Awards from './components/about/Awards';
import HappyBar from './components/projects/Happy_bar';
import Semantic_layer from './components/projects/Semantic_layer';
import Logistics from './components/projects/Logistics';
import Knowledge_sharing from './components/projects/Knowledge_sharing';
import Device_tech from './components/projects/Device_tech';
import Research_data from './components/projects/Research_data';
import ScrollToTop from './components/ScrollToTop';
import NotFound from './pages/NotFound';
import Happybar_subpage from './components/projects/Happybar_subpage';

function App() {
  
  return (
    <BrowserRouter>
    <ScrollToTop />
    
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          
          {/* <Route path="/projects" element={<Projects />} /> */}
          <Route path="/projects/happy-bar" element={<HappyBar />} />
          <Route path="/projects/happybar" element={<Happybar_subpage />} />
          <Route path="/projects/semantic-layer" element={<Semantic_layer />} />
          <Route path="/projects/logistics" element={<Logistics />} />
          <Route path="/projects/knowledge-sharing" element={<Knowledge_sharing />} />
          <Route path="/projects/device-tech" element={<Device_tech />} />
          <Route path="/projects/research-data" element={<Research_data />} />
          
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />

           {/* 404 */}
    <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
