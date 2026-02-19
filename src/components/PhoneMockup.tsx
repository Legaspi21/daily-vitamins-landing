import Image from 'next/image';

interface Props {
  src: string;
  alt: string;
  className?: string;
}

export default function PhoneMockup({ src, alt, className = '' }: Props) {
  return (
    <div
      className={`relative w-[220px] shrink-0 ${className}`}
      style={{ filter: 'drop-shadow(0 20px 40px rgba(79,70,229,0.18))' }}
    >
      <div className="relative bg-gray-900 rounded-[36px] p-2 ring-2 ring-gray-700">
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-gray-900 rounded-full z-10" />
        <div className="rounded-[28px] overflow-hidden bg-white aspect-[9/19.5] relative">
          <div className="absolute inset-x-0 bottom-0 top-6">
            <Image
              src={src}
              alt={alt}
              width={400}
              height={867}
              className="w-full h-full object-cover object-bottom"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
