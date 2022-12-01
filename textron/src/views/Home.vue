<template >
    <div class="vid-index">
        <header class="">
            <div class="container-fluid menu pt-3">
              <div class="container-fluid">
                <div class="row pt-2">
                  <div class="col-12 col-lg-1 col-sm-12 col-md-12 justify-content-center">
                    <a href="" class="a_none_style text-white">
                      <h1 class="DAGGERSQUARE">ISC</h1>
                    </a>
                  </div>
                  <div class="col-12 col-lg-9 col-sm-12 col-md-12"></div>
                  <div class="col-12 col-lg-2 col-sm-12 col-md-12 pt-1">
                    <div class="text-end">
                      <a class="btn btn-primary btn-login" href="">
                        <img :src="iconLogin" alt="Login" class="img-fluid float-start ms-3 icon-login"/>
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
                <img :src="logoTextron" alt="TEXTRON" class="img-fluid logo-textron my-4"/>
            </div>
            <div class="text-center">
                <img :src="logoISC" alt="ISC: INTEGRATED SUPPLY CHAIN" class="img-fluid logo-isc"/>
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
                                    <img :src="line" alt="ISC" class="img-fluid line-index"/>
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
        <video :src="vidIndex" muted loop autoplay></video>
    </div>
    <!-- BELIVE THAT -->
    <div class="vid-belive">
        <div class="txt-belive-that">
            <h1 class="oLight display-5"><b class="oExtraBold">We belive that</b> standardization</h1>
            <h1 class="oLight display-5">is the cornerstone of any project.</h1>
        </div>
        <video :src="vidBelive" muted loop autoplay></video>
    </div>
     <!-- BRANDS-->
     <div class="vid-brands">
        <video :src="vidBrands" muted loop autoplay></video>
    </div>
     <!-- MAKE A DIFFERENCE -->
     <div class="container-fluid p-0">
        <div class="row">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-1"></div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-10">
                        <div class="row">
                            <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                                <div class="mb-4">
                                    <h1 class="oRegular display-5"><b class="oExtraBold">Make a</b> difference</h1>
                                </div>
                                <div class="mb-5 txt-difference">
                                    <p>Show your talent through commitment, organization and </p>
                                    <p>innovation, make a difference.</p>
                                </div>
                                <div class="mb-4 txt-difference">
                                    <p>Together we will recreate a profesional and creative environment</p>
                                    <p>where you can share experiences, knowledge and expertise.</p>
                                </div>
                            </div>
                            <div class="col-12 col-sm-12 col-md-12 col-lg-5 pt-5">
                                <div class="mb-3 text-end">
                                    <h1 class="oLight h3">Please log into</h1>
                                    <h1 class="oLight h3">your account:</h1>
                                </div>
                                <div class="text-end">
                                    <a class="btn btn-primary btn-login" >
                                        <img :src="iconLogin" alt="Login" class="img-fluid float-start ms-3 icon-login"/>
                                        <h6 class="oRegular">Login</h6>
                                    </a>
                                </div>
                            </div>
                        <div class="col-12 col-sm-12 col-md-12 col-lg-1"></div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-1"></div>
                </div>
            </div>
            <img :src="makeDifference" alt="Make the difference" class="img-fluid"/>
        </div>
    </div>
    <!-- HOVER IMAGES -->
    <div class="container-fluid p-0">
        <div class="d-flex">
            <div class="ezgo">
                <div class="brands">
                    <img :src="ezgoGray" alt="EZGO" class="img-fluid"/>
                    <div class="logo">
                        <img :src="ezgoLogo" alt="EZGO" class="img-fluid mb-4"/>
                    </div>
                    <div class="hover">
                        <img :src="ezgoColor" alt="EZGO" class="img-fluid "/>
                        <div class="logo-link">
                            <div class="text-center">
                                <img :src="ezgoLogo" alt="EZGO" class="img-fluid mb-4"/>
                                <a href="" class="a_none_style text-white">
                                    <h6 class="oRegular">Visit page <i class="fa-solid fa-chevron-right ms-2 pt-1"></i></h6>
                                </a>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
            <div class="cushman">
                <div class="brands">
                    <img :src="cushmanGray" alt="EZGO" class="img-fluid"/>
                    <div class="logo">
                        <img :src="cushmanLogo" alt="EZGO" class="img-fluid mb-4"/>
                    </div>
                    <div class="hover">
                        <img :src="cushmanColor" alt="EZGO" class="img-fluid "/>
                        <div class="logo-link">
                            <div class="text-center">
                                <img :src="cushmanLogo" alt="EZGO" class="img-fluid mb-4"/>
                                <a href="" class="a_none_style text-white">
                                    <h6 class="oRegular">Visit page <i class="fa-solid fa-chevron-right ms-2 pt-1"></i></h6>
                                </a>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
            <div class="artic">
                <div class="brands">
                    <img :src="articGray" alt="EZGO" class="img-fluid"/>
                    <div class="logo">
                        <img :src="articLogo" alt="EZGO" class="img-fluid mb-4 "/>
                    </div>
                    <div class="hover">
                        <img :src="articColor" alt="EZGO" class="img-fluid "/>
                        <div class="logo-link">
                            <div class="text-center">
                                <img :src="articLogo" alt="EZGO" class="img-fluid mb-4"/>
                                <a href="" class="a_none_style text-white">
                                    <h6 class="oRegular">Visit page <i class="fa-solid fa-chevron-right ms-2 pt-1"></i></h6>
                                </a>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
            <div class="jacobsen">
                <div class="brands">
                    <img :src="jacobsenGray" alt="EZGO" class="img-fluid"/>
                    <div class="logo">
                        <img :src="jacobsenLogo" alt="EZGO" class="img-fluid mb-4"/>
                    </div>
                    <div class="hover">
                        <img :src="jacobsenColor" alt="EZGO" class="img-fluid"/>
                        <div class="logo-link">
                            <div class="text-center">
                                <img :src="jacobsenLogo" alt="EZGO" class="img-fluid mb-4"/>
                                <a href="" class="a_none_style text-white">
                                    <h6 class="oRegular">Visit page <i class="fa-solid fa-chevron-right ms-2 pt-1"></i></h6>
                                </a>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
            <div class="gse">
                <div class="brands">
                    <img :src="gseGray" alt="EZGO" class="img-fluid"/>
                    <div class="logo">
                        <img :src="gseLogo" alt="EZGO" class="img-fluid mb-4"/>
                    </div>
                    <div class="hover">
                        <img :src="gseColor" alt="EZGO" class="img-fluid "/>
                        <div class="logo-link">
                            <div class="text-center">
                                <img :src="gseLogo" alt="EZGO" class="img-fluid mb-4"/>
                                <a href="" class="a_none_style text-white">
                                    <h6 class="oRegular">Visit page <i class="fa-solid fa-chevron-right ms-2 pt-1"></i></h6>
                                </a>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </div>
    <footer></footer>
