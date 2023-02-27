import React from "react";
import Link from "next/Link";

const HeroBanner = ({ heroBanner }) => {
  return (
    <section className="py-24 px-10 flex  items-center min-h-min">
      <div class="container mx-auto pl-20 flex  mx-auto bg-gradient-to-r from-amber-500 to-pink-500 rounded-lg shadow-lg">
        <div className="mx-auto w-2/5 py-24 pr-10">
          <div className="text-left">
            <h1 className="mt-3 text-[4.5rem] font-bold leading-[4rem] tracking-tight text-white">
              {heroBanner.largeText1}
            </h1>
            <p className="mt-3 text-lg leading-relaxed">
              Specify helps you unify your brand identity by collecting, storing
              and distributing design tokens and assets — automatically.
            </p>
          </div>

          <div className="mt-6 flex gap-4">
            <Link
              href="#"
              className="transform rounded-md bg-indigo-600/95 px-5 py-3 font-medium text-white transition-colors hover:bg-indigo-700"
            >
              {heroBanner.buttonText}
            </Link>
          </div>
        </div>
        <div className="mx-auto w-8/12 hero-image"></div>
      </div>
    </section>
  );
};

export default HeroBanner;
