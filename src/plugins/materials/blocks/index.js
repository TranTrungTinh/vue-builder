export default (editor) => {
  const bm = editor.BlockManager;
  bm.add('starter', {
    id: 'starter',
    category: 'Section',
    label: 'Starter',
    content: '<div class="section no-pad-bot" id="banner-gradient">' +
      '<nav class="bg-none" role="navigation">' +
      '<div class="nav-wrapper container"><a id="logo-container" href="#" class="brand-logo white-text">Logo</a>' +
      '<ul class="right hide-on-med-and-down">' +
      '<li><a class="white-text" href="#">Navbar Link</a></li>' +
      '<li><a class="white-text" href="#">Navbar Link 2</a></li>' +
      '</ul>' +
      '<ul id="nav-mobile" class="side-nav">' +
      '<li><a href="#">Navbar Link</a></li>' +
      '<li><a href="#">Navbar Link 2</a></li>' +
      '</ul>' +
      '<a href="#" data-activates="nav-mobile" class="button-collapse white-text"><i class="material-icons">menu</i></a>' +
      '</div>' +
      '</nav>' +
      '<div class="container">' +
      '<br><br>' +
      '<h1 class="header center white-text">Starter Template</h1>' +
      '<div class="row center">' +
      '<h5 class="header col s12 light white-text">A modern responsive front-end framework based on Material Design</h5>' +
      '</div>' +
      '<div class="row center">' +
      '<a href="#" id="download-button" class="btn-large waves-effect waves-light light-blue">Get Started</a>' +
      '</div>' +
      '<br><br>' +
      '</div>' +
      '</div>' +
      `<style>#banner-gradient{background:#7abcff;background:-moz-linear-gradient(45deg,#7abcff 0,#60abf8 44%,#4096ee 100%);background:-webkit-linear-gradient(45deg,#7abcff 0,#60abf8 44%,#4096ee 100%);background:linear-gradient(45deg,#7abcff 0,#60abf8 44%,#4096ee 100%);filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#7abcff', endColorstr='#4096ee', GradientType=1)}.bg-none{background:none;}nav .brand-logo,nav ul a{color:#444}</style><script type="text/javascript">
                    $('.button-collapse').sideNav();
                  </script>`,
    attributes: {
      class: 'fa fa-wpforms'
    }
  });

  bm.add('members', {
    id: 'members',
    label: 'Members',
    category: 'Section',
    content: `<section id="members">
                <div class="container">
                <div class="row">
                <div class="col m12">
                  <h2 class="section-title center">Members</h2>
                </div>
                  </div>
                  <div class="row">
                    <div class="col m4 s12">
                      <div class="single-member">
                        <img class="profile-img" src="https://randomuser.me/api/portraits/women/82.jpg" alt="">
                      <h5>Marian Holmes</h5>
                      <p>Developer</p>
                      <ul class="social-icons">
                        <li><a href="#"><img src="https://res.cloudinary.com/ronaldaug/image/upload/v1530271176/facebook_xufb3l.png" alt="facebook">
                        <li><a href="#"><img src="https://res.cloudinary.com/ronaldaug/image/upload/v1530271176/twitter_cxpl2b.png" alt="twitter"></a></li>
                        <li><a href="#"><img src="https://res.cloudinary.com/ronaldaug/image/upload/v1530271176/linkedin_vkgoom.png" alt="linkedin"></a></li>
                      </ul>
                    </div>
                  </div>
                  <div class="col m4 s12">
                  <div class="single-member">
                    <img class="profile-img" src="https://randomuser.me/api/portraits/women/74.jpg" alt="">
                  <h5>Peggy Henry</h5>
                  <p>Marketing manager</p>
                  <ul class="social-icons">
                    <li><a href="#"><img src="https://res.cloudinary.com/ronaldaug/image/upload/v1530271176/facebook_xufb3l.png" alt="facebook">
                    <li><a href="#"><img src="https://res.cloudinary.com/ronaldaug/image/upload/v1530271176/twitter_cxpl2b.png" alt="twitter"></a></li>
                    <li><a href="#"><img src="https://res.cloudinary.com/ronaldaug/image/upload/v1530271176/linkedin_vkgoom.png" alt="linkedin"></a></li>
                  </ul>
                  </div>
                </div>
                    <div class="col m4 s12">
                  <div class="single-member">
                    <img class="profile-img" src="https://randomuser.me/api/portraits/men/13.jpg" alt="">
                  <h5>Eduardo Carter</h5>
                  <p>Director</p>
                  <ul class="social-icons">
                    <li><a href="#"><img src="https://res.cloudinary.com/ronaldaug/image/upload/v1530271176/facebook_xufb3l.png" alt="facebook">
                    <li><a href="#"><img src="https://res.cloudinary.com/ronaldaug/image/upload/v1530271176/twitter_cxpl2b.png" alt="twitter"></a></li>
                    <li><a href="#"><img src="https://res.cloudinary.com/ronaldaug/image/upload/v1530271176/linkedin_vkgoom.png" alt="linkedin"></a></li>
                  </ul>
                  </div>
                </div>
                  </div>
                </div>
              </section>
          <style>section#members{width:100%;background:#f6f7f9;padding:40px 0 40px}.section-title{color:#262e41;margin:40px 0 40px}.single-member{background:#fff;padding:60px 20px 40px;text-align:center;border-radius:3px;transition:all ease .3s;-moz-transition:all ease .3s;-webkit-transition:all ease .3s}.single-member:hover{margin-top:-10px;box-shadow:0 1px 10px rgba(167,176,211,0.38);-moz-box-shadow:0 1px 10px rgba(167,176,211,0.38);-webkit-box-shadow:0 1px 10px rgba(167,176,211,0.38)}.single-member .profile-img{width:80px;height:80px;border-radius:100%;-moz-border-radius:100%;-webkit-border-radius:100%}.single-member h5{font-size:16px}.single-member p{font-size:12px;color:#777}ul.social-icons{width:100%}ul.social-icons li{display:inline-block}ul.social-icons li a{margin:10px}ul.social-icons li a img{width:20px;height:20px}</style>`,
    attributes: { class: "fa fa-users" }
  });

  bm.add('login', {
    id: 'login',
    label: `Login`,
    category: 'Section',
    content: `
    <section id="login">
      <div class="container">
        <div class="row">
          <div class="col m12">
            <h2 class="center-align">Login</h2>
            <div class="row">
              <form class="col s12">
                <div class="row">
                  <div class="input-field col s12">
                    <input id="input__email" type="email" class="validate">
                    <label for="email">Email</label>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12">
                    <input id="input__password" type="password" class="validate">
                    <label for="password">Password</label>
                  </div>
                </div>
                <div class="row">
                  <button class="col m12 btn btn-large waves-effect waves-light" type="button" id="btn_login">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <script>
      $('#btn_login').click(e => {
        const email = $('#input__email').val();
        const pass = $('#input__password').val();

        console.log({ email, pass });
      });
    </script>
    `,
    attributes: { class: "fa fa-bars" }
  })
}