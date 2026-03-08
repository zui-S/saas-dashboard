'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-orange-50 to-white">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-orange-500 mb-4">Oops!</h2>
        <p className="text-gray-600 mb-6">Something went wrong</p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
        >
          Try again
        </button>
      </div>
    </div>
  )
}
