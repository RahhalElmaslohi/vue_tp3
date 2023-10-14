<template>
  <div class="container">
    <h2 class="my-4">Liste des Produits</h2>
    <button class="btn btn-success mb-3" @click="handleAjouterProduit">Ajouter un produit</button>
    <!-- Modal pour ajouter un produit -->
    <div class="modal" :class="{ 'show': afficherFormulaireAjout, 'd-block': afficherFormulaireAjout }" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Ajouter un produit</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="handleAnnulerAjoutProduit">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <!-- Formulaire pour ajouter un nouveau produit -->
            <div class="mb-3">
              <input
                required
                type="text"
                class="form-control"
                placeholder="Nom du produit"
                v-model="nouveauProduit.name"
              />
              <span class="error-message" v-if="!nouveauProduit.name">Ce champ est obligatoire.</span>
            </div>
            <div class="mb-3">
               <input
                 required
                 type="text"
                 class="form-control"
                 placeholder="Photo du produit"
                 v-model="nouveauProduit.photo"
               />
               <span class="error-message" v-if="!nouveauProduit.photo">Ce champ est obligatoire.</span>
            </div>
            <div class="mb-3">
              <input
                required
                type="text"
                class="form-control"
                placeholder="Prix du produit"
                v-model="nouveauProduit.prix"
              />
              <span class="error-message" v-if="!nouveauProduit.prix">Ce champ est obligatoire.</span>
            </div>

            <div class="mb-3">
              <input
                required
                type="text"
                class="form-control"
                placeholder="Description du produit"
                v-model="nouveauProduit.description"
              />
              <span class="error-message" v-if="!nouveauProduit.desc">Ce champ est obligatoire.</span>
            </div>
            <div class="mb-3">
               <input
                required
                type="text"
                class="form-control"
                placeholder="Catégorie du produit"
                v-model="nouveauProduit.categorie"
               />
               <span class="error-message" v-if="!nouveauProduit.name">Ce champ est obligatoire.</span>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="handleAnnulerAjoutProduit">Annuler</button>
            <button type="button" class="btn btn-primary" @click="handleSauvegarderNouveauProduit">Sauvegarder</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal pour la mise à jour d'un produit -->
    <div class="modal" :class="{ 'show': afficherFormulaireMiseAJour, 'd-block': afficherFormulaireMiseAJour }" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Mettre à jour un produit</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="handleAnnulerMiseAJourProduit">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <!-- Formulaire pour mettre à jour un produit -->
            <div class="mb-3">
              <input
                required
                type="text"
                class="form-control"
                placeholder="Nouveau nom du produit"
                v-model="produitEnCoursDeModification.name"
              />
            </div>
            <!-- Champ de téléchargement de photo -->
            <div class="mb-3">
              <label for="photoMiseAJour">Nouvelle photo du produit :</label>
              <input
                required
              type="text"
              class="form-control"
              placeholder="Nouveau photo du produit"
              v-model="produitEnCoursDeModification.photo"

                              />
            </div>
            <!-- Ajoutez ici les autres champs du formulaire -->
            <input
              required
              type="text"
              class="form-control"
              placeholder="Nouveau prix du produit"
              v-model="produitEnCoursDeModification.prix"
            />
            <input
              required
              type="text"
              class="form-control"
              placeholder="Nouvelle description du produit"
              v-model="produitEnCoursDeModification.description"
            />
            <input
              required
              type="text"
              class="form-control"
              placeholder="Nouvelle catégorie du produit"
              v-model="produitEnCoursDeModification.categorie"
            />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="handleAnnulerMiseAJourProduit">Annuler</button>
            <button type="button" class="btn btn-primary" @click="handleSauvegarderMiseAJourProduit">Sauvegarder</button>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div v-for="produit in produits" :key="produit.id" class="col-md-4">
        <div class="card">
         <div class="col-md-6"><img class="card-img-top mb-5 mb-md-0" :src="require(`@/assets/img/${produit.photo}`)" :alt="produit.name" /></div>
          <div class="card-body">
            <h5 class="card-title">Nom: {{ produit.name }}</h5>
            <p class="card-text">Prix: {{ produit.prix }} $</p>
            <p class="card-text">Description: {{ produit.description }}</p>
            <p class="card-text">Catégorie: {{ produit.categorie }}</p>

            <button class="btn btn-primary btn-block" @click="mettreAJourProduit(produit.id, produit)">Mettre à jour</button>
            <button class="btn btn-danger btn-block" @click="supprimerProduit(produit.id)">Supprimer</button>
          </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import ProductDataService from '@/services/ProductDataService'

