Vue.component('header-elm', {
    template: '    <nav class="navbar navbar-expand-lg navbar-dark navbar-theme fixed-top p-0">\n' +
        '      <div class="container px-3"><a class="navbar-brand font-weight-normal ls-1" href="index.html"><img src="assets/img/origin/logo_w.png" alt=""></a>\n' +
        '        <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>\n' +
        '        <div class="collapse navbar-collapse" id="navbarSupportedContent">\n' +
        '          <ul class="navbar-nav ml-auto">\n' +
        '            <li class="nav-item dropdown dropdown-on-hover">\n' +
        '              <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink1" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n' +
        '                <span class="nav-link-text">事業紹介</span>\n' +
        '              </a>\n' +
        '              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink1">\n' +
        '                <a class="dropdown-item" href="pages/one-page.html">NEWS</a>\n' +
        '                <a class="dropdown-item" href="pages/one-page.html">ヘルスケア事業</a>\n' +
        '                <a class="dropdown-item" href="pages/index.html">海外事業</a>\n' +
        '              </div>\n' +
        '            </li>\n' +
        '            <li class="nav-item dropdown dropdown-on-hover">\n' +
        '              <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink2" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n' +
        '                <span class="nav-link-text">社員紹介</span>\n' +
        '              </a>\n' +
        '              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink2">\n' +
        '                <a class="dropdown-item" href="pages/one-page.html">商品企画部 水川</a>\n' +
        '                <a class="dropdown-item" href="pages/index.html">医療営業部 漆崎</a>\n' +
        '              </div>\n' +
        '            </li>\n' +
        '            <li class="nav-item dropdown dropdown-on-hover">\n' +
        '              <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink3" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n' +
        '                <span class="nav-link-text">会社案内</span>\n' +
        '              </a>\n' +
        '              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink3">\n' +
        '                <a class="dropdown-item" href="pages/one-page.html">企業理念</a>\n' +
        '                <a class="dropdown-item" href="pages/index.html">会社概要</a>\n' +
        '                <a class="dropdown-item" href="pages/index.html">沿革</a>\n' +
        '              </div>\n' +
        '            </li>\n' +
        '            <li class="nav-item dropdown dropdown-on-hover">\n' +
        '              <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink4" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n' +
        '                <span class="nav-link-text">コラム</span>\n' +
        '              </a>\n' +
        '              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink4">\n' +
        '                <a class="dropdown-item" href="pages/one-page.html">抗酸化ケア</a>\n' +
        '                <a class="dropdown-item" href="pages/index.html">免疫力と血流</a>\n' +
        '                <a class="dropdown-item" href="pages/index.html">体質に合わせた食事</a>\n' +
        '                <a class="dropdown-item" href="pages/index.html">糖質制限ダイエット</a>\n' +
        '              </div>\n' +
        '            </li>\n' +
        '          </ul>\n' +
        '        </div>\n' +
        '      </div>\n' +
        '    </nav>\n'
})

