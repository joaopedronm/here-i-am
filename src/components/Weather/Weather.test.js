// Weather.test.jsx

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Weather from './Weather';
import axios from 'axios';
import '@testing-library/jest-dom';

jest.mock('axios');

// Mocked data
const mockWeatherData = {
  data: {
    name: 'Test City',
    weather: [
      {
        description: 'clear sky',
      },
    ],
    main: {
      temp: 300.15,
      humidity: 40,
    },
    wind: {
      speed: 5,
    },
  },
};

describe('Weather Component', () => {
  beforeEach(() => {
    axios.get.mockResolvedValue(mockWeatherData);
  });

  test('renders weather data correctly', async () => {
    const position = { lat: 40.7128, lng: -74.0060 }; // Mocked position

    render(<Weather position={position} />);

    // Wait for the weather data to be fetched and rendered to get values
    await waitFor(() => {
      expect(screen.getByText(/Region: Test City/i)).toBeInTheDocument();
      expect(screen.getByText(/CLEAR SKY/i)).toBeInTheDocument();
      expect(screen.getByText(/27.0°C/i)).toBeInTheDocument();
      expect(screen.getByText(/40%/i)).toBeInTheDocument();
      expect(screen.getByText(/5km\/h/i)).toBeInTheDocument();
    });
  });
});
