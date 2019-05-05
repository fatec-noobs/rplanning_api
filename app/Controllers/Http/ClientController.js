'use strict'

const Client = use('App/Models/Client');
const Address = use('App/Models/Address');

class ClientController {
  async index ({ request, response, view }) {
    const clients = await Client.all();
    return clients;
  }

  async store ({ request, response }) {
    const content = request.only(['content']).content;

    const addressContent = content.address
    const address = await Address.create({ ...addressContent });

    delete content.address;
    content.address_id = address.id;
    const client = await Client.create({ ...content });
    return client;
  }

  async show ({ params, request, response, view }) {
    const client = await Client.findOrFail(params.id);
    return client;
  }

  async destroy ({ params, request, response }) {
    const client = await Client.findOrFail(params.id);
    await client.delete();
  }
}

module.exports = ClientController
