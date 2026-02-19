import Image from 'next/image';

interface Props {
  src: string;
  alt: string;
  className?: string;
}

export default function DesktopMockup({ src, alt, className = '' }: Props) {
  return (
    <div
      className={`relative w-full max-w-[560px] shrink-0 ${className}`}
      style={{ filter: 'drop-shadow(0 20px 48px rgba(79,70,229,0.15))' }}
    >
      <div className="bg-gray-100 rounded-t-xl border border-b-0 border-gray-300 px-4 py-2.5 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 mx-2 bg-white rounded-md px-3 py-1 text-xs text-gray-400 border border-gray-200">
          dailyvitamins.app
        </div>
      </div>
      <div className="border border-t-0 border-gray-300 rounded-b-xl overflow-hidden bg-white">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={750}
          className="w-full h-auto object-cover object-top max-h-[340px]"
          priority
        />
      </div>
    </div>
  );
}
