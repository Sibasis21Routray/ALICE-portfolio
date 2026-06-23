import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 text-center">
      <h1 className="text-8xl font-black text-[#0c71c3]">404</h1>

      <h2 className="mt-4 text-3xl font-bold text-gray-900">
        Page Not Found
      </h2>

      <p className="mt-3 text-gray-600 max-w-md">
        The page you are looking for doesn't exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-8 px-6 py-3 bg-[#0c71c3] text-white rounded-full font-semibold hover:bg-[#0a5fa3] transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}