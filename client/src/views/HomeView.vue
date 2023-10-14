<template>
  <div class="home">
    <div class="home-content">
      <div class="text">
        Bienvenue sur Rahhal Electronic Store. Nous sommes passionnés par la technologie et nous nous engageons à vous offrir une expérience d'achat en ligne exceptionnelle pour tous vos besoins en produits électroniques. Chez Rahhal Electronic Store, nous comprenons à quel point la technologie est devenue essentielle dans notre vie quotidienne. C'est pourquoi nous avons rassemblé une vaste sélection de produits électroniques de qualité, allant des derniers smartphones et ordinateurs portables aux gadgets innovants et aux appareils électroniques pour la maison.

        Notre mission est de simplifier votre parcours d'achat en vous offrant un accès facile aux produits électroniques les plus récents et les plus performants du marché. Notre équipe dévouée recherche et sélectionne soigneusement chaque produit que nous proposons, en veillant à ce qu'ils répondent aux normes de qualité les plus élevées.

        Chez Rahhal Electronic Store, nous croyons en l'importance de la satisfaction du client. C'est pourquoi nous mettons tout en œuvre pour offrir un service client exceptionnel, une livraison rapide et fiable, ainsi que des prix compétitifs.

        Explorez notre boutique en ligne et découvrez une gamme de produits électroniques de premier plan, accompagnée de descriptions détaillées et de critiques pour vous aider à prendre des décisions éclairées. Faites-nous confiance pour vous fournir les dernières innovations technologiques.

        Rejoignez-nous dans notre passion pour la technologie, et laissez Rahhal Electronic Store être votre destination de choix pour tous vos besoins en produits électroniques.
      </div>
      <div class="image">
       <img :src="require('@/assets/img/rahhalstore.jpg')"  alt="Image de la boutique électronique">

      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {

  }
}
</script>
<style>
.home {
  text-align: center;
  padding: 10px;
}

.home-content {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.text {
  flex: 1;
  text-align: left;
}

.image img {
  max-width: 100%;
  max-height: 300px; /* Ajustez la hauteur selon vos besoins */
  object-fit: cover;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
