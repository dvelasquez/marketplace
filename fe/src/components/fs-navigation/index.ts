import { FsComponent } from '../../decorators/fs-component';
import styles from './index.scss';

@FsComponent({
    name: 'fs-navigation',
    shadowDOM: 'open',
    styles
})
export class FSNavigation extends HTMLElement{
    public getTemplate(): string {
        // language=HTML
        return `<div class="fs-navigation">
    <div class="fs-navigation_section-left">
        <button>ICON</button>
        <div>logo</div>
    </div>
    <div class="fs-navigation_section-right">        
        <div>Buscar</div>
        <div>Iniciar Sesion</div>
        <div>Publicar</div>
    </div>
</div>`;
    }
}