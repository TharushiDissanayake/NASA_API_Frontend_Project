import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MarsPhotos from './MarsRoverPhotos';

// Mocking the fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ photos: [{ img_src: 'https://example.com/photo.jpg' }] }),
  })
);

describe('MarsPhotos component', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test('renders MarsPhotos component', () => {
    render(<MarsPhotos />);
    expect(screen.getByText('Mars Rover Photos')).toBeInTheDocument();
  });

  test('fetches photos when form is submitted', async () => {
    render(<MarsPhotos />);
    const dateInput = screen.getByLabelText('Select Earth Date:');
    const cameraInput = screen.getByLabelText('Select Camera:');
    const searchButton = screen.getByText('Search');

    fireEvent.change(dateInput, { target: { value: '2024-05-01' } });
    fireEvent.change(cameraInput, { target: { value: 'FHAZ' } });
    fireEvent.click(searchButton);

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith(
        'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2024-05-01&camera=FHAZ&api_key=ajgRpg2TuuJgNs98eK8iZTUICVGpkrDbQVNO92Z8'
      );
    });
  });

  test('displays photos', async () => {
    render(<MarsPhotos />);
    const dateInput = screen.getByLabelText('Select Earth Date:');
    const cameraInput = screen.getByLabelText('Select Camera:');
    const searchButton = screen.getByText('Search');

    fireEvent.change(dateInput, { target: { value: '2024-05-01' } });
    fireEvent.change(cameraInput, { target: { value: 'FHAZ' } });
    fireEvent.click(searchButton);

    await waitFor(() => {
      expect(screen.getByAltText('Mars Rover Photo')).toBeInTheDocument();
    });
  });

  test('displays no photos message when no photos are available', async () => {
    global.fetch.mockResolvedValueOnce({
      json: async () => ({ photos: [] }),
    });

    render(<MarsPhotos />);
    const dateInput = screen.getByLabelText('Select Earth Date:');
    const cameraInput = screen.getByLabelText('Select Camera:');
    const searchButton = screen.getByText('Search');

    fireEvent.change(dateInput, { target: { value: '2024-05-01' } });
    fireEvent.change(cameraInput, { target: { value: 'FHAZ' } });
    fireEvent.click(searchButton);

    await waitFor(() => {
      expect(screen.getByText('No photos available....')).toBeInTheDocument();
    });
  });
});
