<template >
    <div class="vid-index">
        <header class="">
            <!--TERMINA MENU CELULARES-->
            <div class="container-fluid menu pt-3">
              <div class="container-fluid">
                <div class="row pt-2">
                  <div class="col-12 col-lg-1 col-sm-12 col-md-12 justify-content-center">
                    <a href="index.html" class="a_none_style text-white">
                      <h1 class="DAGGERSQUARE">ISC</h1>
                    </a>
                  </div>
                  <div class="col-12 col-lg-9 col-sm-12 col-md-12"></div>
                  <div class="col-12 col-lg-2 col-sm-12 col-md-12 pt-1">
                    <div class="text-end">
                      <a class="btn btn-primary btn-login" href="login.html">
                        <img src="img/icono-login.png" alt="Login" class="img-fluid float-start ms-3 icon-login"/>
                        <h6 class="oRegular">Login </h6>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div class="txt-index">
            <div class="text-center">
                <h1 class="space-text oRegular h4">WELCOME TO</h1>
                <img src="img/logo-textron-blue.png" alt="TEXTRON" class="img-fluid logo-textron my-4"/>
            </div>
            <div class="text-center">
                <img src="img/logo-ISC-white.png" alt="ISC: INTEGRATED SUPPLY CHAIN" class="img-fluid logo-isc"/>
            </div>
          </div>
          <div class="txt-index-2">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-1"></div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-10">
                        <div class="row">
                            <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                                <div class="mb-3 oRegular txt-what-is">
                                    <h4 class="oExtraBold h2">What is</h4>
                                    <h4 class="oRegular h2 mb-3">ISC system?</h4>
                                    <p>Textron ISC is an executive system for the </p>
                                    <p>management, administration and integration of </p>
                                    <p>projects focused on the supply chain of the “Textron </p>
                                    <p>Industrial” division through its Driving Technology </p>
                                    <p>Forward line of “Textron Specialized Vehicles”.</p>
                                </div>
                                <div class="text-end">
                                    <img src="img/line-index.png" alt="ISC" class="img-fluid line-index"/>
                                </div>
                            </div>
                            <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                                <div class="txt-what-we">
                                    <h4 class="oExtraBold h2">What we are</h4>
                                    <h4 class="oRegular h2 mb-3">looking for?</h4>
                                    <p>This ISC system has the objective of integrating and </p>
                                    <p>standardizing all the projects of our brands belonging</p>
                                    <p>to “Textron Specialized Vehicles”, as well as serving as a</p>
                                    <p>communication channel between all of them to achieve</p>
                                    <p>a more efficient standardization.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-1"></div>
                </div>
            </div>
          </div>
        <video src="video/car-main.mp4" muted loop autoplay></video>
    </div>
</template>
<style>
</style>
<script>
// VIDEOS 
    import vidIndex from 'ASSETS/video/car-main'
//IMAGES
    import line from 'ASSETS/images/line-index'
    import logoISC from 'ASSETS/images/logo-ISC-white'
    import logoTextron from 'ASSETS/images/logo-textron-blue'
    import iconLogin from 'ASSETS/images/icono-login'


// COMPONENTS
    import footer from 'COMPONENTS/footer'
    export default{
        components: {
            'footer' : footer
        },
        setup() {
            return{
                vidIndex, 
                line, 
                logoISC,
                logoTextron, 
                iconLogin
            }
        },
        methods: {
            redirect(name){
                windows.scrollTo( 0 , 0 )
                this.$router.push({
                    name: name
                })
            }
        }
    }
</script>