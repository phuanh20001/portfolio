import { ImageResponse } from 'next/og'
import { profile } from '@/data/profile'

// The 1200x630 card that appears when this URL is shared. Generated rather than
// checked in as a PNG so it stays in step with profile.js instead of going stale.
// Satori needs explicit display:flex on any element with more than one child.
export const alt = `${profile.name}, full-stack developer`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#0A0A0A',
          padding: '72px 80px',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 24, letterSpacing: 6, color: '#6B7280' }}>PORTFOLIO</div>
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              color: '#FFFFFF',
              marginTop: 24,
              lineHeight: 1.1,
            }}
          >
            {profile.name}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 32, color: '#D1D5DB', lineHeight: 1.4, maxWidth: 940 }}>
            {profile.tagline}
          </div>
          <div style={{ display: 'flex', fontSize: 24, color: '#6B7280', marginTop: 36 }}>
            <div>{profile.location}</div>
            <div style={{ margin: '0 16px' }}>·</div>
            <div>github.com/phuanh20001</div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
