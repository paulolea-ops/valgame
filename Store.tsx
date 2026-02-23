import { useState } from 'react';
import { stations } from '@/data/stations';
import { ShoppingCart, Star, Check } from 'lucide-react';

export function Store() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const packages = [
    {
      id: 'pkg-1',
      name: 'Viaje Completo: Las 9 Estaciones',
      description: 'Acceso a todo el ecosistema: cursos de las 9 estaciones, sesiones grupales mensuales, comunidad privada, recursos exclusivos.',
      price: 997,
      originalPrice: 2073,
      includes: [
        'Los 9 cursos completos ($873 valor)',
        'Sesiones grupales mensuales ($600 valor)',
        'Comunidad privada ($200 valor)',
        'Recursos exclusivos ($100 valor)',
        '2 sesiones individuales ($300 valor)'
      ]
    },
    {
      id: 'pkg-2',
      name: 'Colección Tríada Mental (5-6-7)',
      description: 'Patrones Invisibles + El Centro de Mando + Conciencia Energética',
      price: 197,
      originalPrice: 291,
      includes: ['3 cursos completos', 'Bonus: Sesión grupal de integración']
    },
    {
      id: 'pkg-3',
      name: 'Colección Tríada Emocional (2-3-4)',
      description: 'Lazos del Alma + Roles y Sinergia + Devida Elección',
      price: 197,
      originalPrice: 291,
      includes: ['3 cursos completos', 'Bonus: Sesión grupal de integración']
    },
    {
      id: 'pkg-4',
      name: 'Colección Tríada Instintiva (8-9-1)',
      description: 'El Hábito + Saber Consentido + El Ritmo Justo',
      price: 197,
      originalPrice: 291,
      includes: ['3 cursos completos', 'Bonus: Sesión grupal de integración']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Tienda Saber Consentido
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cursos, sesiones y paquetes para tu viaje de autoconocimiento.
          </p>
        </div>

        {/* Packages */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📦 Paquetes Destacados</h2>
          
          {/* Featured Package */}
          <div className="bg-gradient-to-br from-[#704214] to-[#8B4513] rounded-2xl p-8 text-white mb-6">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <span className="inline-block px-3 py-1 bg-[#C5B358] text-[#704214] text-sm font-bold rounded-full mb-4">
                  MÁS POPULAR
                </span>
                <h3 className="text-3xl font-bold mb-4">Viaje Completo: Las 9 Estaciones</h3>
                <p className="text-white/80 mb-6">
                  Acceso a todo el ecosistema de autoconocimiento. El camino más completo para quienes quieren explorar todo el mapa.
                </p>
                <ul className="space-y-2 mb-6">
                  {packages[0].includes.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-white/90">
                      <Check className="w-4 h-4 text-[#C5B358]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col justify-center items-start lg:items-end">
                <div className="text-white/60 line-through text-lg">${packages[0].originalPrice}</div>
                <div className="text-4xl font-bold text-[#C5B358] mb-2">${packages[0].price}</div>
                <div className="text-white/80 text-sm mb-6">Ahorras ${packages[0].originalPrice! - packages[0].price}</div>
                <button className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5B358] text-[#704214] rounded-full font-bold hover:bg-[#D4AF37] transition-colors">
                  <ShoppingCart className="w-5 h-5" />
                  Comprar ahora
                </button>
              </div>
            </div>
          </div>

          {/* Other Packages */}
          <div className="grid md:grid-cols-3 gap-4">
            {packages.slice(1).map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">📦</div>
                <h3 className="font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{pkg.description}</p>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-gray-400 line-through text-sm">${pkg.originalPrice}</span>
                  <span className="text-2xl font-bold text-[#704214]">${pkg.price}</span>
                </div>
                <button className="w-full py-3 border-2 border-[#704214] text-[#704214] rounded-lg font-medium hover:bg-[#704214] hover:text-white transition-colors">
                  Ver paquete
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {['Todos', 'Cursos', 'Sesiones', 'Membresías', 'Paquetes', 'Gratuitos'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat.toLowerCase())}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === cat.toLowerCase()
                  ? 'bg-[#704214] text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products by Station */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🎯 Cursos por Estación</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stations.slice(0, 6).map((station) => (
              <div key={station.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div 
                  className="h-32 flex items-center justify-center"
                  style={{ backgroundColor: `${station.colors.primary}20` }}
                >
                  <span className="text-5xl">
                    {station.icon === 'Scale' && '⚖️'}
                    {station.icon === 'Heart' && '❤️'}
                    {station.icon === 'Trophy' && '🏆'}
                    {station.icon === 'Sparkles' && '✨'}
                    {station.icon === 'Brain' && '🧠'}
                    {station.icon === 'Compass' && '🧭'}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span 
                      className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold"
                      style={{ backgroundColor: station.colors.primary }}
                    >
                      {station.id}
                    </span>
                    <span className="text-xs text-gray-500">CURSO</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{station.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{station.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-[#C5B358] text-[#C5B358]" />
                      <span className="text-sm text-gray-600">4.9 (24)</span>
                    </div>
                    <span className="font-bold text-[#704214]">$97</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sessions */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">👤 Sesiones Individuales</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#704214] to-[#C5B358] mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Sesión Descubrimiento</h3>
              <p className="text-gray-600 mb-4">90 minutos para explorar tu mapa y encontrar tu punto de partida.</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-[#704214]">$150</span>
                <button className="px-4 py-2 bg-[#704214] text-white rounded-lg font-medium hover:bg-[#8B4513] transition-colors">
                  Reservar
                </button>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#704214] to-[#C5B358] mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Acompañamiento (4 sesiones)</h3>
              <p className="text-gray-600 mb-4">Un mes de acompañamiento profundo para tu transformación.</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-[#704214]">$500</span>
                <button className="px-4 py-2 bg-[#704214] text-white rounded-lg font-medium hover:bg-[#8B4513] transition-colors">
                  Reservar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
