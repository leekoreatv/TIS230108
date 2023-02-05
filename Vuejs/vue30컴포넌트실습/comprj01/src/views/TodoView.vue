<style scoped></style>

<template>
  <div id="app">
    <!-- TodoHeader -->
    <TodoHeader></TodoHeader>

    <!-- TodoFooter -->
    <TodoFooter v-on:clearAll="clearAll"></TodoFooter>
  </div>
</template>

< script>
import TodoHeader from '../components/todo/TodoHeader.vue';
import TodoFooter from '../components/todo/';

export default {
  // ... 중략
  methods: {
    clearAll() {
      // ... 중략
    },
  },

  components: {
    TodoHeader: TodoHeader,
    TodoFooter: TodoFooter,
  },
};
</script>
