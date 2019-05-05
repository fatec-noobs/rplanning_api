'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Service extends Model {
  budgets() {
    return this.belongsToMany('App/Models/Budget')
  }
}

module.exports = Service
