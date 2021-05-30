import type { Arguments, CommandBuilder } from 'yargs';

import type { BaseOptions } from '../../shared';

export type Options = BaseOptions & {
  vault: string | undefined;
};

export type Builder = CommandBuilder<{}, Options>;

export type Handler = (argv: Arguments<Options>) => PromiseLike<void>;
