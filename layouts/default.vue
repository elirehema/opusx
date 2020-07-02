<template>
  <v-app dark>
   
    <v-app-bar :clipped-left="clipped" fixed dense flat app>
      <v-toolbar-title>
      <v-avatar color="primary" tile size="36">
      <img src="@/assets/img/apple-touch-icon.png" alt="Opus" />
      </v-avatar>
      </v-toolbar-title>
      <v-spacer />
      <v-text-field
        prepend-icon="mdi-magnify"
        
        outlined
        dense
        text-color="cyan lighten-1"
        background-color="white"
        placeholder="Search"
        hide-details
        single-line
      ></v-text-field>
      <v-spacer />
      <v-avatar color="primary" size="36">
        <img src="https://answersafrica.com/wp-content/uploads/2015/01/somalia.jpg" alt="John" />
      </v-avatar>
      <v-btn icon>
        <v-icon>mdi-help-circle</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-trophy-award</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-help-circle</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dialpad</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-footer :fixed="fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import NewsSourceComponent from "~/components/news_sources_component.vue";

export default {
  components: {
    newssourcecomponent: NewsSourceComponent
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,

      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Opass"
    };
  }
};
</script>
