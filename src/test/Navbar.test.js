import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

describe('Navbar', () => {
  test('renders logo and app name', () => {
    act(() => {
      render(
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>,
      );
    });
    const logo = screen.getByAltText('logo');
    const appName = screen.getByText('Space Travelers’ Hub');
    expect(logo).toBeInTheDocument();
    expect(appName).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    act(() => {
      render(
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>,
      );
    });
    const rocketsLink = screen.getByText('Rockets');
    const missionsLink = screen.getByText('Missions');
    const profileLink = screen.getByText('My Profile');
    expect(rocketsLink).toBeInTheDocument();
    expect(missionsLink).toBeInTheDocument();
    expect(profileLink).toBeInTheDocument();
  });

  test('activates the current link', () => {
    act(() => {
      render(
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>,
      );
    });
    const rocketsLink = screen.getByText('Rockets');
    const missionsLink = screen.getByText('Missions');
    const profileLink = screen.getByText('My Profile');

    expect(rocketsLink).toHaveAttribute('href', '/');
    expect(missionsLink).toHaveAttribute('href', '/missions');
    expect(profileLink).toHaveAttribute('href', '/profile');

    expect(rocketsLink).toHaveClass('active');
    expect(missionsLink).not.toHaveClass('active');
    expect(profileLink).not.toHaveClass('active');
  });
});
