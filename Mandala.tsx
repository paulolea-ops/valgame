import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { stations } from '@/data/stations';

interface MandalaProps {
  size?: number;
  activeStation?: number;
  showLabels?: boolean;
  className?: string;
}

export function Mandala({ 
  size = 400, 
  activeStation, 
  showLabels = true,
  className = '' 
}: MandalaProps) {
  const [hoveredStation, setHoveredStation] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const center = size / 2;
  const radius = size * 0.35;
  const stationRadius = size * 0.08;

  const getStationPosition = (index: number) => {
    // El eneagrama tiene un orden específico: 9 arriba, luego 1, 2, 3, etc. en sentido horario
    // Pero el orden angular estándar es diferente
    const angleOffset = -Math.PI / 2; // Empezar desde arriba
    const angleStep = (2 * Math.PI) / 9;
    
    // Mapeo de posición en el círculo al número de estación
    // 9 está arriba (0°), luego 1, 2, 3... en sentido horario
    const stationOrder = [9, 1, 2, 3, 4, 5, 6, 7, 8];
    const positionIndex = stationOrder.indexOf(index + 1);
    const angle = angleOffset + positionIndex * angleStep;
    
    return {
      x: center + radius * Math.cos(angle),
      y: center + radius * Math.sin(angle)
    };
  };

  const getLinePath = (from: number, to: number) => {
    const fromPos = getStationPosition(from - 1);
    const toPos = getStationPosition(to - 1);
    return `M ${fromPos.x} ${fromPos.y} L ${toPos.x} ${toPos.y}`;
  };

  const getStationColor = (station: typeof stations[0], isHovered: boolean, isActive: boolean) => {
    if (isActive) return station.colors.primary;
    if (isHovered) return station.colors.accent;
    return station.colors.primary;
  };

  return (
    <div 
      ref={containerRef}
      className={`relative ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        {/* Definiciones de gradientes y filtros */}
        <defs>
          {stations.map((station) => (
            <radialGradient key={`grad-${station.id}`} id={`gradient-${station.id}`}>
              <stop offset="0%" stopColor={station.colors.primary} stopOpacity="0.3" />
              <stop offset="100%" stopColor={station.colors.primary} stopOpacity="0" />
            </radialGradient>
          ))}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Círculo exterior */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="#E5E7EB"
          strokeWidth="1"
          strokeDasharray="4 4"
        />

        {/* Círculo interior */}
        <circle
          cx={center}
          cy={center}
          r={radius * 0.5}
          fill="none"
          stroke="#E5E7EB"
          strokeWidth="1"
        />

        {/* Líneas de conexión (alas y flechas) */}
        {stations.map((station) => {
          const isHovered = hoveredStation === station.id;
          const isActive = activeStation === station.id;
          const showConnections = isHovered || isActive;

          return (
            <g key={`connections-${station.id}`}>
              {/* Alas */}
              <path
                d={getLinePath(station.id, station.wings.left)}
                fill="none"
                stroke={showConnections ? station.colors.primary : '#E5E7EB'}
                strokeWidth={showConnections ? 2 : 1}
                strokeOpacity={showConnections ? 0.6 : 0.3}
                className="transition-all duration-300"
              />
              <path
                d={getLinePath(station.id, station.wings.right)}
                fill="none"
                stroke={showConnections ? station.colors.primary : '#E5E7EB'}
                strokeWidth={showConnections ? 2 : 1}
                strokeOpacity={showConnections ? 0.6 : 0.3}
                className="transition-all duration-300"
              />
              {/* Flechas */}
              <path
                d={getLinePath(station.id, station.arrows.integration)}
                fill="none"
                stroke={showConnections ? '#10B981' : '#E5E7EB'}
                strokeWidth={showConnections ? 2 : 1}
                strokeOpacity={showConnections ? 0.6 : 0.3}
                strokeDasharray={showConnections ? '0' : '4 4'}
                className="transition-all duration-300"
              />
              <path
                d={getLinePath(station.id, station.arrows.disintegration)}
                fill="none"
                stroke={showConnections ? '#EF4444' : '#E5E7EB'}
                strokeWidth={showConnections ? 2 : 1}
                strokeOpacity={showConnections ? 0.6 : 0.3}
                strokeDasharray={showConnections ? '0' : '4 4'}
                className="transition-all duration-300"
              />
            </g>
          );
        })}

        {/* Estaciones */}
        {stations.map((station, index) => {
          const pos = getStationPosition(index);
          const isHovered = hoveredStation === station.id;
          const isActive = activeStation === station.id;

          return (
            <g
              key={station.id}
              transform={`translate(${pos.x}, ${pos.y})`}
              className="cursor-pointer"
              onMouseEnter={() => setHoveredStation(station.id)}
              onMouseLeave={() => setHoveredStation(null)}
            >
              {/* Círculo de hover */}
              {(isHovered || isActive) && (
                <circle
                  r={stationRadius * 1.5}
                  fill={`url(#gradient-${station.id})`}
                  className="animate-pulse"
                />
              )}

              {/* Círculo principal */}
              <circle
                r={stationRadius}
                fill={getStationColor(station, isHovered, isActive)}
                stroke="white"
                strokeWidth={isActive ? 4 : 2}
                filter={isHovered || isActive ? 'url(#glow)' : undefined}
                className="transition-all duration-300"
                style={{
                  transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                  transformOrigin: 'center'
                }}
              />

              {/* Número */}
              <text
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
                fontSize={stationRadius * 0.6}
                fontWeight="bold"
                className="pointer-events-none select-none"
              >
                {station.id}
              </text>
            </g>
          );
        })}

        {/* Centro */}
        <circle
          cx={center}
          cy={center}
          r={stationRadius * 0.8}
          fill="#704214"
          stroke="white"
          strokeWidth={2}
        />
        <text
          x={center}
          y={center}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="white"
          fontSize={stationRadius * 0.5}
          fontWeight="bold"
        >
          9
        </text>
      </svg>

      {/* Labels */}
      {showLabels && hoveredStation && (
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-xl p-4 z-10 min-w-[200px]"
        >
          {(() => {
            const station = stations.find(s => s.id === hoveredStation);
            if (!station) return null;
            return (
              <Link 
                to={`/estaciones/${station.slug}`}
                className="block text-center"
              >
                <span 
                  className="inline-block w-8 h-8 rounded-full text-white font-bold mb-2"
                  style={{ backgroundColor: station.colors.primary }}
                >
                  {station.id}
                </span>
                <h4 className="font-bold text-gray-800">{station.name}</h4>
                <p className="text-sm text-gray-500 mt-1">{station.essence}</p>
                <span className="inline-block mt-2 text-sm text-[#704214] font-medium">
                  Explorar →
                </span>
              </Link>
            );
          })()}
        </div>
      )}

      {/* Lista de estaciones para móvil */}
      <div className="lg:hidden mt-8 grid grid-cols-3 gap-2">
        {stations.map((station) => (
          <Link
            key={station.id}
            to={`/estaciones/${station.slug}`}
            className="flex flex-col items-center p-2 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <span 
              className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold mb-1"
              style={{ backgroundColor: station.colors.primary }}
            >
              {station.id}
            </span>
            <span className="text-xs text-gray-600 text-center leading-tight">
              {station.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
