<template>
    <div class="container">
        <div class="row pt-5">
            <div class="col-md-1"></div>
            <div class="col-md-4 col-12">
                <img :src="product.imageUrl" :alt="product.name" class="img-fluid" />
            </div>        

            <div class="col-md-6 col-12 pt-3 pt-md-0">
                <h4>{{ product.name }}</h4>
                <h6 class="category font-italic">{{ category.name }}</h6>
                <h6 class="font-weight-bold">{{ product.price?.toLocaleString('vi', {style : 'currency', currency : 'VND'}) }}</h6>
                <p> {{ product.description }} </p>

                <div class="d-flex flex-row justify-content-between">
                    <div class="input-group col-md-3 col-4 p-0">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">Số lượng</span>
                        </div>
                        <input class="form-control" type="number" v-bind:value="quantity" />
                    </div>

                    <div class="input-group col-md-3 col-4 p-0">
                        <button type="button" id="add-to-cart-button" class="btn" @click="addToCart(this.id)">
                            Thêm vào giỏ
                            <ion-icon name="cart-outline" v-pre></ion-icon>
                        </button>
                    </div>
                </div>
            
                <div class="pt-5 d-flex flex-row justify-content-between">
                    <div class="input-group col-md-3 col-4">
                        <button
                    id="wishlist-button"
                    class="btn mr-3 p-1 py-0"
                    :class="{ product_added_wishlist: isAddedToWishlist }"
                    @click="addToWishList(this.id)"
                    >
                    {{ wishlistString }}
                    </button>
                    </div>
                    <div class="input-group col-md-3 col-4 p-0">
                        <button
                    id="show-cart-button"
                    type="button"
                    class="btn mr-3 p-1 py-0"
                    @click="listCartItems()"
                    >
                    Xem giỏ hàng

                    <ion-icon name="cart-outline" v-pre></ion-icon>
                </button>
                    </div>
                </div>   


            </div>
            <div class="col-md-1"></div>
        </div>
    </div>
</template>

<script>
const axios = require("axios")
const sweetalert = require("sweetalert")
export default {
    data() {
        return {
            product: {},
            category: {},
            id: null,
            token: null,
            isAddedToWishlist: false,
            wishlistString: "Lưu món ăn",
            quantity: 1,
        };
    },
    props: ["baseURL", "products", "categories"],
    methods: {
        addToWishList(productId) {
            axios.post(`${this.baseURL}/wishlist/add?token=${this.token}`, {
                id: productId,
                })
                .then(
                (response) => {
                    if (response.status == 201) {
                    this.isAddedToWishlist = true;
                    this.wishlistString = "Đã lưu";
                    }
                },
                (error) => {
                    console.log(error);
                }
                );
        },
        addToCart(productId) {
        if (!this.token) {
            sweetalert({
            text: "Hãy đăng nhập trước!",
            icon: "error",
            });
            return;
        }
        axios
            .post(`${this.baseURL}/cart/add?token=${this.token}`, {
            productId: productId,
            quantity: this.quantity,
            })
            .then(
            (response) => {
                if (response.status == 201) {
                sweetalert({
                    text: "Đã thêm vào giỏ hàng!",
                    icon: "success",
                    closeOnClickOutside: false,
                });
                // refresh nav bar
                this.$emit("fetchData");
                }
            },
            (error) => {
                console.log(error);
            }
            );
        },

        listCartItems() {
        axios.get(`${this.baseURL}/cart/?token=${this.token}`).then(
            (response) => {
            if (response.status === 200) {
                this.$router.push("/cart");
            }
            },
            (error) => {
            console.log(error);
            }
        );
        },
    },
    mounted() {
        this.id = this.$route.params.id;
        this.product = this.products.find((product) => product.id == this.id);
        this.category = this.categories.find((category) => category.id == this.product.categoryId);
        this.token = localStorage.getItem("token");
    },
}
</script>

<style>
.category {
  font-weight: 400;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

#add-to-cart-button {
  background-color: #febd69;
}

#wishlist-button {
  background-color: #b9b9b9;
  border-radius: 0;
}

#show-cart-button {
  background-color: #131921;
  color: white;
  border-radius: 0;
}
</style>