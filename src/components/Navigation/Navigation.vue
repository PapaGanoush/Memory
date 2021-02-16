<template>
  <div class="navbar">
    <div class="navigate">
      <a @click="navigate('/')">Game</a>
    </div>
    <div class="navigate">
      <a @click="navigate('/highscores')">Highscores</a>
    </div>
  </div>
</template>

<style lang="scss" src="./Navigation.scss"></style>
<script type="application/javascript" src="./Navigation.js"></script>
