import { useState } from 'react';
import { Link } from 'react-router-dom';
import { stations } from '@/data/stations';
import { 
  Search, 
  BookOpen, 
  FileText, 
  Headphones, 
  Video, 
  Download, 
  Share2, 
  Copy,
  Check,
  ArrowRight,
  Mail,
  MessageCircle,
  Facebook,
  Twitter,
  Linkedin,
  Bookmark
} from 'lucide-react';

interface ShareModalProps {
  item: {
    title: string;
    type: string;
    stationId: number;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

function ShareModal({ item, isOpen, onClose }: ShareModalProps) {
  const [copied, setCopied] = useState(false);
  
  if (!isOpen || !item) return null;
  
  const shareUrl = `https://saberconsentido.com${item.type === 'article' ? '/recursos/' : '/descargas/'}${encodeURIComponent(item.title.toLowerCase().replace(/\s+/g, '-'))}`;
  
  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Compartir</h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <span className="text-2xl">&times;</span>
          </button>
        </div>
        
        <p className="text-gray-600 mb-4">{item.title}</p>
        
        <div className="flex justify-center gap-4 mb-6">
          <button className="w-12 h-12 bg-[#1877F2] rounded-full flex items-center justify-center text-white hover:opacity-80">
            <Facebook className="w-5 h-5" />
          </button>
          <button className="w-12 h-12 bg-[#1DA1F2] rounded-full flex items-center justify-center text-white hover:opacity-80">
            <Twitter className="w-5 h-5" />
          </button>
          <button className="w-12 h-12 bg-[#0A66C2] rounded-full flex items-center justify-center text-white hover:opacity-80">
            <Linkedin className="w-5 h-5" />
          </button>
          <button className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center text-white hover:opacity-80">
            <MessageCircle className="w-5 h-5" />
          </button>
          <button className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center text-white hover:opacity-80">
            <Mail className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex gap-2">
          <input 
            type="text" 
            value={shareUrl}
            readOnly
            className="flex-1 px-4 py-3 bg-gray-100 rounded-lg text-sm text-gray-600"
          />
          <button 
            onClick={handleCopy}
            className="px-4 py-3 bg-[#704214] text-white rounded-lg font-medium hover:bg-[#8B4513] transition-colors flex items-center gap-2"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copied ? 'Copiado' : 'Copiar'}
          </button>
        </div>
      </div>
    </div>
  );
}

