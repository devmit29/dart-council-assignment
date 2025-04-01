import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-4 px-4 mt-auto bg-gray-200 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h6 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              DART Council
            </h6>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Empowering students with comprehensive preparation resources.
            </p>
          </div>
          
          <div className="flex gap-6 flex-wrap justify-center">
            <div>
              <RouterLink
                to="/about"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white mr-4"
              >
                About Us
              </RouterLink>
              <RouterLink
                to="/pricing"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white mr-4"
              >
                Pricing
              </RouterLink>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white mr-4"
              >
                Contact
              </a>
            </div>
            <div>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white mr-4"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                Privacy
              </a>
            </div>
          </div>
        </div>
        
        <p className="text-sm text-gray-600 dark:text-gray-300 text-center mt-4">
          © {new Date().getFullYear()} DART Council. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 