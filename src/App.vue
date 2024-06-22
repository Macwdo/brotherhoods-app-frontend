<template>
  <v-app>
    <v-navigation-drawer color="primary" v-model="drawer" elevation="24">
      <div class="d-flex flex-column justify-center">
        <v-img class="mt-2" max-height="180px" src="/logo-bh-svg.svg"> </v-img>
        <v-text class="d-flex justify-center text-h4 font-weight-bold">
          Brotherhoods
        </v-text>
      </div>
      <v-divider class="ma-3" />
      <div class="px-2 d-flex">
        <v-avatar size="60" color="secondary">
          <span class="text-h5"> DM </span>
        </v-avatar>
        <div class="px-2 d-flex flex-column">
          <span class="font-weight-bold"> Olá </span>
          <span class="font-weight-bold"> Usuário </span>
        </div>
      </div>
      <v-divider class="ma-3" />
      <v-list>
        <v-list-item
          link
          to="/"
          prepend-icon="mdi-home"
          title="Home"
        ></v-list-item>
        <v-list-item
          link
          to="/players"
          prepend-icon="mdi-account"
          title="Players"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <template v-if="isMobile">
      <v-app-bar app color="primary">
        <v-app-bar-nav-icon
          @click="drawer = !drawer"
          icon="mdi-menu"
          color="secondary"
        ></v-app-bar-nav-icon>
        <v-app-bar-title> Brotherhoods </v-app-bar-title>
        <v-toolbar-items>
          <v-btn icon>
            <v-icon>mdi-account</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-app-bar>
    </template>
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { computed, ref, unref } from "vue";
import { useDisplay } from "vuetify";

const getDrawer = () => {
  if (unref(display.mobile)) {
    return ref(false);
  }
  return ref(true);
};

const display = useDisplay();
const isMobile = computed(() => unref(display.mobile));
const drawer = getDrawer();
</script>
