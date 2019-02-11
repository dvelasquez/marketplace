import {FsComponent} from '../../decorators/fs-component';
import styles from './index.scss';
import '../../components/fs-navigation';
import '../../components/fs-footer';

@FsComponent({
    name: 'fs-layout',
    shadowDOM: 'open',
    styles
})
export class FSLayout extends HTMLElement {
    public getTemplate(): string {
        return `<div class="content">
    <nav class="content_nav">
        <fs-navigation></fs-navigation>
    </nav>
    <main class="content_main">This is the main content</main>
    <footer class="content_footer">
        <fs-footer></fs-footer>
    </footer>
</div>`;
    }
}
