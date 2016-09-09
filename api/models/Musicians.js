/**
 * Musicians.js
 *
 * @description :: This module will create the schema for the Musician API with the tables to store their records.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	
  	musicianID: {
    	type: 'integer',
    	primaryKey: true,
    	autoIncrement: true
  },
  	firstName: {
	    type: 'string',
	    required: true,
	    minLength: 2
  },
  	lastName: {
    	type: 'string',
	    required: true,
	    minLength: 2
    },
    typeOfMusic: {
    	type: 'string',
    	required: true
    },
    homeCity: {
	    type: 'string',
	    required: true,
	    minLength: 2
  },
  	homeState: {
    	type: 'string',
	    required: true,
	    minLength: 2
    },
    phone: {
    	type: 'string',
    	regex: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    },
    salary: {
    	type: 'float',
    	defaultsTo: 0.00
    }
  }

};

