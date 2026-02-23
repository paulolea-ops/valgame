import { useParams, Link } from 'react-router-dom';
import { getStationBySlug, stations } from '@/data/stations';
import { StationConnections } from '@/components/StationConnections';
import { Download, Play, Star, ShoppingCart, BookOpen } from 'lucide-react';
import { useEffect, useState } from 'react';

export function StationPage() {
  const { slug } = useParams<{ slug: string }>();
  const station = getStationBySlug(slug || '');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 100);
    window.scrollTo(0, 0);
    return () => clearTimeout(timer);
  }, [slug]);

  if (!station) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Estación no encontrada</h1>
          <Link to="/" className="text-[#704214] hover:underline">
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden transition-all duration-700"
        style={{
          background: `linear-gradient(135deg, ${station.colors.primary} 0%, ${station.colors.accent} 100%)`
        }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className={`relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-white transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Icono */}
          <div className="text-6xl mb-6">{station.icon === 'Scale' && '⚖️'}{station.icon === 'Heart' && '❤️'}{station.icon === 'Trophy' && '🏆'}{station.icon === 'Sparkles' && '✨'}{station.icon === 'Brain' && '🧠'}{station.icon === 'Compass' && '🧭'}{station.icon === 'Sun' && '☀️'}{station.icon === 'Crown' && '👑'}{station.icon === 'Mandala' && '🕸️'}</div>

          {/* Número y nombre */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <span 
              className="w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold"
              style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
            >
              {station.id}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            {station.name}
          </h1>

          <p className="text-xl text-white/80 mb-2">
            {station.subtitle}
          </p>

          <p className="text-2xl font-light italic text-white/90 mb-8">
            "{station.essence}"
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              style={{ color: station.colors.primary }}
            >
              <Download className="w-5 h-5" />
              {station.leadMagnet.title}
            </button>
          </div>
        </div>
      </section>

      {/* Manifiesto de la Estación */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              ¿Qué es {station.name}?
            </h2>

            <div className="prose prose-lg mx-auto text-gray-600 mb-12">
              <p className="text-xl leading-relaxed mb-6">{station.manifesto}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">🎁 Tu don</h3>
                <p className="text-gray-600">{station.gift}</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">💫 Transformación</h3>
                <p className="text-gray-600">{station.emotion}</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">🧭 Tríada</h3>
                <p className="text-gray-600 capitalize">{station.triad}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contenido Propio */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Contenido de esta estación
          </h2>

          {/* Artículos */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Artículos destacados
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {station.content.articles.map((article) => (
                <div key={article.id} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <span 
                      className="px-2 py-1 rounded text-xs font-semibold text-white"
                      style={{ backgroundColor: station.colors.primary }}
                    >
                      Estación {station.id}
                    </span>
                    <span className="text-xs text-gray-500">{article.readTime}</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{article.title}</h4>
                  <p className="text-sm text-gray-600 mb-4">{article.excerpt}</p>
                  <Link 
                    to={`/recursos`}
                    className="text-sm font-medium hover:underline"
                    style={{ color: station.colors.primary }}
                  >
                    Leer más →
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Recursos */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
              <Download className="w-5 h-5" />
              Recursos descargables
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {station.content.resources.map((resource) => (
                <div key={resource.id} className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${station.colors.primary}20` }}
                  >
                    {resource.type === 'pdf' && <span className="text-lg">📄</span>}
                    {resource.type === 'audio' && <span className="text-lg">🎧</span>}
                    {resource.type === 'video' && <span className="text-lg">🎥</span>}
                    {resource.type === 'worksheet' && <span className="text-lg">📝</span>}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{resource.title}</h4>
                    <p className="text-sm text-gray-500 mt-1">{resource.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Conexiones con el Sistema */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <StationConnections station={station} />
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Testimonios
          </h2>

          <div className="space-y-6">
            {station.testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-xl p-8 shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#C5B358] text-[#C5B358]" />
                  ))}
                </div>
                <blockquote className="text-lg text-gray-700 italic mb-6">
                  "{testimonial.content}"
                </blockquote>
                <footer className="flex items-center gap-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
                    style={{ backgroundColor: station.colors.primary }}
                  >
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">
                      Tipo {testimonial.enneatype} | {testimonial.role}
                    </div>
                  </div>
                  {testimonial.hasVideo && (
                    <button className="ml-auto flex items-center gap-2 text-[#704214] font-medium">
                      <Play className="w-4 h-4" />
                      Ver video
                    </button>
                  )}
                </footer>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Productos/Cursos */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Cursos y Sesiones
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {station.products.map((product) => (
              <div key={product.id} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <span 
                    className="px-3 py-1 rounded-full text-xs font-semibold text-white"
                    style={{ backgroundColor: station.colors.primary }}
                  >
                    {product.type === 'course' && 'CURSO'}
                    {product.type === 'session' && 'SESIÓN'}
                    {product.type === 'package' && 'PAQUETE'}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold" style={{ color: station.colors.primary }}>
                    ${product.price}
                  </span>
                  <button 
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-white font-medium hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: station.colors.primary }}
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Ver detalles
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Paquetes combinados */}
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">📦 Paquetes combinados</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link 
                to="/tienda"
                className="bg-white rounded-xl p-5 hover:shadow-md transition-shadow"
              >
                <div className="font-semibold text-gray-900 mb-1">
                  Colección Tríada {station.triad === 'mental' && 'Mental'}
                  {station.triad === 'emotional' && 'Emocional'}
                  {station.triad === 'instinctive' && 'Instintiva'}
                </div>
                <p className="text-sm text-gray-500">
                  {station.triad === 'mental' && 'Patrones Invisibles + Centro de Mando + Conciencia Energética'}
                  {station.triad === 'emotional' && 'Lazos del Alma + Roles y Sinergia + Devida Elección'}
                  {station.triad === 'instinctive' && 'El Hábito + Saber Consentido + El Ritmo Justo'}
                </p>
                <span className="text-[#704214] font-medium text-sm mt-2 inline-block">
                  Ver paquete →
                </span>
              </Link>
              <Link 
                to="/tienda"
                className="bg-white rounded-xl p-5 hover:shadow-md transition-shadow"
              >
                <div className="font-semibold text-gray-900 mb-1">
                  Viaje de Alas: {station.id} → {station.wings.left} → {station.wings.right}
                </div>
                <p className="text-sm text-gray-500">
                  Tu estación + sus dos alas para una transformación completa.
                </p>
                <span className="text-[#704214] font-medium text-sm mt-2 inline-block">
                  Ver paquete →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Siguiente Paso */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: station.colors.tertiary }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Si te resonó {station.name}...
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Quizás también te interese explorar estas conexiones:
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            <Link
              to={`/estaciones/${stations.find(s => s.id === station.arrows.integration)?.slug}`}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
            >
              <div 
                className="w-14 h-14 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4"
                style={{ backgroundColor: stations.find(s => s.id === station.arrows.integration)?.colors.primary }}
              >
                {station.arrows.integration}
              </div>
              <h3 className="font-bold text-gray-900 mb-1">
                {stations.find(s => s.id === station.arrows.integration)?.name}
              </h3>
              <p className="text-sm text-gray-500">Tu camino de integración</p>
            </Link>

            <Link
              to="/"
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 bg-gradient-to-br from-[#704214] to-[#C5B358]">
                9
              </div>
              <h3 className="font-bold text-gray-900 mb-1">Saber Consentido</h3>
              <p className="text-sm text-gray-500">El todo que lo abarca</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter específico */}
      <section className="py-16 bg-white border-t">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Recursos exclusivos para {station.name}
          </h3>
          <p className="text-gray-600 mb-6">
            Artículos, meditaciones y recursos específicos para quienes transitan {station.essence.toLowerCase()}.
          </p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Tu email..."
              className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-400"
            />
            <button
              type="submit"
              className="px-6 py-3 text-white font-bold rounded-lg hover:opacity-90 transition-opacity"
              style={{ backgroundColor: station.colors.primary }}
            >
              Suscribirme
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
