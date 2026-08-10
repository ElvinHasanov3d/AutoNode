// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders AutoNode title', () => {
    render(<App />);
    const titleElement = screen.getByText(/AutoNode/i);
    expect(titleElement).toBeInTheDocument();
});
