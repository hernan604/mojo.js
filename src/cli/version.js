import {version} from '../mojo.js';
import {tablify} from '../util.js';

export default async function versionCommand () {
  const table = [['node', `(${process.version}, ${process.platform})`], ['mojo.js', `(${version})`]];
  process.stdout.write(tablify(table));
}

versionCommand.description = 'Show version';
versionCommand.usage = `Usage: APPLICATION version [OPTIONS]

  node index.js version

Options:
  -h, --help   Show this summary of available options
`;
