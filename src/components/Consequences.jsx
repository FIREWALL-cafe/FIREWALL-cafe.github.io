import React from 'react';

function Consequences() {
  return (
    <section className="flex overflow-hidden flex-col justify-center items-center py-44 w-full text-center bg-red-600 max-md:py-24 max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2a4ae3b1f4cc81c97aca599febbb0294f0d0be8ea6babb9acc5f9f016c48f33?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99"
        alt=""
        className="object-contain aspect-[1.66] w-[58px]"
      />
      <div className="flex flex-col justify-center mt-3.5 w-full max-w-[1080px] max-md:max-w-full">
        <h2 className="text-6xl font-medium text-black leading-[70px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
          The consequences are severe. <br />
          <span className="chinese text-black">后果是可怕的。</span>
        </h2>
        <p className="self-center mt-12 text-2xl leading-9 text-white max-md:mt-10 max-md:max-w-full">
          Lorem ipsum dolor sit amet. Sed inventore corrupti sit rerum animi ut voluptate laborum.
          Qui repellat voluptatum qui enim debitis ut dolore debitis vel dolorem exercitationem.
        </p>
      </div>
    </section>
  );
}

export default Consequences;
