import React from "react";
import { ImageGridSection } from "./ImageGridStyles";

function ImageGrid() {
  return (
    <ImageGridSection className="py-10 px-6 md:pt-0 pb-20 md:px-12">
      <div className="container mx-auto">
        <div className="grid grid-rows-8 gap-6 md:grid-cols-2 md:grid-rows-3 md:gap-x-3 text-center">
          <div className="image-card p-8 card-1 row-span-3 md:row-start-1 md:row-span-2 md:col-span-2 text-center">
            <div>
              <img></img>
            </div>
            <div className="card-heading-1">
              <h3>Speakers</h3>
            </div>
          </div>
          <div className="image-card card-2 p-8 row-span-2 row-start-4 md:row-start-3 md:col-span-1 md:row-span-1"></div>
          <div className="image-card card-3 p-8 row-span-2 row-start-6 md: row-start-3 md:col-start-2 md:row-span-1"></div>
        </div>
      </div>
    </ImageGridSection>
  );
}

export default ImageGrid;
