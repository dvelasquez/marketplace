import {IRoute} from '@app/router/IRoute';
import {IRouterOptions} from '@app/router/IRouterOptions';
import {IRouter} from '@app/router/IRouter';

export class Router implements IRouter {
    routes: IRoute[] = [];
    mode: string | null = null;
    root: string = '/';

    constructor(options: IRouterOptions) {
        this.config(options);
    }


    add(url: string, handler: Function): this {
        if (typeof url == 'function') {
            handler = url;
            url = '';
        }
        this.routes.push({url, handler});
        return this;
    }

    check(f: Function): this {
        const fragment = f || this.getFragment();
        for (let i = 0; i < this.routes.length; i++) {
            const match = fragment.match(this.routes[i].url);
            if (match) {
                match.shift();
                this.routes[i].handler.apply({}, match);
                return this;
            }
        }
        return this;
    }

    clearSlashes(path: string): string {
        return path.toString().replace(/\/$/, '').replace(/^\//, '');
    }

    config(options: IRouterOptions): this {
        this.mode = options && options.mode && options.mode == 'history' && !!(history.pushState) ? 'history' : 'hash';
        this.root = options && options.root ? '/' + this.clearSlashes(options.root) + '/' : '/';
        return this;
    }

    flush(): this {
        this.routes = [];
        this.mode = null;
        this.root = '/';
        return this;
    }

    getFragment(): string {
        let fragment = '';
        if (this.mode === 'history') {
            fragment = this.clearSlashes(decodeURI(location.pathname + location.search));
            fragment = fragment.replace(/\?(.*)$/, '');
            fragment = this.root != '/' ? fragment.replace(this.root, '') : fragment;
        } else {
            var match = window.location.href.match(/$(.*)$/);
            fragment = match ? match[1] : '';
        }
        return this.clearSlashes(fragment);
    }

    listen(): this {
        const self = this;
        let current = self.getFragment();
        let fn = function () {
            if (current !== self.getFragment()) {
                current = self.getFragment();
                self.check(current);
            }
        };
        clearInterval(this.interval);
        this.interval = setInterval(fn, 50);
        return this;
    }

    navigate(path: string): this {
        path = path ? path : '';
        if (this.mode === 'history') {
            history.pushState(null, null, this.root + this.clearSlashes(path));
        } else {
            window.location.href = window.location.href.replace(/#(.*)$/, '') + '#' + path;
        }
        return this;
    }

    remove(param: string): this {
        for (let i = 0, r; i < this.routes.length, r = this.routes[i]; i++) {
            if (r.handler === param || r.url.toString() === param.toString()) {
                this.routes.slice(i, 1);
                return this;
            }
        }
        return this;
    }
}
