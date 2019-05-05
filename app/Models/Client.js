'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Client extends Model {
  budget() {
    return this.hasOne('App/Models/Budget')
  }

  address() {
    return this.belongsTo('App/Models/Address')
  }
}

module.exports = Client
