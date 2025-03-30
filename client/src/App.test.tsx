import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { App } from './App';

describe('App Component', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('renders the React logo', () => {
    const logo = screen.getByAltText('logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveClass('App-logo');
  });

  test('renders the edit instructions', () => {
    const editText = screen.getByText(/Edit/i);
    expect(editText).toBeInTheDocument();
    expect(editText).toContainHTML('src/App.tsx');
  });

  test('renders the Learn React link with correct attributes', () => {
    const link = screen.getByText(/Learn React/i);
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://reactjs.org');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    expect(link).toHaveClass('App-link');
  });

  test('renders within the correct container structure', () => {
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
    expect(header).toHaveClass('App-header');
    expect(header.parentElement).toHaveClass('App');
  });
});
