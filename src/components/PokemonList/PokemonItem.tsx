import {
  memo,
  forwardRef,
  ComponentPropsWithoutRef
} from 'react';
import clsx from 'clsx';

import './styles.css';

interface PokemonItemPropTypes extends ComponentPropsWithoutRef<'div'> {

}

const PokemonItem = forwardRef<HTMLDivElement, PokemonItemPropTypes>((props, ref) => (
  <div
    ref={ref}
    {...props}
    className={clsx(
      props.className,
      'PokemonList__item'
    )}
  />
));

export default memo(PokemonItem);
