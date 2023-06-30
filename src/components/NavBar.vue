<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link class="navbar-brand" :to="{ name: 'Home' }">
        <img id="logo" src="../assets/logo.png" />
    </router-link>

    <!-- Burger Button -->
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <!-- Search Bar-->
        <form class="form-inline ml-auto mr-auto" v-if="!['HomeMerchant','MerchantCategories','MerchantProducts','AddCategory','EditCategory','AddProduct','EditProduct','MerchantOrder'].includes($route.name)">
            <div class="input-group">
                <input size="100" type="text" class="form-control" placeholder="Tìm kiếm" aria-label="Username" aria-describedby="basic-addon1"/>
                <div class="input-group-prepend">
                    <span class="input-group-text" id="search-button-navbar">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                    </span>
                </div>
            </div>
        </form>

        <!-- DropDowns-->
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <router-link class="nav-link text-light" v-if="role != 'CUSTOMER' && !['HomeMerchant','MerchantCategories','MerchantProducts','AddCategory','EditCategory','AddProduct','EditProduct','MerchantOrder'].includes($route.name)" :to="{ name: 'HomeMerchant' }">Merchant</router-link>
            </li>
            <li class="nav-item">
                <a class="nav-link text-light" v-if="role == 'CUSTOMER' && !['HomeMerchant','MerchantCategories','MerchantProducts','AddCategory','EditCategory','AddProduct','EditProduct','MerchantOrder'].includes($route.name)" href="#" @click="forceSignOut">Merchant</a>
            </li>
            <li class="nav-item">
                <router-link class="nav-link text-light" v-if="!['HomeMerchant','MerchantCategories','MerchantProducts','AddCategory','EditCategory','AddProduct','EditProduct','MerchantOrder'].includes($route.name)" :to="{ name: 'HomeMerchant' }">Driver</router-link>
            </li>
            <li class="nav-item">
                <a class="nav-link text-light" v-if="token && ['HomeMerchant','MerchantCategories','MerchantProducts','AddCategory','EditCategory','AddProduct','EditProduct','MerchantOrder'].includes($route.name)" target="_blank" href="https://app.powerbi.com/groups/me/dashboards/056f20be-0258-4d12-b441-2a90721c95dd?redirectedFromSignup=1&clientSideAuth=0&experience=power-bi">Power BI</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link text-light dropdown-toggle" v-if="!['HomeMerchant','MerchantCategories','MerchantProducts','AddCategory','EditCategory','AddProduct','EditProduct','MerchantOrder'].includes($route.name)" href="#" id="navbarDropdown" role="button" 
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Danh mục</a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown" v-if="!['HomeMerchant','MerchantCategories','MerchantProducts','AddCategory','EditCategory','AddProduct','EditProduct','MerchantOrder'].includes($route.name)">
                    <router-link class="dropdown-item" :to="{ name: 'Home' }">Trang chủ</router-link>
                    <router-link class="dropdown-item" :to="{ name: 'Categories' }">Danh mục</router-link>
                    <router-link class="dropdown-item" :to="{ name: 'Products' }">Món ăn</router-link>
                </div>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link text-light dropdown-toggle" v-if="token && ['HomeMerchant','MerchantCategories','MerchantProducts','AddCategory','EditCategory','AddProduct','EditProduct','MerchantOrder'].includes($route.name)" href="#" id="navbarDropdown" role="button" 
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Quản lý</a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown" v-if="token && ['HomeMerchant','MerchantCategories','MerchantProducts','AddCategory','EditCategory','AddProduct','EditProduct','MerchantOrder'].includes($route.name)">
                    <router-link class="dropdown-item" :to="{ name: 'MerchantCategories' }">Danh mục</router-link>
                    <router-link class="dropdown-item" :to="{ name: 'MerchantProducts' }">Món ăn</router-link>
                    <router-link class="dropdown-item" :to="{ name: 'MerchantOrder' }">Đơn hàng</router-link>
                </div>
            </li>

            <li class="nav-item dropdown">
                <a class="nav-link text-light dropdown-toggle" href="#" id="navbarDropdown" role="button"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Tài khoản</a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <router-link class="dropdown-item"  v-if="token && !['HomeMerchant','MerchantCategories','MerchantProducts','AddCategory','EditCategory','AddProduct','EditProduct','MerchantOrder'].includes($route.name)" :to="{ name: 'Order' }">Lịch sử đơn hàng</router-link> 
                    <router-link class="dropdown-item" v-if="token && !['HomeMerchant','MerchantCategories','MerchantProducts','AddCategory','EditCategory','AddProduct','EditProduct','MerchantOrder'].includes($route.name)" :to="{ name: 'WishList' }">Đã lưu</router-link>
                    <router-link class="dropdown-item" v-if="!token && !['HomeMerchant','MerchantCategories','MerchantProducts','AddCategory','EditCategory','AddProduct','EditProduct','MerchantOrder'].includes($route.name)" :to="{ name: 'SignIn' }">Đăng nhập</router-link>
                    <router-link class="dropdown-item" v-if="!token && !['HomeMerchant','MerchantCategories','MerchantProducts','AddCategory','EditCategory','AddProduct','EditProduct','MerchantOrder'].includes($route.name)" :to="{ name: 'SignUp' }">Đăng ký</router-link>
                    <router-link class="dropdown-item" v-if="!token && ['HomeMerchant','MerchantCategories','MerchantProducts','AddCategory','EditCategory','AddProduct','EditProduct','MerchantOrder'].includes($route.name)" :to="{ name: 'SignInMerchant' }">Đăng nhập</router-link>
                    <router-link class="dropdown-item" v-if="!token && ['HomeMerchant','MerchantCategories','MerchantProducts','AddCategory','EditCategory','AddProduct','EditProduct','MerchantOrder'].includes($route.name)" :to="{ name: 'SignUpMerchant' }">Đăng ký</router-link>

                    <a class="dropdown-item" v-if="token" href="#" @click="signout">Đăng xuất</a>
                </div>
            </li>

            <li class="nav-item" v-if="!['HomeMerchant','MerchantCategories','MerchantProducts','AddCategory','EditCategory','AddProduct','EditProduct','MerchantOrder'].includes($route.name)">
                <div id="cart">
                <span id="nav-cart-count">{{ cartCount }}</span>
                <router-link class="text-light" :to="{ name: 'Cart' }"
                    ><i class="fa fa-shopping-cart" style="font-size:36px"></i
                ></router-link>
                </div>
            </li>
        </ul>
    </div>
</nav>
</template>

<script>
const sweetalert = require("sweetalert")
export default {
    name: "NavBar",
    props: ["cartCount"],
    data() {
        return {
            token: null,
            role: null
        };
    },
    methods: {
        signout() {
            localStorage.removeItem("token");
            localStorage.removeItem("role");
            this.token = null;
            this.role = null;
            this.$emit("resetCartCount");
            this.$router.push({ name: "Home" });
            sweetalert({
                text: "Đăng xuất thành công! Đăng nhập lại để tiếp tục.",
                icon: "success",
                closeOnClickOutside: false,
            });
        },
        forceSignOut(){
            sweetalert({
                text: "Vui lòng đăng xuất tài khoản khách hàng trước!",
                icon: "error",
                closeOnClickOutside: false,
            })
        }
    },
    mounted() {
        this.token = localStorage.getItem("token");
        this.role = localStorage.getItem("role");
    },
};
</script>

<style>
#logo {
    width: 40px;
    margin-left: 20px;
    margin-right: 20px;
}

.nav-link {
    color: rgba(255, 255, 255);
}

#search-button-navbar {
    background-color: #febd69;
    border-color: #febd69;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
}
#nav-cart-count {
    background-color: red;
    color: white;
    border-radius: 50%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15px;
    height: 15px;
    font-size: 15px;
    margin-left: 10px;
}
#cart {
    position: relative;
}
</style>