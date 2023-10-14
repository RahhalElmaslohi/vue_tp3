<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/product">Produits</router-link>
    </nav>
    <HeroComponent />
    <div class="container mt-4">
      <router-view
        :produits="produits"
        :actualiserListeProduits="actualiserListeProduits"
        :mettreAJourProduit="mettreAJourProduit"
        :supprimerProduit="supprimerProduit"
        :ajouterProduit="ajouterProduit"
      ></router-view>
    </div>
  </div>
   <FooterComponent />
</template>

<script>
import ProductDataService from '@/services/ProductDataService'
import HeroComponent from '@/components/HeroComponent'
import FooterComponent from '@/components/FooterComponent'

export default {
  name: 'App',
  components: {
    HeroComponent,
    FooterComponent
  },
  data () {
    return {
      produits: [],
      produitEnCoursDeModification: {
        id: null,
        nom: '',
        description: '',
        prix: 0,
        photo: '',
        categorie: ''
      },
      afficherFormulaireAjout: false,
      afficherFormulaireMiseAJour: false,
      nouveauProduit: {
        nom: '',
        description: '',
        prix: 0,
        photo: '',
        categorie: ''
      },
      produitsLocaux: []
    }
  },
  methods: {
  // Méthode pour mettre à jour la liste des produits
    actualiserListeProduits () {
      // En utilise la méthode getAll pour récupérer la liste des produits
      ProductDataService.getAll()
        .then(response => {
          // Mettez à jour la liste des produits avec les données reçues
          this.produits = response.data
        })
        .catch(error => {
          console.error('Erreur lors de la récupération de la liste des produits :', error)
        })
    },
    // Méthode pour mettre à jour un produit
    mettreAJourProduit (id, produit) {
      this.produitEnCoursDeModification = { ...produit }
      this.afficherFormulaireMiseAJour = true
    },
    // Méthode pour supprimer un produit
    supprimerProduit (id) {
      ProductDataService.delete(id)
        .then((response) => {
          console.log('Produit supprimé avec succès sur le serveur:', response.data)

          // Recherchez l'index de l'élément à supprimer dans le tableau
          const index = this.produits.findIndex(produit => produit.id === id)

          // Si l'élément a été trouvé, supprimez-le du tableau
          if (index !== -1) {
            this.produits.splice(index, 1)
          }
        })
        .catch((error) => {
          console.error('Erreur lors de la suppression du produit sur le serveur :', error)
        })
    }

  },
  mounted () {
    // Au chargement de l'application, récupérez la liste des produits
    ProductDataService.getAll()
      .then(response => {
        this.produits = response.data
      })
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 50px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
