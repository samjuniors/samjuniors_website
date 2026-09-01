import { ImageResponse } from 'next/og';
import { companyContent } from '@/content/company';

/**
 * Social share card (Open Graph + Twitter), generated at build time by
 * next/og. Deliberately typographic: no product screenshots and no claims —
 * a share card is the wrong surface for either, and it cannot go stale.
 * The palette is the SamJuniors environment (obsidian + copper); values are
 * literal here because ImageResponse renders outside the CSS token cascade.
 */

export const alt = `${companyContent.name} — ${companyContent.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#0b0c0f',
          padding: '80px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ width: '34px', height: '34px', border: '4px solid #c89666' }} />
          <div style={{ fontSize: 34, color: '#f4f6fa', letterSpacing: '-0.02em' }}>
            {companyContent.name}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          <div
            style={{
              fontSize: 68,
              color: '#f4f6fa',
              lineHeight: 1.1,
              letterSpacing: '-0.035em',
              maxWidth: '900px',
            }}
          >
            {companyContent.tagline}
          </div>
          <div style={{ fontSize: 28, color: '#959fae', maxWidth: '820px', lineHeight: 1.5 }}>
            Production software for professional and academic work.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: 22,
            color: '#c89666',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}
        >
          samjuniors.com
        </div>
      </div>
    ),
    size,
  );
}
