import Image from "next/image";

type HeroBannerProps = {
  title: string;
  subtitle?: string
  imageUrl: string;
  height?: number;
}

export const HeroBanner = ({ title, subtitle, imageUrl, height = 60 }: HeroBannerProps) => (
  <section className="relative w-full overflow-hidden shadow-lg" style={{ height: `${height}vh` }}>
    <img
      src={imageUrl}
      className="w-full h-full object-cover blur-[3px]"
    />

    <div className="absolute inset-0 bg-black/60" />

    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 md:px-0">
      <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">
        {title}
      </h1>
      <p className="text-lg md:text-xl max-w-3xl font-serif text-stone-200">
        {subtitle}
      </p>
    </div>
  </section>
);