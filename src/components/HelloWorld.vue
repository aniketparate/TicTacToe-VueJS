<template>
  <div class="hello">
    <h1>Welcome to Tic Tac Toe</h1>
    <button class="start-btn" @click="startPlaying">Start Playing</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    startPlaying(){
      this.$router.push('/tictactoe')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #a2c2e6, #b9d8f5);
  color: #fff;
  text-align: center;
  animation: fadeIn 2s ease-in;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.start-btn {
  padding: 10px 20px;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  background: linear-gradient(135deg, #6fb1fc, #1e3a8a);
  color: #fff;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;
}

.start-btn:hover {
  background: linear-gradient(135deg, #1e3a8a, #6fb1fc);
  transform: scale(1.05);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
