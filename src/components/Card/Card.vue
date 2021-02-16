<template>
  <div @click='flipCard'
      class="card"
      :id="index">
      <div class="back-face"></div>
      <img :src="card.url" class="front-face">
  </div>
</template>

<style lang="scss" src= "./card.scss"></style>
<script type="application/javascript" src='./card.js'></script>
