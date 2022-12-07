<template>
    <div id='center' class="main center">
        <div class="bg-training" :style="bgTraining">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-1"></div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-10">
                        <div class="text-start pt-3">
                            <h4 class="oExtraBold ">Training Plan</h4>
                        </div>
                        <div class="text-center pt-5">
                            <h3 class="oRegular h4">Standardized repository of critical pdf files</h3>
                            <h3 class="oRegular h4">for training by department and work </h3>
                            <h3 class="oRegular h4">system</h3>
                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-1"></div>
                </div>
            </div>
        </div>
        <div class="container-fluid py-5">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-1"></div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-11">
                    <!-- FILTERS -->
                    <div class="row mb-3">
                        <div class="col-12 col-sm-12 col-md-12 col-lg-5">
                            <div class="d-flex">
                                <div class="me-3">
                                    <select class="form-select filters-select oRegular" aria-label="Default select example">
                                        <option selected>Work System</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div class="">
                                    <select class="form-select filters-select oRegular" aria-label="Default select example">
                                        <option selected>Depatment</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div class="">
                                    <select class="form-select filters-select oRegular" aria-label="Default select example">
                                        <option selected>Company</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                            
                        </div>
                        <div class="col-12 col-sm-12 col-md-12 col-lg-2"></div>
                        <div class="col-12 col-sm-12 col-md-12 col-lg-3">
                            <form action="">
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control input-search-2" placeholder="Please, enter a keyword" aria-label="Please, enter a keyword" aria-describedby="basic-addon2">
                                    <span class="input-group-text search-input-2" id="basic-addon2"><img :src="iconsearch" alt="Search" class="img-fluid me-2 icon-search"/>Search</span>
                                </div>                                      
                            </form>
                        </div>
                        <div class="col-12 col-sm-12 col-md-12 col-lg-2">
                            <select class="form-select filters-select oRegular" aria-label="Default select example">
                                <option selected>Sort by</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                    <h6 class="txt-results hLight">56 results have been found</h6>
                    <hr class="hr-training mb-3">
                    <div class="row">
                        <div class="col-12 col-sm-12 col-md-12 col-lg-4 mb-3">
                            <div class="mx-3">
                                <div class="card mb-4">
                                    <img :src="prueba6" class="card-img-top img-fluid" alt="..."/>
                                    <div class="category-second py-2">
                                        <h6 class="oRegular">Innovation</h6>
                                    </div>
                                    <div class="card-body">
                                        <div class="mx-3">
                                            <div class="d-flex">
                                                <div class="me-5 pt-2">
                                                    <h5 class="oExtraBold text-black">Problem Solving</h5>
                                                </div>
                                                <div class="ms-4">
                                                    <img :src="logoArticBlack" alt="" class="img-fluid"/>
                                                </div>
                                            </div>
                                            <div class="mb-3 oRegular">
                                                <h6 class="txt-category-date">Quality Process / Administration</h6>
                                                <h6 class="txt-category-date">May 11, 2022</h6>
                                            </div>
                                            <div class="txt-desc-training">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                                </p>
                                            </div>
                                            <div class="mb-3">
                                                <button class="btn btn-primary btn-download-green">
                                                    <h6 class="pt-1 oRegular">Download Training Plan <i class="fa-solid fa-circle-down ms-3"></i></h6>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-12 col-md-12 col-lg-4 mb-3">
                            <div class="mx-3">
                                <div class="card mb-4">
                                    <img :src="prueba6" class="card-img-top img-fluid" alt="..."/>
                                    <div class="category-second py-2">
                                        <h6 class="oRegular">Innovation</h6>
                                    </div>
                                    <div class="card-body">
                                        <div class="mx-3">
                                            <div class="d-flex">
                                                <div class="me-5 pt-2">
                                                    <h5 class="oExtraBold text-black">Problem Solving</h5>
                                                </div>
                                                <div class="ms-4">
                                                    <img :src="logoCushmanBlack" alt="" class="img-fluid"/>
                                                </div>
                                            </div>
                                            <div class="mb-3 oRegular">
                                                <h6 class="txt-category-date">Quality Process / Administration</h6>
                                                <h6 class="txt-category-date">May 11, 2022</h6>
                                            </div>
                                            <div class="txt-desc-training">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                                </p>
                                            </div>
                                            <div class="mb-3">
                                                <button class="btn btn-primary btn-download-yellow">
                                                    <h6 class="pt-1 oRegular">Download Training Plan <i class="fa-solid fa-circle-down ms-3"></i></h6>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-12 col-md-12 col-lg-4 mb-3">
                            <div class="mx-3">
                                <div class="card mb-4">
                                    <img :src="prueba1" class="card-img-top img-fluid" alt="..."/>
                                    <div class="category-second py-2">
                                        <h6 class="oRegular">Innovation</h6>
                                    </div>
                                    <div class="card-body">
                                        <div class="mx-3">
                                            <div class="d-flex">
                                                <div class="me-5 pt-2">
                                                    <h5 class="oExtraBold text-black">Problem Solving</h5>
                                                </div>
                                                <div class="ms-4">
                                                    <img :src="logoGSEBlack" alt="" class="img-fluid"/>
                                                </div>
                                            </div>
                                            <div class="mb-3 oRegular">
                                                <h6 class="txt-category-date">Quality Process / Administration</h6>
                                                <h6 class="txt-category-date">May 11, 2022</h6>
                                            </div>
                                            <div class="txt-desc-training">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                                </p>
                                            </div>
                                            <div class="mb-3">
                                                <button class="btn btn-primary btn-download-orange">
                                                    <h6 class="pt-1 oRegular">Download Training Plan <i class="fa-solid fa-circle-down ms-3"></i></h6>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-sm-12 col-md-12 col-lg-4 mb-3">
                            <div class="mx-3">
                                <div class="card mb-4">
                                    <img :src="prueba6" class="card-img-top img-fluid" alt="..."/>
                                    <div class="category-second py-2">
                                        <h6 class="oRegular">Innovation</h6>
                                    </div>
                                    <div class="card-body">
                                        <div class="mx-3">
                                            <div class="d-flex">
                                                <div class="me-5 pt-2">
                                                    <h5 class="oExtraBold text-black">Problem Solving</h5>
                                                </div>
                                                <div class="ms-4">
                                                    <img :src="logoTextronLogistic" alt="" class="img-fluid"/>
                                                </div>
                                            </div>
                                            <div class="mb-3 oRegular">
                                                <h6 class="txt-category-date">Quality Process / Administration</h6>
                                                <h6 class="txt-category-date">May 11, 2022</h6>
                                            </div>
                                            <div class="txt-desc-training">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                                </p>
                                            </div>
                                            <div class="mb-3">
                                                <button class="btn btn-primary btn-download-blue">
                                                    <h6 class="pt-1 oRegular">Download Training Plan <i class="fa-solid fa-circle-down ms-3"></i></h6>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-12 col-md-12 col-lg-4 mb-3">
                            <div class="mx-3">
                                <div class="card mb-4">
                                    <img :src="prueba2" class="card-img-top img-fluid" alt="..."/>
                                    <div class="category-second py-2">
                                        <h6 class="oRegular">Innovation</h6>
                                    </div>
                                    <div class="card-body">
                                        <div class="mx-3">
                                            <div class="d-flex">
                                                <div class="me-5 pt-2">
                                                    <h5 class="oExtraBold text-black">Problem Solving</h5>
                                                </div>
                                                <div class="ms-4">
                                                    <img :src="logoCushmanBlack" alt="" class="img-fluid"/>
                                                </div>
                                            </div>
                                            <div class="mb-3 oRegular">
                                                <h6 class="txt-category-date">Quality Process / Administration</h6>
                                                <h6 class="txt-category-date">May 11, 2022</h6>
                                            </div>
                                            <div class="txt-desc-training">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                                </p>
                                            </div>
                                            <div class="mb-3">
                                                <button class="btn btn-primary btn-download-orange">
                                                    <h6 class="pt-1 oRegular">Download Training Plan <i class="fa-solid fa-circle-down ms-3"></i></h6>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-12 col-md-12 col-lg-4 mb-3">
                            <div class="mx-3">
                                <div class="card mb-4">
                                    <img :src="prueba1" class="card-img-top img-fluid" alt="..."/>
                                    <div class="category-second py-2">
                                        <h6 class="oRegular">Innovation</h6>
                                    </div>
                                    <div class="card-body">
                                        <div class="mx-3">
                                            <div class="d-flex">
                                                <div class="me-5 pt-2">
                                                    <h5 class="oExtraBold text-black">Problem Solving</h5>
                                                </div>
                                                <div class="ms-4">
                                                    <img :src="logoTextronLogistic" alt="" class="img-fluid"/>
                                                </div>
                                            </div>
                                            <div class="mb-3 oRegular">
                                                <h6 class="txt-category-date">Quality Process / Administration</h6>
                                                <h6 class="txt-category-date">May 11, 2022</h6>
                                            </div>
                                            <div class="txt-desc-training">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                                </p>
                                            </div>
                                            <div class="mb-3">
                                                <button class="btn btn-primary btn-download-blue">
                                                    <h6 class="pt-1 oRegular">Download Training Plan <i class="fa-solid fa-circle-down ms-3"></i></h6>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-sm-12 col-md-12 col-lg-4 mb-3">
                            <div class="mx-3">
                                <div class="card mb-4">
                                    <img :src="prueba1" class="card-img-top img-fluid" alt="..."/>
                                    <div class="category-second py-2">
                                        <h6 class="oRegular">Innovation</h6>
                                    </div>
                                    <div class="card-body">
                                        <div class="mx-3">
                                            <div class="d-flex">
                                                <div class="me-5 pt-2">
                                                    <h5 class="oExtraBold text-black">Problem Solving</h5>
                                                </div>
                                                <div class="ms-4">
                                                    <img :src="logoArticBlack" alt="" class="img-fluid"/>
                                                </div>
                                            </div>
                                            <div class="mb-3 oRegular">
                                                <h6 class="txt-category-date">Quality Process / Administration</h6>
                                                <h6 class="txt-category-date">May 11, 2022</h6>
                                            </div>
                                            <div class="txt-desc-training">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                                </p>
                                            </div>
                                            <div class="mb-3">
                                                <button class="btn btn-primary btn-download-green">
                                                    <h6 class="pt-1 oRegular">Download Training Plan <i class="fa-solid fa-circle-down ms-3"></i></h6>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-12 col-md-12 col-lg-4 mb-3">
                            <div class="mx-3">
                                <div class="card mb-4">
                                    <img :src="prueba2" class="card-img-top img-fluid" alt="..."/>
                                    <div class="category-second py-2">
                                        <h6 class="oRegular">Innovation</h6>
                                    </div>
                                    <div class="card-body">
                                        <div class="mx-3">
                                            <div class="d-flex">
                                                <div class="me-5 pt-2">
                                                    <h5 class="oExtraBold text-black">Problem Solving</h5>
                                                </div>
                                                <div class="ms-4">
                                                    <img :src="logoTextronLogistic" alt="" class="img-fluid"/>
                                                </div>
                                            </div>
                                            <div class="mb-3 oRegular">
                                                <h6 class="txt-category-date">Quality Process / Administration</h6>
                                                <h6 class="txt-category-date">May 11, 2022</h6>
                                            </div>
                                            <div class="txt-desc-training">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                                </p>
                                            </div>
                                            <div class="mb-3">
                                                <button class="btn btn-primary btn-download-blue">
                                                    <h6 class="pt-1 oRegular">Download Training Plan <i class="fa-solid fa-circle-down ms-3"></i></h6>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-12 col-md-12 col-lg-4 mb-3">
                            <div class="mx-3">
                                <div class="card mb-4">
                                    <img :src="prueba6" class="card-img-top img-fluid" alt="..."/>
                                    <div class="category-second py-2">
                                        <h6 class="oRegular">Innovation</h6>
                                    </div>
                                    <div class="card-body">
                                        <div class="mx-3">
                                            <div class="d-flex">
                                                <div class="me-5 pt-2">
                                                    <h5 class="oExtraBold text-black">Problem Solving</h5>
                                                </div>
                                                <div class="ms-4">
                                                    <img :src="logoGSEBlack" alt="" class="img-fluid"/>
                                                </div>
                                            </div>
                                            <div class="mb-3 oRegular">
                                                <h6 class="txt-category-date">Quality Process / Administration</h6>
                                                <h6 class="txt-category-date">May 11, 2022</h6>
                                            </div>
                                            <div class="txt-desc-training">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                                </p>
                                            </div>
                                            <div class="mb-3">
                                                <button class="btn btn-primary btn-download-orange">
                                                    <h6 class="pt-1 oRegular">Download Training Plan <i class="fa-solid fa-circle-down ms-3"></i></h6>
                                                </button>
                                            </div>
                                        </div>
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
    import bgTraining from 'ASSETS/images/bg-training'
    import prueba6 from 'ASSETS/images/blog-textron'
    import prueba2 from 'ASSETS/images/blog-cushman'
    import prueba1 from 'ASSETS/images/blog-artic'
    import iconsearch from 'ASSETS/images/icon-search'

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
                iconsearch,
                bgTraining,
                prueba6,
                prueba2,
                prueba1
            }
        },
        methods: {
            redirect(name){
                this.$router.push({
                    name:name
                })
            }
        },
        data() {
            return { bgTraining: { backgroundImage: `url('${bgTraining}')` } };
        },
    }
    
