import { Link } from 'react-router-dom';
import { type Station } from '@/types';
import { getWingStations, getArrowStations } from '@/data/stations';
import { ArrowUp, ArrowDown, Wind } from 'lucide-react';

interface StationConnectionsProps {
  station: Station;
}

export function StationConnections({ station }: StationConnectionsProps) {
  const wings = getWingStations(station);
  const arrows = getArrowStations(station);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 lg:p-8">
      <h3 className="text-2xl font-bold text-center mb-8">
        🌟 {station.name} no existe en aislamiento
      </h3>

      {/* Alas */}
      <div className="mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Wind className="w-5 h-5 text-gray-500" />
          <h4 className="text-lg font-semibold text-gray-700">Alas - Los matices de tu camino</h4>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          {/* Ala izquierda */}
          <Link
            to={`/estaciones/${wings[0].slug}`}
            className="group bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
          >
            <div className="flex items-start gap-4">
              <span 
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0 group-hover:scale-110 transition-transform"
                style={{ backgroundColor: wings[0].colors.primary }}
              >
                {wings[0].id}
              </span>
              <div>
                <h5 className="font-bold text-gray-800 group-hover:text-[#704214] transition-colors">
                  {wings[0].name}
                </h5>
                <p className="text-sm text-gray-500 mt-1">
                  "Se nutre de {wings[0].essence.toLowerCase()}"
                </p>
                <span className="inline-flex items-center gap-1 text-sm text-[#704214] mt-2 font-medium">
                  Explorar conexión →
                </span>
              </div>
            </div>
          </Link>

          {/* Ala derecha */}
          <Link
            to={`/estaciones/${wings[1].slug}`}
            className="group bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
          >
            <div className="flex items-start gap-4">
              <span 
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0 group-hover:scale-110 transition-transform"
                style={{ backgroundColor: wings[1].colors.primary }}
              >
                {wings[1].id}
              </span>
              <div>
                <h5 className="font-bold text-gray-800 group-hover:text-[#704214] transition-colors">
                  {wings[1].name}
                </h5>
                <p className="text-sm text-gray-500 mt-1">
                  "Se aligera con {wings[1].essence.toLowerCase()}"
                </p>
                <span className="inline-flex items-center gap-1 text-sm text-[#704214] mt-2 font-medium">
                  Explorar conexión →
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Flechas */}
      <div>
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-lg">🔄</span>
          <h4 className="text-lg font-semibold text-gray-700">Flechas - Tus caminos de transformación</h4>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          {/* Integración */}
          <Link
            to={`/estaciones/${arrows.integration.slug}`}
            className="group bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-5 border border-emerald-200 hover:shadow-md transition-all hover:-translate-y-1"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: arrows.integration.colors.primary }}
                >
                  <ArrowUp className="w-5 h-5" />
                </div>
              </div>
              <div>
                <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">
                  Integración
                </span>
                <h5 className="font-bold text-gray-800 group-hover:text-emerald-700 transition-colors">
                  {arrows.integration.name}
                </h5>
                <p className="text-sm text-gray-600 mt-1">
                  "En integración, encuentras {arrows.integration.essence.toLowerCase()}"
                </p>
                <span className="inline-flex items-center gap-1 text-sm text-emerald-700 mt-2 font-medium">
                  Explorar integración →
                </span>
              </div>
            </div>
          </Link>

          {/* Desintegración */}
          <Link
            to={`/estaciones/${arrows.disintegration.slug}`}
            className="group bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-5 border border-red-200 hover:shadow-md transition-all hover:-translate-y-1"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: arrows.disintegration.colors.primary }}
                >
                  <ArrowDown className="w-5 h-5" />
                </div>
              </div>
              <div>
                <span className="text-xs font-semibold text-red-600 uppercase tracking-wider">
                  Desintegración (zona de alerta)
                </span>
                <h5 className="font-bold text-gray-800 group-hover:text-red-700 transition-colors">
                  {arrows.disintegration.name}
                </h5>
                <p className="text-sm text-gray-600 mt-1">
                  "Cuidado: en estrés, caes en {arrows.disintegration.essence.toLowerCase()}"
                </p>
                <span className="inline-flex items-center gap-1 text-sm text-red-700 mt-2 font-medium">
                  Reconocer este patrón →
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
