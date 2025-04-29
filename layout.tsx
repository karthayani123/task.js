import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="p-8 text-center">
        <h1 className="text-4xl font-bold text-indigo-700 mb-4">Welcome to the Charminar</h1>
        <p className="text-lg text-gray-700">
          Explore the majestic beauty and rich history of Hyderabad's most iconic monument.
        </p>
      </main>
    </>
  );
}

