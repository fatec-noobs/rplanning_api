'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClientSchema extends Schema {
  up () {
    this.create('clients', (table) => {
      table.increments()
      table.integer('address_id')
      table.string('name')
      table.string('email')
      table.string('phone')
      table.string('type')
      table.string('cpf')

      table
        .foreign('address_id')
        .references('addresses.id')
        .onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('clients')
  }
}

module.exports = ClientSchema
