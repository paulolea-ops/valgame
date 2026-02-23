import { Link } from 'react-router-dom';
import { stations } from '@/data/stations';
import { Facebook, Instagram, Twitter, Youtube, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#704214] to-[#8B4513] text-white">
      {/* Mapa del Sistema */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h3 className="text-center text-2xl font-bold mb-8">Mapa del Sistema</h3>
          
          {/* Visualización del Eneagrama simplificada */}
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {stations.map((station) => (
              <Link
                key={station.id}
                to={`/estaciones/${station.slug}`}
                className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <span 
                  className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{ backgroundColor: station.colors.primary }}
                >
                  {station.id}
                </span>
                <span className="text-sm">{station.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Links principales */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Las 9 Estaciones */}
          <div>
            <h4 className="font-bold mb-4 text-[#C5B358]">Las 9 Estaciones</h4>
            <ul className="space-y-2">
              {stations.slice(0, 5).map((station) => (
                <li key={station.id}>
                  <Link 
                    to={`/estaciones/${station.slug}`}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {station.id}. {station.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-transparent">.</h4>
            <ul className="space-y-2">
              {stations.slice(5).map((station) => (
                <li key={station.id}>
                  <Link 
                    to={`/estaciones/${station.slug}`}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {station.id}. {station.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h4 className="font-bold mb-4 text-[#C5B358]">Recursos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/recursos" className="text-sm text-white/80 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/recursos" className="text-sm text-white/80 hover:text-white transition-colors">
                  Podcast
                </Link>
              </li>
              <li>
                <Link to="/recursos" className="text-sm text-white/80 hover:text-white transition-colors">
                  Ebooks
                </Link>
              </li>
              <li>
                <Link to="/recursos" className="text-sm text-white/80 hover:text-white transition-colors">
                  Videos
                </Link>
              </li>
              <li>
                <Link to="/test" className="text-sm text-white/80 hover:text-white transition-colors">
                  Test de Orientación
                </Link>
              </li>
            </ul>
          </div>

          {/* Conecta */}
          <div>
            <h4 className="font-bold mb-4 text-[#C5B358]">Conecta</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/tienda" className="text-sm text-white/80 hover:text-white transition-colors">
                  Tienda
                </Link>
              </li>
              <li>
                <Link to="/eventos" className="text-sm text-white/80 hover:text-white transition-colors">
                  Eventos
                </Link>
              </li>
              <li>
                <Link to="/comunidad" className="text-sm text-white/80 hover:text-white transition-colors">
                  Comunidad
                </Link>
              </li>
              <li>
                <Link to="/sobre-mi" className="text-sm text-white/80 hover:text-white transition-colors">
                  Sobre Mí
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-sm text-white/80 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="max-w-md mx-auto text-center">
            <h4 className="font-bold mb-2">Únete a la comunidad</h4>
            <p className="text-sm text-white/70 mb-4">
              Recibe recursos, artículos y eventos directamente en tu inbox.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Tu email..."
                className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-[#C5B358]"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-[#C5B358] text-[#704214] font-bold rounded-lg hover:bg-[#D4AF37] transition-colors"
              >
                Suscribirme
              </button>
            </form>
          </div>
        </div>

        {/* Redes sociales y copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl">🕸️</span>
              <span className="font-bold">Saber Consentido</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="text-sm text-white/60">
            © 2024 Eneagramas: Saber Consentido
          </div>
        </div>

        <div className="mt-4 text-center text-xs text-white/40">
          <Link to="/terminos" className="hover:text-white/60">Términos</Link>
          {' · '}
          <Link to="/privacidad" className="hover:text-white/60">Privacidad</Link>
          {' · '}
          <Link to="/cookies" className="hover:text-white/60">Cookies</Link>
        </div>
      </div>
    </footer>
  );
}
