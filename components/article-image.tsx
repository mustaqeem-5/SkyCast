import Image from "next/image";

type ArticleImageProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
};

export default function ArticleImage({
  src,
  alt,
  className = "article-photo",
  sizes = "(max-width: 620px) 100vw, (max-width: 1000px) 50vw, 33vw",
}: ArticleImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      className={className}
    />
  );
}
