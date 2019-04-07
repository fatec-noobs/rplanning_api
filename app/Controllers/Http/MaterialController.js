'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Material = use('App/Models/Material');

/**
 * Resourceful controller for interacting with materials
 */
class MaterialController {
  /**
   * Show a list of all materials.
   * GET materials
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const materials = await Material.all();
    return materials;
  }

  /**
   * Render a form to be used for creating a new material.
   * GET materials/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new material.
   * POST materials
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const content = request.only(['content']).content;
    const material = await Material.create({ ...content });
    return material;
  }

  /**
   * Display a single material.
   * GET materials/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const material = await Material.findOrFail(params.id);
    return material;
  }

  /**
   * Render a form to update an existing material.
   * GET materials/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update material details.
   * PUT or PATCH materials/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a material with id.
   * DELETE materials/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const material = await Material.findOrFail(params.id);
    await material.delete();
  }
}

module.exports = MaterialController
