import Link from 'next/link';



export default function Home() {
  return (
    <div className="min-h-screen flex flex-center items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-900">Apple Watch Studio</h1>
      <p className="mt-4 text-lg text-gray-600">
        Customize your Apple Watch like never before.
      </p>
      <Link href="/customization">
        <button className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700">
          Start Customizing
        </button>
      </Link>
    </div>
  );
}
