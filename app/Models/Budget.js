'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Budget extends Model {
  materials() {
    return this.belongsToMany('App/Models/Material')
  }

  services() {
    return this.belongsToMany('App/Models/Service')
  }

  client() {
    return this.belongsTo('App/Models/Client')
  }
}

module.exports = Budget
