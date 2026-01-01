export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0b1220] text-white">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold tracking-tight">
          STARZ Platform
        </h1>

        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Enterprise operations, automation, and intelligence — unified in one system.
        </p>

        <div className="flex justify-center gap-4 pt-4">
          <button className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 transition">
            Enter Dashboard
          </button>

          <button className="px-6 py-3 rounded-lg border border-gray-600 hover:bg-gray-800 transition">
            Learn More
          </button>
        </div>
      </div>
    </main>
  )
}
