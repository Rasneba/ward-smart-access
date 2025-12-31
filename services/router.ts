// Enhanced routing utilities for SPA
export class Router {
  private listeners: ((path: string) => void)[] = [];
  private currentPath: string;

  constructor() {
    this.currentPath = this.getPathFromUrl();
    this.setupListeners();
  }

  private getPathFromUrl(): string {
    // Handle both hash and history routing
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace(/^#\/?/, '');
      const path = window.location.pathname.replace(/^\//, '');

      // Use hash routing in development/SPA mode, history in production if configured
      return hash || path || '';
    }
    return '';
  }

  private setupListeners() {
    if (typeof window === 'undefined') return;

    // Listen for hash changes (SPA routing)
    window.addEventListener('hashchange', () => {
      const newPath = this.getPathFromUrl();
      if (newPath !== this.currentPath) {
        this.currentPath = newPath;
        this.notifyListeners(newPath);
      }
    });

    // Listen for popstate events (browser back/forward)
    window.addEventListener('popstate', () => {
      const newPath = this.getPathFromUrl();
      if (newPath !== this.currentPath) {
        this.currentPath = newPath;
        this.notifyListeners(newPath);
      }
    });
  }

  private notifyListeners(path: string) {
    this.listeners.forEach(listener => listener(path));
  }

  // Navigate to a new route
  navigate(path: string, replace = false) {
    if (typeof window === 'undefined') return;

    const fullPath = path.startsWith('/') ? path : `/${path}`;

    if (replace) {
      window.history.replaceState(null, '', `#${fullPath}`);
    } else {
      window.history.pushState(null, '', `#${fullPath}`);
    }

    this.currentPath = path;
    this.notifyListeners(path);

    // Scroll to top on navigation
    window.scrollTo(0, 0);
  }

  // Get current path (public method)
  getCurrentPath(): string {
    return this.currentPath;
  }

  // Listen for route changes
  onChange(callback: (path: string) => void) {
    this.listeners.push(callback);
    return () => {
      const index = this.listeners.indexOf(callback);
      if (index > -1) {
        this.listeners.splice(index, 1);
      }
    };
  }

  // Go back in history
  back() {
    if (typeof window !== 'undefined') {
      window.history.back();
    }
  }

  // Go forward in history
  forward() {
    if (typeof window !== 'undefined') {
      window.history.forward();
    }
  }
}

// Create singleton router instance
export const router = new Router();

// Helper functions for common navigation
export const navigateTo = (path: string) => router.navigate(path);
export const replaceTo = (path: string) => router.navigate(path, true);
export const goBack = () => router.back();
export const goForward = () => router.forward();

// Route matching utility
export const matchRoute = (currentPath: string, routePattern: string): boolean => {
  // Simple route matching - can be enhanced with params later
  const normalizedCurrent = currentPath.replace(/^\//, '');
  const normalizedPattern = routePattern.replace(/^\//, '');

  return normalizedCurrent === normalizedPattern;
};