Vue.component('health-elm', {
    template: '       <section id="column">\n' +
        '        <div class="container">\n' +
        '          <div class="row">\n' +
        '            <div class="col text-center mb-4" data-zanim-timeline="{}" data-zanim-trigger="scroll">\n' +
        '              <div class="overflow-hidden">\n' +
        '                <h2 class="fs-md-5" data-zanim-xs=\'{"duration":1.5,"delay":0}\'>HEALTH & ILLNESS</h2>\n' +
        '              </div>\n' +
        '              <div class="overflow-hidden">\n' +
        '                <p class="fs--1 text-uppercase text-black ls-0 mb-0" data-zanim-xs=\'{"duration":1.5,"delay":0.1}\'>コラム</p>\n' +
        '              </div>\n' +
        '              <div class="overflow-hidden">\n' +
        '                <hr class="hr-short border-black" data-zanim-xs=\'{"duration":1.5,"delay":0.2}\' />\n' +
        '              </div>\n' +
        '            </div>\n' +
        '          </div>\n' +
        '          <div class="row">\n' +
        '            <div class="col-6 col-lg-3 h-100 mb-4"><a href="antioxidant.html"> <img class="img-fluid rounded-top" src="assets/img/origin/care.jpg" alt="" /></a>\n' +
        '              <div class="p-3 border rounded-bottom border-top-0">\n' +
        '                <h5 class="text-base text-transform-none font-weight-medium lh-1 fs-0 fs-sm-1"><a class="text-black" href="antioxidant.html">抗酸化ケア</a></h5>\n' +
        '                <p class="small text-muted">肌トラブル、肌の老化と活性酸素にはビタミンCの5倍効果「カンカ」に注目</p>\n' +
        '                <a class="text-dark font-weight-semi-bold" href="antioxidant.html">Read more<span class="fas fa-angle-right ml-1 text-900" data-fa-transform="down-2"></span></a>\n' +
        '              </div>\n' +
        '            </div>\n' +
        '            <div class="col-6 col-lg-3 h-100 mb-4"><a href="immunity.html"> <img class="img-fluid rounded-top" src="assets/img/origin/blood.jpg" alt="" /></a>\n' +
        '              <div class="p-3 border rounded-bottom border-top-0">\n' +
        '                <h5 class="text-base text-transform-none font-weight-medium lh-1 fs-0 fs-sm-1"><a class="text-black" href="immunity.html">免疫力と血流</a></h5>\n' +
        '                <p class="small text-muted">低体温による免疫力低下に、血流UPに効果的な血管拡張作用成分を摂取しよう</p>\n' +
        '                <a class="text-dark font-weight-semi-bold" href="immunity.html">Read more<span class="fas fa-angle-right ml-1 text-900" data-fa-transform="down-2"></span></a>\n' +
        '              </div>\n' +
        '            </div>\n' +
        '            <div class="col-6 col-lg-3 h-100 mb-4"><a href="food.html"> <img class="img-fluid rounded-top" src="assets/img/origin/food.jpg" alt="" /></a>\n' +
        '              <div class="p-3 border rounded-bottom border-top-0">\n' +
        '                <h5 class="text-base text-transform-none font-weight-medium lh-1 fs-0 fs-sm-1"><a class="text-black" href="food.html">体質に合わせた食事</a></h5>\n' +
        '                <p class="small text-muted">痩せる食事も体質3タイプによって違う?水の滞りタイプにはトウモロコシと鳩麦を</p>\n' +
        '                <a class="text-dark font-weight-semi-bold" href="food.html">Read more<span class="fas fa-angle-right ml-1 text-900" data-fa-transform="down-2"></span></a>\n' +
        '              </div>\n' +
        '            </div>\n' +
        '            <div class="col-6 col-lg-3 h-100 mb-4 mb-md-0"><a href="diet.html"> <img class="img-fluid rounded-top" src="assets/img/origin/diet.jpg" alt="" /></a>\n' +
        '              <div class="p-3 border rounded-bottom border-top-0">\n' +
        '                <h5 class="text-base text-transform-none font-weight-medium lh-1 fs-0 fs-sm-1"><a class="text-black" href="diet.html">糖質制限ダイエット</a></h5>\n' +
        '                <p class="small text-muted">5大栄養素をバランスよく摂りながら、トクホでもおなじみの「茶花」成分を活用</p>\n' +
        '                <a class="text-dark font-weight-semi-bold" href="diet.html">Read more<span class="fas fa-angle-right ml-1 text-900" data-fa-transform="down-2"></span></a>\n' +
        '              </div>\n' +
        '            </div>\n' +
        '          </div>\n' +
        '        </div>\n' +
        '      </section>\n'
})

Vue.component('footer-elm', {
    template: '      <section id="foot_content" class="bg-1100 py-6 px-3 px-lg-0">\n' +
        '        <div class="container">\n' +
        '          <div class="row">\n' +
        '            <div class="col-12">\n' +
        '              <div class="row">\n' +
        '                <div class="col-6 col-md-3 pl-lg-4 mb-4 mb-lg-0">\n' +
        '                  <h5 class="text-white mb-3">Company</h5>\n' +
        '                  <ul class="list-unstyled mb-0">\n' +
        '                    <li class="mb-1"><a class="text-700 hover-color-white" href="philosophy.html">企業理念</a></li>\n' +
        '                    <li class="mb-1"><a class="text-700 hover-color-white" href="company.html">会社概要</a></li>\n' +
        '                    <li class="mb-1"><a class="text-700 hover-color-white" href="history.html">沿革</a></li>\n' +
        '                  </ul>\n' +
        '                </div>\n' +
        '                <div class="col-6 col-md-3 pl-4 mb-4 mb-lg-0">\n' +
        '                  <h5 class="text-white mb-3">Product</h5>\n' +
        '                  <ul class="list-unstyled mb-0">\n' +
        '                    <li class="mb-1"><a class="text-700 hover-color-white" href="healthcare.html">ヘルスケア事業</a></li>\n' +
        '                    <li class="mb-1"><a class="text-700 hover-color-white" href="global.html">海外事業</a></li>\n' +
        '                   </ul>\n' +
        '                </div>\n' +
        '                <div class="col-6 col-md-3 pl-md-4 mb-4 mb-lg-0">\n' +
        '                  <h5 class="text-white mb-3">privacy policy</h5>\n' +
        '                  <ul class="list-unstyled mb-0">\n' +
        '                    <li class="mb-1"><a class="text-700 hover-color-white" href="#!">個人情報保護方針</a></li>\n' +
        '                    <li class="mb-1"><a class="text-700 hover-color-white" href="#!">免責事項</a></li>\n' +
        '                   </ul>\n' +
        '                </div>\n' +
        '              </div>\n' +
        '            </div>\n' +
        '          </div>\n' +
        '        </div>\n' +
        '      </section>\n'
})

