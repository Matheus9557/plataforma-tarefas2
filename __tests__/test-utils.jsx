// __tests__/test-utils.jsx
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../src/store';

export function renderWithProviders(ui) {
  return render(<Provider store={store}>{ui}</Provider>);
}
