'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClientSchema extends Schema {
  up () {
    this.table('clients', (table) => {
      table
        .integer('addressId')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('addresses')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
  }

  down () {
    this.table('clients', (table) => {
      // reverse alternations
    })
  }
}

module.exports = ClientSchema
