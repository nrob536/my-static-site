import Image from 'next/image';

export default function Home() {
  return (
    <div>
      {/* Banner at the very top */}
      <div style={{
        width: '100%',
        height: '250px',
        position: 'relative',
        marginBottom: '1rem',
      }}>
        <Image
          src="/banner.webp"
          alt="Banner"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Logo */}
      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <Image
          src="/logo.webp"
          alt="Business Logo"
          width={120}
          height={120}
        />
      </div>

      {/* Description and Officiant Picture */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '800px',
        margin: '0 auto',
        gap: '2rem'
      }}>
        <div>
          <h1>Welcome to Married by Gen</h1>
          <p>
            At Married by Gen, we specialize in crafting personalized and memorable wedding ceremonies.
            Our experienced officiant brings warmth, professionalism, and a personal touch to every celebration.
            Let us help make your special day truly unforgettable!
          </p>
        </div>
        <div>
          <Image
            src="/officiant.webp"
            alt="Wedding Officiant"
            width={200}
            height={250}
            style={{ borderRadius: '10px' }}
          />
        </div>
      </div>
    </div>
  );
}