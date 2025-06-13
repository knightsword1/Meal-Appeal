import { LOGO_URL } from "../utils/constants";

const Footer = () => {
  return (
    <>
      <footer className="rounded-lg shadow-sm bg-gray-900 m-10 mt-20">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <img src={LOGO_URL} className="w-30 p-4 rounded-full" />

            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#" class="hover:underline me-4 md:me-6">
                  Download the App
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline me-4 md:me-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline me-4 md:me-6">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025{" "}
            <a href="#" class="hover:underline">
              Meal Appeal™
            </a>
            <span className="mx-4">Made with 💖in India.</span>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
