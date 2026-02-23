import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { stations } from '@/data/stations';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showStations, setShowStations] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl">🕸️</span>
            <span className={`font-bold text-lg hidden sm:block ${isScrolled ? 'text-[#704214]' : 'text-white'}`}>
              Saber Consentido
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Las 9 Estaciones Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setShowStations(true)}
              onMouseLeave={() => setShowStations(false)}
            >
              <button
                className={`flex items-center space-x-1 font-medium transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-[#704214]' : 'text-white/90 hover:text-white'
                }`}
              >
                <span>Las 9 Estaciones</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${showStations ? 'rotate-180' : ''}`} />
              </button>

              {showStations && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                  <div className="bg-white rounded-xl shadow-xl p-4 w-[500px]">
                    <div className="grid grid-cols-3 gap-2">
                      {stations.map((station) => (
                        <Link
                          key={station.id}
                          to={`/estaciones/${station.slug}`}
                          className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                          onClick={() => setShowStations(false)}
                        >
                          <span 
                            className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold"
                            style={{ backgroundColor: station.colors.primary }}
                          >
                            {station.id}
                          </span>
                          <span className="text-sm text-gray-700 truncate">{station.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/biblioteca"
              className={`font-medium transition-colors ${
                isScrolled 
                  ? isActive('/biblioteca') ? 'text-[#704214]' : 'text-gray-700 hover:text-[#704214]'
                  : isActive('/biblioteca') ? 'text-white' : 'text-white/90 hover:text-white'
              }`}
            >
              Biblioteca
            </Link>

            <Link
              to="/tienda"
              className={`font-medium transition-colors ${
                isScrolled 
                  ? isActive('/tienda') ? 'text-[#704214]' : 'text-gray-700 hover:text-[#704214]'
                  : isActive('/tienda') ? 'text-white' : 'text-white/90 hover:text-white'
              }`}
            >
              Tienda
            </Link>

            <Link
              to="/eventos"
              className={`font-medium transition-colors ${
                isScrolled 
                  ? isActive('/eventos') ? 'text-[#704214]' : 'text-gray-700 hover:text-[#704214]'
                  : isActive('/eventos') ? 'text-white' : 'text-white/90 hover:text-white'
              }`}
            >
              Eventos
            </Link>

            <Link
              to="/comunidad"
              className={`font-medium transition-colors ${
                isScrolled 
                  ? isActive('/comunidad') ? 'text-[#704214]' : 'text-gray-700 hover:text-[#704214]'
                  : isActive('/comunidad') ? 'text-white' : 'text-white/90 hover:text-white'
              }`}
            >
              Comunidad
            </Link>

            <Link
              to="/test"
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                isScrolled
                  ? 'bg-[#704214] text-white hover:bg-[#8B4513]'
                  : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
              }`}
            >
              Test de Orientación
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Las 9 Estaciones</p>
            <div className="grid grid-cols-2 gap-2">
              {stations.map((station) => (
                <Link
                  key={station.id}
                  to={`/estaciones/${station.slug}`}
                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  <span 
                    className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold"
                    style={{ backgroundColor: station.colors.primary }}
                  >
                    {station.id}
                  </span>
                  <span className="text-sm text-gray-700">{station.name}</span>
                </Link>
              ))}
            </div>

            <div className="border-t pt-3 space-y-2">
              <Link
                to="/biblioteca"
                className="block py-2 text-gray-700 hover:text-[#704214]"
                onClick={() => setIsOpen(false)}
              >
                Biblioteca
              </Link>
              <Link
                to="/tienda"
                className="block py-2 text-gray-700 hover:text-[#704214]"
                onClick={() => setIsOpen(false)}
              >
                Tienda
              </Link>
              <Link
                to="/eventos"
                className="block py-2 text-gray-700 hover:text-[#704214]"
                onClick={() => setIsOpen(false)}
              >
                Eventos
              </Link>
              <Link
                to="/comunidad"
                className="block py-2 text-gray-700 hover:text-[#704214]"
                onClick={() => setIsOpen(false)}
              >
                Comunidad
              </Link>
            </div>

            <Link
              to="/test"
              className="block w-full py-3 bg-[#704214] text-white text-center rounded-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              Test de Orientación
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
