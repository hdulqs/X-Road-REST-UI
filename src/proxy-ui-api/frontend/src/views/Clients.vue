<template>
  <v-layout align-center justify-center column>
    <clientsDataTable/>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import ClientsDataTable from '../components/ClientsDataTable.vue';
export default Vue.extend({
  components: {
    ClientsDataTable,
  },
  data: () => ({}),

  methods: {
    fetchCities() {
      this.$store.dispatch('fetchClients').then(
        (response) => {
          this.$bus.$emit('show-success', 'Great success!');
        },
        (error) => {
          this.$bus.$emit('show-error', error.message);
        },
      );
    },
  },
  created() {
    this.fetchCities();
  },
});
</script>

<style lang="scss" scoped>
.buttons {
  width: 100%;
  max-width: 1280px;
}
</style>
