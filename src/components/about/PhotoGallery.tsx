"use client";

import Image from "next/image";
import {
  RenderImageContext,
  RenderImageProps,
  RowsPhotoAlbum,
} from "react-photo-album";
import "react-photo-album/rows.css";

function renderNextImage(
  { alt = "", title, sizes }: RenderImageProps,
  { photo, width, height }: RenderImageContext
) {
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        aspectRatio: `${width} / ${height}`,
      }}
    >
      <Image
        fill
        src={photo}
        alt={alt}
        title={title}
        sizes={sizes}
        placeholder={"blurDataURL" in photo ? "blur" : undefined}
      />
    </div>
  );
}

const PhotoGallery = () => {
  const photos = [
    {
      src: "https://storage.googleapis.com/bts-photos/1.JPG",
      width: 1536,
      height: 2730,
    },
    {
      src: "https://storage.googleapis.com/bts-photos/11.JPG",
      width: 1536,
      height: 2048,
    },
    {
      src: "https://storage.googleapis.com/bts-photos/12.JPG",
      width: 1536,
      height: 2048,
    },
    {
      src: "https://storage.googleapis.com/bts-photos/13.JPG",
      width: 1536,
      height: 2048,
    },
    {
      src: "https://storage.googleapis.com/bts-photos/14.JPG",
      width: 1536,
      height: 2048,
    },
    {
      src: "https://storage.googleapis.com/bts-photos/15.JPG",
      width: 1536,
      height: 2048,
    },
    {
      src: "https://storage.googleapis.com/bts-photos/16.JPG",
      width: 1536,
      height: 2048,
    },
    // {
    //   src: "https://storage.googleapis.com/bts-photos/17.JPG",
    //   width: 1125,
    //   height: 792,
    // },
    // {
    //   src: "https://storage.googleapis.com/bts-photos/18.JPG",
    //   width: 1536,
    //   height: 2048,
    // },
    // {
    //   src: "https://storage.googleapis.com/bts-photos/19.JPG",
    //   width: 1536,
    //   height: 2048,
    // },
    // {
    //   src: "https://storage.googleapis.com/bts-photos/20.JPG",
    //   width: 1536,
    //   height: 2048,
    // },
    // {
    //   src: "https://storage.googleapis.com/bts-photos/21.JPG",
    //   width: 1536,
    //   height: 2048,
    // },
    // {
    //   src: "https://storage.googleapis.com/bts-photos/22.JPG",
    //   width: 1536,
    //   height: 2048,
    // },
    // {
    //   src: "https://storage.googleapis.com/bts-photos/23.JPG",
    //   width: 1536,
    //   height: 2048,
    // },
    // {
    //   src: "https://storage.googleapis.com/bts-photos/24.JPG",
    //   width: 1536,
    //   height: 2048,
    // },
    // {
    //   src: "https://storage.googleapis.com/bts-photos/25.JPG",
    //   width: 1536,
    //   height: 2048,
    // },
    // {
    //   src: "https://storage.googleapis.com/bts-photos/26.JPG",
    //   width: 1536,
    //   height: 2048,
    // },
    // {
    //   src: "https://storage.googleapis.com/bts-photos/27.JPG",
    //   width: 1536,
    //   height: 2048,
    // },
    // {
    //   src: "https://storage.googleapis.com/bts-photos/28.JPG",
    //   width: 1536,
    //   height: 2048,
    // },
    // {
    //   src: "https://storage.googleapis.com/bts-photos/29.JPG",
    //   width: 1536,
    //   height: 2048,
    // },
    // {
    //   src: "https://storage.googleapis.com/bts-photos/30.JPG",
    //   width: 1536,
    //   height: 2048,
    // },
    // {
    //   src: "https://storage.googleapis.com/bts-photos/31.JPG",
    //   width: 1536,
    //   height: 2048,
    // },
    // {
    //   src: "https://storage.googleapis.com/bts-photos/32.JPG",
    //   width: 1536,
    //   height: 2048,
    // },
    // {
    //   src: "https://storage.googleapis.com/bts-photos/33.JPG",
    //   width: 1536,
    //   height: 2048,
    // },
    // {
    //   src: "https://storage.googleapis.com/bts-photos/34.JPG",
    //   width: 1536,
    //   height: 2048,
    // },
    // {
    //   src: "https://storage.googleapis.com/bts-photos/35.JPG",
    //   width: 1536,
    //   height: 2048,
    // },
    // {
    //   src: "https://storage.googleapis.com/bts-photos/36.JPG",
    //   width: 1536,
    //   height: 2048,
    // },
    // {
    //   src: "https://storage.googleapis.com/bts-photos/37.JPG",
    //   width: 1536,
    //   height: 2048,
    // },
    // {
    //   src: "https://storage.googleapis.com/bts-photos/38.JPG",
    //   width: 1536,
    //   height: 2048,
    // },
    // {
    //   src: "https://storage.googleapis.com/bts-photos/39.JPG",
    //   width: 1536,
    //   height: 2048,
    // },
    // {
    //   src: "https://storage.googleapis.com/bts-photos/40.JPG",
    //   width: 1536,
    //   height: 2048,
    // },
    // {
    //   src: "https://storage.googleapis.com/bts-photos/41.JPG",
    //   width: 1536,
    //   height: 2048,
    // },
    // {
    //   src: "https://storage.googleapis.com/bts-photos/42.JPG",
    //   width: 1536,
    //   height: 2048,
    // },
    // {
    //   src: "https://storage.googleapis.com/bts-photos/43.JPG",
    //   width: 1536,
    //   height: 2048,
    // },
    // {
    //   src: "https://storage.googleapis.com/bts-photos/44.JPG",
    //   width: 1536,
    //   height: 2048,
    // },
    // {
    //   src: "https://storage.googleapis.com/bts-photos/45.JPG",
    //   width: 1536,
    //   height: 2048,
    // },
    // {
    //   src: "https://storage.googleapis.com/bts-photos/46.JPG",
    //   width: 1536,
    //   height: 2048,
    // },
    // {
    //   src: "https://storage.googleapis.com/bts-photos/47.JPG",
    //   width: 1536,
    //   height: 2048,
    // },
    // {
    //   src: "https://storage.googleapis.com/bts-photos/48.JPG",
    //   width: 1536,
    //   height: 2048,
    // },
    // {
    //   src: "https://storage.googleapis.com/bts-photos/49.JPG",
    //   width: 1536,
    //   height: 2048,
    // },
    // {
    //   src: "https://storage.googleapis.com/bts-photos/50.JPG",
    //   width: 1536,
    //   height: 2048,
    // },
    // {
    //   src: "https://storage.googleapis.com/bts-photos/51.JPG",
    //   width: 1536,
    //   height: 2048,
    // },
    // {
    //   src: "https://storage.googleapis.com/bts-photos/52.JPG",
    //   width: 1536,
    //   height: 2048,
    // },
    // {
    //   src: "https://storage.googleapis.com/bts-photos/53.JPG",
    //   width: 1536,
    //   height: 2048,
    // },
    // {
    //   src: "https://storage.googleapis.com/bts-photos/54.JPG",
    //   width: 1536,
    //   height: 2048,
    // },
    // {
    //   src: "https://storage.googleapis.com/bts-photos/55.JPG",
    //   width: 1536,
    //   height: 2048,
    // },
    // {
    //   src: "https://storage.googleapis.com/bts-photos/56.JPG",
    //   width: 1536,
    //   height: 2048,
    // },
    // {
    //   src: "https://storage.googleapis.com/bts-photos/57.JPG",
    //   width: 1536,
    //   height: 2048,
    // },
    // {
    //   src: "https://storage.googleapis.com/bts-photos/58.JPG",
    //   width: 1536,
    //   height: 2048,
    // },
    // {
    //   src: "https://storage.googleapis.com/bts-photos/59.JPG",
    //   width: 1536,
    //   height: 2048,
    // },
    // {
    //   src: "https://storage.googleapis.com/bts-photos/60.JPG",
    //   width: 1536,
    //   height: 2048,
    // },
    // {
    //   src: "https://storage.googleapis.com/bts-photos/61.JPG",
    //   width: 2048,
    //   height: 2048,
    // },
    // {
    //   src: "https://storage.googleapis.com/bts-photos/62.JPG",
    //   width: 2048,
    //   height: 2048,
    // },
    // {
    //   src: "https://storage.googleapis.com/bts-photos/63.JPG",
    //   width: 2048,
    //   height: 2048,
    // },
    // {
    //   src: "https://storage.googleapis.com/bts-photos/64.JPG",
    //   width: 2048,
    //   height: 2048,
    // },
    // {
    //   src: "https://storage.googleapis.com/bts-photos/65.JPG",
    //   width: 2048,
    //   height: 2048,
    // },
    // {
    //   src: "https://storage.googleapis.com/bts-photos/66.JPG",
    //   width: 2048,
    //   height: 2048,
    // },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center gap-5">
      <h1 className="text-primary text-4xl font-bold">
        Get a Glimpse Behind the Scenes
      </h1>
      <RowsPhotoAlbum
        photos={photos}
        render={{ image: renderNextImage }}
        padding={10}
        componentsProps={{ wrapper: { className: "bg-white rounded-lg" } }}
      />
    </div>
  );
};
export default PhotoGallery;
