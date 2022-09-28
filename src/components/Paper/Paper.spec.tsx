import { render, screen } from '@testing-library/react';
import { faker } from '@faker-js/faker';

import Paper from '.';

describe('Paper Component', () => {
  describe('when it has no props', () => {
    it('should render it', () => {
      render(
        <Paper
          data-testid="Paper"
        />
      );

      const component = screen.queryByTestId('Paper');
      expect(component).toBeInTheDocument();
      expect(component).toBeVisible();
    });
  });

  describe('when it has component prop', () => {
    it('should render it', () => {
      const role = 'article';

      render(
        <Paper
          component={role}
        />
      );

      const component = screen.queryByRole(role);
      expect(component).toBeInTheDocument();
      expect(component).toBeVisible();
    });
  });

  describe('when it has children prop', () => {
    it('should render it', () => {
      const text = faker.lorem.word();

      render(
        <Paper>
          { text }
        </Paper>
      );

      const children = screen.queryByText(text);
      expect(children).toBeInTheDocument();
      expect(children).toBeVisible();
    });
  });

  describe('when it has className prop', () => {
    it('should render it', () => {
      const role = 'article';
      const className = faker.lorem.word();

      render(
        <Paper
          component={role}
          className={className}
        />
      );

      const component = screen.getByRole(role);
      expect(component).toHaveClass(className);
    });
  });
});
