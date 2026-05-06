'use client';

import { useRef, useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

export const PRESENCE_COUNTRIES: Record<string, string> = {
  Spain: 'España',
  Portugal: 'Portugal',
  Panama: 'Panamá',
  Colombia: 'Colombia',
  Peru: 'Perú',
  Uruguay: 'Uruguay',
  Cuba: 'Cuba',
  Venezuela: 'Venezuela',
  'United States of America': 'Estados Unidos de América',
  Romania: 'Rumania',
  'Eq. Guinea': 'Guinea Ecuatorial',
  Brazil: 'Brasil',
};

type Hovered = { name: string; x: number; y: number } | null;

type Props = {
  /** Clave inglesa del país (ej. "Spain") a iluminar de forma externa, p. ej. desde una lista. */
  highlightedCountry?: string | null;
};

export function WorldPresenceMap({ highlightedCountry = null }: Props = {}) {
  const [hovered, setHovered] = useState<Hovered>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const trackPointer = (e: React.MouseEvent, countryName: string) => {
    const rect = wrapperRef.current?.getBoundingClientRect();
    if (!rect) return;
    setHovered({
      name: countryName,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={wrapperRef}
      className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.03] p-2 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-sm md:p-4"
    >
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: 135, center: [-25, 15] }}
        width={1100}
        height={540}
        style={{ width: '100%', height: 'auto' }}
      >
        <Geographies geography="/world-atlas/countries-110m.json">
          {({
            geographies,
          }: {
            geographies: Array<{ rsmKey: string; properties: { name: string } }>;
          }) =>
            geographies.map((geo) => {
              const name = geo.properties.name;
              const label = PRESENCE_COUNTRIES[name];
              const isOn = Boolean(label);
              const isHighlighted = isOn && name === highlightedCountry;
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo as never}
                  onMouseEnter={(e) => isOn && trackPointer(e, label as string)}
                  onMouseMove={(e) => isOn && trackPointer(e, label as string)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    default: {
                      fill: isOn
                        ? isHighlighted
                          ? '#dde89f'
                          : '#9fc778'
                        : 'rgba(255,255,255,0.07)',
                      stroke: isOn
                        ? isHighlighted
                          ? '#9fc778'
                          : '#113e61'
                        : 'rgba(255,255,255,0.18)',
                      strokeWidth: isOn ? (isHighlighted ? 1.2 : 0.8) : 0.4,
                      outline: 'none',
                      cursor: isOn ? 'pointer' : 'default',
                      transition: 'fill 0.2s ease, stroke 0.2s ease',
                    },
                    hover: {
                      fill: isOn ? '#dde89f' : 'rgba(255,255,255,0.07)',
                      stroke: isOn ? '#9fc778' : 'rgba(255,255,255,0.18)',
                      strokeWidth: isOn ? 1.2 : 0.4,
                      outline: 'none',
                    },
                    pressed: {
                      fill: isOn ? '#9fc778' : 'rgba(255,255,255,0.07)',
                      outline: 'none',
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
      {hovered && (
        <div
          className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-full rounded-md bg-[#113e61] px-3 py-1.5 text-xs font-semibold text-white shadow-lg ring-1 ring-[#9fc778]/40"
          style={{ left: hovered.x, top: hovered.y - 8 }}
        >
          {hovered.name}
        </div>
      )}
    </div>
  );
}
