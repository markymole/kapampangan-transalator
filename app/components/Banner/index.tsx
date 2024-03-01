import React from "react";

const Banner = () => {
  return (
    <div className="">
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <p className="animate w-fit rounded-full bg-accent px-4 py-1.5 font-karla text-sm font-semibold text-white md:text-base dark:bg-tertiary dark:text-white">
            Center for kapampangan studies
          </p>
        </div>
        <h1 className="text-asphalt animate font-oswald text-4xl font-bold uppercase md:text-5xl dark:text-white">
          Kapampangan Translator
        </h1>
        <p className="animate font-karla text-sm text-gray-700 md:text-base dark:text-gray-400">
          This is an{" "}
          <strong className="animate text-black dark:text-white">
            interactive
          </strong>{" "}
          translator that welcomes all your suggested translations and additions
          to the existing lists of English and Filipino word entries and their
          corresponding Kapampangan translations.
        </p>
      </div>
    </div>
  );
};

export default Banner;
