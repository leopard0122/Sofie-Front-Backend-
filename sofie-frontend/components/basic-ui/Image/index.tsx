import React from "react";
import NextImage, { ImageLoaderProps } from "next/image";

export type ImageProps = {
  altText?: string;
  title?: string;
  url: string;
  width: number;
  height: number;
};

type ImageInitialProps = {
  image: ImageProps;
  additionalClass?: string;
  layout?: "fill" | "responsive" | "intrinsic" | "fixed";
  fit?: "cover";
  sizes?: string;
};

export const contentfulLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `${src}?w=${width}&q=${quality || 75}&fm=webp`;
};

const Image: React.FC<ImageInitialProps> = ({
  image,
  layout = "intrinsic",
  additionalClass,
  fit = "cover",
  sizes = "100vw",
}) => {
  if (!image) return null;
  return (
    <NextImage
      loader={contentfulLoader}
      src={image.url}
      alt={image.title ?? ""}
      layout={layout}
      sizes={sizes}
      objectPosition="center"
      className={additionalClass}
      width={layout !== "fill" ? image.width : undefined}
      height={layout !== "fill" ? image.height : undefined}
      objectFit={fit}
      placeholder="blur"
      blurDataURL={`${image.url}?w=10&q=1&fm=webp`}
    />
  );
};

export default Image;
