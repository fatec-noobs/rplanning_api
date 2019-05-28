'use strict'

const Budget = use('App/Models/Budget');
const Service = use('App/Models/Service');
const Material = use('App/Models/Material');

class BudgetController {
  async index ({ request, response, view }) {
    const budgets = await Budget.all();
    return budgets;
  }

  async store ({ request, response }) {
    const content = request.only(['content']).content;
    const materials_id = content.materials_id;
    const services_id = content.services_id;

    delete content.materials_id;
    delete content.services_id;

    const service_promises = services_id.map(id => Service.findOrFail(id));
    const services = await Promise.all(service_promises);

    const material_promises = materials_id.map(id => Material.findOrFail(id));
    const materials = await Promise.all(material_promises);

    delete content.materials;
    delete content.services;
    
    const budget = await Budget.create({ ...content });
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
