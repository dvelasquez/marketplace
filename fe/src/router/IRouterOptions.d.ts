import {IRoute} from "./IRoute";

export interface IRouterOptions {
    router?: IRoute[];
    mode: string | null;
    root: string;
}