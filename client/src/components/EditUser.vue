<template>
<div>
    <h1>Edit product</h1>
    <form v-on:submit.prevent = "editproduct">
        <p>Namebrand: <input type="text" v-model="user.Namebrand"></p>
        <p>Color: <input type="text" v-model="user. Color"></p>
      
        <p><button type="submit">edit product</button></p>
    </form>
    <hr>
    <div>
        <p>Namebrand: {{user.Namebrand}}</p>
        <p>Color {{user.Colore}}</p>
    </div>
</div>
</template>
<script>import UsersService from '@/services/UsersService'

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
        async editUser(){
            try{
                await UsersService.put(this.user)
                this.$router.push({
                    name: 'users'
                })

            }catch(error){
                console.log(error)
            }
        }
    }, 
    async created(){
        try{
            let userId = this.$route.params.userId
            this.user = (await UsersService.show(userId)).data
        }catch(error){
            console.log(error)
        }
    }
}
</script>
<style scoped>


</style>