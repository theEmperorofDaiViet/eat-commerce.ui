<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <br/>
                <h1>Thanh toán thất bại!</h1>                
            </div>
        </div>
        <div class="row">
            <div class="col-12 text-center">
                <img class="img-fluid pt-5" src="../../assets/sorry.png" alt="Sorry">
            </div>
        </div> 
        <div class="text-center">
            <div class="spinner-grow text-danger" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'FailedPayment',
    mounted(){
        localStorage.removeItem("sessionId")
        window.location.href = '/order'
    }
}
</script>

<style scoped>
h1 {
    font-family: 'Roboto', sans-serif;
    color: #484848;
    font-weight: 700;
}

h5 {
    font-family: 'Roboto', sans-serif;
    color: #686868;
    font-weight: 300;
}
</style>