export default {
  name: 'ProduitsView',
  props: ['produits', 'actualiserListeProduits', 'supprimerProduit'],
  data () {
    return {
      afficherFormulaireAjout: false,
      afficherFormulaireMiseAJour: false,
      nouveauProduit: {
        nom: '',
        description: '',
        prix: 0,
        photo: null,
        categorie: ''
      },
      produitEnCoursDeModification: {
        nom: '',
        description: '',
        prix: 0,
        categorie: ''
      }

    }
  },
  methods: {
    // Afficher le formulaire d'ajout d'un nouveau produit
    handleAjouterProduit () {
      this.afficherFormulaireAjout = true
    },
    // Annuler l'ajout d'un nouveau produit et masque le formulaire
    handleAnnulerAjoutProduit () {
      this.afficherFormulaireAjout = false
    },
    // Sauvegarde d'un nouveau produit en l'envoyant au serveur
    async handleSauvegarderNouveauProduit () {
      if (!this.nouveauProduit.name || !this.nouveauProduit.description || !this.nouveauProduit.prix || !this.nouveauProduit.categorie || !this.nouveauProduit.photo) {
        console.error('Veuillez remplir tous les champs obligatoires.')
        return
      }

      const formData = new FormData()
      formData.append('name', this.nouveauProduit.name)
      formData.append('description', this.nouveauProduit.description)
      formData.append('prix', this.nouveauProduit.prix)
      formData.append('categorie', this.nouveauProduit.categorie)
      formData.append('photo', this.nouveauProduit.photo)
      try {
        const response = await ProductDataService.create(formData)

        if (response.status === 200) {
          const data = response.data
          console.log('Produit ajouté avec succès sur le serveur:', data)

          if (data.id) {
            this.nouveauProduit.id = data.id
          }

          // Mettere à jour la liste des produits côté client
          await this.actualiserListeProduits()

          // Forcer la mise à jour de l'interface utilisateur
          this.$forceUpdate()

          this.afficherFormulaireAjout = false
          this.nouveauProduit = {
            name: '',
            description: '',
            prix: 0,
            photo: null,
            categorie: ''
          }
        } else {
          console.error('Erreur lors de l\'ajout du produit sur le serveur.')
        }
      } catch (error) {
        console.error('Erreur lors de l\'ajout du produit sur le serveur :', error)
      }
    },
    // Annule la mise à jour d'un produit et masque le formulaire
    handleAnnulerMiseAJourProduit () {
      this.afficherFormulaireMiseAJour = false
    },
    // Prépare l'édition d'un produit en copiant ses données dans un formulaire
    mettreAJourProduit (id, produit) {
      this.produitEnCoursDeModification = { ...produit }
      this.afficherFormulaireMiseAJour = true
    },
    // Sauvegarde les modifications d'un produit en l'envoyant au serveur
    async handleSauvegarderMiseAJourProduit () {
      if (!this.produitEnCoursDeModification.id) {
        console.error("L'ID du produit est manquant.")
        return
      }

      const formData = new FormData()
      formData.append('name', this.produitEnCoursDeModification.name)
      formData.append('description', this.produitEnCoursDeModification.description)
      formData.append('prix', this.produitEnCoursDeModification.prix)
      formData.append('categorie', this.produitEnCoursDeModification.categorie)
      formData.append('photo', this.produitEnCoursDeModification.photo)
      try {
        const response = await ProductDataService.update(
          this.produitEnCoursDeModification.id,
          formData
        )

        if (response.status === 200) {
          const data = response.data
          console.log('Produit mis à jour avec succès sur le serveur:', data)
          this.actualiserListeProduits()
          this.afficherFormulaireMiseAJour = false
        } else {
          console.error('Erreur lors de la mise à jour du produit sur le serveur.')
        }
      } catch (error) {
        console.error('Erreur lors de la mise à jour du produit sur le serveur :', error)
      }
    }

  }
}
</script>

<style scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.col-md-2 {
  flex: 0 0 calc(30% - 1rem);
  margin-bottom: 1rem;
}
.error-message {
  color: red; /* Couleur du message d'erreur */
  font-size: 12px; /* Taille de la police du message d'erreur */
  margin-top: 4px; /* Marge supérieure pour espacer le message d'erreur */
}

</style>
