'use strict'

const Service = use('App/Models/Service');

class ServiceController {
  async index ({ request, response, view }) {
    const services = await Service.all();
    return services;
  }

  async store ({ request, response }) {
    const content = request.only(['content']).content;
    const service = await Service.create({ ...content });
    return service;
  }

  async show ({ params, request, response, view }) {
    const service = await Service.findOrFail(params.id);
    return service;
  }

  async destroy ({ params, request, response }) {
    const service = await Service.findOrFail(params.id);
    await service.delete();
  }
}

module.exports = ServiceController
