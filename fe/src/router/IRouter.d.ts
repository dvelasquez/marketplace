import {IRoute} from "./IRoute";
import {IRouterOptions} from "./IRouterOptions";

export interface IRouter {
    routes: IRoute[];
    mode: string | null;
    root: string;

    config(options: IRouterOptions): this;

    getFragment(): string;

    clearSlashes(path: string): string;

    add(url:string, handler:Function): this;

    remove(param: string): this;

    flush(): this;

    check(f: Function): this;

    listen(): this;

    navigate(path: string): this;
}