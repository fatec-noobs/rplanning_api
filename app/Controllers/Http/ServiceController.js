'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Service = use('App/Models/Service');

/**
 * Resourceful controller for interacting with services
 */
class ServiceController {
  /**
   * Show a list of all services.
   * GET services
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const services = await Service.all();
    return services;
  }

  /**
   * Render a form to be used for creating a new service.
   * GET services/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new service.
   * POST services
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const content = request.only(['content']).content;
    const service = await Service.create({ ...content });
    return service;
  }

  /**
   * Display a single service.
   * GET services/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const service = await Service.findOrFail(params.id);
    return service;
  }

  /**
   * Render a form to update an existing service.
   * GET services/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update service details.
   * PUT or PATCH services/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a service with id.
   * DELETE services/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const service = await Service.findOrFail(params.id);
    await service.delete();
  }
}

module.exports = ServiceController
