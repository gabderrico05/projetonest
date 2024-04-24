import { pathsToModuleNameMapper} from 'ts-jest'
import { CompilerOptions } from './tsconfig.json'

export default { 
    moduleFileExtensions: ['js', 'json', 'ts'],
    moduleNameMapper: pathsToModuleNameMapper(
        CompilerOptions.paths, {
            prefix: '<rootDir>'
        }),
        testRegex: '.*\\..*spec\\.ts$',
        transform: {
                '^.+\\.(t|j)s$': 'ts-jest',
        },
        collectCoverageFrom: ['**/*.(t|j)s'],
coverageDirectory: '../coverage',
testEnviroment: 'node',
}