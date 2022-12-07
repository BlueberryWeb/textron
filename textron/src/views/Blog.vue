<template>
    <div id='center' class="main center">
        <div class="container-fluid p-0">
            <div class="row py-3">
                <div class="col-12 col-sm-12 col-md-12 col-lg-3">
                    <div class="text-center">
                        <h1 class="oExtraBold h3">Business Updates</h1>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-8"></div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-1">
                    <div class="add-update">
                        <a class="a_none_style text-white" data-bs-toggle="modal" data-bs-target="#add-update">
                            <font-awesome-icon icon="fa-solid fa-plus"  class="fa-plus"/>
                        </a>
                    </div>
                </div>
            </div>
            
            <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-8 p-0">
                    <div class="blog-first">
                        <img :src="firstBlog" alt="ISC" class="img-fluid wallpaper-lg"/>
                        <div class="info-blog-first">
                            <div class="category py-1">
                                <h6 class="oRegular mt-1">Technology</h6>
                            </div>
                            <div class="date">
                                <h6 class="hLight">May, 11, 2022</h6>
                                <img :src="logoGSE" alt="ISC" class="img-fluid"/>
                            </div>
                            <div class="title">
                                <h1 class="oExtraBold">
                                    Textron GSE to Electrify Product Line with General Motors and Powertrain Control Solutions.
                                </h1>
                            </div>
                            <div class="link">
                                <a href="#" class="a_none_style text-white">
                                    <h6 class="oRegular">View more <img :src="chevronright" alt="view more" class="img-fluid ms-2"/></h6>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-4 p-0">
                    <div class="blog-second">
                        <img :src="secondBlog" alt="ISC" class="img-fluid wallpaper-sm"/>
                        <div class="info-blog-second">
                            <div class="category-second py-1">
                                <h6 class="oRegular mt-1">Innovation</h6>
                            </div>
                            <div class="date-second">
                                <img :src="logoCushman" alt="ISC" class="img-fluid mb-1"/>
                                <h6 class="hLight">May, 11, 2022</h6>
                            </div>
                            <div class="title-second">
                                <h1 class="oExtraBold h6">
                                    Bell Announces Signed Purchase Agreements for Four Bell 505 Aircraft
                                </h1>
                            </div>
                            <div class="link">
                                <a href="#" class="a_none_style text-white">
                                    <h6 class="oRegular">View more <img :src="chevronright" alt="view more" class="img-fluid ms-2"/></h6>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="blog-third">
                        <img :src="thirdBlog" alt="ISC" class="img-fluid wallpaper-sm"/>
                        <div class="info-blog-third">
                            <div class="category-second py-1">
                                <h6 class="oRegular mt-1">Technology</h6>
                            </div>
                            <div class="date-second">
                                <img :src="logoCushman" alt="ISC" class="img-fluid mb-1"/>
                                <h6 class="hLight">May, 11, 2022</h6>
                            </div>
                            <div class="title-second">
                                <h1 class="oExtraBold h6">
                                    Bell Announces Signed Purchase Agreements for Four Bell 505 Aircraft
                                </h1>
                            </div>
                            <div class="link">
                                <a href="#" class="a_none_style text-white">
                                    <h6 class="oRegular">View more <img :src="chevronright" alt="view more" class="img-fluid ms-2"/></h6>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-white py-5">
            <div class="container-fluid">
                <div class="row mb-3">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-1"></div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-11">
                        <!-- FILTERS -->
                        <div class="row">
                            <div class="col-12 col-sm-12 col-md-12 col-lg-3">
                                <div class="d-flex">
                                    <div class="me-3">
                                        <select class="form-select filters-select oRegular" aria-label="Default select example">
                                            <option selected>Categories</option>
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
                            <div class="col-12 col-sm-12 col-md-12 col-lg-4"></div>
                            <div class="col-12 col-sm-12 col-md-12 col-lg-3">
                                <form action="">
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control input-search" placeholder="Please, enter a keyword" aria-label="Please, enter a keyword" aria-describedby="basic-addon2">
                                        <span class="input-group-text search-input" id="basic-addon2"> <img :src="iconsearch" alt="Search" class="img-fluid me-2 icon-search"/>Search</span>
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
                        <!-- POSTS -->
                        <div class="row">
                            <div class="col-12 col-sm-12 col-md-12 col-lg-4 mb-">
                                <div class="mx-3">
                                    <div class="post">
                                        <img :src="prueba1" alt="ISC" class="img-fluid"/>
                                        <div class="category-second py-1">
                                            <h6 class="oRegular mt-1">Innovation</h6>
                                        </div>
                                    </div>
                                    <div class="d-flex date-logo-post mb-2">
                                        <div class="me-3">
                                            <img :src="logoArticBlack" alt="ISC" class="img-fluid"/>
                                        </div>
                                        <div class="">
                                            <h6 class="oRegular">May 11, 2022</h6>
                                        </div>
                                    </div>
                                    <div class="title-post">
                                        <h6 class="oExtraBold ">
                                            Textron GSE to Electrify Product Line with General Motors and Powertrain Control Solutions.
                                        </h6>
                                    </div>
                                    <div class="text-end">
                                        <a href="#" class="a_none_style txt-text">
                                            <h6 class="oRegular txt-text">View more <img :src="chevronright" alt="view more" class="img-fluid ms-2"/></h6>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-12 col-md-12 col-lg-4 mb-3">
                                <div class="mx-3">
                                    <div class="post">
                                        <img :src="prueba2" alt="ISC" class="img-fluid"/>
                                        <div class="category-second py-1">
                                            <h6 class="oRegular mt-1">Financial</h6>
                                        </div>
                                    </div>
                                    <div class="d-flex date-logo-post mb-2">
                                        <div class="me-3">
                                            <img :src="logoCushmanBlack" alt="ISC" class="img-fluid"/>
                                        </div>
                                        <div class="">
                                            <h6 class="oRegular">May 11, 2022</h6>
                                        </div>
                                    </div>
                                    <div class="title-post">
                                        <h6 class="oExtraBold ">
                                            Textron GSE to Electrify Product Line with General Motors and Powertrain Control Solutions.
                                        </h6>
                                    </div>
                                    <div class="text-end">
                                        <a href="#" class="a_none_style txt-text">
                                            <h6 class="oRegular txt-text">View more <img :src="chevronright" alt="view more" class="img-fluid ms-2"/></h6>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-12 col-md-12 col-lg-4 mb-3">
                                <div class="mx-3">
                                    <div class="post">
                                        <img :src="prueba3" alt="ISC" class="img-fluid"/>
                                        <div class="category-second py-1">
                                            <h6 class="oRegular mt-1">Education</h6>
                                        </div>
                                    </div>
                                    <div class="d-flex date-logo-post mb-2">
                                        <div class="me-3">
                                            <img :src="logoGSEBlack" alt="ISC" class="img-fluid"/>
                                        </div>
                                        <div class="">
                                            <h6 class="oRegular">May 11, 2022</h6>
                                        </div>
                                    </div>
                                    <div class="title-post">
                                        <h6 class="oExtraBold ">
                                            Textron GSE to Electrify Product Line with General Motors and Powertrain Control Solutions.
                                        </h6>
                                    </div>
                                    <div class="text-end">
                                        <a href="#" class="a_none_style txt-text">
                                            <h6 class="oRegular txt-text">View more <img :src="chevronright" alt="view more" class="img-fluid ms-2"/></h6>
                                        </a>
                                    </div>
                                </div> 
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 col-sm-12 col-md-12 col-lg-4 mb-3">
                                <div class="mx-3">
                                    <div class="post">
                                        <img :src="prueba4" alt="ISC" class="img-fluid"/>
                                        <div class="category-second py-1">
                                            <h6 class="oRegular mt-1">Innovation</h6>
                                        </div>
                                    </div>
                                    <div class="d-flex date-logo-post mb-2">
                                        <div class="me-3">
                                            <img :src="logoArticBlack" alt="ISC" class="img-fluid"/>
                                        </div>
                                        <div class="">
                                            <h6 class="oRegular">May 11, 2022</h6>
                                        </div>
                                    </div>
                                    <div class="title-post">
                                        <h6 class="oExtraBold ">
                                            Textron GSE to Electrify Product Line with General Motors and Powertrain Control Solutions.
                                        </h6>
                                    </div>
                                    <div class="text-end">
                                        <a href="#" class="a_none_style txt-text">
                                            <h6 class="oRegular txt-text">View more <img :src="chevronright" alt="view more" class="img-fluid ms-2"/></h6>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-12 col-md-12 col-lg-4 mb-3">
                                <div class="mx-3">
                                    <div class="post">
                                        <img :src="prueba5" alt="ISC" class="img-fluid"/>
                                        <div class="category-second py-1">
                                            <h6 class="oRegular mt-1">Financial</h6>
                                        </div>
                                    </div>
                                    <div class="d-flex date-logo-post mb-2">
                                        <div class="me-3">
                                            <img :src="logoCushmanBlack" alt="ISC" class="img-fluid"/>
                                        </div>
                                        <div class="">
                                            <h6 class="oRegular">May 11, 2022</h6>
                                        </div>
                                    </div>
                                    <div class="title-post">
                                        <h6 class="oExtraBold ">
                                            Textron GSE to Electrify Product Line with General Motors and Powertrain Control Solutions.
                                        </h6>
                                    </div>
                                    <div class="text-end">
                                        <a href="#" class="a_none_style txt-text">
                                            <h6 class="oRegular txt-text">View more <img :src="chevronright" alt="view more" class="img-fluid ms-2"/></h6>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-12 col-md-12 col-lg-4 mb-3">
                                <div class="mx-3">
                                    <div class="post">
                                        <img :src="prueba6" alt="ISC" class="img-fluid"/>
                                        <div class="category-second py-1">
                                            <h6 class="oRegular mt-1">Education</h6>
                                        </div>
                                    </div>
                                    <div class="d-flex date-logo-post mb-2">
                                        <div class="me-3">
                                            <img :src="logoGSEBlack" alt="ISC" class="img-fluid"/>
                                        </div>
                                        <div class="">
                                            <h6 class="oRegular">May 11, 2022</h6>
                                        </div>
                                    </div>
                                    <div class="title-post">
                                        <h6 class="oExtraBold ">
                                            Textron GSE to Electrify Product Line with General Motors and Powertrain Control Solutions.
                                        </h6>
                                    </div>
                                    <div class="text-end">
                                        <a href="#" class="a_none_style txt-text">
                                            <h6 class="oRegular txt-text">View more <img :src="chevronright" alt="view more" class="img-fluid ms-2"/></h6>
                                        </a>
                                    </div>
                                </div> 
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 col-sm-12 col-md-12 col-lg-4 mb-3">
                                <div class="mx-3">
                                    <div class="post">
                                        <img :src="prueba1" alt="ISC" class="img-fluid"/>
                                        <div class="category-second py-1">
                                            <h6 class="oRegular mt-1">Innovation</h6>
                                        </div>
                                    </div>
                                    <div class="d-flex date-logo-post mb-2">
                                        <div class="me-3">
                                            <img :src="logoArticBlack" alt="ISC" class="img-fluid"/>
                                        </div>
                                        <div class="">
                                            <h6 class="oRegular">May 11, 2022</h6>
                                        </div>
                                    </div>
                                    <div class="title-post">
                                        <h6 class="oExtraBold ">
                                            Textron GSE to Electrify Product Line with General Motors and Powertrain Control Solutions.
                                        </h6>
                                    </div>
                                    <div class="text-end">
                                        <a href="#" class="a_none_style txt-text">
                                            <h6 class="oRegular txt-text">View more <img :src="chevronright" alt="view more" class="img-fluid ms-2"/></h6>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-12 col-md-12 col-lg-4 mb-3">
                                <div class="mx-3">
                                    <div class="post">
                                        <img :src="prueba2" alt="ISC" class="img-fluid"/>
                                        <div class="category-second py-1">
                                            <h6 class="oRegular mt-1">Financial</h6>
                                        </div>
                                    </div>
                                    <div class="d-flex date-logo-post mb-2">
                                        <div class="me-3">
                                            <img :src="logoCushmanBlack" alt="ISC" class="img-fluid"/>
                                        </div>
                                        <div class="">
                                            <h6 class="oRegular">May 11, 2022</h6>
                                        </div>
                                    </div>
                                    <div class="title-post">
                                        <h6 class="oExtraBold ">
                                            Textron GSE to Electrify Product Line with General Motors and Powertrain Control Solutions.
                                        </h6>
                                    </div>
                                    <div class="text-end">
                                        <a href="#" class="a_none_style txt-text">
                                            <h6 class="oRegular txt-text">View more <img :src="chevronright" alt="view more" class="img-fluid ms-2"/></h6>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-12 col-md-12 col-lg-4 mb-3">
                                <div class="mx-3">
                                    <div class="post">
                                        <img :src="prueba3" alt="ISC" class="img-fluid"/>
                                        <div class="category-second py-1">
                                            <h6 class="oRegular mt-1">Education</h6>
                                        </div>
                                    </div>
                                    <div class="d-flex date-logo-post mb-2">
                                        <div class="me-3">
                                            <img :src="logoGSEBlack" alt="ISC" class="img-fluid"/>
                                        </div>
                                        <div class="">
                                            <h6 class="oRegular">May 11, 2022</h6>
                                        </div>
                                    </div>
                                    <div class="title-post">
                                        <h6 class="oExtraBold ">
                                            Textron GSE to Electrify Product Line with General Motors and Powertrain Control Solutions.
                                        </h6>
                                    </div>
                                    <div class="text-end">
                                        <a href="#" class="a_none_style txt-text">
                                            <h6 class="oRegular txt-text">View more <img :src="chevronright" alt="view more" class="img-fluid ms-2"/></h6>
                                        </a>
                                    </div>
                                </div> 
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 col-sm-12 col-md-12 col-lg-4 mb-3">
                                <div class="mx-3">
                                    <div class="post">
                                        <img :src="prueba4" alt="ISC" class="img-fluid"/>
                                        <div class="category-second py-1">
                                            <h6 class="oRegular mt-1">Innovation</h6>
                                        </div>
                                    </div>
                                    <div class="d-flex date-logo-post mb-2">
                                        <div class="me-3">
                                            <img :src="logoArticBlack" alt="ISC" class="img-fluid"/>
                                        </div>
                                        <div class="">
                                            <h6 class="oRegular">May 11, 2022</h6>
                                        </div>
                                    </div>
                                    <div class="title-post">
                                        <h6 class="oExtraBold ">
                                            Textron GSE to Electrify Product Line with General Motors and Powertrain Control Solutions.
                                        </h6>
                                    </div>
                                    <div class="text-end">
                                        <a href="#" class="a_none_style txt-text">
                                            <h6 class="oRegular txt-text">View more <img :src="chevronright" alt="view more" class="img-fluid ms-2"/></h6>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-12 col-md-12 col-lg-4 mb-3">
                                <div class="mx-3">
                                    <div class="post">
                                        <img :src="prueba5" alt="ISC" class="img-fluid"/>
                                        <div class="category-second py-1">
                                            <h6 class="oRegular mt-1">Financial</h6>
                                        </div>
                                    </div>
                                    <div class="d-flex date-logo-post mb-2">
                                        <div class="me-3">
                                            <img :src="logoCushmanBlack" alt="ISC" class="img-fluid"/>
                                        </div>
                                        <div class="">
                                            <h6 class="oRegular">May 11, 2022</h6>
                                        </div>
                                    </div>
                                    <div class="title-post">
                                        <h6 class="oExtraBold ">
                                            Textron GSE to Electrify Product Line with General Motors and Powertrain Control Solutions.
                                        </h6>
                                    </div>
                                    <div class="text-end">
                                        <a href="#" class="a_none_style txt-text">
                                            <h6 class="oRegular txt-text">View more <img :src="chevronright" alt="view more" class="img-fluid ms-2"/></h6>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-12 col-md-12 col-lg-4 mb-3">
                                <div class="mx-3">
                                    <div class="post">
                                        <img :src="prueba6" alt="ISC" class="img-fluid"/>
                                        <div class="category-second py-1">
                                            <h6 class="oRegular mt-1">Education</h6>
                                        </div>
                                    </div>
                                    <div class="d-flex date-logo-post mb-2">
                                        <div class="me-3">
                                            <img :src="logoGSEBlack" alt="ISC" class="img-fluid"/>
                                        </div>
                                        <div class="">
                                            <h6 class="oRegular">May 11, 2022</h6>
                                        </div>
                                    </div>
                                    <div class="title-post">
                                        <h6 class="oExtraBold ">
                                            Textron GSE to Electrify Product Line with General Motors and Powertrain Control Solutions.
                                        </h6>
                                    </div>
                                    <div class="text-end">
                                        <a href="#" class="a_none_style txt-text">
                                            <h6 class="oRegular txt-text">View more <img :src="chevronright" alt="view more" class="img-fluid ms-2"/></h6>
                                        </a>
                                    </div>
                                </div> 
                            </div>
                        </div>
                        <!-- ENDS POSTS -->
                        <!-- PAGINATION -->
                        <div class="text-end oSemiBold">
                            <nav aria-label="...">
                                <ul class="pagination pagination-sm justify-content-end me-5">
                                    <li class="page-item active" aria-current="page">
                                        <span class="page-link pt-2 pe-3">1</span>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link pt-2 pe-3" href="#">2</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link pt-2 pe-3" href="#">3</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link pt-2 pe-3" href="#">4</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link pt-2 pe-3" href="#">5</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link pt-2 pe-3" href="#">6</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link pt-2 pe-3" href="#">7</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        
                        <!-- ENDS PAGINATION -->
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
    <div class="modal fade" id="add-update" tabindex="-1" aria-labelledby="add-updateLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="d-flex">
                        <div class="">
                            <img :src="logoArtic" alt="ISC" class="img-fluid logo-add-update"/>
                        </div>
                        <div class="text-center">
                            <h3 class="oExtraBold">Submit your new business update</h3>
                        </div>
                    </div>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                        <img :src="btnclose" alt="close" class="img"/>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="container">
                        <div class="row">
                            <div class="col-12 col-sm-12 col-md-12 col-lg-1"></div>
                            <div class="col-12 col-sm-12 col-md-12 col-lg-10">
                                <div class="">
                                    <form class="form-add-update oRegular">
                                        <div class="mb-3">
                                            <label for="title" class="form-label">Main Title:</label>
                                            <input type="text" class="form-control" id="title" name="title" required/>
                                        </div>
                                        <div class="mb-3">
                                            <div class="row">
                                                <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                                                    <label for="company" class="form-label">Company:</label>
                                                    <select class="form-select company-select oItalic" aria-label="Default select example">
                                                        <option selected>Choose an option</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>
                                                <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                                                    <label for="category" class="form-label">Category:</label>
                                                    <select class="form-select category-select oItalic" aria-label="Default select example">
                                                        <option selected>Choose an option</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mb-3">
                                            <div class="">
                                                <label for="content" class="mb-3">Content:</label>
                                                <textarea class="form-control" id="content" name="content" style="height: 400px"></textarea>
                                            </div>
                                        </div>
                                        <div class="mb-3">
                                            <h6 class="">Upload your main image:</h6>
                                            <div class="mb-3 images-add-update">
                                                <label for="file">Choose file</label>
                                                <input type="file" name="file" id="file" />
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                                                <div class="text-start">
                                                    <button class="btn btn-primary btn-green">
                                                        <h6 class="pt-1 hRegular">Cancel</h6>
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                                                <div class="text-end">
                                                    <button class="btn btn-primary btn-green">
                                                        <h6 class="pt-1 hRegular">Submit</h6>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="col-12 col-sm-12 col-md-12 col-lg-1"></div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>
