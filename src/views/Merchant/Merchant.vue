<template>
    <div class="adminPanel container">
        <router-link :to="{name: 'AdminCategories'}">
            <button class="btn btn-primary btn-lg">Quản lý danh mục</button>
        </router-link>

        <router-link :to="{name: 'AdminProducts'}">
            <button class="btn btn-primary btn-lg">Quản lý món ăn</button>
        </router-link>
    </div>
</template>

<script>
export default {
    mounted() {
    if (!localStorage.getItem('token')) {
      this.$router.push({name : 'SignIn'});
    }
  }
}
</script>

<style>
.adminPanel{
    display : flex;
    flex-direction: column;
    align-items: center;
}
.adminPanel button{
    font-size: 30px;
    width: fit-content;
    margin: 55px 0;
}
</style>