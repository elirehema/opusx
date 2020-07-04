<template>
  <v-list three-line>
    <v-list-item-group v-model="selected" multiple>
      <template v-for="(item, index) in items">
        <v-card :key="item._id" class="mx-auto mt-1">
          <v-list-item>
            <template v-slot:default="{ active }">
              <v-list-item-content>
                <v-list-item-title
                  class="headline"
                  v-text="item.question"
                ></v-list-item-title>
                <v-list-item-subtitle
                  class="text--primary"
                  v-text="item.headline"
                ></v-list-item-subtitle>
                <v-list-item-subtitle
                  v-text="item.description"
                ></v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <v-list-item-action-text
                  v-text="item.upvotes"
                ></v-list-item-action-text>
                <v-icon v-if="!active" color="grey lighten-1">
                  mdi-star-outline
                </v-icon>

                <v-icon v-else color="yellow">
                  mdi-star
                </v-icon>
                <v-list-item-action-text
                  v-text="item.downvotes"
                ></v-list-item-action-text>
              </v-list-item-action>
            </template>
          </v-list-item>
        </v-card>

        <v-divider v-if="index + 1 < items.length" :key="index"></v-divider>
      </template>
    </v-list-item-group>
  </v-list>
</template>
<script>
import { formMixin } from "../static/mixins/my-mixins";
export default {
  mixins: [formMixin],
  data: () => ({
    selected: [2],
  }),
  computed: {
    items() {
      return this.$store.getters.questionsdata;
    },
  },
  beforeMount() {
    const vm = this;
    Promise.all([
      vm.$store.dispatch("getAllQuestionsData"),
    ]).then(function () {});
  },
  methods: {
    handleLogin() {
      // eslint-disable-next-line no-console
      console.log("email :", this.email);
      // eslint-disable-next-line no-console
      console.log("Password :", this.password);
    },
  },
};
</script>