<script>
// IMAGES
    import firstBlog from 'ASSETS/images/blog-principal'
    import secondBlog from 'ASSETS/images/blog-segunda'
    import thirdBlog from 'ASSETS/images/blog-tercera'
    import logoCushman from 'ASSETS/images/logo-cushman'
    import logoGSE from 'ASSETS/images/logo-gse'
    import logoEzgo from 'ASSETS/images/logo-ezgo'
    import logoArtic from 'ASSETS/images/logo-artic';
    import logoJacobsen from 'ASSETS/images/logo-jacobsen'
    import logoGSEBlack from 'ASSETS/images/logo-gse-black'
    import logoArticBlack from 'ASSETS/images/logo-artic-black'
    import logoCushmanBlack from 'ASSETS/images/logo-cushman-black'
    import chevronright from 'ASSETS/images/chevron-right-black'
    import btnclose from 'ASSETS/images/close-btn'
    import iconsearch from 'ASSETS/images/icon-search'
    import prueba1 from 'ASSETS/images/blog-artic'
    import prueba2 from 'ASSETS/images/blog-cushman'
    import prueba3 from 'ASSETS/images/blog-textron-primera'
    import prueba4 from 'ASSETS/images/blog-artic-segunda'
    import prueba5 from 'ASSETS/images/blog-cushman-segunda'
    import prueba6 from 'ASSETS/images/blog-textron'
    
    export default{
        setup(){
            return{
                firstBlog,
                secondBlog,
                thirdBlog,
                logoCushman,
                logoGSE,
                logoEzgo,
                logoArtic,
                logoJacobsen,
                logoGSEBlack,
                logoArticBlack,
                logoCushmanBlack,
                chevronright,
                btnclose,
                iconsearch,
                prueba1,
                prueba2,
                prueba3,
                prueba4,
                prueba5,
                prueba6
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
<style scoped lang="css">
    .a_none_style {
        text-decoration: none;
    }
     .logo-1{
        width: 120px;
    }
    .logo-2{
        width: 150px;
    }
    .logo-3{
        width: 100px;
    }
    .logo-4{
        width: 120px;
    }
    .logo-5{
        width: 150px;
    }
    .icon-search{
        width: 14px;
    }
    .add-update{
        background: rgb(116,173,80);
        background: linear-gradient(180deg, rgba(116,173,80,1) 0%, rgba(116,173,80,1) 48%, rgba(71,128,36,1) 100%);
        width: 40px;
        height: 40px;
        border-radius: 100%;
        text-align: center;
        align-items: center;
        cursor: pointer;
    }
    .add-update i{
        margin-top: 0.5rem;
    }
    .fa-plus{
        font-size: 1.5rem;
    }
    .modal-header{
        background: rgb(89,154,48);
        background: linear-gradient(180deg, rgba(89,154,48,1) 0%, rgba(89,154,48,1) 48%, rgba(89,154,48,1) 100%);
        border-radius: 0;
        border: transparent;
    }
    .modal-content{
        background-color: #000000;
        border-radius: 0;
        border: transparent;
    }
    .logo-add-update{
        width: 90px;
        margin-right: 6rem;
    }
    .btn-close{
        background-image: none;
        color: #fff;
        opacity: 1;
    }
    .fa-xmark{
        font-size: 1.5rem;
    }
    .form-add-update input{
        border-radius: 0;
    }
    .images-add-update{
        width:400px;
        overflow:hidden;
        background:#FFFFFF;
    }
    .images-add-update  label {
        margin:0;
        padding:10px;
        margin-left: 18.6rem;
        width:auto;
        max-width:300px;
        background-color:#5A5A5A;
        border:none;
        color:#fff;
        cursor:pointer;
        text-align:center;
        border-radius: 0;
        -webkit-border-radius:0;
        -webkit-transition:0.2s ease all;
        -moz-transition:0.2s ease all;
            -ms-transition:0.2s ease all;
            -o-transition:0.2s ease all;
                transition:0.2s ease all;
    }
    
    .images-add-update label:hover {
        background:#ADADAD;
    }
    
    [type=file]{
        display:none;
    }
    .btn-green{
        background-color: #599A30;
        border: transparent;
        color: #fff;
        border-radius: 0;
        width: 150px;
    }
    .blog-first{
        position: relative;
    }
    .info-blog-first{
        position: absolute;
        background-image: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.7));
        bottom: 0;
        width: 100%;
        height: 100%;
    }
    .category{
        background-color: #000000;
        width: 150px;
        top: 50%;
        left: 10%;
        position: absolute;
        text-align: center;
    }
    .date{
        position: absolute;
        top: 57%;
        left: 10%;
    }
    .date img{
        width: 200px;
    }
    .title{
        position: absolute;
        bottom: 12%;
        width: 800px;
        left: 10%;
    }
    .link{
        position: absolute;
        right: 10%;
        bottom: 10%;
    }
    .blog-second{
        position: relative;
    }
    .info-blog-second{
        position: absolute;
        background-image: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.7));
        bottom: 0;
        width: 100%;
        height: 100%;
    }
    .category-second{
        background-color: #000000;
        width: 150px;
        top: 10%;
        left: 0;
        position: absolute;
        text-align: center;
    }
    .date-second{
        position: absolute;
        top: 56%;
        left: 10%;
    }
    .date-second img{
        width: 100px;
    }
    .title-second{
        position: absolute;
        bottom: 10%;
        width: 300px;
        left: 10%;
    }
    .blog-third{
        position: relative;
    }
    .info-blog-third{
        position: absolute;
        background-image: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.7));
        bottom: 0;
        width: 100%;
        height: 100%;
    }
    .wallpaper-sm{
        height: 356px;
    }
    .wallpaper-lg{
        height: 714px;
    }
    .bg-white{
        background-color: #fff;
        color: #6C6C6C;
    }
    .company-select{
        background-color: #5A5A5A;
        border-radius: 0;
        border: transparent;
        color: #fff;
    }
    .category-select{
        background-color: #5A5A5A;
        border-radius: 0;
        border: transparent;
        color: #fff;
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
    .input-search{
        border-radius: 0;
        border-color: #707070;
    }
    .search-input{
        background-color: #000000;
        color: #fff;
        border-radius: 0;
        border: 3px solid #000000;
    }
    .date-logo-post img{
        width: 70px;
    }
    .date-logo-post h6{
        color: #6C6C6C;
        font-size: 14px;
        padding-top: 0.5rem;
    }
    .post{
        position: relative;
        color: #fff;
    }
    .title-post h6{
        font-size: 18px;
    }
    .txt-text{
        color: #9B9B9B;
    }
    .page-item.active .page-link{
        border-radius: 100%;
        background-color: #191919;
        border-color: #191919;
    }
    .page-item .page-link{
        border-radius: 100%;
        background-color: #F7F7F7;
        border-color: #F7F7F7;
        color: #919191;
        margin-left: 1rem;
        margin-right: 1rem;
        width: 40px;
        height: 40px;
    }
    .pagination-sm .page-item:first-child .page-link{
        border-top-left-radius: 100%;
        border-bottom-left-radius: 100%;
    }
    .pagination-sm .page-item:last-child .page-link{
        border-top-right-radius: 100%;
        border-bottom-right-radius: 100%;
    }
</style>