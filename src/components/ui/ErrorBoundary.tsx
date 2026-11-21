import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
  resetKey?: string;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidUpdate(prevProps: ErrorBoundaryProps) {
    if (this.state.hasError && prevProps.resetKey !== this.props.resetKey) {
      this.setState({ hasError: false });
    }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Page render error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main id="main" className="flex min-h-screen items-center justify-center bg-canvas px-4 pt-24">
          <div className="max-w-md rounded-3xl border border-line bg-white p-8 text-center shadow-soft">
            <h1 className="font-display text-2xl font-bold text-ink">Something went wrong</h1>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              This section hit an unexpected hiccup while loading. Reloading usually clears it right away.
            </p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="mt-6 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand">
              Reload page
            </button>
          </div>
        </main>
      );
    }
    return this.props.children;
  }
}
