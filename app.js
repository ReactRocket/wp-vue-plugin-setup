// const app = Vue.createApp({
//   // Lifecycle Hooks

//   beforeCreate() {
//     console.log(
//       "beforeCreate: The component is being initialized, but data hasn't been created yet."
//     );
//   },

//   created() {
//     console.log(
//       "created: The component has finished setting up its data. Good time to fetch data from an API or perform other setup logic."
//     );
//   },

//   beforeMount() {
//     console.log(
//       "beforeMount: The component's template has been compiled, but hasn't been inserted into the DOM yet."
//     );
//   },

//   mounted() {
//     console.log(
//       "mounted: The component is now fully mounted and accessible in the DOM. A good place to interact with the DOM or perform side effects."
//     );
//   },

//   beforeUpdate() {
//     console.log(
//       "beforeUpdate: The component is about to re-render due to some data change. Good place to perform tasks before the DOM is updated."
//     );
//   },

//   updated() {
//     console.log(
//       "updated: The component has finished re-rendering. A good place to interact with the updated DOM or perform post-update logic."
//     );
//   },

//   beforeDestroy() {
//     console.log(
//       "beforeDestroy: The component is about to be destroyed. Good place to perform cleanup tasks, like removing event listeners or timers."
//     );
//   },

//   destroyed() {
//     console.log(
//       "destroyed: The component has been destroyed. It's no longer accessible in the DOM."
//     );
//   },

//   // Data (reactive state)
//   data() {
//     return {
//       count: 0,
//     };
//   },

//   // Methods (functions for actions)
//   methods: {
//     increment() {
//       this.count++;
//     },
//     decrement() {
//       if (this.count > 0) {
//         this.count--;
//       }
//     },
//   },

//   // Watch (observe data changes)
//   watch: {
//     count(newVal, oldVal) {
//       console.log(`Count changed from ${oldVal} to ${newVal}`);
//     },
//   },

//   // Computed Properties (derived data)
//   computed: {
//     doubleCount() {
//       return this.count * 2;
//     },
//   },
// });

// app.mount("#app");

const { createApp } = Vue;

createApp({
  data() {
    return {
      count: 0
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    }
  },
  template: `
    <div class="counter">
      <h1>Counter: {{ count }}</h1>
      <div class="counter-buttons">
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
      </div>
    </div>
  `,
  mounted() {
    console.log('The component has been mounted. It\'s accessible in the DOM.');
  }
}).mount('#app');

