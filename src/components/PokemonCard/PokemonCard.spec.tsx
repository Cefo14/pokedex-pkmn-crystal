import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { PokemonMockFactory } from '../../test/mocks/PokemonMockFactory';

import PokemonCard from '.';
import { PokemonCardProps } from './PropTypes';

describe('PokemonCard Component', () => {
  const pokemonMockFactory = new PokemonMockFactory();
  let props: Required<PokemonCardProps>;

  beforeEach(() => {
    const pokemon = pokemonMockFactory.random();

    props = {
      id: pokemon.id,
      name: pokemon.name,
      frontSprite: pokemon.sprite.front,
      backSprite: pokemon.sprite.back,
      genus: pokemon.genus,
      description: pokemon.flavor_text,
      types: pokemon.types,
      weight: pokemon.weight,
      height: pokemon.height,
      stats: pokemon.stats,
      isFlipped: false,
      onClick: jest.fn()
    };
  });

  describe('when it has no props', () => {
    it('should render it', () => {
      render(
        <PokemonCard />
      );

      const article = screen.queryByRole('article', { name: /pokemon card/ });
      expect(article).toBeInTheDocument();

      const button = screen.queryByRole('button', { name: 'flip-card' });
      expect(button).toBeInTheDocument();
    });
  });

  describe('when has props', () => {
    it('should render it', () => {
      render(
        <PokemonCard
          {...props}
        />
      );

      const article = screen.queryByRole('article');
      expect(article).toBeInTheDocument();

      const button = screen.queryByRole('button', { name: 'flip-card' });
      expect(button).toBeInTheDocument();

      expect(article).toContainElement(button);
    });
  });

  describe('when is front card', () => {
    it('should render it', () => {
      render(
        <PokemonCard
          {...props}
        />
      );

      const {
        id,
        name,
        frontSprite,
        types,
        weight,
        height
      } = props;

      const frontSection = screen.queryByLabelText('pokemon card-front');
      expect(frontSection).toBeInTheDocument();

      const titleSection = screen.queryByLabelText('pokemon front name');
      expect(titleSection).toBeInTheDocument();
      expect(titleSection).toHaveTextContent(id.toString());
      expect(titleSection).toHaveTextContent(name.toString());

      const spriteSection = screen.queryByLabelText('pokemon front sprite');
      expect(spriteSection).toBeInTheDocument();

      const sprite = screen.queryByRole('img', { name: `${name} front` });
      expect(sprite).toHaveAttribute('src', frontSprite);

      const typeDescriptionSection = screen.queryByLabelText('pokemon type description');
      expect(typeDescriptionSection).toBeInTheDocument();
      expect(typeDescriptionSection).toHaveTextContent((weight / 10).toFixed(2)); // ? validate it?
      expect(typeDescriptionSection).toHaveTextContent((height / 10).toFixed(2)); // ? validate it?
      types.forEach((type) => {
        expect(typeDescriptionSection).toHaveTextContent(new RegExp(type, 'ig'));
      });

      expect(spriteSection).toContainElement(sprite);

      expect(frontSection).toContainElement(titleSection);
      expect(frontSection).toContainElement(spriteSection);
      expect(frontSection).toContainElement(spriteSection);
      expect(frontSection).toContainElement(typeDescriptionSection);
    });
  });

  describe('when is back card', () => {
    it('should render it', () => {
      render(
        <PokemonCard
          {...props}
        />
      );
      const {
        id,
        name,
        backSprite,
        description
      } = props;

      const backSection = screen.queryByLabelText('pokemon card-back');
      expect(backSection).toBeInTheDocument();

      const titleSection = screen.queryByLabelText('pokemon back name');
      expect(titleSection).toBeInTheDocument();
      expect(titleSection).toHaveTextContent(id.toString());
      expect(titleSection).toHaveTextContent(name.toString());

      const spriteSection = screen.queryByLabelText('pokemon back sprite');
      expect(spriteSection).toBeInTheDocument();

      const sprite = screen.queryByRole('img', { name: `${name} back` });
      expect(sprite).toHaveAttribute('src', backSprite);

      const descriptionSection = screen.queryByLabelText('pokemon description');
      expect(descriptionSection).toBeInTheDocument();
      expect(descriptionSection).toHaveTextContent(description);

      expect(spriteSection).toContainElement(sprite);

      expect(backSection).toContainElement(titleSection);
      expect(backSection).toContainElement(spriteSection);
      expect(backSection).toContainElement(spriteSection);
      expect(backSection).toContainElement(descriptionSection);
    });
  });

  describe('when user click a card', () => {
    it('should call the onClick event', () => {
      render(
        <PokemonCard
          {...props}
        />
      );

      const button = screen.getByRole('button', { name: 'flip-card' });
      userEvent.click(button);
      expect(props.onClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('when has isFlipped prop', () => {
    it('should render flipped className', () => {
      render(
        <PokemonCard
          {...props}
          isFlipped
        />
      );

      const article = screen.getByRole('article');
      expect(article).toHaveClass('PokemonCard__card--flipped');
    });
  });
});
