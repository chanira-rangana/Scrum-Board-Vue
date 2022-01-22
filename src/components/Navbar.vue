<template>
  	<nav class="main-nav">
        <router-link :to="{name: 'Home'}">Home</router-link>
        <router-link :to="{name: 'Addproject'}">Add a new Project</router-link>
    </nav>
</template>

<style scoped>
    .main-nav{
        overflow: hidden;
        font-size: 24px;
        display: flex;
        justify-content: space-around;
        padding: 14px 16px;
    }

    .main-nav a {
        display: inline-block;
        color: #999;
        text-align: center;
        text-decoration: none;
        font-size: 17px;
    }


    .main-nav a:hover{
        color: black;
    }

    a.router-link-active{
        border-bottom: 2px solid #00ce89;
        padding-bottom: 4px;
        color: black;
        font-weight: bold;
    }
</style>