import { FsComponent } from '../decorators/fs-component';
import styles from './fs-layout.scss';

@FsComponent({
  name: 'fs-layout',
  shadowDOM: 'open',
  styles
})
export class FSLayout extends HTMLElement {
  public getTemplate(): string {
    return `<h1>WELCOME</h1>`;
  }
}
