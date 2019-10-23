<template>
  <ion-app>
    <ion-menu-controller></ion-menu-controller>

    <ion-split-pane content-id="main-content">
      <ion-menu class="menuOptions" type="overlay" side="start" content-id="main-content">
        <ion-content class="fullHeight" padding>
          <button @click="close">close</button>
        </ion-content>
        <div>footer</div>
      </ion-menu>

      <div id="main-content">
        <div>
          <ion-button @click="openStart">Open Menu</ion-button>
        </div>
        <list-component></list-component>
      </div>
    </ion-split-pane>
  </ion-app>
</template>

<script>
import ListComponent from "./components/List.vue";

export default {
  name: "app",
  components: {
    ListComponent
  },
  methods: {
    openStart() {
      console.log("TEST");
      document.querySelector("ion-menu-controller").open("start");
    },
    close() {
      document.querySelector("ion-menu-controller").close("start");
    }
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
.fullHeight {
  height: 100vh;
}

.menu-content {
  width: 100%;
}
</style>
