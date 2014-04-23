var App = Ember.Application.create({
	LOG_TRANSITIONS: true
});

App.ApplicationAdapter = DS.RESTAdapter.extend();

App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.Product = DS.Model.extend({
	title: DS.attr("string"),
	description: DS.attr("string"),
	starred: DS.attr("boolean"),
});

// Router definition
App.Router.map(function() {
	this.route("calculator");
  this.resource("products", function() {
  	this.resource("product", { path: "/:product_id" });
  });
});

App.Router.reopen({
  // location: 'none'
});

// Controller definition
App.IndexController = Ember.ArrayController.extend({
  productsCount: Ember.computed.alias("length"),

  starred: function() {
  	return this.filterProperty("isStarred", true).slice(0, 3);
  }.property("@each.isStarred"),
});

App.ProductsController = Ember.ArrayController.extend({
  sortProperties: ["title"],
});


// Route definition
App.IndexRoute = Ember.Route.extend({
  // activate: function() {},
  // deactivate: function() {},
  // setupController: function(controller, model) {},
  // renderTemplate: function() {},
  // beforeModel: function() {},
  // afterModel: function() {},
  
  model: function() {
      return this.store.findAll("product");
  }
});

App.CalculatorRoute = Ember.Route.extend({
  // activate: function() {},
  // deactivate: function() {},
  // setupController: function(controller, model) {},
  // renderTemplate: function() {},
  // beforeModel: function() {},
  // afterModel: function() {},
  
  model: function() {
      return ;
  }
});


App.ProductsRoute = Ember.Route.extend({
  // activate: function() {},
  // deactivate: function() {},
  // setupController: function(controller, model) {},
  // renderTemplate: function() {},
  // beforeModel: function() {},
  // afterModel: function() {},
  
  model: function() {
      return this.store.findAll("product", { order: "title" });
  }
});

// Fixtures definition
// Find out if local storage is supported
if (Modernizr.localstorage) {
	App.Product.FIXTURES = JSON.parse(localStorage.getItem("products"));
} else{
	App.Product.FIXTURES = appStorage.defaultProducts;
}

