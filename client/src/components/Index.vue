<template>
  <div>
    <h1>Get All product</h1>
    <div v-if="users.length">
      <h4>จำนวนผู้ใช้งาน {{ users.length }}</h4>
      <p>
        <button v-on:click="navigateTo('/user/create')">
            สร้างproduct
          </button>
      </p>
      <div v-for="user in users" v-bind:key="user.id">
        <p>id: {{ user.id }}</p>
        <p>Namebrand: {{ user.Namebrand }}</p>
        <p>Color: {{ user.Color}}</p>

        <p>
          <button v-on:click="navigateTo('/user/' + user.id)">
            ดูproduct
          </button>
          <button v-on:click="navigateTo('/user/edit/' + user.id)">
            แก้ไขproduct
          </button>
          <button v-on:click="deleteUser(user)">
            ลบproduct
          </button>
        </p>
        <hr />
      </div>
    </div>
  </div>
</template>
<script>
import UsersService from "@/services/UsersService";

export default {
  data() {
    return {
      users: [],
    };
  },
  async created() {
    try {
      this.users = (await UsersService.index()).data;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    async deleteUser(user){
      let result = confirm("Want to delete")
      if(result){
        try{
          await UsersService.delete(user)
          this.refreshData()
        }catch(error){
          console.log(error)
        }
      }
    },
    async refreshData(){
      this.users = (await UsersService.index()).data
    }
  },
};
</script>
<style scoped>
</style>