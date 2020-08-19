/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Nota: o renderizador de teste deve ser exigido após o react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});
