import { stations } from '@/data/stations';
import { MessageCircle, Star, Facebook, MessageSquare } from 'lucide-react';

export function Community() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Comunidad Saber Consentido
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Un espacio seguro para explorar quiénes somos y quiénes podemos ser.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-16 max-w-2xl mx-auto">
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-4xl font-bold text-[#704214] mb-2">500+</div>
            <div className="text-gray-600">miembros activos</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-4xl font-bold text-[#704214] mb-2">50+</div>
            <div className="text-gray-600">recursos exclusivos</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-4xl font-bold text-[#704214] mb-2">20+</div>
            <div className="text-gray-600">eventos/año</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1877F2] text-white rounded-full font-bold hover:bg-[#166fe5] transition-colors">
            <Facebook className="w-5 h-5" />
            Unirme al grupo de Facebook
          </button>
          <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#5865F2] text-white rounded-full font-bold hover:bg-[#4752C4] transition-colors">
            <MessageSquare className="w-5 h-5" />
            Unirme al Discord
          </button>
        </div>

        {/* Forum */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <div className="flex items-center gap-3 mb-6">
              <MessageCircle className="w-6 h-6 text-[#704214]" />
              <h2 className="text-2xl font-bold text-gray-900">Foro General</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Comparte tu experiencia, haz preguntas, conecta con otros.
            </p>

            <div className="space-y-4">
              {[
                { title: '¿Cómo identifico mi ala?', replies: 12, author: 'María T.' },
                { title: 'Mi experiencia en el camino del 4 al 1', replies: 8, author: 'Carlos R.' },
                { title: 'Recursos para trabajar el miedo', replies: 15, author: 'Ana L.' }
              ].map((topic, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                  <div>
                    <h4 className="font-medium text-gray-900">{topic.title}</h4>
                    <p className="text-sm text-gray-500">por {topic.author}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <MessageCircle className="w-4 h-4" />
                    {topic.replies} respuestas
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-6 text-[#704214] font-medium hover:underline">
              Entrar al foro →
            </button>
          </div>
        </div>

        {/* Groups by Station */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🏠 Espacios por Estación</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {stations.slice(0, 6).map((station) => (
              <div key={station.id} className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <span 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                    style={{ backgroundColor: station.colors.primary }}
                  >
                    {station.id}
                  </span>
                  <div>
                    <h3 className="font-bold text-gray-900">{station.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Grupo para quienes transitan {station.essence.toLowerCase()}
                    </p>
                    <button className="text-[#704214] text-sm font-medium mt-3 hover:underline">
                      Unirme →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Events */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">📅 Próximos Eventos para la Comunidad</h2>
            <button className="text-[#704214] font-medium hover:underline">
              Ver calendario →
            </button>
          </div>
          <div className="space-y-3">
            {[
              { date: '15 Mar', title: 'Taller mensual: El Centro de Mando', type: 'Abierto' },
              { date: '22 Mar', title: 'Círculo de Tipo 4', type: 'Solo miembros' },
              { date: '29 Mar', title: 'Integración: Viaje del 6 al 9', type: 'Abierto' }
            ].map((event, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-[#704214] rounded-lg flex flex-col items-center justify-center text-white">
                  <span className="text-xs">MAR</span>
                  <span className="text-xl font-bold">{event.date.split(' ')[0]}</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{event.title}</h4>
                  <span className="text-sm text-gray-500">{event.type}</span>
                </div>
                <button className="px-4 py-2 text-[#704214] font-medium hover:bg-gray-100 rounded-lg transition-colors">
                  Ver más
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">💬 Testimonios de la Comunidad</h2>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#C5B358] text-[#C5B358]" />
              ))}
            </div>
            <blockquote className="text-lg text-gray-700 italic mb-6">
              "Encontré en esta comunidad algo que no encontré en otros espacios de Eneagrama: 
              profundidad sin dogmatismo, compañía sin competencia."
            </blockquote>
            <footer className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#704214] to-[#C5B358]" />
              <div>
                <div className="font-semibold text-gray-900">Laura G.</div>
                <div className="text-sm text-gray-500">Tipo 6 | Miembro desde 2023</div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
