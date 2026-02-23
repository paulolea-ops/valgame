import { useState } from 'react';
import { stations } from '@/data/stations';
import { blogPosts } from '@/data/stations';
import { Search, BookOpen, ArrowRight } from 'lucide-react';

export function Resources() {
  const [selectedStation, setSelectedStation] = useState<number | null>(null);
  const [selectedTriad, setSelectedTriad] = useState<string | null>(null);
  const [selectedFormat, setSelectedFormat] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    if (selectedStation && post.primaryStation !== selectedStation && !post.secondaryStations.includes(selectedStation)) {
      return false;
    }
    if (selectedTriad && post.triad !== selectedTriad) {
      return false;
    }
    if (searchQuery && !post.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Recursos y Aprendizaje
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Contenido seleccionado para acompañarte en tu viaje de autoconocimiento.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar recursos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#704214]"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <select
                value={selectedStation || ''}
                onChange={(e) => setSelectedStation(e.target.value ? parseInt(e.target.value) : null)}
                className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#704214]"
              >
                <option value="">Todas las estaciones</option>
                {stations.map(s => (
                  <option key={s.id} value={s.id}>{s.name}</option>
                ))}
              </select>
              <select
                value={selectedTriad || ''}
                onChange={(e) => setSelectedTriad(e.target.value || null)}
                className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#704214]"
              >
                <option value="">Todas las tríadas</option>
                <option value="mental">Mental (5-6-7)</option>
                <option value="emotional">Emocional (2-3-4)</option>
                <option value="instinctive">Instintiva (8-9-1)</option>
              </select>
              <select
                value={selectedFormat || ''}
                onChange={(e) => setSelectedFormat(e.target.value || null)}
                className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#704214]"
              >
                <option value="">Todos los formatos</option>
                <option value="article">Artículos</option>
                <option value="pdf">PDFs</option>
                <option value="audio">Audio</option>
                <option value="video">Video</option>
              </select>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {['autoconocimiento', 'relaciones', 'trabajo', 'heridas', 'tipo1', 'tríada-mental'].map(tag => (
              <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full hover:bg-gray-200 cursor-pointer transition-colors">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-[#704214] to-[#8B4513] rounded-2xl overflow-hidden text-white">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Estación 4</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Estación 6</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Integración</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                  Cuando la búsqueda de identidad encuentra la seguridad: el camino del 4 al 6
                </h2>
                <p className="text-white/80 mb-6">
                  Explorando cómo el Individualista encuentra estabilidad a través de la conexión con el Leal.
                </p>
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#704214] rounded-full font-bold hover:bg-gray-100 transition-colors">
                  Leer artículo
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="hidden lg:block bg-white/10" />
            </div>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => {
            const station = stations.find(s => s.id === post.primaryStation);
            return (
              <div key={post.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200" />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span 
                      className="px-2 py-1 rounded text-xs font-semibold text-white"
                      style={{ backgroundColor: station?.colors.primary }}
                    >
                      Estación {post.primaryStation}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <BookOpen className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{post.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{post.excerpt}</p>
                  <button className="text-[#704214] font-medium text-sm hover:underline">
                    Leer más →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-200 rounded-full font-medium hover:border-[#704214] hover:text-[#704214] transition-colors">
            Cargar más recursos
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
