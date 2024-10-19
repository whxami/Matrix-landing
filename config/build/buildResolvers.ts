import {Configuration} from "webpack";
import {BuildOptions} from "./types/types";

export function buildResolvers(options: BuildOptions): Configuration['resolve'] {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        alias:{
            '@': options.paths.src,
            '@shared': options.paths.shared,
            '@pages': options.paths.pages
        }
    }
}