// eslint-disable-next-line @typescript-eslint/no-var-requires
const { resolve, parse } = require('path')
// eslint-disable-next-line
const pathsFromConfig = require('./tsconfig.paths.json').compilerOptions.paths

const mapPathsFromConfig = (oldPaths) => {
    const splitAlias = (oldAlias) => oldAlias.split('/')[0]
    const newPathsObject = {}

    Object.keys(oldPaths)
        .forEach((key) => {
            const alias = splitAlias(key)
            const handledPath = parse(oldPaths[key][0]).dir

            newPathsObject[alias] = resolve(__dirname, 'src', handledPath)
        })

    return newPathsObject
}

module.exports = {
    webpack: { alias: mapPathsFromConfig(pathsFromConfig) },
}
