import { Argv } from 'yargs'
import { OtomiDebugger, terminal } from '../common/debug'
import { BasicArguments } from '../common/no-deps'
import { cleanupHandler, otomi, PrepareEnvironmentOptions } from '../common/setup'

/* Steps:
 * 1. Follow all TODO in this file
 * 2. Update src/cmd/index.ts and add:
 *      `export { default as <fileName> } from './<fileName>.ts'
 * 3. Add new command to `src/otomi.ts`
 */

// TODO: extend this interface with the HelmArguments from '../helm.opts.ts' or add the options that you define in the `builder` at the bottom
interface Arguments extends BasicArguments {
  // TODO: Define custom options, if necessary
  TODO: string
}

// TODO: Rename fileName var to name of file / otomi command
const fileName = 'gen-sops'
let debug: OtomiDebugger

/* eslint-disable no-useless-return */
const cleanup = (argv: Arguments): void => {
  if (argv['skip-cleanup']) return
}
/* eslint-enable no-useless-return */

const setup = async (argv: Arguments, options?: PrepareEnvironmentOptions): Promise<void> => {
  if (argv._[0] === fileName) cleanupHandler(() => cleanup(argv))
  debug = terminal(fileName)

  if (options) await otomi.prepareEnvironment(debug, options)
}

// TODO: Rename function name to filename
export const example = async (argv: Arguments, options?: PrepareEnvironmentOptions): Promise<void> => {
  await setup(argv, options)

  // TODO: Write your code here
  console.log(fileName)
  console.log(argv)
}

export const module = {
  command: fileName,
  describe: '',
  builder: (parser: Argv): Argv => parser,

  handler: async (argv: Arguments): Promise<void> => {
    await example(argv, {}) // TODO: Replace with function name
  },
}

export default module
