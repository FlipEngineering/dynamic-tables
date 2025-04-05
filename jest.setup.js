// Learn more: https://jestjs.io/docs/configuration#setupfilesafterenv-array

// Add any global test setup code here
import '@testing-library/jest-dom';

// Mock Next.js hooks and components
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => ({
    back: jest.fn(),
    forward: jest.fn(),
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    refresh: jest.fn(),
  })),
  useSearchParams: jest.fn(() => new URLSearchParams()),
  usePathname: jest.fn(() => '/'),
}));

// Global console mocks to reduce test noise
const originalConsoleError = console.error;
const originalConsoleWarn = console.warn;
const originalConsoleLog = console.log;

// Filter out React specific warning messages in tests
console.error = (...args) => {
  if (
    typeof args[0] === 'string' &&
    (args[0].includes('Warning: ReactDOM.render') || 
     args[0].includes('Warning: React.createElement') ||
     args[0].includes('Error: Uncaught [Error'))
  ) {
    return;
  }
  originalConsoleError(...args);
};

console.warn = (...args) => {
  if (
    typeof args[0] === 'string' &&
    (args[0].includes('Warning: useLayoutEffect') ||
     args[0].includes('Warning: React does not recognize'))
  ) {
    return;
  }
  originalConsoleWarn(...args);
};

// Disable console.log in tests by default unless DEBUG is true
console.log = (...args) => {
  if (process.env.DEBUG === 'true') {
    originalConsoleLog(...args);
  }
};

// Reset console mocks after all tests
afterAll(() => {
  console.error = originalConsoleError;
  console.warn = originalConsoleWarn;
  console.log = originalConsoleLog;
});