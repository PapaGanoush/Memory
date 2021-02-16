<template>
  <div class="game-holder">
    <h2>Tries: {{ score }}</h2>
    <div class="game">
      <Card
      v-for="(card, index) in cards"
      :index="index"
      :card="card"
      :key="index"
      @first-card="getFirstCard"
      @second-card="getSecondCard">
      </Card>
      <PopUp v-show="showModal" :score="score"></PopUp>
    </div>
  </div>
</template>

<style lang="scss" src= "./Game.scss"></style>
<script type="application/javascript" src='./Game.js'></script>
