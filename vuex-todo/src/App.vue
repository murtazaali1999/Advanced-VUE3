<template>
  <div id="app">
    <div class="container">
      <h1>Tasks</h1>
      <!-- single object -->
      <h4>{{ task.returnTask1.name }}</h4>
      <h4>{{ task.returnTask2.name }}</h4>
      <!-- looped -->
      <br />
      <h1>Games</h1>
      <div
        class="game-list"
        v-for="(game, index) in task.returnGames"
        :key="index"
      >
        <h4>{{ game.name }}</h4>
      </div>
      <form @submit.prevent="addGame()">
        <label for="name">Name</label>
        <input v-model="names" type="text" placeholder="Enter Game Name" />

        <input type="submit" value="Add Game" />
      </form>
      <Todos />
      <form @submit.prevent="deleteGameByName()">
        <label for="name">Name</label>
        <input v-model="names" type="text" placeholder="Enter Game Name" />

        <input type="submit" value="Delete Game" />
      </form>

      <br />
      <br />
      <button @click="getAsyncTasks()">Get Async Games</button>
    </div>
  </div>
</template>

<script>
//dont destructure the store or it losses its reactivity or in this case, not update the getter
import { useTaskStore } from "./stores/TaskStore";
import Todos from "./components/Todos.vue";
import { ref } from "vue";
export default {
  setup() {
    const task = useTaskStore();
    const names = ref("");

    const addGame = () => {
      console.log("names", names.value);
      task.addGame({ name: names.value });

      names.value = "";
    };

    const deleteGameByName = () => {
      task.deleteGameByName(names.value);
    };

    const getAsyncTasks = () => {
      task.getAsyncTasks();
      console.log(task.returnGames);
    };

    return {
      task,
      names,
      addGame,
      deleteGameByName,
      getAsyncTasks,
    };
  },
  components: { Todos },
  created() {},
};
</script>

<style>
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
