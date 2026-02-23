import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Home } from '@/pages/Home';
import { StationPage } from '@/pages/StationPage';
import { TestOrientation } from '@/pages/TestOrientation';
import { Resources } from '@/pages/Resources';
import { Store } from '@/pages/Store';
import { Community } from '@/pages/Community';
import { Events } from '@/pages/Events';
import { ShareLibrary } from '@/pages/ShareLibrary';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/estaciones/:slug" element={<StationPage />} />
            <Route path="/test" element={<TestOrientation />} />
            <Route path="/recursos" element={<Resources />} />
            <Route path="/biblioteca" element={<ShareLibrary />} />
            <Route path="/tienda" element={<Store />} />
            <Route path="/comunidad" element={<Community />} />
            <Route path="/eventos" element={<Events />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
