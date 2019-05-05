'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BudgetsSchema extends Schema {
  up () {
    this.create('budgets', (table) => {
      table.increments()
      table.integer('client_id')
      table.integer('value')

      table
        .foreign('client_id')
        .references('clients.id')
        .onDelete('cascade')

      table.timestamps()
    })
  }

  down () {
    this.drop('budgets')
  }
}

module.exports = BudgetsSchema
