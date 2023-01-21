import React from "react";

function Button() {
  return (
    <div>
      <a
        className="inline-flex items-center rounded border border-[#0d9488] bg-[#0d9488] px-8 py-3 text-white hover:bg-transparent hover:text-[#0d9488] focus:outline-none focus:ring active:text-[#0d9488]"
      >
        <span className="text-sm font-medium"> Check your loan eligibility </span>

        <svg
          className="ml-3 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </a>
    </div>
  );
}

export default Button;
