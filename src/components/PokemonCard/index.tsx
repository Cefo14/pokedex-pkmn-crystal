import { memo, useCallback } from 'react';
import clsx from 'clsx';

import Paper from '../Paper';
import PokemonImage from '../PokemonImage';

import { ButtonMouseEventHandler } from '../../types/component/ButtonMouseEventHandler';

import { PokemonCardPropTypes, PokemonCardDefaultProps } from './PropTypes';
import './styles.css';

const capitalizeWord = (word = '') => {
  const fistLetter = word.charAt(0);
  const capitalizedWord = `${fistLetter.toUpperCase()}${word.slice(1)}`;
  return capitalizedWord;
};

const normalizeId = (id = 0) => (
  id.toString().padStart(3, '0')
);

const sanatizeDescription = (description = '') => {
  const replace = /[^a-zA-Z0-9]/g;
  const replaceWith = ' ';
  return description.replace(replace, replaceWith);
};

const decimetresToMeters = (value = 0) => value / 10;

const hectogramsToKilograms = (value = 0) => value / 10;

const PokemonCard = ({
  id,
  name,
  frontSprite,
  backSprite,
  genus,
  description,
  types,
  weight,
  height,
  isFlipped,
  onClick
}: PokemonCardPropTypes) => {
  const handleOnClick = useCallback<ButtonMouseEventHandler>((event) => {
    onClick(event, id);
  }, [onClick, id]);

  return (
    <article
      aria-label={`pokemon card ${name}`}
      className={clsx(
        'PokemonCard__card',
        { 'PokemonCard__card--flipped': isFlipped }
      )}
    >
      <aside
        aria-label="pokemon card-front"
        className="PokemonCard__card-front"
      >
        <Paper
          component="header"
          aria-label="pokemon front name"
          className="PokemonCard__title"
        >
          <span>
            {normalizeId(id)}
          </span>
          <span>
            {capitalizeWord(name)}
          </span>
        </Paper>

        <Paper
          component="section"
          aria-label="pokemon front sprite"
          className="PokemonCard__image"
        >
          <PokemonImage
            aria-label="front sprite image"
            alt={`${name} front`}
            src={frontSprite}
            size={152}
          />
        </Paper>

        <Paper
          component="section"
          aria-label="pokemon type description"
          className="PokemonCard__description"
        >
          <p className="PokemonCard__type-container">
            {
              types?.map((type) => (
                <span
                  key={`${id}-${type}`}
                  className={clsx(
                    'PokemonCard__type',
                    `PokemonCard__type--${type}`
                  )}
                >
                  {capitalizeWord(type)}
                </span>
              ))
            }
          </p>
          <p>
            {genus}
          </p>
          <p>
            {`HT ${decimetresToMeters(height).toFixed(2)} m`}
          </p>
          <p>
            {`WT ${hectogramsToKilograms(weight).toFixed(2)} kg`}
          </p>
        </Paper>
      </aside>

      <aside
        aria-label="pokemon card-back"
        className="PokemonCard__card-back"
      >
        <Paper
          component="header"
          aria-label="pokemon back name"
          className="PokemonCard__title"
        >
          <span>
            {normalizeId(id)}
          </span>
          <span>
            {capitalizeWord(name)}
          </span>
        </Paper>

        <Paper
          component="section"
          aria-label="pokemon back sprite"
          className="PokemonCard__image"
        >
          <PokemonImage
            aria-label="back sprite image"
            alt={`${name} back`}
            src={backSprite}
            size={152}
            loading="lazy"
          />
        </Paper>

        <Paper
          component="section"
          aria-label="pokemon description"
          className="PokemonCard__description PokemonCard__text"
        >
          {sanatizeDescription(description)}
        </Paper>
      </aside>

      <button
        type="button"
        onClick={handleOnClick}
        aria-label="flip-card"
        className="PokemonCard__flip-card-button"
      />
    </article>
  );
};

PokemonCard.defaultProps = PokemonCardDefaultProps;

export default memo(PokemonCard);
