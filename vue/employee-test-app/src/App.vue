<template>
  <div id="app">
    <Employees :msg="msg" :emp="employeeData" :emps="employees"/>
  </div>
</template>

<script>
import Employees from "./components/Employees.vue";

export default {
  name: "app",
  data: function() {
    return {
      msg: "Welcome to Your Vue.js App on data",
      employeeData: {
        name: "Joel",
        age: 54,
        kills: 132
      },
      employees: [
        {
          name: "Joel",
          age: 54,
          kills: 132
        },
        {
          name: "Ellie",
          age: 14,
          kills: 3
        }
      ]
    };
  },
  components: {
    Employees
  },
  created() {
    console.log("component created...");
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
