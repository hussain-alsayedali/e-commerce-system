import React from "react";

export default function Footer() {
  const links = [
    {
      id: 1,
      accountLink: "#",
      text: "Twitter (X)",
    },

    {
      id: 2,
      accountLink: "#",
      text: "Instagram",
    },

    {
      id: 3,
      accountLink: "#",
      text: "Faceboook",
    },
  ];

  return (
    <footer className="bg-semiwhite w-full rounded-lg shadow relative mt-12 bottom-0">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            {/* <img src="" className="h-8" alt="Logo" /> */}
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Market
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={link.accountLink}
                  target="_blank"
                  className="hover:underline me-4 md:me-6"
                >
                  {link.text}
                </a>
              </li>
            ))}

            {/* <li>
                        <a href="#" className="hover:underline me-4 md:me-6"></a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6"></a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6"></a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline"></a>
                    </li> */}
          </ul>
        </div>
        <hr className="my-6  sm:mx-auto border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
