'use strict'

const Material = use('App/Models/Material');

class MaterialController {
  async index ({ request, response, view }) {
    const materials = await Material.all();
    return materials;
  }

  async store ({ request, response }) {
    const content = request.only(['content']).content;
    const material = await Material.create({ ...content });
    return material;
  }

  async show ({ params, request, response, view }) {
    const material = await Material.findOrFail(params.id);
    return material;
  }

  async destroy ({ params, request, response }) {
    const material = await Material.findOrFail(params.id);
    await material.delete();
  }
}

module.exports = MaterialController
