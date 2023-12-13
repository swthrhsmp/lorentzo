"use client";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import { StaticImageData } from "next/image";
import image1 from "@/public/assets/101.jpg";
import image2 from "@/public/assets/102.jpg";
import image3 from "@/public/assets/103.jpg";
import image4 from "@/public/assets/104.jpg";
import image5 from "@/public/assets/105.jpg";
import image6 from "@/public/assets/106.jpg";

const IMAGES: StaticImageData[] = [image1, image2, image3, image4, image5, image6];

const Gallery = () => {
  const images: ReactImageGalleryItem[] = IMAGES.map((img) => {
    return {
      original: img.src,
      thumbnail: img.src,
      loading: "lazy",
    };
  });
  return <ImageGallery lazyLoad items={images} />;
};

export default Gallery;
