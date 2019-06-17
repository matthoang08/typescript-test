const nodeExternals = require('webpack-node-externals');

module.exports = (env, args) => {

    const base = {
        mode: env.NODE_ENV ? env.NODE_ENV : 'production',
        target: 'node',
        output: {
            path: __dirname + "/dist"
        },
        // Enable sourcemaps for debugging webpack's output.
        devtool: "source-map",
        // devServer: {
        //     hot: true
        // },
        resolve: {
            // Add '.ts' and '.tsx' as resolvable extensions.
            extensions: [".ts", ".tsx", ".js", ".json"],
        },

        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: [
                        // 'ts-loader',
                        'awesome-typescript-loader'
                    ]
                }
            ]
        },

        // When importing a module whose path matches one of the following, just
        // assume a corresponding global variable exists and use that instead.
        // This is important because it allows us to avoid bundling all of our
        // dependencies, which allows browsers to cache those libraries between builds.
        plugins: [
        ]
    }

    // server-specific configuration
    if (env.platform === 'server') {
        console.log('server');
        base.entry = './src/server/index.ts';
        base.target = 'node';
        base.output.filename = 'server.js';
        base.externals = [
            nodeExternals(),
            {
                // "react": "React",
                // "react-dom": "ReactDOM"
            }
        ]
    }

    // client-specific configurations
    if (env.platform === 'web') {
        console.log('web');
        base.entry = './src/clientEntry.tsx';
        base.output.filename = 'client.js';
        base.target = 'web';
    }

    return base;

};