<template>
    <div>
        <p>some text goes here {{ msg }}</p>
        <employee-details :emp="emp" ></employee-details>
        <p>list of employees [ {{ emps.length }} ]</p>
        <employee-details v-for="e in emps" :emp="e" ></employee-details>
    </div>
</template>

<script>
    import EmployeeDetails from './EmployeeDetails.vue'
    export default {
        props: ['msg', 'emp', 'emps'],
        components: {
            EmployeeDetails
        }
    }
</script>

<style>

</style>
