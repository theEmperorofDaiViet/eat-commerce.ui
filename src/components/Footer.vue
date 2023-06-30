<template>
    <footer>
        <div class="container pt-5">
        <div class="row">
            <div class="col-md-3 col-6">
            <ul style="list-style-type: none">
                <li class="text-light font-weight-bold pb-2">Về chúng tôi</li>
                <li><a class="footer-link font-weight-light" href="#">Giới thiệu</a></li>
                <li><a class="footer-link font-weight-light" href="#">Chính sách</a><br></li>
                <li><a class="footer-link font-weight-light" href="#">Điều khoản</a><br></li>
                <li><a class="footer-link font-weight-light" href="#">Tuyển dụng</a><br></li>

            </ul>
            </div>

            <div class="col-md-3 col-6">
            <ul style="list-style-type: none">
                <li class="text-light font-weight-bold">Theo dõi chúng tôi trên</li>
                <li><a class="footer-link font-weight-light" href="#">Facebook</a></li>
                <li><a class="footer-link font-weight-light" href="#">Twitter</a><br></li>
                <li><a class="footer-link font-weight-light" href="#">Instagram</a><br></li>
                <li><a class="footer-link font-weight-light" href="#">Zalo</a><br></li>
            </ul>
            </div>

            <div class="col-md-3 col-6">
            <ul style="list-style-type: none">
                <li class="text-light font-weight-bold">Thanh toán</li>
                <li><a class="footer-link font-weight-light" href="#">VISA</a></li>
                <li><a class="footer-link font-weight-light" href="#">MasterCard</a><br></li>
                <li><a class="footer-link font-weight-light" href="#">JCB</a><br></li>
                <li><a class="footer-link font-weight-light" href="#">American Express</a><br></li>

            </ul>
            </div>

            <div class="col-md-3 col-6">
            <ul style="list-style-type: none">
                <li class="text-light font-weight-bold">Chăm sóc khách hàng</li>
                <li><a class="footer-link font-weight-light" href="#">Trung tâm trợ giúp</a></li>
                <li><a class="footer-link font-weight-light" href="#">Hướng dẫn mua hàng</a><br></li>
                <li><a class="footer-link font-weight-light" href="#">Thanh toán</a><br></li>
                <li><a class="footer-link font-weight-light" href="#">Vận chuyển</a><br></li>
            </ul>
            </div>
        </div>

        <div class="row">
            <div class="col-12">
            <div class="text-center py-5">
                <img id="logo" src="../assets/logo.png" />
            </div>
            </div>
        </div>
        </div>
        <div id="fb-root"></div>


    </footer>
</template>
  
<script>
export default {
    name : "Footer"
}
</script>
  
<style scoped>
footer {
    margin-top : 100px;
    background-color:#232F3E;
    font-size: 16px;
}

li {
    padding-left: 0;
    padding-bottom: 10px;
}

a {
    text-decoration: none;
}

.footer-link {
    color: #DDD;
}

#logo {
    width: 150px;
}

footer {
    font-family: 'Roboto', sans-serif;
}
</style>


