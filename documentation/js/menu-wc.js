'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">scopely-challenge documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/ApiGatewayModule.html" data-type="entity-link" >ApiGatewayModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ApiGatewayModule-5da05c316d7d27e3cc430da40842242d0f69130496d74e25b88753b84c7ec6d15a42404011be15e75f3a4eb3333bfe89a85e779e2687917509a356e2c07695d4"' : 'data-bs-target="#xs-controllers-links-module-ApiGatewayModule-5da05c316d7d27e3cc430da40842242d0f69130496d74e25b88753b84c7ec6d15a42404011be15e75f3a4eb3333bfe89a85e779e2687917509a356e2c07695d4"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ApiGatewayModule-5da05c316d7d27e3cc430da40842242d0f69130496d74e25b88753b84c7ec6d15a42404011be15e75f3a4eb3333bfe89a85e779e2687917509a356e2c07695d4"' :
                                            'id="xs-controllers-links-module-ApiGatewayModule-5da05c316d7d27e3cc430da40842242d0f69130496d74e25b88753b84c7ec6d15a42404011be15e75f3a4eb3333bfe89a85e779e2687917509a356e2c07695d4"' }>
                                            <li class="link">
                                                <a href="controllers/ApiGatewayController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApiGatewayController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ApiGatewayModule-5da05c316d7d27e3cc430da40842242d0f69130496d74e25b88753b84c7ec6d15a42404011be15e75f3a4eb3333bfe89a85e779e2687917509a356e2c07695d4"' : 'data-bs-target="#xs-injectables-links-module-ApiGatewayModule-5da05c316d7d27e3cc430da40842242d0f69130496d74e25b88753b84c7ec6d15a42404011be15e75f3a4eb3333bfe89a85e779e2687917509a356e2c07695d4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ApiGatewayModule-5da05c316d7d27e3cc430da40842242d0f69130496d74e25b88753b84c7ec6d15a42404011be15e75f3a4eb3333bfe89a85e779e2687917509a356e2c07695d4"' :
                                        'id="xs-injectables-links-module-ApiGatewayModule-5da05c316d7d27e3cc430da40842242d0f69130496d74e25b88753b84c7ec6d15a42404011be15e75f3a4eb3333bfe89a85e779e2687917509a356e2c07695d4"' }>
                                        <li class="link">
                                            <a href="injectables/ApiGatewayService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApiGatewayService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BattleServiceModule.html" data-type="entity-link" >BattleServiceModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-BattleServiceModule-7bd8cb792bb96c7a0049c6dcf0ab03ebeacc5b5d2cba16e097c9934ef6c5511eba6c9fc759b1e266b0031dbed4e11a5345280a5f728b299fdb7cea050c898ab8"' : 'data-bs-target="#xs-controllers-links-module-BattleServiceModule-7bd8cb792bb96c7a0049c6dcf0ab03ebeacc5b5d2cba16e097c9934ef6c5511eba6c9fc759b1e266b0031dbed4e11a5345280a5f728b299fdb7cea050c898ab8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-BattleServiceModule-7bd8cb792bb96c7a0049c6dcf0ab03ebeacc5b5d2cba16e097c9934ef6c5511eba6c9fc759b1e266b0031dbed4e11a5345280a5f728b299fdb7cea050c898ab8"' :
                                            'id="xs-controllers-links-module-BattleServiceModule-7bd8cb792bb96c7a0049c6dcf0ab03ebeacc5b5d2cba16e097c9934ef6c5511eba6c9fc759b1e266b0031dbed4e11a5345280a5f728b299fdb7cea050c898ab8"' }>
                                            <li class="link">
                                                <a href="controllers/BattleServiceController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BattleServiceController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-BattleServiceModule-7bd8cb792bb96c7a0049c6dcf0ab03ebeacc5b5d2cba16e097c9934ef6c5511eba6c9fc759b1e266b0031dbed4e11a5345280a5f728b299fdb7cea050c898ab8"' : 'data-bs-target="#xs-injectables-links-module-BattleServiceModule-7bd8cb792bb96c7a0049c6dcf0ab03ebeacc5b5d2cba16e097c9934ef6c5511eba6c9fc759b1e266b0031dbed4e11a5345280a5f728b299fdb7cea050c898ab8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BattleServiceModule-7bd8cb792bb96c7a0049c6dcf0ab03ebeacc5b5d2cba16e097c9934ef6c5511eba6c9fc759b1e266b0031dbed4e11a5345280a5f728b299fdb7cea050c898ab8"' :
                                        'id="xs-injectables-links-module-BattleServiceModule-7bd8cb792bb96c7a0049c6dcf0ab03ebeacc5b5d2cba16e097c9934ef6c5511eba6c9fc759b1e266b0031dbed4e11a5345280a5f728b299fdb7cea050c898ab8"' }>
                                        <li class="link">
                                            <a href="injectables/BattleServiceService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BattleServiceService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BattlesModule.html" data-type="entity-link" >BattlesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-BattlesModule-391a63ec1568e3e2e22f464a45ca233eef29509099c8f3a65da32dad9220da539de369b06fc04dc6756fbb8b37c495fc305b5724c50603c140bd0d859d8586c9"' : 'data-bs-target="#xs-controllers-links-module-BattlesModule-391a63ec1568e3e2e22f464a45ca233eef29509099c8f3a65da32dad9220da539de369b06fc04dc6756fbb8b37c495fc305b5724c50603c140bd0d859d8586c9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-BattlesModule-391a63ec1568e3e2e22f464a45ca233eef29509099c8f3a65da32dad9220da539de369b06fc04dc6756fbb8b37c495fc305b5724c50603c140bd0d859d8586c9"' :
                                            'id="xs-controllers-links-module-BattlesModule-391a63ec1568e3e2e22f464a45ca233eef29509099c8f3a65da32dad9220da539de369b06fc04dc6756fbb8b37c495fc305b5724c50603c140bd0d859d8586c9"' }>
                                            <li class="link">
                                                <a href="controllers/BattlesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BattlesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-BattlesModule-391a63ec1568e3e2e22f464a45ca233eef29509099c8f3a65da32dad9220da539de369b06fc04dc6756fbb8b37c495fc305b5724c50603c140bd0d859d8586c9"' : 'data-bs-target="#xs-injectables-links-module-BattlesModule-391a63ec1568e3e2e22f464a45ca233eef29509099c8f3a65da32dad9220da539de369b06fc04dc6756fbb8b37c495fc305b5724c50603c140bd0d859d8586c9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BattlesModule-391a63ec1568e3e2e22f464a45ca233eef29509099c8f3a65da32dad9220da539de369b06fc04dc6756fbb8b37c495fc305b5724c50603c140bd0d859d8586c9"' :
                                        'id="xs-injectables-links-module-BattlesModule-391a63ec1568e3e2e22f464a45ca233eef29509099c8f3a65da32dad9220da539de369b06fc04dc6756fbb8b37c495fc305b5724c50603c140bd0d859d8586c9"' }>
                                        <li class="link">
                                            <a href="injectables/BattlesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BattlesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BattleWorkerServiceModule.html" data-type="entity-link" >BattleWorkerServiceModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-BattleWorkerServiceModule-04c08562b37b330bcac4ad83b98da0365a352acba533548ccab470ef73abfc9c3a5a7af4da1c4223c0e8bcf80b446513d78fb682a5b2fc01445fce7c7345c1d1"' : 'data-bs-target="#xs-controllers-links-module-BattleWorkerServiceModule-04c08562b37b330bcac4ad83b98da0365a352acba533548ccab470ef73abfc9c3a5a7af4da1c4223c0e8bcf80b446513d78fb682a5b2fc01445fce7c7345c1d1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-BattleWorkerServiceModule-04c08562b37b330bcac4ad83b98da0365a352acba533548ccab470ef73abfc9c3a5a7af4da1c4223c0e8bcf80b446513d78fb682a5b2fc01445fce7c7345c1d1"' :
                                            'id="xs-controllers-links-module-BattleWorkerServiceModule-04c08562b37b330bcac4ad83b98da0365a352acba533548ccab470ef73abfc9c3a5a7af4da1c4223c0e8bcf80b446513d78fb682a5b2fc01445fce7c7345c1d1"' }>
                                            <li class="link">
                                                <a href="controllers/BattleWorkerServiceController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BattleWorkerServiceController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-BattleWorkerServiceModule-04c08562b37b330bcac4ad83b98da0365a352acba533548ccab470ef73abfc9c3a5a7af4da1c4223c0e8bcf80b446513d78fb682a5b2fc01445fce7c7345c1d1"' : 'data-bs-target="#xs-injectables-links-module-BattleWorkerServiceModule-04c08562b37b330bcac4ad83b98da0365a352acba533548ccab470ef73abfc9c3a5a7af4da1c4223c0e8bcf80b446513d78fb682a5b2fc01445fce7c7345c1d1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BattleWorkerServiceModule-04c08562b37b330bcac4ad83b98da0365a352acba533548ccab470ef73abfc9c3a5a7af4da1c4223c0e8bcf80b446513d78fb682a5b2fc01445fce7c7345c1d1"' :
                                        'id="xs-injectables-links-module-BattleWorkerServiceModule-04c08562b37b330bcac4ad83b98da0365a352acba533548ccab470ef73abfc9c3a5a7af4da1c4223c0e8bcf80b446513d78fb682a5b2fc01445fce7c7345c1d1"' }>
                                        <li class="link">
                                            <a href="injectables/BattleWorkerServiceService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BattleWorkerServiceService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/EnvModule.html" data-type="entity-link" >EnvModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/EnvModule.html" data-type="entity-link" >EnvModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/EnvModule.html" data-type="entity-link" >EnvModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/EnvModule.html" data-type="entity-link" >EnvModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PlayerModule.html" data-type="entity-link" >PlayerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PlayerModule-513fde4e6941231a170af3c3448c4b9aec7e847450e03e225d231e67df8d037e727d8ca6f65e30da5088f430638d1bc3b16a39c9afccf1744b10f294a22eaaac"' : 'data-bs-target="#xs-controllers-links-module-PlayerModule-513fde4e6941231a170af3c3448c4b9aec7e847450e03e225d231e67df8d037e727d8ca6f65e30da5088f430638d1bc3b16a39c9afccf1744b10f294a22eaaac"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PlayerModule-513fde4e6941231a170af3c3448c4b9aec7e847450e03e225d231e67df8d037e727d8ca6f65e30da5088f430638d1bc3b16a39c9afccf1744b10f294a22eaaac"' :
                                            'id="xs-controllers-links-module-PlayerModule-513fde4e6941231a170af3c3448c4b9aec7e847450e03e225d231e67df8d037e727d8ca6f65e30da5088f430638d1bc3b16a39c9afccf1744b10f294a22eaaac"' }>
                                            <li class="link">
                                                <a href="controllers/PlayerController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlayerController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PlayerModule-513fde4e6941231a170af3c3448c4b9aec7e847450e03e225d231e67df8d037e727d8ca6f65e30da5088f430638d1bc3b16a39c9afccf1744b10f294a22eaaac"' : 'data-bs-target="#xs-injectables-links-module-PlayerModule-513fde4e6941231a170af3c3448c4b9aec7e847450e03e225d231e67df8d037e727d8ca6f65e30da5088f430638d1bc3b16a39c9afccf1744b10f294a22eaaac"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PlayerModule-513fde4e6941231a170af3c3448c4b9aec7e847450e03e225d231e67df8d037e727d8ca6f65e30da5088f430638d1bc3b16a39c9afccf1744b10f294a22eaaac"' :
                                        'id="xs-injectables-links-module-PlayerModule-513fde4e6941231a170af3c3448c4b9aec7e847450e03e225d231e67df8d037e727d8ca6f65e30da5088f430638d1bc3b16a39c9afccf1744b10f294a22eaaac"' }>
                                        <li class="link">
                                            <a href="injectables/PlayerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlayerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PlayersModule.html" data-type="entity-link" >PlayersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PlayersModule-92b55e5967a07550204ee9f11106c257e32e1b1ed4b6ee03b7b9b749d46d6f1f324de4c5b5ac3d5a25fbb150a4ec28966a5b0255c06c15620196efebc940c4d7"' : 'data-bs-target="#xs-controllers-links-module-PlayersModule-92b55e5967a07550204ee9f11106c257e32e1b1ed4b6ee03b7b9b749d46d6f1f324de4c5b5ac3d5a25fbb150a4ec28966a5b0255c06c15620196efebc940c4d7"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PlayersModule-92b55e5967a07550204ee9f11106c257e32e1b1ed4b6ee03b7b9b749d46d6f1f324de4c5b5ac3d5a25fbb150a4ec28966a5b0255c06c15620196efebc940c4d7"' :
                                            'id="xs-controllers-links-module-PlayersModule-92b55e5967a07550204ee9f11106c257e32e1b1ed4b6ee03b7b9b749d46d6f1f324de4c5b5ac3d5a25fbb150a4ec28966a5b0255c06c15620196efebc940c4d7"' }>
                                            <li class="link">
                                                <a href="controllers/PlayersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlayersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PlayersModule-92b55e5967a07550204ee9f11106c257e32e1b1ed4b6ee03b7b9b749d46d6f1f324de4c5b5ac3d5a25fbb150a4ec28966a5b0255c06c15620196efebc940c4d7"' : 'data-bs-target="#xs-injectables-links-module-PlayersModule-92b55e5967a07550204ee9f11106c257e32e1b1ed4b6ee03b7b9b749d46d6f1f324de4c5b5ac3d5a25fbb150a4ec28966a5b0255c06c15620196efebc940c4d7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PlayersModule-92b55e5967a07550204ee9f11106c257e32e1b1ed4b6ee03b7b9b749d46d6f1f324de4c5b5ac3d5a25fbb150a4ec28966a5b0255c06c15620196efebc940c4d7"' :
                                        'id="xs-injectables-links-module-PlayersModule-92b55e5967a07550204ee9f11106c257e32e1b1ed4b6ee03b7b9b749d46d6f1f324de4c5b5ac3d5a25fbb150a4ec28966a5b0255c06c15620196efebc940c4d7"' }>
                                        <li class="link">
                                            <a href="injectables/PlayersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlayersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SharedModule-47ae010970057790686d1f5c4f418b8d0578e289e5a7b194dfee609d463361f205431942e6f51f644cb76d776472d97ccee911cef7bb75b36a3f2cae67ee5e59"' : 'data-bs-target="#xs-injectables-links-module-SharedModule-47ae010970057790686d1f5c4f418b8d0578e289e5a7b194dfee609d463361f205431942e6f51f644cb76d776472d97ccee911cef7bb75b36a3f2cae67ee5e59"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SharedModule-47ae010970057790686d1f5c4f418b8d0578e289e5a7b194dfee609d463361f205431942e6f51f644cb76d776472d97ccee911cef7bb75b36a3f2cae67ee5e59"' :
                                        'id="xs-injectables-links-module-SharedModule-47ae010970057790686d1f5c4f418b8d0578e289e5a7b194dfee609d463361f205431942e6f51f644cb76d776472d97ccee911cef7bb75b36a3f2cae67ee5e59"' }>
                                        <li class="link">
                                            <a href="injectables/SharedService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SharedService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/ApiGatewayController.html" data-type="entity-link" >ApiGatewayController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/BattlesController.html" data-type="entity-link" >BattlesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/BattleServiceController.html" data-type="entity-link" >BattleServiceController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/BattleWorkerServiceController.html" data-type="entity-link" >BattleWorkerServiceController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PlayerController.html" data-type="entity-link" >PlayerController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PlayersController.html" data-type="entity-link" >PlayersController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#entities-links"' :
                                'data-bs-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/BattleDao.html" data-type="entity-link" >BattleDao</a>
                                </li>
                                <li class="link">
                                    <a href="entities/LeaderboardDao.html" data-type="entity-link" >LeaderboardDao</a>
                                </li>
                                <li class="link">
                                    <a href="entities/PlayerDao.html" data-type="entity-link" >PlayerDao</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Battle.html" data-type="entity-link" >Battle</a>
                            </li>
                            <li class="link">
                                <a href="classes/BattleEngine.html" data-type="entity-link" >BattleEngine</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateBattleDto.html" data-type="entity-link" >CreateBattleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateBattleResponseDto.html" data-type="entity-link" >CreateBattleResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePlayerDto.html" data-type="entity-link" >CreatePlayerDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePlayerResponseDto.html" data-type="entity-link" >CreatePlayerResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Leaderboard.html" data-type="entity-link" >Leaderboard</a>
                            </li>
                            <li class="link">
                                <a href="classes/NestApplicationValidationPipe.html" data-type="entity-link" >NestApplicationValidationPipe</a>
                            </li>
                            <li class="link">
                                <a href="classes/Player.html" data-type="entity-link" >Player</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ApiGatewayService.html" data-type="entity-link" >ApiGatewayService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BattleServiceService.html" data-type="entity-link" >BattleServiceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BattlesService.html" data-type="entity-link" >BattlesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BattleTypeOrmRepository.html" data-type="entity-link" >BattleTypeOrmRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BattleWorkerServiceService.html" data-type="entity-link" >BattleWorkerServiceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PlayerService.html" data-type="entity-link" >PlayerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PlayersService.html" data-type="entity-link" >PlayersService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PlayerTypeOrmRepository.html" data-type="entity-link" >PlayerTypeOrmRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SharedService.html" data-type="entity-link" >SharedService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/BattleResult.html" data-type="entity-link" >BattleResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EnvironmentVariables.html" data-type="entity-link" >EnvironmentVariables</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EnvironmentVariables-1.html" data-type="entity-link" >EnvironmentVariables</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EnvironmentVariables-2.html" data-type="entity-link" >EnvironmentVariables</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EnvironmentVariables-3.html" data-type="entity-link" >EnvironmentVariables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});