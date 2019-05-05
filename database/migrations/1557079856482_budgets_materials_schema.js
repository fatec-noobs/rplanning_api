'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BudgetsMaterialsSchema extends Schema {
  up () {
    this.create('budgets_materials', (table) => {
      table.increments()
      table
        .integer('budget_id')
        .unsigned()

      table
        .integer('material_id')
        .unsigned()

      table.integer('amount')

      table
        .foreign('budget_id')
        .references('budgets.id')
        .onDelete('cascade')

      table
        .foreign('material_id')
        .references('materials.id')
        .onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('budgets_materials')
  }
}

module.exports = BudgetsMaterialsSchema