</template>
<style scoped lang="css">
    .a_none_style {
        text-decoration: none;
    }
    .vid-index{
        position: relative;
        right: 0;
        width: 100%;
        min-height:150vh;
        padding: 100px;
        display: flex;
        justify-content: space-between;
        align-items: end;
        background: #111;
        color: #fff;
        z-index: 2;
    }
    .vid-index header{
        background-color: linear-gradient( top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4));
        /*background-color: rgba(0, 0, 0, 0.5);*/
        color: #fff;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        padding: 0px 20px;
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .vid-index video{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.8;
    }
    .vid-belive{
        position: relative;
        right: 0;
        width: 100%;
        min-height:80vh;
        padding: 100px;
        display: flex;
        justify-content: space-between;
        align-items: end;
        background: #111;
        color: #fff;
        z-index: 2;
    }
    .vid-belive video{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.8;
    }
    .vid-brands{
        position: relative;
        right: 0;
        width: 100%;
        min-height:80vh;
        padding: 100px;
        display: flex;
        justify-content: space-between;
        align-items: end;
        background: #111;
        color: #fff;
        z-index: 2;
    }
    .vid-brands video{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.8;
    }
    .txt-index{
        position: absolute;
        top: 17%;
        left: 40%;
        text-align: center;
        align-items: center;
        z-index: 10000;
    }
    .txt-index-2{
        position: absolute;
        top: 57%;
        left: 5%;
        z-index: 10000;
        width: 100%;
    }
    .txt-what-we {
        margin-top: 11rem;
    }
    .txt-what-we p{
        line-height: 70%;
        font-size: 14px;
    }
    .txt-what-is p{
        line-height: 70%;
        font-size: 14px;
    }
    .txt-belive-that{
        position: absolute;
        top: 10%;
        left: 26%;
        text-align: center;
        align-items: center;
        z-index: 10000;
    }
    .txt-difference p{
        line-height: 60%;
        font-family: 'Helvetica Nue Ligth';
        font-size: 17px;
    }
    .logo-isc{
        width: 350px;
    }
    .icon-login{
        width: 18px;
    }
    .logo-textron{
        width: 180px;
    }
    .space-text{
        letter-spacing: 0.9rem;
    }
    .btn-login{
        background: rgb(100,193,186);
        background: linear-gradient(152deg, rgba(100,193,186,1) 0%, rgba(0,34,80,1) 48%, rgba(0,34,80,1) 100%);
        border: none;
        border-radius: 0;
        width: 135px;
        font-family: 'Open Sans Regular';
    }
    .btn-login:hover{
        background: rgb(100,193,186);
        background: linear-gradient(152deg, rgba(100,193,186,1) 0%, rgba(0,34,80,1) 48%, rgba(0,34,80,1) 100%);
        border: none;
        border-radius: 0;
        width: 135px;
        font-family: 'Open Sans Regular';
    }
    .btn-login:focus{
        background: rgb(100,193,186);
        background: linear-gradient(152deg, rgba(100,193,186,1) 0%, rgba(0,34,80,1) 48%, rgba(0,34,80,1) 100%);
        border: none;
        border-radius: 0;
        width: 135px;
        font-family: 'Open Sans Regular';
    }
    .btn-login h6{
        margin-top: 0.2rem;
    }
    .line-index{
        width: 70%;
    }
    /* EFFECT HOVER IMAGES */
    .brands{
        position: relative;
        height: 470px ;
        width: 300px;
    }
    .logo-link{
        position: absolute;
        bottom: 20%;
        left: 20%;
    }
    .logo{
        position: absolute;
        bottom: 10%;
        left: 20%;
    }
    .logo img{
        width: 183px;
        height: 43px;
    }
    .logo-link img{
        width: 182px;
        height: 43px;
    }
    .hover{
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        opacity: 0;
        cursor: pointer;
        color: #FAFBFC;
        text-align: center;
        align-items: center;
        transition: opacity 1.5s ease-in-out;
    }
    .brands:hover .hover{
        opacity: 1;
    }
