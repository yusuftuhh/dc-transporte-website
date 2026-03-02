'use client'

interface LogoProps {
  className?: string
  variant?: 'color' | 'white'
  showText?: boolean
}

export default function Logo({ className = '', variant = 'color', showText = true }: LogoProps) {
  const fill = variant === 'white' ? '#FFFFFF' : '#3BA3D9'

  return (
    <svg
      viewBox="0 0 520 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="D & C Transporte GmbH"
    >
      {/* D letter with angular/hexagonal shape */}
      <path
        d="M10 10 L80 10 Q130 10 140 50 L140 90 Q130 130 80 130 L10 130 Z"
        fill={fill}
        rx="4"
      />
      <path
        d="M35 35 L35 105 L72 105 Q100 105 108 85 L108 55 Q100 35 72 35 Z"
        fill={variant === 'white' ? '#0C1220' : '#F7F9FC'}
      />

      {/* C letter merging into arrow/chevron */}
      <path
        d="M175 50 Q175 10 215 10 L260 10 L260 35 L218 35 Q200 35 200 50 L200 90 Q200 105 218 105 L260 105 L260 130 L215 130 Q175 130 175 90 Z"
        fill={fill}
      />
      {/* Arrow/chevron extending from C */}
      <path
        d="M250 10 L310 70 L250 130 L280 130 L340 70 L280 10 Z"
        fill={fill}
      />
      {/* Outer arrow outline */}
      <path
        d="M290 10 L350 70 L290 130 L310 130 L370 70 L310 10 Z"
        fill={fill}
        opacity="0.4"
      />

      {showText && (
        <>
          {/* TRANSPORTE text */}
          <text
            x="10"
            y="168"
            fill={fill}
            fontFamily="var(--font-display), sans-serif"
            fontSize="38"
            fontWeight="700"
            letterSpacing="3"
            fontStyle="italic"
          >
            TRANSPORTE
          </text>
          {/* GMBH text */}
          <text
            x="380"
            y="168"
            fill={fill}
            fontFamily="var(--font-display), sans-serif"
            fontSize="20"
            fontWeight="600"
            letterSpacing="2"
            opacity="0.7"
          >
            GMBH
          </text>
        </>
      )}
    </svg>
  )
}
