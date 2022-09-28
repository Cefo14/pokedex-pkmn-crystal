import { render, screen } from '@testing-library/react';
import { faker } from '@faker-js/faker';

import PokemonImage from '.';

describe('PokemonImage Component', () => {
  describe('when it has no props', () => {
    it('should render it', () => {
      render(
        <PokemonImage />
      );

      const image = screen.queryByRole('img');
      expect(image).toBeInTheDocument();
      expect(image).toBeVisible();
    });
  });

  describe('when it has alt prop', () => {
    it('should render it', () => {
      const alt = faker.lorem.word();

      render(
        <PokemonImage
          alt={alt}
        />
      );

      const image = screen.getByRole('img');
      expect(image).toHaveAttribute('alt', alt);
    });
  });

  describe('when it has src prop', () => {
    it('should render it', () => {
      const src = faker.image.avatar();

      render(
        <PokemonImage
          src={src}
        />
      );

      const image = screen.getByRole('img');
      expect(image).toHaveAttribute('src', src);
    });
  });

  describe('when it has size prop', () => {
    it('should render it with width and height', () => {
      const size = faker.datatype.number({ min: 1, max: 100 });

      render(
        <PokemonImage
          size={size}
        />
      );

      const image = screen.getByRole('img');
      expect(image).toHaveAttribute('width', size.toString());
      expect(image).toHaveAttribute('height', size.toString());
    });
  });

  describe('when it has filter prop', () => {
    it('should render the filter className', () => {
      render(
        <PokemonImage
          filter
        />
      );

      const figure = screen.getByRole('figure');
      expect(figure).toHaveClass('PokemonImage__root--filter');
    });
  });
});
