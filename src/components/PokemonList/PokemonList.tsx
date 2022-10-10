import {
  memo,
  forwardRef,
  ComponentPropsWithoutRef
} from 'react';
import clsx from 'clsx';

import './styles.css';

type PokemonListPropTypes = ComponentPropsWithoutRef<'div'>;

const PokemonList = forwardRef<HTMLDivElement, PokemonListPropTypes>((props, ref) => (
  <div
    ref={ref}
    {...props}
    className={clsx(
      props.className,
      'PokemonList__list'
    )}
  />
));

export default memo(PokemonList);
