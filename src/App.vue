<!-- <script setup>
import HelloWorld from './components/HelloWorld.vue'
</script> -->
<script>
import Navbar from "./components/Navbar.vue";
import Header from "./components/Header.vue";
// import CarbonAd from "./components/CarbonAd.vue";
import Effects from "./components/Effects.vue";
import Inspect from "./components/Inspect.vue";
import Controls from "./components/Controls.vue";
import { effects } from "./assets/effects.js";
import { shuffleEffects } from "./assets/utils.js";

// import { ref } from "vue";
// import Child from "./Child.vue";

// const money = ref(10000);

export default {
  // components: { Navbar, Header, Effects, Inspect, Controls, Child },
  // data() {
  //   return { effects, inspecting: false, inspectSrc: {}, money };
  // },
  components: { Navbar, Header, Effects, Inspect, Controls },
  data() {
    return { effects, inspecting: false, inspectSrc: {} };
  },
  methods: {
    inspect(name) {
      this.inspecting = true;
      this.inspectSrc.html = this.effects[name].html;
      this.inspectSrc.css = this.effects[name].css;
    },
    closeInspect() {
      this.inspecting = false;
      this.inspectSrc = {};
    },
    shuffle() {
      this.effects = shuffleEffects(this.effects);
    },
    reset() {
      this.effects = effects;
    },
    filter(filters) {
      const filtered = Object.entries(effects).filter(
        ([name, data]) => filters[data.type]
      );
      this.effects = Object.fromEntries(filtered);
    }
  }
};
</script>
<template>
  <div>
    <div class="color"></div>
    <Navbar/>
    <Header/>
    <!-- <CarbonAd/> -->
    <Effects :effects="effects" @inspect="inspect"/>
    <div class="inspect-bg" v-if="inspecting"></div>
    <transition name="inspect">
      <Inspect v-if="inspecting" :src="inspectSrc" @close="closeInspect"/>
    </transition>
    <Controls @shuffle="shuffle" @reset="reset" @filter="filter"/>

    <!-- <div>我是父组件</div>
    <pre>我是父子组件同步的数据：{{ money }}</pre>
    <Child v-model="money"></Child> -->
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
