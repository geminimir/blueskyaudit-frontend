'use client'

import { Component } from 'react'

class ErrorBoundary extends Component<{ children: React.ReactNode }> {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 text-center">
          <h2>Something went wrong. Please refresh the page.</h2>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary 