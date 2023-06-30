<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center pt-3">
            <router-link :to="{ name: 'Home' }">
                <img id="logo" src="../../assets/logo.png" />
            </router-link>
            </div>
        </div>

        <div class="row">
            <div class="col-12 justify-content-center d-flex flex-row pt-5">
                <div id="signin-div" class="flex-item border">
                    <h2 class="pt-4 pl-4">Đăng nhập người bán</h2>
                    <form @submit="signin" class="pt-4 pl-4 pr-4">
                    <div class="form-group">
                        <label>Email</label>
                        <input
                        type="email"
                        class="form-control"
                        v-model="email"
                        required
                        />
                    </div>
                    <div class="form-group">
                        <label>Mật khẩu</label>
                        <input
                        type="password"
                        class="form-control"
                        v-model="password"
                        required
                        />
                    </div>
                    <button type="submit" class="btn btn-primary mt-2 py-0">
                        Đăng nhập
                        <div
                        v-if="loading"
                        class="spinner-border spinner-border-sm"
                        role="status"
                        >
                        <span class="sr-only">Loading...</span>
                        </div>
                    </button>
                    </form>
                    <hr />
                    <small class="form-text text-muted pt-2 pl-4 text-center"
                    >Thành viên mới?</small
                    >
                    <p class="text-center">
                    <router-link
                        :to="{ name: 'SignUp' }"
                        class="btn btn-dark text-center mx-auto px-5 py-1 mb-2"
                        >Đăng ký ngay!</router-link
                    >
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const axios = require("axios")
const sweetalert = require("sweetalert")
export default {
    name: "SignIn",
    props: ["baseURL"],
    data() {
        return {
            email: null,
            password: null,
            loading: null,
        };
    },
    methods: {
        async signin(e) {
            e.preventDefault();
            this.loading = true;

            const user = {
                email: this.email,
                password: this.password,
                role: 'MERCHANT'
            };

            await axios.post(`${this.baseURL}/user/signin`, user)
                    .then((res) => {
                        localStorage.setItem("token", res.data.token);
                        localStorage.setItem("role", res.data.role);
                        this.$emit("fetchData");
                        this.$router.push({ name: "HomeMerchant" });
                    })
                    .catch((err) => {
                        sweetalert({
                            text: "Thông tin đăng nhập không chính xác!",
                            icon: "error",
                            closeOnClickOutside: false,
                        });
                        console.log(err);
                    })
                    .finally(() => {
                        this.loading = false;
                    });
        },
    },
    mounted() {
        this.loading = false;
    },
}
</script>

<style scoped>
.btn-dark {
  background-color: #e7e9ec;
  color: #000;
  font-size: smaller;
  border-radius: 0;
  border-color: #adb1b8 #a2a6ac #a2a6ac;
}

.btn-primary {
  background-color: #f0c14b;
  color: black;
  border-color: #a88734 #9c7e31 #846a29;
  border-radius: 0;
}

#logo {
  width: 150px;
}

@media only screen and (min-width: 992px) {
  #signin-div {
    width: 40%;
  }
}
</style>