</script>
<style scoped>
    .bg-training{
        background-image: url('~@/assets/images/bg-training.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        height: 30vh;
        color: #fff;
    }
    .category-second{
        background-color: #000000;
        width: 150px;
        top: 10%;
        left: 0;
        position: absolute;
        text-align: center;
    }
    .input-search-2{
        border-radius: 0;
        border-right: none;
        border-color: #707070;
        background: transparent;
    }
    .search-input-2{
        background-color: transparent;
        color: #fff;
        border-radius: 0;
        border: 3px solid #000000;
    }
    .hr-training{
        opacity: 1;
    }
    .txt-results{
        color: #B7B7B7;
        font-size: 14px;
    }
    .card{
        border: none;
        border-radius: 0 0 25px 25px;
        position: relative;
    }
    .txt-category-date{
        color: #6C6C6C;
        font-size: 12px;
    }
    .txt-desc-training{
        color: #6C6C6C;
    }
    .btn-download-green{
        background-color: #599A30;
        border: transparent;
        border-radius: 0;
        width: 350px;
        text-align: center;
    }
    .btn-download-yellow{
        background-color: #CEB125;
        border: transparent;
        border-radius: 0;
        width: 350px;
        text-align: center;
    }
    .btn-download-orange{
        background-color: #DB6F15;
        border: transparent;
        border-radius: 0;
        width: 350px;
        text-align: center;
    }
    .btn-download-blue{
        background-color: #1A3668;
        border: transparent;
        border-radius: 0;
        width: 350px;
        text-align: center;
    }
    .btn-download-green:hover{
        background-color: #599A30;
        border: transparent;
        border-radius: 0;
        width: 350px;
        text-align: center;
    }
    .btn-download-yellow:hover{
        background-color: #CEB125;
        border: transparent;
        border-radius: 0;
        width: 350px;
        text-align: center;
    }
    .btn-download-orange:hover{
        background-color: #DB6F15;
        border: transparent;
        border-radius: 0;
        width: 350px;
        text-align: center;
    }
    .btn-download-blue:hover{
        background-color: #1A3668;
        border: transparent;
        border-radius: 0;
        width: 350px;
        text-align: center;
    }
    .btn-download-green:focus{
        background-color: #599A30;
        border: transparent;
        border-radius: 0;
        width: 350px;
        text-align: center;
    }
    .btn-download-yellow:focus{
        background-color: #CEB125;
        border: transparent;
        border-radius: 0;
        width: 350px;
        text-align: center;
    }
    .btn-download-orange:focus{
        background-color: #DB6F15;
        border: transparent;
        border-radius: 0;
        width: 350px;
        text-align: center;
    }
    .btn-download-blue:focus{
        background-color: #1A3668;
        border: transparent;
        border-radius: 0;
        width: 350px;
        text-align: center;
    }
    .filters-select{
        background-color: #000000;
        color: #fff;
        border-radius: 0;
        border: transparent;
        text-align: center;
        width: 150px;
        background-image: url('../img/arrow-down-w.png');
    }
    .card-body img{
        width: 90px;
    }
    .icon-search{
        width: 14px;
    }
</style>