<template>
    <div id='center' class="main center">
        <div class="container py-5">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-1"></div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-11">
                    <div class="">
                        <h2 class="oExtraBold h3">Success Stories</h2>
                    </div>
                    <div class="row">
                        <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                            <div class="border-box pt-4 mb-4">
                                <div class="mx-5">
                                    <div class="row">
                                        <div class="col-12 col-sm-12 col-md-12 col-lg-5">
                                            <div class="user-post">
                                                <img :src="photoProfile" alt="ISC user" class="img-fluid float-start me-4"/>
                                                <h6 class="oExtraBold mb-0">Andrew Miller</h6>
                                                <span>Techincal Analyst</span>
                                            </div>
                                        </div>
                                        <div class="col-12 col-sm-12 col-md-12 col-lg-3">
                                            <div class="me-5 ms-5 words-post">
                                                <span class="oRegular">0/500</span>
                                            </div>
                                        </div>
                                        <div class="col-12 col-sm-12 col-md-12 col-lg-4">
                                            <div class="text-center">
                                                <img :src="logoArtic" alt="" class="img-fluid logo-feed"/>
                                            </div>
                                        </div>
                                    </div>
                                    <form action="">
                                        <div class="form-floating">
                                            <textarea class="form-control textarea-post-user" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
                                            <label for="floatingTextarea2">Share your success story with us:</label>
                                        </div>
                                        <div class="row my-3">
                                            <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                                                <div class="mb-3 add-post-user">
                                                    <label for="file"><img :src="paperclip" alt="add" class="img-fluid paperclip"/> Attach your photo or video </label>
                                                    <input type="file" name="file" id="file" />
                                                </div>
                                            </div>
                                            <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                                                <div class="text-end">
                                                    <button class="btn btn-primary btn-green">
                                                        <h6 class="oRegular mt-1">Submit</h6>
                                                    </button>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <!-- LAST SUCCESS STORIES -->
                            <div class="d-flex mb-3">
                                <div class="">
                                    <h3 class="oRegular h4"><b class="oExtraBold">Last</b> Success Stories</h3>    
                                </div>
                                <div class="ms-4">
                                    <select class="form-select filter-select-favorites" aria-label="Default select example">
                                        <option selected>Company</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div class="">
                                    <select class="form-select filter-select-favorites" aria-label="Default select example">
                                        <option selected>Sort by</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                            <div class="border-box pt-4 mb-3">
                                <div class="favorite-success">
                                    <div class="row mb-3">
                                        <div class="col-12 col-sm-12 col-md-12 col-lg-5">
                                            <div class="user-post">
                                                <img :src="photoProfile" alt="ISC user" class="img-fluid float-start me-4"/>
                                                <h6 class="oExtraBold mb-0">Andrew Miller</h6>
                                                <span>Techincal Analyst</span>
                                            </div>
                                        </div>
                                        <div class="col-12 col-sm-12 col-md-12 col-lg-5">
                                            <div class="text-end">
                                                <h6 class="oRegular">May 11, 2022</h6>
                                            </div>
                                        </div>
                                        <div class="col-12 col-sm-12 col-md-12 col-lg-2">
                                            <div class="text-center">
                                                <img :src="logoArtic" alt="ISC logo" class="img-fluid logo-feed"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas necessitatibus aut sit quis omnis eaque,
                                            fugiat fuga autem quibusdam nulla consectetur tenetur, illo dolorum quas quos porro assumenda ab sunt!
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas necessitatibus aut sit quis omnis eaque,
                                            fugiat fuga autem quibusdam nulla consectetur tenetur, illo dolorum quas quos porro assumenda ab sunt!
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas necessitatibus aut sit quis omnis eaque,
                                            fugiat fuga autem quibusdam nulla consectetur tenetur, illo dolorum quas quos porro assumenda ab sunt!
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas necessitatibus aut sit quis omnis eaque,
                                            fugiat fuga autem quibusdam nulla consectetur tenetur, illo dolorum quas quos porro assumenda ab sunt!
                                        </p>
                                    </div>
                                    <div class=" mb-3">
                                        <img :src="prueba2" alt="Last success stories" class="img-fluid"/>
                                    </div>
                                    <div class="text-end mb-4">
                                        <h1 class="oExtraBold h5"><img :src="starSuccess" alt="Favorite" class="img-fluid star-favorite"> 14</h1>
                                    </div>
                                </div>
                            </div>
                            <div class="border-box pt-4">
                                <div class="favorite-success">
                                    <div class="row mb-3">
                                        <div class="col-12 col-sm-12 col-md-12 col-lg-5">
                                            <div class="user-post">
                                                <img :src="photoProfile" alt="ISC user" class="img-fluid float-start me-4"/>
                                                <h6 class="oExtraBold mb-0">Andrew Miller</h6>
                                                <span>Techincal Analyst</span>
                                            </div>
                                        </div>
                                        <div class="col-12 col-sm-12 col-md-12 col-lg-5">
                                            <div class="text-end">
                                                <h6 class="oRegular">May 11, 2022</h6>
                                            </div>
                                        </div>
                                        <div class="col-12 col-sm-12 col-md-12 col-lg-2">
                                            <div class="text-center">
                                                <img :src="logoArtic" alt="ISC logo" class="img-fluid logo-feed"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas necessitatibus aut sit quis omnis eaque,
                                            fugiat fuga autem quibusdam nulla consectetur tenetur, illo dolorum quas quos porro assumenda ab sunt!
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas necessitatibus aut sit quis omnis eaque,
                                            fugiat fuga autem quibusdam nulla consectetur tenetur, illo dolorum quas quos porro assumenda ab sunt!
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas necessitatibus aut sit quis omnis eaque,
                                            fugiat fuga autem quibusdam nulla consectetur tenetur, illo dolorum quas quos porro assumenda ab sunt!
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas necessitatibus aut sit quis omnis eaque,
                                            fugiat fuga autem quibusdam nulla consectetur tenetur, illo dolorum quas quos porro assumenda ab sunt!
                                        </p>
                                    </div>
                                    <div class="">
                                        <video controls class="" height="300" width="500">
                                            <source :src="videoprueba" type="video/mp4">
                                          </video>
                                    </div>
                                    <div class="text-end mb-4">
                                        <h1 class="oExtraBold h5"><img :src="starFav" alt="Favorite" class="img-fluid star-favorite"> 14</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                            <!-- FAVORITES SUCCESS -->
                            <div class="d-flex mb-3">
                                <div class="">
                                    <h3 class="oRegular h4"><b class="oExtraBold">Favorite</b> Success Stories</h3>    
                                </div>
                                <div class="ms-4">
                                    <select class="form-select filter-select-favorites" aria-label="Default select example">
                                        <option selected>Company</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div class="">
                                    <select class="form-select filter-select-favorites" aria-label="Default select example">
                                        <option selected>Sort by</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                            <div class="border-box pt-4 mb-3">
                                <div class="favorite-success">
                                    <div class="row mb-3">
                                        <div class="col-12 col-sm-12 col-md-12 col-lg-5">
                                            <div class="user-post">
                                                <img :src="photoProfile" alt="ISC user" class="img-fluid float-start me-4"/>
                                                <h6 class="oExtraBold mb-0">Andrew Miller</h6>
                                                <span>Techincal Analyst</span>
                                            </div>
                                        </div>
                                        <div class="col-12 col-sm-12 col-md-12 col-lg-5">
                                            <div class="text-end">
                                                <h6 class="oRegular">May 11, 2022</h6>
                                            </div>
                                        </div>
                                        <div class="col-12 col-sm-12 col-md-12 col-lg-2">
                                            <div class="text-center">
                                                <img :src="logoArtic" alt="ISC logo" class="img-fluid logo-feed"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas necessitatibus aut sit quis omnis eaque,
                                            fugiat fuga autem quibusdam nulla consectetur tenetur, illo dolorum quas quos porro assumenda ab sunt!
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas necessitatibus aut sit quis omnis eaque,
                                            fugiat fuga autem quibusdam nulla consectetur tenetur, illo dolorum quas quos porro assumenda ab sunt!
                                        </p>
                                    </div>
                                    <div class="">
                                        <video controls class="" height="300" width="500">
                                            <source :src="videoprueba" type="video/mp4">
                                        </video>
                                    </div>
                                    <div class="text-end mb-4">
                                        <h1 class="oExtraBold h5"><img :src="starFav" alt="Favorite" class="img-fluid star-favorite"> 14</h1>
                                    </div>
                                </div>
                            </div>
                            <div class="border-box pt-4 mb-3">
                                <div class="favorite-success">
                                    <div class="row mb-3">
                                        <div class="col-12 col-sm-12 col-md-12 col-lg-5">
                                            <div class="user-post">
                                                <img :src="photoProfile" alt="ISC user" class="img-fluid float-start me-4"/>
                                                <h6 class="oExtraBold mb-0">Andrew Miller</h6>
                                                <span>Techincal Analyst</span>
                                            </div>
                                        </div>
                                        <div class="col-12 col-sm-12 col-md-12 col-lg-5">
                                            <div class="text-end">
                                                <h6 class="oRegular">May 11, 2022</h6>
                                            </div>
                                        </div>
                                        <div class="col-12 col-sm-12 col-md-12 col-lg-2">
                                            <div class="text-center">
                                                <img :src="logoArtic" alt="ISC logo" class="img-fluid logo-feed"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas necessitatibus aut sit quis omnis eaque,
                                            fugiat fuga autem quibusdam nulla consectetur tenetur, illo dolorum quas quos porro assumenda ab sunt!
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas necessitatibus aut sit quis omnis eaque,
                                            fugiat fuga autem quibusdam nulla consectetur tenetur, illo dolorum quas quos porro assumenda ab sunt!
                                        </p>
                                    </div>
                                    <div class="">
                                        <img :src="prueba2" alt="" class="img-fluid"/>
                                    </div>
                                    <div class="text-end mb-4">
                                        <h1 class="oExtraBold h5"><img :src="starFav" alt="Favorite" class="img-fluid star-favorite"> 14</h1>
                                    </div>
                                </div>
                            </div>
                            <div class="border-box pt-4 mb-3">
                                <div class="favorite-success">
                                    <div class="row mb-3">
                                        <div class="col-12 col-sm-12 col-md-12 col-lg-5">
                                            <div class="user-post">
                                                <img :src="photoProfile" alt="ISC user" class="img-fluid float-start me-4"/>
                                                <h6 class="oExtraBold mb-0">Andrew Miller</h6>
                                                <span>Techincal Analyst</span>
                                            </div>
                                        </div>
                                        <div class="col-12 col-sm-12 col-md-12 col-lg-5">
                                            <div class="text-end">
                                                <h6 class="oRegular">May 11, 2022</h6>
                                            </div>
                                        </div>
                                        <div class="col-12 col-sm-12 col-md-12 col-lg-2">
                                            <div class="text-center">
                                                <img :src="logoArtic" alt="ISC logo" class="img-fluid logo-feed"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas necessitatibus aut sit quis omnis eaque,
                                            fugiat fuga autem quibusdam nulla consectetur tenetur, illo dolorum quas quos porro assumenda ab sunt!
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas necessitatibus aut sit quis omnis eaque,
                                            fugiat fuga autem quibusdam nulla consectetur tenetur, illo dolorum quas quos porro assumenda ab sunt!
                                        </p>
                                    </div>
                                    <div class="">
                                        <img :src="prueba4" alt="" class="img-fluid"/>
                                    </div>
                                    <div class="text-end mb-4">
                                        <h1 class="oExtraBold h5"><img :src="starFav" alt="Favorite" class="img-fluid star-favorite"> 14</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container py-5">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-1"></div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-10">
                    <div class="d-flex">
                        <div class="ms-5 me-5">
                            <img :src="logoEzgo" alt="EZGO" class="img-fluid logo-1"/>
                        </div>
                        <div class="ms-5 me-5">
                            <img :src="logoCushman" alt="CUSHMAN" class="img-fluid logo-2"/>
                        </div>
                        <div class="ms-5 me-5">
                            <img :src="logoArtic" alt="ARTIC CAT" class="img-fluid logo-3"/>
                        </div>
                        <div class="ms-5 me-5">
                            <img :src="logoJacobsen" alt="JACOBSEN" class="img-fluid logo-4"/>
                        </div>
                        <div class="ms-5 me-5">
                            <img :src="logoGSE" alt="TEXTRON GSE" class="img-fluid logo-5"/>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-1"></div>
            </div>
        </div>
    </div>
