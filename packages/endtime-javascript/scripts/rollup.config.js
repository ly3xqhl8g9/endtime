// #region imports
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import sourceMaps from 'rollup-plugin-sourcemaps';
import typescript from 'rollup-plugin-typescript2';
// #endregion imports



// #region exports
export default {
    input: `source/index.ts`,
    output: [
        {
            file: './distribution/index.js',
            format: 'cjs',
            sourcemap: true,
        },
    ],
    external: [
    ],
    watch: {
        include: 'source/**',
    },
    plugins: [
        commonjs(),
        resolve({
            preferBuiltins: true,
        }),
        sourceMaps(),
        typescript({
            file: '../tsconfig.json',
            useTsconfigDeclarationDir: true,
        }),
    ],
};
// #endregion exports
