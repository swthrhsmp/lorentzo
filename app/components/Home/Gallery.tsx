"use client";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import { StaticImageData } from "next/image";
import image1 from "@/public/assets/works/101.jpg";
import image1Thumb from "@/public/assets/works/101_thumb.jpg";
import image2 from "@/public/assets/works/102.jpg";
import image2Thumb from "@/public/assets/works/102_thumb.jpg";
import image3 from "@/public/assets/works/103.jpg";
import image3Thumb from "@/public/assets/works/103_thumb.jpg";
import image4 from "@/public/assets/works/104.jpg";
import image4Thumb from "@/public/assets/works/104_thumb.jpg";
import image5 from "@/public/assets/works/105.jpg";
import image5Thumb from "@/public/assets/works/105_thumb.jpg";
import image6 from "@/public/assets/works/106.jpg";
import image6Thumb from "@/public/assets/works/106_thumb.jpg";

interface Image {
  img: StaticImageData;
  thumb: StaticImageData;
}

const IMAGES: Image[] = [
  { img: image1, thumb: image1Thumb },
  { img: image2, thumb: image2Thumb },
  { img: image3, thumb: image3Thumb },
  { img: image4, thumb: image4Thumb },
  { img: image5, thumb: image5Thumb },
  { img: image6, thumb: image6Thumb },
];

const Gallery = () => {
  const images: ReactImageGalleryItem[] = IMAGES.map((image) => {
    return {
      original: image.img.src,
      thumbnail: image.thumb.src,
      loading: "lazy",
      originalAlt: "image of our work",
      thumbnailAlt: "thumbnail image of our work",
    };
  });
  return <ImageGallery lazyLoad items={images} />;
};

export default Gallery;
