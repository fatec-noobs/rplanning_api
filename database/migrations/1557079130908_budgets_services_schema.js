'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BudgetsServicesSchema extends Schema {
  up () {
    this.create('budgets_services', (table) => {
      table.increments()
      table
        .integer('budgetId')
        .unsigned()

      table
        .integer('serviceId')
        .unsigned()

      table.integer('amount')

      table
        .foreign('budgetId')
        .references('budgets.id')
        .onDelete('cascade')

      table
        .foreign('serviceId')
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
