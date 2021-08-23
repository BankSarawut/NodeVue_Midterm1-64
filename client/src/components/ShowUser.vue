<template>
  <div>
    <h1>Show product</h1>
    <p>id: {{ userId }}</p>
    <p>Namebrand {{ user.Namebrand }}</p>
    <p>Color: {{ user.Color }}</p>

  </div>
</template>
<script>
import UserService from "@/services/UsersService";
export default {
  data() {
    return {
      user: null,
    };
  },
  async created() {
    try {
      let userId = this.$route.params.userId;
      this.user = (await UserService.show(userId)).data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
<style scoped>
</style>