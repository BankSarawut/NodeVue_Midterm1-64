<template>
<div>
    <h1>CreateProduct</h1>
    <form v-on:submit.prevent = "CreateProduct">
        <p>Namebrand <input type="text" v-model="user.Namebrand"></p>
        <p>Color: <input type="text" v-model="user.Colorl"></p>
        <p><button type="submit">create user</button></p>
    </form>
    <hr>
    <div>
        <p>Namebrand: {{user.Namebrand}}</p>
        <p>Color: {{user.Color}}</p>
       
    </div>
</div>
</template>
<script>
import UsersService from '@/services/UsersService'

export default {
    data(){
        return{
            user:{
                 Namebrand: '',
                 Color: '',
                 status: 'active'
            }
        }
    },
    methods:{
        async createUser(){
            try{
                await UsersService.post(this.user)
                this.$router.push({
                    name: 'users'
                })
            }catch(error){
                console.log(error)
            }
        }
    }    
}
</script>
<style scoped>


</style>