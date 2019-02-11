
(function(l, i, v, e) { v = l.createElement(i); v.async = 1; v.src = '//' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; e = l.getElementsByTagName(i)[0]; e.parentNode.insertBefore(v, e)})(document, 'script');
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function FsComponent(params) {
    return function classDecorator(target) {
        const newTarget = class extends target {
            constructor(...rest) {
                super();
                this.render();
            }
            connectedCallback() { }
            render() {
                if (params.shadowDOM && params.shadowDOM.length > 0) {
                    const shadowRoot = this.attachShadow({ mode: params.shadowDOM });
                    shadowRoot.innerHTML = `<style>${params.styles}</style>${this.getTemplate()}`;
                }
                else {
                    this.innerHTML = `${params.styles}${this.getTemplate()}`;
                }
            }
        };
        window.customElements.define(params.name, newTarget, params.options);
        return newTarget;
    };
}
//# sourceMappingURL=fs-component.js.map

var styles = ".content {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n  align-content: flex-start;\n}\n.content_nav {\n  width: 100%;\n  border: blue;\n  border-style: dashed;\n}\n.content_main {\n  width: 100%;\n  border-color: red;\n  border-style: dashed;\n}\n.content_footer {\n  width: 100%;\n  border-color: green;\n  border-style: dashed;\n}";

var styles$1 = ".fs-navigation {\n  width: 100%;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n}\n.fs-navigation_section-left {\n  display: flex;\n  flex-flow: row wrap;\n  flex-shrink: 1;\n}\n.fs-navigation_section-right {\n  display: flex;\n  flex-flow: row wrap;\n  flex-grow: 1;\n  justify-content: flex-end;\n}";

let FSNavigation = class FSNavigation extends HTMLElement {
    getTemplate() {
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
};
FSNavigation = __decorate([
    FsComponent({
        name: 'fs-navigation',
        shadowDOM: 'open',
        styles: styles$1
    })
], FSNavigation);
//# sourceMappingURL=index.js.map

var styles$2 = ".footer-container {\n  display: flex;\n  flex-flow: row wrap;\n  width: 100%;\n  border-top: 2px solid orange;\n  border-bottom: 2px solid orange;\n}\n\n.footer-category-box {\n  display: flex;\n  flex-flow: row wrap;\n  font-family: Helvetica, \"sans-serif\";\n  font-size: 16px;\n  width: 100%;\n  margin: 0 0 0 25px;\n}\n\n.footer-category-box--title {\n  text-transform: uppercase;\n  width: 100%;\n}\n\n.footer-category-box--list {\n  list-style-type: none;\n  padding: 0;\n  width: 100%;\n  margin: 0;\n}\n\n.footer-category-box--title-box {\n  border-bottom: 1px solid #000000;\n  width: 100%;\n  height: 31%;\n}\n\n.footer-category-box-rectangle--orange {\n  width: 10%;\n  border-bottom: 2px solid orange;\n}\n\n.footer-category-box-rectangle--blue {\n  width: 10%;\n  border-bottom: 2px solid blue;\n}\n\n.footer-category-box--list > li h6 {\n  padding: 0;\n}\n\n.img-container {\n  width: 100%;\n}\n\n.img-detail {\n  width: 49%;\n}\n\n@media (min-width: 300px) {\n  .footer-category-box {\n    width: 50%;\n  }\n}\n@media (min-width: 500px) {\n  .footer-category-box {\n    width: 20%;\n  }\n}";

let FSFooter = class FSFooter extends HTMLElement {
    getTemplate() {
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
};
FSFooter = __decorate([
    FsComponent({
        name: 'fs-footer',
        shadowDOM: 'open',
        styles: styles$2
    })
], FSFooter);

let FSLayout = class FSLayout extends HTMLElement {
    getTemplate() {
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
};
FSLayout = __decorate([
    FsComponent({
        name: 'fs-layout',
        shadowDOM: 'open',
        styles
    })
], FSLayout);

//# sourceMappingURL=main.js.map
//# sourceMappingURL=bundle.js.map
