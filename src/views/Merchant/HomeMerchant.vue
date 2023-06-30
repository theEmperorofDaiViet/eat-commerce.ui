<template>
    <div id="home">
        <div id="background-div" class="page-holder bg-cover">
            <div class="row">
                <div class="container col-md-6 pt-5 px-5 px-md-0">
                    <header class="text-left text-white py-5">                     
                        <p id="content" class="lead mb-0 bg-dark p-1 rounded">Quản lý nhà hàng của bạn!</p>
                    </header>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'HomeMerchant',
    props : ["baseURL"],
    data(){
        return{

        }
    },
    mounted(){

    }
}
</script>

<style scoped>
.page-holder {
    min-height: 100vh;
}

.bg-cover {
    background-size: cover !important;
}

#background-div {
    background: url(../../assets/home-merchant.jpg)
}

#heading {
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    opacity: 0.8;
    font-family: 'Josefin Sans', sans-serif;
}

#content {
    opacity: 0.8;
}

h2 {
    font-family: 'Josefin Sans', sans-serif;
}
</style>