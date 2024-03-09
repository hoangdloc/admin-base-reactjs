import { render, screen } from '@testing-library/react';
import React from 'react';

import { AppIcon, type TIconMap } from './AppIcon';

describe('AppIcon', () => {
  it('renders without crashing', () => {
    render(<AppIcon name="reload" />);
    const svgElement = screen.getByRole('img');
    expect(svgElement).toBeInTheDocument();
  });

  it('applies the correct color', () => {
    render(
      <AppIcon
        color="red"
        name="reload"
      />,
    );
    const svgElement = screen.getByRole('img');
    expect(svgElement).toHaveAttribute('color', 'red');
  });

  it('applies the correct size', () => {
    render(
      <AppIcon
        name="reload"
        size="20"
      />,
    );
    const svgElement = screen.getByRole('img');
    expect(svgElement).toHaveAttribute('width', '20');
    expect(svgElement).toHaveAttribute('height', '20');
  });

  it('renders the correct icon', () => {
    const icon: TIconMap = 'reload';
    render(<AppIcon name={icon} />);
    const svgElement = screen.getByRole('img');
    expect(svgElement).toHaveAttribute('data-icon', icon);
  });
});
