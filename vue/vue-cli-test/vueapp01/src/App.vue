<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>
      <router-link to="/">Home</router-link>
      <router-link to="/test">Test</router-link>
    </p>
    <dx-grid
      :rows="rows"
      :columns="columns"
    >
      <dx-table/>
      <dx-table-header-row/>
    </dx-grid>
    <router-view/>
  </div>
</template>

<script>

import {
  DxGrid,
  DxTable,
  DxTableHeaderRow
} from '@devexpress/dx-vue-grid-bootstrap4'

export default {
  name: 'App',
  data: function () {
    return {
      columns: [
        { name: 'id', title: 'ID' },
        { name: 'product', title: 'Product' },
        { name: 'owner', title: 'Owner' }
      ],
      rows: [
        { id: 0, product: 'DevExtreme', owner: 'DevExpress' },
        { id: 1, product: 'DevExtreme Reactive', owner: 'DevExpress' },
        { id: 2, product: 'Term App', owner: 'Dog' },
        { id: 3, product: 'Joel Prod', owner: 'Cypress' },
      ]
    }
  },
  components: {
    DxGrid,
    DxTable,
    DxTableHeaderRow
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
