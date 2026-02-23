import { useState } from 'react';
import { stations } from '@/data/stations';
import { events } from '@/data/stations';
import { Calendar, Clock, MapPin, Users, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export function Events() {
  const [currentMonth] = useState('Marzo 2024');

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Eventos Saber Consentido
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Talleres en vivo, círculos de trabajo y sesiones grupales.
          </p>
        </div>

        {/* Calendar Navigation */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <button className="p-2 rounded-lg hover:bg-gray-200 transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-lg shadow-sm">
            <Calendar className="w-5 h-5 text-[#704214]" />
            <span className="font-medium">{currentMonth}</span>
          </div>
          <button className="p-2 rounded-lg hover:bg-gray-200 transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Featured Event */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-[#36454F] to-[#434B4D] rounded-2xl overflow-hidden text-white">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-[#FFBF00] text-gray-900 text-sm font-bold rounded-full">
                    EVENTO DESTACADO
                  </span>
                </div>
                <div className="flex items-center gap-2 text-white/80 mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>15 de Marzo, 2024</span>
                  <span className="mx-2">|</span>
                  <Clock className="w-4 h-4" />
                  <span>19:00 hs (GMT-3)</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  El Centro de Mando
                </h2>
                <p className="text-xl text-white/80 mb-4">
                  Taller de toma de decisiones conscientes
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-white/70 mb-6">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    Online en vivo (Zoom)
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    Duración: 2 horas
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    12 plazas disponibles
                  </span>
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-3xl font-bold text-[#FFBF00]">$30</span>
                  <span className="text-white/60">(o incluido en membresía)</span>
                </div>
                <button className="inline-flex items-center gap-2 px-8 py-4 bg-[#FFBF00] text-gray-900 rounded-full font-bold hover:bg-[#E5AC00] transition-colors">
                  Reservar mi plaza
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="hidden lg:flex items-center justify-center bg-white/5">
                <div className="w-48 h-48 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-8xl">⚖️</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Próximos Eventos</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {events.slice(1).map((event) => {
              const station = stations.find(s => s.id === event.stationId);
              return (
                <div key={event.id} className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4" />
                    {event.date}
                  </div>
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mb-3"
                    style={{ backgroundColor: station?.colors.primary }}
                  >
                    {event.stationId}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{event.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">{event.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[#704214]">${event.price}</span>
                    <button className="text-sm text-[#704214] font-medium hover:underline">
                      Ver →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recurring Events */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🔄 Eventos Recurrentes</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-[#704214] rounded-lg flex items-center justify-center text-white">
                <Calendar className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-900">Primer martes de mes</h4>
                <p className="text-sm text-gray-500">Taller de la Estación del Mes</p>
              </div>
              <button className="px-4 py-2 text-[#704214] font-medium hover:bg-gray-100 rounded-lg transition-colors">
                Suscribirme
              </button>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-[#704214] rounded-lg flex items-center justify-center text-white">
                <Calendar className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-900">Tercer jueves de mes</h4>
                <p className="text-sm text-gray-500">Círculo de Integración</p>
              </div>
              <button className="px-4 py-2 text-[#704214] font-medium hover:bg-gray-100 rounded-lg transition-colors">
                Suscribirme
              </button>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-[#704214] rounded-lg flex items-center justify-center text-white">
                <Calendar className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-900">Último sábado de mes</h4>
                <p className="text-sm text-gray-500">Sesión de Preguntas y Respuestas</p>
              </div>
              <button className="px-4 py-2 text-[#704214] font-medium hover:bg-gray-100 rounded-lg transition-colors">
                Suscribirme
              </button>
            </div>
          </div>
        </div>

        {/* Subscribe to Calendar */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#704214] text-[#704214] rounded-full font-medium hover:bg-[#704214] hover:text-white transition-colors">
            <Calendar className="w-5 h-5" />
            Suscribirme al calendario
          </button>
        </div>
      </div>
    </div>
  );
}
