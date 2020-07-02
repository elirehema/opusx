<template>
  <v-card max-width="450" class="mx-auto">
    <v-toolbar dark>
      <v-toolbar-title>News Source</v-toolbar-title>
    </v-toolbar>
    <v-list three-line>
      <template v-for="(item, index) in datalist">
        <v-list-item :key="item.id" :href="item.url" target="_blank">
          <v-list-item-content>
            <v-list-item-title v-html="item.name"></v-list-item-title>
            <v-list-item-subtitle v-html="item.description"></v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn icon >
              <v-icon color="grey lighten-1" >mdi-information</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
        <v-divider :v-if="index === 0" :key="index"></v-divider>
      </template>
    </v-list>
  </v-card>
</template>
<script>
export default {
  name: "Demo",
  components: {},
  data() {
    return {
      datalist: [],
      right: true
    };
  },
  methods: {
    async fetdata() {
      var url =
        "https://newsapi.org/v2/sources?apiKey=eff96829b48749acbd9b4e8eb5f621f5";
      var req = new Request(url);
      await fetch(req)
        .then(response => response.json())
        .then(responseJSON => {
          console.log(responseJSON);
          this.datalist = responseJSON.sources;
        });
    }
  },
  beforeMount: function() {
    //this.fetdata();
  }
};
</script>