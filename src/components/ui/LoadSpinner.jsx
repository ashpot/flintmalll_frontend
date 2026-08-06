import React from 'react'

const LoadSpinner = () => {
  return (
     <div className="w-full min-h-screen flex items-center justify-center">
        <div className="animate-spin h-12 w-12 border-4 border-gray-300 border-t-secondary rounded-full"></div>
    </div>
  )
}

export default LoadSpinner