export function ShareLibrary() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStation, setSelectedStation] = useState<number | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [shareItem, setShareItem] = useState<{title: string; type: string; stationId: number} | null>(null);
  const [isShareOpen, setIsShareOpen] = useState(false);

  // Recopilar todos los recursos
  const allArticles = stations.flatMap(s => 
    s.content.articles.map(a => ({ 
      ...a, 
      stationId: s.id, 
      stationName: s.name,
      stationColor: s.colors.primary,
      itemType: 'article' as const
    }))
  );

  const allResources = stations.flatMap(s => 
    s.content.resources.map(r => ({ 
      ...r, 
      stationId: s.id, 
      stationName: s.name,
      stationColor: s.colors.primary,
      itemType: 'resource' as const
    }))
  );

  const allItems = [...allArticles, ...allResources];

  const filteredItems = allItems.filter(item => {
    if (selectedStation && item.stationId !== selectedStation) return false;
    if (selectedType && item.itemType !== selectedType) return false;
    if (searchQuery && !item.title.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  const handleShare = (item: typeof allItems[0]) => {
    setShareItem({
      title: item.title,
      type: item.itemType,
      stationId: item.stationId
    });
    setIsShareOpen(true);
  };

  const getIcon = (item: typeof allItems[0]) => {
    if (item.itemType === 'article') return <BookOpen className="w-5 h-5" />;
    if ('type' in item) {
      if (item.type === 'pdf') return <FileText className="w-5 h-5" />;
      if (item.type === 'audio') return <Headphones className="w-5 h-5" />;
      if (item.type === 'video') return <Video className="w-5 h-5" />;
      if (item.type === 'worksheet') return <Bookmark className="w-5 h-5" />;
    }
    return <FileText className="w-5 h-5" />;
  };

  const getTypeLabel = (item: typeof allItems[0]) => {
    if (item.itemType === 'article') return 'Artículo';
    if ('type' in item) {
      if (item.type === 'pdf') return 'PDF';
      if (item.type === 'audio') return 'Audio';
      if (item.type === 'video') return 'Video';
      if (item.type === 'worksheet') return 'Worksheet';
    }
    return 'Recurso';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#704214] to-[#8B4513] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6">
            <Share2 className="w-4 h-4 text-[#C5B358]" />
            <span className="text-sm font-medium text-white">Biblioteca Compartible</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Todos los Recursos
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Artículos, guías, audios y videos para tu viaje de autoconocimiento. 
            Comparte lo que resuene contigo.
          </p>
          
          {/* Stats */}
          <div className="flex justify-center gap-8 mt-10">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#C5B358]">{allArticles.length}</div>
              <div className="text-white/70 text-sm">Artículos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#C5B358]">{allResources.length}</div>
              <div className="text-white/70 text-sm">Descargables</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#C5B358]">9</div>
              <div className="text-white/70 text-sm">Estaciones</div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="sticky top-16 z-40 bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar artículos y recursos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#704214] focus:ring-2 focus:ring-[#704214]/20"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2">
              <select
                value={selectedStation || ''}
                onChange={(e) => setSelectedStation(e.target.value ? parseInt(e.target.value) : null)}
                className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#704214]"
              >
                <option value="">Todas las estaciones</option>
                {stations.map(s => (
                  <option key={s.id} value={s.id}>{s.id}. {s.name}</option>
                ))}
              </select>

              <select
                value={selectedType || ''}
                onChange={(e) => setSelectedType(e.target.value || null)}
                className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#704214]"
              >
                <option value="">Todos los tipos</option>
                <option value="article">Artículos</option>
                <option value="resource">Descargables</option>
              </select>

              {(selectedStation || selectedType || searchQuery) && (
                <button
                  onClick={() => {
                    setSelectedStation(null);
                    setSelectedType(null);
                    setSearchQuery('');
                  }}
                  className="px-4 py-3 text-gray-500 hover:text-gray-700"
                >
                  Limpiar filtros
                </button>
              )}
            </div>
          </div>

          {/* Quick filters */}
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="text-sm text-gray-500 mr-2">Filtrar rápido:</span>
            {['perfeccionismo', 'relaciones', 'decisiones', 'identidad', 'autoconocimiento'].map(tag => (
              <button
                key={tag}
                onClick={() => setSearchQuery(tag)}
                className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full hover:bg-gray-200 transition-colors"
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Results count */}
        <div className="mb-6 text-gray-600">
          Mostrando {filteredItems.length} de {allItems.length} recursos
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div 
              key={`${item.itemType}-${index}`}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 overflow-hidden group"
            >
              {/* Header */}
              <div 
                className="h-2"
                style={{ backgroundColor: item.stationColor }}
              />
              
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-3 mb-4">
                  <span 
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
                    style={{ backgroundColor: item.stationColor }}
                  >
                    {item.stationId}
                  </span>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    {getIcon(item)}
                    <span>{getTypeLabel(item)}</span>
                  </div>
                  {'readTime' in item && (
                    <span className="text-sm text-gray-400">{item.readTime}</span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                  {item.title}
                </h3>

                {/* Description */}
                {'excerpt' in item && (
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {item.excerpt}
                  </p>
                )}
                {'description' in item && (
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>
                )}

                {/* Tags */}
                {'tags' in item && item.tags && (
                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t">
                  <Link 
                    to={item.itemType === 'article' ? `/recursos` : `/descargas`}
                    className="text-sm font-medium hover:underline flex items-center gap-1"
                    style={{ color: item.stationColor }}
                  >
                    {'type' in item && item.type === 'pdf' ? (
                      <>
                        <Download className="w-4 h-4" />
                        Descargar
                      </>
                    ) : (
                      <>
                        Leer más
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </Link>
                  
                  <button
                    onClick={() => handleShare(item)}
                    className="p-2 text-gray-400 hover:text-[#704214] hover:bg-gray-100 rounded-full transition-colors"
                    title="Compartir"
                  >
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              No se encontraron resultados
            </h3>
            <p className="text-gray-600 mb-4">
              Intenta con otros términos de búsqueda o filtros
            </p>
            <button
              onClick={() => {
                setSelectedStation(null);
                setSelectedType(null);
                setSearchQuery('');
              }}
              className="px-6 py-3 bg-[#704214] text-white rounded-lg font-medium hover:bg-[#8B4513] transition-colors"
            >
              Ver todos los recursos
            </button>
          </div>
        )}
      </div>

      {/* Share by Station Section */}
      <div className="bg-white border-t py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Explora por Estación
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {stations.map((station) => {
              const stationArticles = allArticles.filter(a => a.stationId === station.id);
              const stationResources = allResources.filter(r => r.stationId === station.id);
              
              return (
                <Link
                  key={station.id}
                  to={`/estaciones/${station.slug}`}
                  className="group bg-gray-50 rounded-xl p-5 hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-4">
                    <span 
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0 group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: station.colors.primary }}
                    >
                      {station.id}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 group-hover:text-[#704214] transition-colors">
                        {station.name}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1 line-clamp-1">
                        {station.essence}
                      </p>
                      <div className="flex gap-3 mt-3 text-xs text-gray-400">
                        <span>{stationArticles.length} artículos</span>
                        <span>{stationResources.length} recursos</span>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-[#704214] group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-[#704214] to-[#8B4513] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿No encuentras lo que buscas?
          </h2>
          <p className="text-white/80 mb-8">
            Descubre tu punto de entrada al ecosistema con nuestro test de orientación.
          </p>
          <Link
            to="/test"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#704214] rounded-full font-bold hover:bg-gray-100 transition-colors"
          >
            Hacer el test de orientación
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Share Modal */}
      <ShareModal 
        item={shareItem}
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
      />
    </div>
  );
}
