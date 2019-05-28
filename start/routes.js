'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.group(() => {
  Route
    .resource('services', 'ServiceController')
    .apiOnly()
    .except('update');
})

Route.group(() => {
  Route
    .resource('materials', 'MaterialController')
    .apiOnly()
    .except('update');
})

Route.group(() => {
  Route
    .resource('clients', 'ClientController')
    .apiOnly()
    .except('update');
})

Route.group(() => {
  Route
    .resource('addresses', 'AddressController')
    .apiOnly()
    .except('update');
})

Route.group(() => {
  Route
    .resource('budgets', 'BudgetController')
    .apiOnly()
    .except('update');
})

