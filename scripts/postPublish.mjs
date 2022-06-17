import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

(() => {
    const __rootdir = resolve(__dirname, '../')
    const buildPkgPath = resolve(__rootdir, 'build/package.json')
    const buildPkgString = readFileSync(buildPkgPath).toString('utf-8')
    const {
        version
    } = JSON.parse(buildPkgString)

    const pkgFilePath = resolve(__rootdir, 'package.json')
    const pkgString = readFileSync(pkgFilePath).toString('utf-8')
    const pkg = JSON.parse(pkgString)
    pkg.version = version
    writeFileSync(
        pkgFilePath,
        JSON.stringify(pkg, null, 2),
        {
            encoding: 'utf-8',
        }
    )
})()