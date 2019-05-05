'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BudgetsServicesSchema extends Schema {
  up () {
    this.create('budgets_services', (table) => {
      table.increments()
      table
        .integer('budget_id')
        .unsigned()

      table
        .integer('service_id')
        .unsigned()

      table.integer('amount')

      table
        .foreign('budget_id')
        .references('budgets.id')
        .onDelete('cascade')

      table
        .foreign('service_id')
        .references('services.id')
        .onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('budgets_services')
  }
}

module.exports = BudgetsServicesSchema
