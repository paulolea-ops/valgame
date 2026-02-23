import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Mandala } from '@/components/Mandala';
import { stations } from '@/data/stations';
import { ArrowRight, BookOpen, Users, Calendar, Sparkles, Play, Download } from 'lucide-react';

export function Home() {
  const [isVisible, setIsVisible] = useState<{[key: string]: boolean}>({});
  const sectionsRef = useRef<{[key: string]: HTMLDivElement | null}>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    Object.values(sectionsRef.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const setRef = (id: string) => (el: HTMLDivElement | null) => {
    sectionsRef.current[id] = el;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        ref={setRef('hero')}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #704214 0%, #8B4513 50%, #C5B358 100%)'
        }}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="text-center lg:text-left text-white">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">Un ecosistema integral de autoconocimiento</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Eneagramas:<br />
                <span className="text-[#C5B358]">Saber Consentido</span>
              </h1>

              <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-xl mx-auto lg:mx-0">
                9 caminos, 1 verdad: el mapa maestro que revela el "por qué" detrás de todo.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/test"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#704214] rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
                >
                  <Sparkles className="w-5 h-5" />
                  Descubre tu punto de entrada
                </Link>
                <Link
                  to="#estaciones"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white rounded-full font-bold text-lg hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/30"
                >
                  Explora las 9 estaciones
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
                <div>
                  <div className="text-3xl font-bold text-[#C5B358]">9</div>
                  <div className="text-sm text-white/70">Estaciones</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#C5B358]">500+</div>
                  <div className="text-sm text-white/70">Miembros</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#C5B358]">50+</div>
                  <div className="text-sm text-white/70">Recursos</div>
                </div>
              </div>
            </div>

            {/* Right content - Mandala */}
            <div className="flex justify-center">
              <Mandala size={450} showLabels={true} />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/50 flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Manifiesto Section */}
      <section 
        id="manifiesto"
        ref={setRef('manifiesto')}
        className={`py-20 lg:py-32 bg-white transition-all duration-1000 ${isVisible['manifiesto'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Video/Image placeholder */}
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-[#704214] to-[#8B4513] rounded-2xl flex items-center justify-center shadow-xl">
                <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-[#704214] ml-1" />
                </button>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#C5B358] rounded-full opacity-20" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#704214] rounded-full opacity-10" />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Esto no es un test de personalidad
              </h2>

              <blockquote className="text-xl text-gray-600 italic border-l-4 border-[#704214] pl-6 mb-8">
                "El Eneagrama no te pone en una caja. Te muestra la caja en la que ya vives... y las puertas para salir de ella."
              </blockquote>

              <p className="text-gray-600 mb-6 leading-relaxed">
                <strong>Saber Consentido</strong> no es acumular información sobre tu tipo. 
                Es consentir el mapa completo: tus alas, tus flechas, tus tríadas, tu camino de integración.
              </p>

              <p className="text-gray-600 mb-8 leading-relaxed">
                Es un ecosistema donde cada estación se conecta con las demás, formando un sistema 
                vivo de autoconocimiento que te acompaña en tu viaje de regreso a ti mismo.
              </p>

              <Link
                to="/sobre-mi"
                className="inline-flex items-center gap-2 text-[#704214] font-semibold hover:underline"
              >
                Conoce mi historia con el Eneagrama
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Las 9 Estaciones Section */}
      <section 
        id="estaciones"
        ref={setRef('estaciones')}
        className={`py-20 lg:py-32 bg-gray-50 transition-all duration-1000 ${isVisible['estaciones'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Las 9 Estaciones del Ser
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cada una es una puerta. Todas conducen al mismo santuario: el conocimiento de ti mismo.
            </p>
          </div>

          {/* Mandala */}
          <div className="flex justify-center mb-16">
            <Mandala size={500} showLabels={true} />
          </div>

          {/* Tríadas */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="font-bold text-gray-900 mb-2">Tríada Mental (5-6-7)</h3>
              <p className="text-gray-600 text-sm mb-3">Pensamiento</p>
              <p className="text-gray-500 text-sm">Miedo → Confianza</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl mb-3">❤️</div>
              <h3 className="font-bold text-gray-900 mb-2">Tríada Emocional (2-3-4)</h3>
              <p className="text-gray-600 text-sm mb-3">Sentimiento</p>
              <p className="text-gray-500 text-sm">Vergüenza → Amor</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-bold text-gray-900 mb-2">Tríada Instintiva (8-9-1)</h3>
              <p className="text-gray-600 text-sm mb-3">Acción</p>
              <p className="text-gray-500 text-sm">Ira → Paz</p>
            </div>
          </div>
        </div>
      </section>

      {/* Test de Orientación Section */}
      <section 
        ref={setRef('test-section')}
        className={`py-20 lg:py-32 transition-all duration-1000 ${isVisible['test-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        style={{ background: 'linear-gradient(135deg, #704214 0%, #8B4513 100%)' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            ¿Por dónde empiezo?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            No necesitas saber tu tipo de Eneagrama. Solo necesitas honestidad sobre dónde te duele ahora.
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="text-left mb-6">
              <span className="text-white/60 text-sm">Pregunta 1/5</span>
              <h3 className="text-xl text-white font-semibold mt-2">
                "¿Qué área de tu vida te genera más fricción actualmente?"
              </h3>
            </div>

            <div className="space-y-3">
              {[
                'Mi relación con el tiempo y la organización',
                'Mis relaciones personales y vínculos',
                'Mi carrera y reconocimiento profesional',
                'Mi sentido de propósito e identidad',
                'Mi necesidad de entender cómo funciono'
              ].map((option, i) => (
                <button
                  key={i}
                  className="w-full text-left px-4 py-3 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <Link
            to="/test"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#704214] rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            <Sparkles className="w-5 h-5" />
            Comenzar el test completo
          </Link>

          <p className="text-white/60 text-sm mt-6">
            💡 Este test no determina tu tipo de Eneagrama. Te orienta hacia la estación que puede acompañarte mejor.
          </p>
        </div>
      </section>

      {/* Recursos Gratuitos Section */}
      <section 
        ref={setRef('recursos')}
        className={`py-20 lg:py-32 bg-white transition-all duration-1000 ${isVisible['recursos'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Recursos Gratuitos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Contenido seleccionado para comenzar tu viaje de autoconocimiento.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Guía: El arte de la organización consciente', station: 1, type: 'PDF' },
              { title: 'Test del agotamiento empático', station: 2, type: 'Quiz' },
              { title: 'Template: Mi definición de éxito auténtico', station: 3, type: 'Worksheet' },
              { title: 'Ejercicio: Encontrar tu voz única', station: 4, type: 'Video' },
              { title: 'Guía de autoanálisis', station: 5, type: 'PDF' },
              { title: 'Framework de decisiones conscientes', station: 6, type: 'PDF' }
            ].map((resource, i) => {
              const station = stations.find(s => s.id === resource.station);
              return (
                <div key={i} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-2 mb-4">
                    <span 
                      className="px-2 py-1 rounded text-xs font-semibold text-white"
                      style={{ backgroundColor: station?.colors.primary }}
                    >
                      Estación {resource.station}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <Download className="w-3 h-3" />
                      {resource.type}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-3">{resource.title}</h3>
                  <button className="text-[#704214] font-medium text-sm hover:underline">
                    Descargar gratis →
                  </button>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/recursos"
              className="inline-flex items-center gap-2 text-[#704214] font-semibold hover:underline"
            >
              Ver todos los recursos
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Próximos Eventos Section */}
      <section 
        ref={setRef('eventos')}
        className={`py-20 lg:py-32 bg-gray-50 transition-all duration-1000 ${isVisible['eventos'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Próximos Eventos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Talleres en vivo, círculos de trabajo y sesiones grupales.
            </p>
          </div>

          {/* Evento destacado */}
          <div className="bg-gradient-to-br from-[#36454F] to-[#434B4D] rounded-2xl p-8 text-white mb-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block px-3 py-1 bg-[#FFBF00] text-gray-900 text-sm font-semibold rounded-full mb-4">
                  Evento del Mes
                </span>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  El Centro de Mando: Taller de toma de decisiones conscientes
                </h3>
                <div className="flex flex-wrap gap-4 text-sm text-white/80 mb-6">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    15 de Marzo, 2024
                  </span>
                  <span>🕐 19:00 hs (GMT-3)</span>
                  <span>📍 Online en vivo</span>
                  <span>🎫 12 plazas disponibles</span>
                </div>
                <Link
                  to="/eventos"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#FFBF00] text-gray-900 rounded-full font-bold hover:bg-[#E5AC00] transition-colors"
                >
                  Reservar mi plaza
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="hidden lg:flex justify-center">
                <div className="w-48 h-48 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-6xl">⚖️</span>
                </div>
              </div>
            </div>
          </div>

          {/* Próximos talleres */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { date: '22 Mar', station: 3, title: 'Roles y Sinergia' },
              { date: '29 Mar', station: 7, title: 'Conciencia Energética' },
              { date: '05 Abr', station: 2, title: 'Lazos del Alma' },
              { date: '12 Abr', station: 5, title: 'Patrones Invisibles' }
            ].map((event, i) => {
              const station = stations.find(s => s.id === event.station);
              return (
                <div key={i} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-sm text-gray-500 mb-2">📅 {event.date}</div>
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mb-3"
                    style={{ backgroundColor: station?.colors.primary }}
                  >
                    {event.station}
                  </div>
                  <h4 className="font-semibold text-gray-900">{event.title}</h4>
                  <Link to="/eventos" className="text-[#704214] text-sm font-medium mt-2 inline-block">
                    Ver más →
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comunidad Section */}
      <section 
        ref={setRef('comunidad')}
        className={`py-20 lg:py-32 bg-white transition-all duration-1000 ${isVisible['comunidad'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Comunidad
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                El autoconocimiento no es un camino solitario. Únete a quienes también buscan comprenderse.
              </p>

              <blockquote className="bg-gray-50 rounded-xl p-6 mb-8">
                <p className="text-gray-700 italic mb-4">
                  "Encontré en esta comunidad un espacio donde finalmente pude hablar de mis patrones sin vergüenza. 
                  El mapa del Eneagrama me dio lenguaje para lo que sentía."
                </p>
                <footer className="text-sm text-gray-500">
                  — María G. | Tipo 4
                </footer>
              </blockquote>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#704214]">500+</div>
                  <div className="text-sm text-gray-500">miembros</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#704214]">50+</div>
                  <div className="text-sm text-gray-500">recursos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#704214]">20+</div>
                  <div className="text-sm text-gray-500">eventos/año</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1877F2] text-white rounded-full font-semibold hover:bg-[#166fe5] transition-colors">
                  <Users className="w-5 h-5" />
                  Unirme al grupo de Facebook
                </button>
                <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#5865F2] text-white rounded-full font-semibold hover:bg-[#4752C4] transition-colors">
                  <BookOpen className="w-5 h-5" />
                  Unirme al Discord
                </button>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className={`bg-gray-100 rounded-xl p-4 ${i % 2 === 0 ? 'mt-8' : ''}`}>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#704214] to-[#C5B358]" />
                        <div>
                          <div className="font-semibold text-gray-900">Miembro {i}</div>
                          <div className="text-sm text-gray-500">Tipo {[1, 4, 6, 9][i-1]}</div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">
                        "Este espacio ha transformado mi comprensión de mí mismo."
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
