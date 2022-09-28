import { render, screen } from '@testing-library/react';
import { faker } from '@faker-js/faker';

import PokeballIcon from '.';

describe('PokeballIcon Component', () => {
  describe('when it has no props', () => {
    it('should render it', () => {
      render(
        <PokeballIcon
          data-testid="PokeballIcon"
        />
      );

      const component = screen.queryByTestId('PokeballIcon');
      expect(component).toBeInTheDocument();
      expect(component).toBeVisible();
    });
  });

  describe('when it has size prop', () => {
    it('should render it', () => {
      const size = faker.datatype.number({ min: 1, max: 99 });

      render(
        <PokeballIcon
          data-testid="PokeballIcon"
          size={size}
        />
      );

      const component = screen.getByTestId('PokeballIcon');
      expect(component).toHaveAttribute('width', size.toString());
      expect(component).toHaveAttribute('height', size.toString());
    });
  });
});
