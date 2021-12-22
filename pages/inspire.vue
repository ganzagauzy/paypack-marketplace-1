<template>
 <div>
  <v-row>
    <v-col class="text-center">
      <!-- <img
        src="/v.png"
        alt="Vuetify.js"
        class="mb-5"
      > -->
      <blockquote class="blockquote">
        &#8220;Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, illum. Officiis quibusdam ipsum nostrum laboriosam harum ad laudantium eum quasi praesentium deleniti quis cum tempora saepe, iste, ipsam inventore reiciendis. Ea, doloribus! Exercitationem eum maxime ea vitae ex numquam fugiat. Architecto impedit culpa error! Sequi placeat voluptas fugiat! Non, molestiae.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
    </v-col>
  </v-row>

  <ul>
    <li v-for="todo in todos" :key="todo.text">
      <input :checked="todo.done" @change="toggle(todo)" type="checkbox">
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
    </li>
    <li><input @keyup.enter="addTodo" placeholder="What needs to be done?"></li>
  </ul>



 </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    todos () {
      return this.$store.state.todos.list
    }
  },
  methods: {
    addTodo (e) {
      this.$store.commit('todos/add', e.target.value)
      e.target.value = ''
    },
    ...mapMutations({
      toggle: 'todos/toggle'
    })
  }
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
