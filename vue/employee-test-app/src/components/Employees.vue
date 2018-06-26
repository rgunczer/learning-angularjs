<template>
    <div>
        <p>some text goes here {{ msg }}</p>
        <p>list of employees [ {{ employees.length }} ]</p>
        <employee-details v-for="e in employees" :emp="e" ></employee-details>
    </div>
</template>

<script>
    import EmployeeDetails from './EmployeeDetails.vue'
    import CreatedMixinLogger from '../mixins/created-mixin-logger.js'

    export default {
        name: 'Employees',
        props: ['msg', 'employees'],
        components: {
            EmployeeDetails
        },
        mixins: [CreatedMixinLogger]
    }
</script>

<style>

</style>
