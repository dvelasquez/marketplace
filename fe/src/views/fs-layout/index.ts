import {FsComponent} from '@app/decorators/fs-component';
import styles from './index.scss';
import '@app/components/fs-navigation';
import '@app/components/fs-footer';

@FsComponent({
    name: 'fs-layout',
    shadowDOM: 'open',
    styles
})
export default class FSLayout extends HTMLElement {
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
