import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="max-w-md w-full text-center">
        <h1 className="text-5xl font-bold text-gray-900">404</h1>
        <h2 className="text-xl font-semibold text-gray-700 mt-2">
          Page not found
        </h2>
        <p className="text-gray-500 mt-3 text-sm">
          The page you are looking for might have been removed, renamed, or is
          temporarily unavailable.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="px-5 py-2.5 bg-black text-white rounded-md text-sm hover:bg-gray-800 transition"
          >
            Go to Homepage
          </Link>
        </div>
        <p className="text-xs text-gray-400 mt-6">
          If you believe this is an error, please contact support.
        </p>
      </div>
    </div>
  );
}
