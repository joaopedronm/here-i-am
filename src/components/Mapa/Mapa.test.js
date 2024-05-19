// Mapa.test.js
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import MapContainer from './Mapa';

// Mock the Google Maps JavaScript API
jest.mock('@react-google-maps/api', () => ({
  useJsApiLoader: () => ({
    isLoaded: true,
    loadError: null,
  }),
  GoogleMap: ({ children }) => <div>{children}</div>,
  Marker: () => <div>Marker</div>,
}));

describe('MapContainer', () => {
  beforeAll(() => {
    // Mocking the geolocation API
    global.navigator.geolocation = {
      getCurrentPosition: jest.fn().mockImplementationOnce((success) =>
        success({
          coords: {
            latitude: 50,
            longitude: 50,
          },
        })
      ),
    };
  });

  test('renders map with user location marker', async () => {
    render(<MapContainer />);

    // Wait for the marker to appear on the map
    await waitFor(() => {
      expect(screen.getByText('Marker')).toBeInTheDocument();
    });
  });
});
