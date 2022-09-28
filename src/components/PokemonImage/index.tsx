import { memo } from 'react';
import clsx from 'clsx';

import { PokemonImagePropTypes, PokemonImageDefaultProps } from './PropTypes';
import './styles.css';

const PokemonImage = ({
  alt,
  src,
  size,
  filter,
  className,
  loading,
  ...props
}: PokemonImagePropTypes) => (
  <figure
    {...props}
    className={clsx(
      'PokemonImage__root',
      { 'PokemonImage__root--filter': filter },
      className
    )}
  >
    <img
      alt={alt}
      src={src}
      width={size}
      height={size}
      loading={loading}
    />
  </figure>
);

PokemonImage.defaultProps = PokemonImageDefaultProps;

export default memo(PokemonImage);
