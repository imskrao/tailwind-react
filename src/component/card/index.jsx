import React from "react";

const img =
  "https://pbs.twimg.com/profile_images/1406874211814019076/RlB6yyDb_400x400.jpg";

export default function Card() {
  return (
    <React.Fragment>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48"
              alt=""
              src={img}
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Santosh Kumar Rao
            </div>
            <a
              href="https://imskrao.github.io/"
              target="_blank"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Front-End Developer
            </a>
            <p className="mt-2 text-gray-500">
              Not your average front-end developer, front end developer who
              focuses on writing clean, elegant and efficient code.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
