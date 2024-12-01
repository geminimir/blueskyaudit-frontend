type ErrorStateProps = {
  message?: string
  retry?: () => void
}

export function ErrorState({ message = 'Something went wrong', retry }: ErrorStateProps) {
  return (
    <div className="text-center py-12">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {message}
      </h3>
      {retry && (
        <button
          onClick={retry}
          className="text-sm text-indigo-600 hover:text-indigo-700"
        >
          Try again
        </button>
      )}
    </div>
  )
} 