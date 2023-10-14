<template>
  <div class="hero">
    <div class="hero-content">
      <h1>DOUBLER VOS ÉCONOMIES <br>(et même un peu plus) </h1>
      <p>Plus de ventes, plus facilement</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroComponent'
}
</script>

<style scoped>
.hero {
  background-image: url('@/assets/img/hero.jpg');
  background-size: cover;
  background-position: center;
  color: #fff;
  text-align: center;
  padding: 100px 0;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  font-size: 36px;
  font-weight: bold;
  margin: 0;
}

p {
  font-size: 29px;
  margin: 20px 0;
  color:red;
  font-size:bold;
}

</style>
