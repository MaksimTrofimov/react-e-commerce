export function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-6 mt-7">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-center sm:text-left">
          <h2 className="text-lg font-semibold">E-Commerce</h2>
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex space-x-4">
          <a href="#" aria-label="Facebook" className="hover:text-blue-400">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-blue-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-blue-400">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