/* ENDS EFFECT HOVER IMAGES */
</style>
<script>
// VIDEOS 
    import vidIndex from 'ASSETS/video/car-main'
    import vidBelive from 'ASSETS/video/belive-that'
    import vidBrands from 'ASSETS/video/brands'
//IMAGES
    import line from 'ASSETS/images/line-index'
    import logoISC from 'ASSETS/images/logo-ISC-white'
    import logoTextron from 'ASSETS/images/logo-textron-blue'
    import iconLogin from 'ASSETS/images/icono-login'
    import makeDifference from 'ASSETS/images/make-difference'
    import ezgoGray from 'ASSETS/images/ezgo-gray'
    import ezgoColor from 'ASSETS/images/ezgo-color'
    import ezgoLogo from 'ASSETS/images/logo-ezgo'
    import cushmanGray from 'ASSETS/images/cushman-gray'
    import cushmanColor from 'ASSETS/images/cushman-color'
    import cushmanLogo from 'ASSETS/images/logo-cushman'
    import articGray from 'ASSETS/images/artic-gray'
    import articColor from 'ASSETS/images/arctic-color'
    import articLogo from 'ASSETS/images/logo-artic'
    import jacobsenGray from 'ASSETS/images/jacobsen-gray'
    import jacobsenColor from 'ASSETS/images/jacobsen-color'
    import jacobsenLogo from 'ASSETS/images/logo-jacobsen'
    import gseGray from 'ASSETS/images/gse-gray'
    import gseColor from 'ASSETS/images/gse-color'
    import gseLogo from 'ASSETS/images/logo-gse'

// COMPONENTS
    import footer from 'COMPONENTS/Footer'
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
                iconLogin,
                makeDifference,
                ezgoGray,
                ezgoColor,ezgoLogo,
                cushmanGray,
                cushmanColor,
                cushmanLogo,
                articGray,
                articColor,
                articLogo,
                jacobsenGray,
                jacobsenColor,
                jacobsenLogo,
                gseGray,
                gseColor,
                gseLogo,
                vidBelive,
                vidBrands
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
