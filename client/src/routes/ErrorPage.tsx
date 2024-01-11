function ErrorPage() {
  return (
    <div className="min-h-screen row-span-2 col-span-4 flex items-center justify-center bg-gray-100">
      <div className="p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-4">Error</h1>
        <p className="text-gray-600">An error occurred. Please try again.</p>
      </div>
    </div>
  )
}

export default ErrorPage
