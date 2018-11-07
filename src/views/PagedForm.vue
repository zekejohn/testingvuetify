<template>
  <div class="pagedform">
    <v-tabs
      slot="extension"
      v-model="model"
      centered
    >
      <v-tab to="/pagedform/detailsform">
        Detaljer
      </v-tab>
      <v-tab to="/pagedform/detailsform2">
        Detaljer 2
      </v-tab>
      <v-tab to="/pagedform/detailsform3">
        Detaljer 3
      </v-tab>
    </v-tabs>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: 'tab-2',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    };
  },
};
</script>

<style>
.pagedForm {
  width: 1000px;
  right: auto;
}
</style>
