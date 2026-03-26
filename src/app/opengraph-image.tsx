import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = '524 Tracker — Track Chase 5/24, Amex Lifetime & More Credit Card Rules'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px',
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 700, color: 'white', textAlign: 'center' }}>
          524 Tracker
        </div>
        <div style={{ fontSize: 32, color: '#94a3b8', marginTop: 24, textAlign: 'center' }}>
          Track Chase 5/24, Amex Lifetime & More Credit Card Rules
        </div>
      </div>
    ),
    { ...size }
  )
}
