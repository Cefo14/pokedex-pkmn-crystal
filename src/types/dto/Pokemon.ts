import { z } from 'zod';

export const PokemonSchema = z.object({
  id: z.number(),
  flavor_text: z.string(),
  genus: z.string(),
  height: z.number(),
  name: z.string(),
  own: z.number(),
  sprite: z.object({
    front: z.string(),
    back: z.string()
  }),
  seen: z.number(),
  stats: z.array(
    z.object({
      name: z.string(),
      value: z.number()
    })
  ),
  types: z.array(z.string()),
  weight: z.number()
});

export type Pokemon = z.infer<typeof PokemonSchema>;
