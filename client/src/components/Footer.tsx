import React from "react"; // Import React to use JSX and React features

// Define and export the Footer component
export default function Footer() {
  // Array of links to be displayed in the footer
  const links = [
    {
      id: 1,
      accountLink: "#", // Placeholder URL
      text: "Twitter (X)", // Display text for the link
    },
    {
      id: 2,
      accountLink: "#", // Placeholder URL
      text: "Instagram", // Display text for the link
    },
    {
      id: 3,
      accountLink: "#", // Placeholder URL
      text: "Faceboook", // Display text for the link (note: typo in "Faceboook")
    },
  ];

  return (
    <footer className="bg-semiwhite w-full rounded-lg shadow relative mt-12 bottom-0"> {/* Footer container */}
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8"> {/* Inner container for responsive layout */}
        <div className="sm:flex sm:items-center sm:justify-between"> {/* Flexbox for layout adjustments */}
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            {/* Placeholder for logo */}
            {/* <img src="" className="h-8" alt="Logo" /> */}
            <span className="self-center text-2xl font-semibold whitespace-nowrap"> {/* Site name */}
              Market
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400"> {/* List of social links */}
            {links.map((link) => (
              <li key={link.id}> {/* Each link item */}
                <a
                  href={link.accountLink} // Link URL
                  target="_blank" // Open link in new tab
                  className="hover:underline me-4 md:me-6"
                >
                  {link.text} {/* Display text for the link */}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" /> {/* Divider line */}
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400"> {/* Footer text */}
          © 2023. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

