import React from "react";

function Navigation() {
  return (
    <nav className="flex overflow-hidden gap-10 justify-center items-center px-8 py-5 w-full bg-white min-h-[80px] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap flex-1 shrink gap-10 justify-between items-center self-stretch my-auto w-full max-w-screen-xl basis-0 min-w-[240px] max-md:max-w-full">
        <div className="flex gap-3 items-center self-stretch my-auto">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3aa4115e2b2527dc5b087cff07b37c396850b890edd0752774e9f6819ca97b01?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99"
            alt="Logo"
            className="object-contain shrink-0 self-stretch my-auto w-11 aspect-square"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d9925a3de5ba08eac92028f93ce79e2c96b85b17410af0d97af625f19cffc52?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99"
            alt="Brand name"
            className="object-contain shrink-0 self-stretch my-auto aspect-[2.9] w-[110px]"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
