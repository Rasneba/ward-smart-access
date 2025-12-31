import { createBrowserHistory, createHashHistory } from 'history';

// Create history instance based on environment
export const history = typeof window !== 'undefined' && window.location.hostname !== 'localhost'
  ? createBrowserHistory() // Use browser history for production (clean URLs)
  : createHashHistory();   // Use hash history for development (works without server config)

// Helper functions for navigation
export const navigateTo = (path: string) => {
  history.push(path);
};

export const replaceTo = (path: string) => {
  history.replace(path);
};

export const goBack = () => {
  history.back();
};

export const goForward = () => {
  history.forward();
};

// Get current path
export const getCurrentPath = () => {
  return history.location.pathname + history.location.search;
};

// Listen to history changes
export const listen = (callback: (location: any) => void) => {
  return history.listen(callback);
};