'use strict'

const Budget = use('App/Models/Budget');

class BudgetController {
  async index ({ request, response, view }) {
    const budgets = await Budget.all();
    return budgets;
  }

  async store ({ request, response }) {
    const content = request.only(['content']).content;
    const budgets = await Budget.create({ ...content });
    return budgets;
  }

  async show ({ params, request, response, view }) {
    const budget = await Budget.findOrFail(params.id)
    return budget;
  }

  async destroy ({ params, request, response }) {
    const budget = await Budget.findOrFail(params.id)
    await budget.delete();
  }
}

module.exports = BudgetController
