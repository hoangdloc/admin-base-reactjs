import { render } from '@testing-library/react';
import React from 'react';

import { AppErrorBoundary } from './AppErrorBoundary';

describe('AppErrorBoundary', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <AppErrorBoundary>
        <div>Test child</div>
      </AppErrorBoundary>,
    );

    expect(container).toBeTruthy();
  });
});
