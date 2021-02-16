<template>
  <div class="scoreboard">
    <table v-if="scores">
      <thead>
        <tr>
          <th class="heading">Benutzer</th>
          <th class="heading">Spielstand</th>
        </tr>
      </thead>
      <tbody class="data_section">
        <tr>
          <td class="abstand">abstand</td>
          <td class="abstand">abstand</td>
        </tr>
        <tr v-for="score in getFilteredScores" :key="score.id">
          <td class="data">{{score.userName}}</td>
          <td class="data">{{score.score}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script src='./Scoreboard.js'></script>
<style lang="scss" src="./Scoreboard.scss" scoped></style>
