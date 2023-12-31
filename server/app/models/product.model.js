module.exports = (connex, Sequelize) => {
    const Product = connex.define('product', {
        name: {
            type: Sequelize.STRING
        },
        photo: {
            type: Sequelize.STRING
        },
        prix: {
            type: Sequelize.REAL
        },
        description: {
            type: Sequelize.TEXT
        },
        categorie: {
            type: Sequelize.STRING
        }
    })
    return Product
}