import Link from 'next/link'

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-4">The page you are looking for doesn&apos;t exist or has been moved.</p>
      <Link href="/" className="text-blue-500 hover:underline">
        Go back to home
      </Link>
    </div>
  )
}