</template>
<script>
//IMAGES
    import logoCushman from 'ASSETS/images/logo-cushman'
    import logoGSE from 'ASSETS/images/logo-gse'
    import logoEzgo from 'ASSETS/images/logo-ezgo'
    import logoArtic from 'ASSETS/images/logo-artic';
    import logoJacobsen from 'ASSETS/images/logo-jacobsen'
    import logoGSEBlack from 'ASSETS/images/logo-gse-black'
    import logoArticBlack from 'ASSETS/images/logo-artic-black'
    import logoCushmanBlack from 'ASSETS/images/logo-cushman-black'
    import logoTextronLogistic from 'ASSETS/images/logo-textron-logistic'
    import starFav from 'ASSETS/images/star-favorites'
    import starSuccess from 'ASSETS/images/star-last-success'
    import paperclip from 'ASSETS/images/paperclip'
    import prueba4 from 'ASSETS/images/blog-artic-segunda'
    import photoProfile from 'ASSETS/images/andrew-user'
    import prueba2 from 'ASSETS/images/blog-cushman'
    import videoprueba from 'ASSETS/video/belive-that'
    export default{
        setup(){
            return{
                logoCushman,
                logoGSE,
                logoEzgo,
                logoArtic,
                logoJacobsen,
                logoGSEBlack,
                logoArticBlack,
                logoCushmanBlack,
                logoTextronLogistic,
                starFav,
                starSuccess,
                paperclip,
                prueba4,
                photoProfile,
                prueba2,
                videoprueba
            }
        },
        methods: {
            redirect(name){
                this.$router.push({
                    name:name
                })
            }
        }
    }
