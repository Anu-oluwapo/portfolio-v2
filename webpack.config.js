import CopyPlugin from "copy-webpack-plugin";

export const plugins = [
    new CopyPlugin({
        patterns: [
            { from: "source", to: "dest" },
            "./src",
            
        ],
    }),
];