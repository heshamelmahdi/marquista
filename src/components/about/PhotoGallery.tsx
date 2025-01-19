"use client";

import { useState } from "react";
import { ColumnsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import "react-photo-album/columns.css";
import { photos } from "@/utils/content/bts-photos";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

const PhotoGallery = () => {
  // Pagination setup
  const photosPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the total number of pages
  const totalPages = Math.ceil(photos.length / photosPerPage);

  // Get the photos for the current page
  const paginatedPhotos = photos.slice(
    (currentPage - 1) * photosPerPage,
    currentPage * photosPerPage
  );

  // Function to handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="w-full h-full flex flex-col items-center gap-5">
      <h1 className="text-primary text-4xl font-bold tracking-tighter">
        Get a Glimpse Behind the Scenes
      </h1>
      <ColumnsPhotoAlbum
        photos={paginatedPhotos}
        padding={10}
        componentsProps={{
          wrapper: { className: "bg-white rounded-lg " },
          image: { className: "rounded-lg " },
        }}
        breakpoints={[500, 900, 1200, 1500]}
        columns={(width) => {
          if (width < 500) return 2; // 1 column for small screens
          if (width < 900) return 3; // 2 columns for medium screens
          if (width < 1200) return 4; // 3 columns for large screens
          if (width < 1500) return 5; // 3 columns for large screens
          return 6;
        }}
      />

      {/* Pagination Controls */}
      <div className="flex gap-2 mt-5">
        <button
          className="px-4 py-2 text-white bg-primary rounded disabled:opacity-50"
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          <IconArrowLeft className="h-5 w-5 text-white group-hover/button:rotate-12 transition-transform duration-300" />
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`hidden md:block px-4 py-2 rounded ${
              currentPage === index + 1
                ? "bg-primary text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="px-4 py-2 text-white bg-primary rounded disabled:opacity-50"
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          <IconArrowRight className="h-5 w-5 text-white group-hover/button:-rotate-12 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
};
export default PhotoGallery;
