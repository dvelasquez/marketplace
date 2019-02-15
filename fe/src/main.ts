import FSLayout from '@app/views/fs-layout';
import {Router} from '@app/router';
import {IRouterOptions} from '@app/router/IRouterOptions';

const routerOptions: IRouterOptions = {
    mode: 'history',
    root: '/'
};
const router = new Router(routerOptions);
router.add('/hola', ()=>{
    console.log('hola');
})
const layout = new FSLayout();