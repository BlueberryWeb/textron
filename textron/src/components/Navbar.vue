<template>
    <div class="header">
        <div class="container pt-3">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-1">
                    <img :src="logoISC" alt="ISC INTEGRATED SUPPLY CHAIN" class="img-fluid"/>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-4"></div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-1">
                    <img :src="logoCompany" alt="ARTIC CAT" class="img-fluid"/>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-4"></div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-2">
                    <img :src="photoProfile" alt="ISC" class="img-fluid float-start icon-user"/>
                    <h6 class="oRegular h6 pt-2">Andrew Miller</h6>
                </div>
            </div>
        </div>
    </div>
    <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu">
    <label for="openSidebarMenu" class="sidebarIconToggle">
        <div class="spinner diagonal part-1"></div>
        <div class="spinner horizontal"></div>
        <div class="spinner diagonal part-2"></div>
    </label>
    <div id="sidebarMenu">
        <ul class="sidebarMenuInner">
            <li>
                <img :src="logoCompany" alt="ARTIC CAT" class="img-fluid logo-artic"/>
            </li>
            <li class="menu-login active-tit">
                <a href="#" >Home</a>
            </li>
            <li class="menu-login">
                <a href="#">Business Updates</a>
            </li>
            <li class="menu-login">
                <a href="#">Success Stories</a>
            </li>
            <li class="menu-login">
                <a href="#">Master Plan</a>
            </li>
            <li class="menu-login">
                <a href="#">Training Plan</a>
            </li>
            <li class="menu-login">
                <a href="#">Lessons Learned</a>
            </li>
            <li class="border- menu-login">
                <a href="#">Sharepoints</a>
            </li>
            <li class="menu-login">
                <a href="#">My Account</a>
            </li>
            <li class="border- menu-login">
                <a href="#">Log Out</a>
            </li>
            <li class="footer-welcome">
                <img :src="textronLogo" alt="TEXTRON SPECIALIZED VEHICLES" class="img-fluid logo-textron-welcome mb-3">
                <p class="oRegular"> © 2022 TEXTRON </p>
                <p class="oRegular">SPECIALIZED VEHICLES,</p>
                <p class="oRegular">All Rights Reserved</p>
                <div class="mt-3">
                    <a href="" class="a_none_style">
                        <h6 class="hLight">Privacy Policy</h6>
                    </a>
                    <a href="" class="a_none_style">
                        <h6 class="hLight">Terms & Conditions</h6>
                    </a>
                    <a href="" class="a_none_style">
                        <h6 class="hLight">Legal CA Transparency</h6>
                    </a>
                    <a href="https://blueberry.mx/" target="_blank">
                        <img :src="bbLogo" alt="Materialized by Blueberry" class="img-fluid bb-logo-welcome"/>
                    </a>
                </div>
            </li>
            <li class="footer-welcome"></li>
            <li class="footer-welcome"></li>
        </ul>
    </div>
</template>
<script>
//IMAGES
    import textronLogo from 'ASSETS/images/img/textron-logo-2'
    import bbLogo from 'ASSETS/images/materialized-blueberry'
    import logoCompany from 'ASSETS/images/logo-artic'
    import photoProfile from 'ASSETS/images/andrew-user'
    import logoISC from 'ASSETS/images/logo-ISC-white'

    export default{
        setup(){
            return{
                textronLogo,
                bbLogo,
                logoCompany,
                photoProfile,
                logoISC
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
    .header {
        display: block;
        margin: 0 auto;
        width: 100%;
        max-width: 100%;
        box-shadow: none;
        background: rgb(89,154,48);
        background: linear-gradient(180deg, rgba(89,154,48,1) 0%, rgba(89,154,48,1) 48%, rgba(89,154,48,1) 100%);
        height: 70px!important;
        overflow: hidden;
        z-index: 10;
    }
    .bg-main{
        background-image: url('../img/bg-artic.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 100vh;
        width: 100%;
    }
    .main {
        width: 100%;
        display: block;
    }
    #sidebarMenu {
        height: 100%;
        position: fixed;
        left: 0;
        width: 250px;
        transform: translateX(-250px);
        transition: transform 250ms ease-in-out;
        background: #000000;
        overflow: scroll;
    }
    .sidebarMenuInner{
        margin:0;
        padding:0;
        border-top: 1px solid rgba(255, 255, 255, 0.10);
    }
    .sidebarMenuInner li{
        list-style: none;
        color: #fff;
        font-weight: normal;
        font-family: 'Open Sans Regular';
        padding: 20px;
        cursor: pointer;
    }
    .border-{
        border-bottom: 1px solid rgba(255, 255, 255, 0.10);
    }
    .sidebarMenuInner li span{
        display: block;
        font-size: 14px;
        color: rgba(255, 255, 255, 0.50);
    }
    .sidebarMenuInner li a{
        font-family: 'Open Sans Regular';
        color: #fff;
        font-weight: normal;
        cursor: pointer;
        text-decoration: none;
    }
    input[type="checkbox"]:checked ~ #sidebarMenu {
        transform: translateX(0);
    }
    input[type=checkbox] {
        transition: all 0.3s;
        box-sizing: border-box;
        display: none;
    }
    .sidebarIconToggle {
        transition: all 0.3s;
        box-sizing: border-box;
        cursor: pointer;
        position: absolute;
        z-index: 99;
        height: 100%;
        width: 100%;
        top: 22px;
        left: 45px;
        height: 22px;
        width: 22px;
    }
    .spinner {
        transition: all 0.3s;
        box-sizing: border-box;
        position: absolute;
        height: 1px;
        margin-top: 2px;
        width: 100%;
        background-color: #fff;
    }
    .horizontal {
        transition: all 0.3s;
        box-sizing: border-box;
        position: relative;
        float: left;
        margin-top: 6px;
        margin-bottom: 2px;
    }
    .diagonal.part-1 {
        position: relative;
        transition: all 0.3s;
        box-sizing: border-box;
        float: left;
    }
    .diagonal.part-2 {
        transition: all 0.3s;
        box-sizing: border-box;
        position: relative;
        float: left;
        margin-top: 3px;
    }
    input[type=checkbox]:checked ~ .sidebarIconToggle > .horizontal {
        transition: all 0.3s;
        box-sizing: border-box;
        opacity: 0;
    }
    input[type=checkbox]:checked ~ .sidebarIconToggle > .diagonal.part-1 {
        transition: all 0.3s;
        box-sizing: border-box;
        transform: rotate(135deg);
        margin-top: 8px;
    }
    input[type=checkbox]:checked ~ .sidebarIconToggle > .diagonal.part-2 {
        transition: all 0.3s;
        box-sizing: border-box;
        transform: rotate(-135deg);
        margin-top: -9px;
    } 
    .footer-welcome p{
        font-size: 12px;
        line-height: 20%;
    }
    .footer-welcome h6{
        font-size: 12px;
    }
    .active-tit{
        background: #212121;
        font-family: 'Open Sans Extra Bold';
    }
    .icon-user{
        width: 40px;
        margin-right: 1rem;
    }
    .logo-artic{
        width: 100px;
        margin-left: 3rem;
    }
    .logo-textron-welcome{
        width: 120px;
    }
    .bb-logo-welcome{
        width: 150px;
    }
    .a_none_style {
        text-decoration: none;
    }
</style>