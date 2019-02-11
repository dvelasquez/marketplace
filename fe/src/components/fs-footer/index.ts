import { FsComponent } from '../../decorators/fs-component';
import styles from './index.scss';

@FsComponent({
    name: 'fs-footer',
    shadowDOM: 'open',
    styles
})
export class FSFooter extends HTMLElement{
    public getTemplate(): string {
        // language=HTML
        return `<div class="footer-container">
    <div class="footer-category-box">
        <div class="footer-category-box--title-box">
            <h5 class="footer-category-box--title">Título 1</h5>
            <div class="footer-category-box-rectangle--orange">
            </div>
        </div>
        <ul class="footer-category-box--list">
            <li>
                <h6> item 1 </h6>
            </li>
            <li>
                <h6> item 2 </h6>
            </li>
            <li>
                <h6> item 3 </h6>
            </li>
        </ul>
    </div>
    <div class="footer-category-box">
        <div class="footer-category-box--title-box">
            <h5 class="footer-category-box--title">Título 2</h5>
            <div class="footer-category-box-rectangle--orange">
            </div>
        </div>

        <ul class="footer-category-box--list">
            <li>
                <h6> item 1 </h6>
            </li>
            <li>
                <h6> item 2 </h6>
            </li>
            <li>
                <h6> item 3 </h6>
            </li>
        </ul>
    </div>
    <div class="footer-category-box">
        <div class="footer-category-box--title-box">
            <h5 class="footer-category-box--title">Título 3</h5>
            <div class="footer-category-box-rectangle--orange">
            </div>
        </div>
        <ul class="footer-category-box--list">
            <li>
                <h6> item 1 </h6>
            </li>
            <li>
                <h6> item 2 </h6>
            </li>
            <li>
                <h6> item 3 </h6>
            </li>
        </ul>
    </div>
    <div class="footer-category-box">
        <div class="footer-category-box--title-box">
            <h5 class="footer-category-box--title">Título 4</h5>
            <div class="footer-category-box-rectangle--blue">
            </div>
        </div>

        <div class="img-container">
            <img class="img-detail" src="https://static.yapo.cl/projects/altiro-payment-delivery/icons/app-store.png" />
            <img class="img-detail" src="https://static.yapo.cl/projects/altiro-payment-delivery/icons/play-store.png" />
        </div>


    </div>
</div>`;
    }
}