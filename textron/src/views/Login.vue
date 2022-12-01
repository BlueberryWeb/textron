<template>
    <header class="">
        <div class="container-fluid menu pt-4">
            <div class="row pt-2">
                <div class="col-12 col-lg-1 col-sm-12 col-md-12 justify-content-center">
                    <div class="text-center">
                        <a href="" class="a_none_style text-white">
                            <h1 class="DAGGERSQUARE">ISC</h1>
                          </a>
                    </div>
                </div>
                <div class="col-12 col-lg-9 col-sm-12 col-md-12"></div>
                <div class="col-12 col-lg-2 col-sm-12 col-md-12 pt-1">
                  <div class="text-end">
                        <a class="text-white" href="">
                        <h6 class="oRegular">Back to Index <font-awesome-icon icon="fa-solid fa-chevron-right ms-2 pt-1" /> </h6>
                        </a>
                  </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-5"></div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-3">
                    <div class="">
                        <h1 class="oExtraBold mb-0 h2">Login</h1>
                        <h1 class="oRegular h2">into your account</h1>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-4"></div>
            </div>
        </div>
    </header>
    <div class="vid-login">
        <div class="txt-login">
            <div class="containe-fluid">
                <div class="row">
                    <div class="row">
                        <div class="col-12 col-sm-12 col-md-12 col-lg-5"></div>
                        <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                            <div class="row">
                                <div class="col-12 col-sm-12 col-md-12 col-lg-6 pt-5">
                                    <div class="mb-4 text-center">
                                        <img :src="logoTextron" alt="TEXTRON" class="img-fluid logo-textron-login"/>
                                    </div>
                                    <div class="text-center">
                                        <img :src="logoISC" alt="ISC: INTEGRATED SUPPLY CHAIN" class="img-fluid logo-isc-login"/>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                                    <div class="">
                                        <form class="form-login">
                                            <div class="mb-3">
                                              <label for="user" class="form-label">User:</label>
                                              <input type="text" class="form-control" id="user" name="user" required/>
                                            </div>
                                            <div class="mb-3">
                                              <label for="password" class="form-label">Password:</label>
                                              <input type="password" class="form-control" id="password" name="password"/>
                                            </div>
                                            <div class="mb-3 forget-pass">
                                                <a href="" class="text-white">
                                                    <h6 class="oRegular">Did you forget your password?</h6>
                                                </a>
                                            </div>
                                            <div class="text-end me-5">
                                                <a class="btn btn-primary btn-login" href="">
                                                    <h6 class="oRegular">Login</h6>
                                                </a>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-12 col-md-12 col-lg-1"></div>
                    </div>
                </div>
            </div>
        </div>
        <video :src="vidLogin" muted loop autoplay></video>
    </div>
</template>
<script>
    //IMAGES
     import logoTextron from 'ASSETS/images/logo-textron-blue'
     import logoISC from 'ASSETS/images/logo-ISC-white'
    //VIDEOS
    import vidLogin from 'ASSETS/video/vid-login'
    //COMPONENTS
    import footer from 'COMPONENTS/footer'

    export default{
        components: {
            'footer' : footer
        },
        setup () {
            return {
                logoTextron,
                logoISC,
                vidLogin
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
<style lang="css" scoped>
    .a_none_style {
        text-decoration: none;
    }
    .vid-login{
        position: relative;
        right: 0;
        width: 100%;
        min-height:70vh;
        padding: 100px;
        display: flex;
        justify-content: space-between;
        align-items: end;
        background: #111;
        color: #fff;
        z-index: 2;
    }
    .vid-login video{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.8;
    }
    .txt-login{
        position: absolute;
        top: 27%;
        left: 0;
        z-index: 10000;
        width: 100%;
    }
    .logo-isc-login{
        width: 250px;
    }
    .logo-textron-login{
        width: 150px;
    }
    .form-login{
        font-family: 'Open Sans Regular';
    }
    .form-login input{
        background: transparent;
        width: 300px;
        border: 0.5px solid #707070;
        height: 45px;
    }
    .form-login label{
        font-family: 'Open Sans Regular';
    }
</style>>