</script>
<style scoped>
    .border-box{
        border: 2px solid #939393;
        border-radius: 25px;
    }
    .user-post h6{
        font-size: 16px;
    }
    .user-post span{
        font-size: 12px;
        font-family: 'Open Sans Regular';
    }
    .user-post img{
        border: 3px solid #599A30;
        border-radius: 100%;
    }
    .logo-feed{
        width: 70px;
    }
    .words-post span{
        font-size: 13px;
    }
    .textarea-post-user{
        background: transparent;
        border: none;
        border-bottom: 1px solid #fff;
        border-radius: 0;
    }
    .add-attach{
        background: transparent;
        color: #fff;
        border: none;
    }
    .input-add-attach{
        background: transparent;
        border: none;
        color: #fff;
    }
    .add-post-user{
        width:400px;
        overflow:hidden;
        background: transparent;
    }
    .add-post-user  label {
        margin:0;
        padding:10px;
        width:auto;
        max-width:300px;
        background-color: transparent;
        font-family: 'Open Sans Regular';
        border:none;
        color:#fff;
        cursor:pointer;
        text-align:center;
        font-size: 14px;
        border-radius: 0;
        -webkit-border-radius:0;
        -webkit-transition:0.2s ease all;
        -moz-transition:0.2s ease all;
            -ms-transition:0.2s ease all;
            -o-transition:0.2s ease all;
                transition:0.2s ease all;
    }
    .paperclip{
        width: 10px;
        margin-right: 0.5rem;
    }
    .filter-select-favorites{
        background-color: #000000;
        color: #fff;
        border-radius: 0;
        border: transparent;
        font-family: 'Open Sans Regular';
        text-align: center;
        background-image: url('../img/arrow-down-w.png');
        
    }
    .star-favorite{
        width: 25px;
        cursor: pointer;
    }
    .favorite-success{
        margin-left: 2.5rem;
        margin-right: 3rem;
    }
    .btn-green{
        background-color: #599A30;
        border: transparent;
        color: #fff;
        border-radius: 0;
        width: 150px;
    }
</style>