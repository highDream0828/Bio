import Image from "next/image";
function OgImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative -mt-[35%] sm:-mt-0 md:-ml-[35%] w-full sm:w-1/2 md:w-8/12 shrink-0 rounded-xl overflow-hidden shadow-2xl before:absolute before:inset-0 dark:before:bg-black/20 before:z-10">
      <Image
        title={alt}
        alt={alt}
        src={src}
        width={600}
        height={315}
        placeholder="blur"
        blurDataURL={src}
        quality={25}
        className="lg:group-hover:scale-110 transition-all duration-300 backdrop-blur-xl"
        style={{
          width: "100%",
          height: "auto",
          objectFit: "cover",
        }}
      />
    </div>
  );
}

export default OgImage;
