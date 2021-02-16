<template>
  <transition name="fade">
    <div class="popup-mask">
      <div class="popup-container">
        <div class="popup-header">
          <h2 name="header">GAME FINISHED</h2>
        </div>
        <div class="popup-score">
          <h3 name="score">Your Score: {{ score }}</h3>
        </div>
        <form>
          <div class="popup-name">
            <h3 name="name">Your Name:</h3>
            <div class="input-wrapper">
              <input name="input" v-model="nameInput" required>
            </div>
          </div>
        </form>
        <div class="button-wrapper">
          <button class="submit-button" @click="submit">
            <h4>SUBMIT</h4>
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" src="./PopUp.scss" scoped></style>
<script src="./PopUp.js"></script>