Vue.component('contact-elm', {
    template: '        <section id="contact">\n' +
        '          <div class="container">\n' +
        '            <div class="row">\n' +
        '              <div class="col text-center mb-4" data-zanim-timeline="{}" data-zanim-trigger="scroll">\n' +
        '                <div class="overflow-hidden">\n' +
        '                  <h2 class="fs-md-5" data-zanim-xs=\'{"duration":1.5,"delay":0}\'>contact</h2>\n' +
        '                </div>\n' +
        '                <div class="overflow-hidden">\n' +
        '                  <p class="fs--1 text-uppercase text-black ls-0 mb-0" data-zanim-xs=\'{"duration":1.5,"delay":0.1}\'>お問い合わせ</p>\n' +
        '                </div>\n' +
        '                <div class="overflow-hidden">\n' +
        '                  <hr class="hr-short border-black" data-zanim-xs=\'{"duration":1.5,"delay":0.2}\' />\n' +
        '                </div>\n' +
        '              </div>\n' +
        '            </div>\n' +
        '            <div class="row justify-content-center">\n' +
        '              <div class="col-lg-6 mb-5 mb-lg-0 d-flex flex-column justify-content-between">\n' +
        '                <div class="row">\n' +
        '                  <div class="col-12">\n' +
        '                    <h5 class="mb-3">会社情報</h5>\n' +
        '                  </div>\n' +
        '                  <div class="col-auto mb-2 mb-sm-0">\n' +
        '                    <div class="row">\n' +
        '                      <div class="col-1"><span class="fas fa-location-arrow text-700"></span></div>\n' +
        '                      <div class="col px-2">\n' +
        '                        <p class="mb-1 text-700"><strong>株式会社栄進商事 大阪本社</strong></p>\n' +
        '                        <p class="mb-0 text-600">〒530-0044 大阪市北区東天満2-9-1 若杉センタービル本館9階</p>\n' +
        '                      </div>\n' +
        '                    </div>\n' +
        '                  </div>\n' +
        '                  <div class="col-auto">\n' +
        '                    <div class="row mb-2 mb-sm-1">\n' +
        '                      <div class="col-1"><span class="fas fa-phone mr-2 text-700"> </span></div>\n' +
        '                      <div class="col px-2"><a class="text-600" href="tel:0648007600">06-4800-7600 </a></div>\n' +
        '                    </div>\n' +
        '                    <div class="row">\n' +
        '                      <div class="col-1"><span class="fas fa-envelope mr-2 text-700"></span></div>\n' +
        '                      <div class="col px-2"><a class="text-600" href="mailto:info@eishin-corp.com">info@eishin-corp.com</a></div>\n' +
        '                    </div>\n' +
        '                  </div>\n' +
        '                </div>\n' +
        '                <div class="googlemap rounded theme-map mt-4" data-latlng="34.6976813,135.5121841,17" data-scrollwheel="false" data-icon="assets/img/map-marker.png" data-zoom="17" data-theme="Default" style="min-height: 14.63rem;">\n' +
        '                  <div class="marker-content py-3">\n' +
        '                    <h5>株式会社栄進商事</h5>\n' +
        '                    <p>〒530-0044 大阪市北区東天満2-9-1 <br> 若杉センタービル本館9階</p>\n' +
        '                  </div>\n' +
        '                </div>\n' +
        '              </div>\n' +
        '              <div class="col-lg-6">\n' +
        '                <h5 class="mb-3">こちらからお問い合わせください。</h5>\n' +
        '                <form class="zform text-left" method="post">\n' +
        '                  <input type="hidden" name="to" value="username@domain.extension" />\n' +
        '                  <div class="form-group mb-3">\n' +
        '                    <input class="fs-0 form-control" type="text" placeholder="お名前" required="required" />\n' +
        '                  </div>\n' +
        '                  <div class="form-group mb-3">\n' +
        '                    <input class="fs-0 form-control" type="email" placeholder="メールアドレス" required="required" />\n' +
        '                  </div>\n' +
        '                  <div class="form-group mb-3">\n' +
        '                    <textarea class="fs-0 form-control contact-message" rows="8" placeholder="お問い合わせ内容" required="required"></textarea>\n' +
        '                  </div>\n' +
        '                  <div class="zform-feedback my-2"></div>\n' +
        '                  <button class="btn btn-block btn-dark hvr-sweep-top" type="submit">お問い合わせ</button>\n' +
        '                </form>\n' +
        '              </div>\n' +
        '            </div>\n' +
        '          </div>\n' +
        '        </section>\n'
})

Vue.component('copyright-elm', {
    template: '    <section class="text-center bg-black py-3">\n' +
        '      <div class="container">\n' +
        '        <div class="row justify-content-center">\n' +
        '          <div class="col-12 col-md-auto mb-1 mb-md-0">\n' +
        '            <p class="mb-0"><span class="text-900 hover-color-white">Copyright &copy; EISHIN TRADING Co.,Ltd. <br class="d-block d-md-none" /> All Rights Reserved.</span></p>\n' +
        '          </div>\n' +
        '        </div>\n' +
        '      </div>\n' +
        '    </section>\n'
})

var app = new Vue({
    el: '#app',
})
