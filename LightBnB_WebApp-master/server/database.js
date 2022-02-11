const properties = require('./json/properties.json');
const users = require('./json/users.json');
const { Pool } = require('pg');
const pool = new Pool({database: 'lightbnb'});

/// Users

/**
 * Get a single user from the database given their email.
 * @param {String} email The email of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithEmail = function(email) {

  return pool
    .query(
      `SELECT *
  FROM users
  WHERE email = $1;`, [email.toLowerCase()]
    )
    .then((result) => {
      console.log(result.rows);
      
      if (result.rows[0]) {
        return result.rows[0];
      }
      
      return null;
    })
    .catch((err)=> {
      console.log(err);
    });
  // let user;
  // for (const userId in users) {
  //   user = users[userId];
  //   if (user.email.toLowerCase() === email.toLowerCase()) {
  //     break;
  //   } else {
  //     user = null;
  //   }
  // }
  // return Promise.resolve(user);
};
exports.getUserWithEmail = getUserWithEmail;

/**
 * Get a single user from the database given their id.
 * @param {string} id The id of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithId = function(id) {
  return pool
    .query(
      `SELECT *
      FROM users
      WHERE id = $1;`, [id]
    )
    .then((result) => {
      console.log(result.rows);
    
      if (result.rows[0]) {
        return result.rows[0];
      }
    
      return null;
    })
    .catch((err)=> {
      console.log(err);
    });
};
exports.getUserWithId = getUserWithId;


/**
 * Add a new user to the database.
 * @param {{name: string, password: string, email: string}} user
 * @return {Promise<{}>} A promise to the user.
 */
const addUser =  function(user) {

  return pool.query(`INSERT INTO users (name, email, password)
      VALUES ($1, $2, $3)
      RETURNING *;`, [user.name, user.email, user.password]).then(res => res.rows[0]).catch(err => console.log(err));
  // const userId = Object.keys(users).length + 1;
  // user.id = userId;
  // users[userId] = user;
  // return Promise.resolve(user);
};
exports.addUser = addUser;



/// Reservations

/**
 * Get all reservations for a single user.
 * @param {string} guest_id The id of the user.
 * @return {Promise<[{}]>} A promise to the reservations.
 */
const getAllReservations = function(guest_id, limit = 10) {

  return pool
    .query(
      `SELECT *
  FROM reservations
  JOIN properties ON properties.id = property_id
  WHERE guest_id = $1
  LIMIT $2;`, [guest_id, limit]
    )
    .then((result) => {
      console.log("====", result.rows);
      return result.rows;
    })
    .catch((err)=> {
      console.log(err);
    });
};
exports.getAllReservations = getAllReservations;

/// Properties

/**
 * Get all properties.
 * @param {{}} options An object containing query options.
 * @param {*} limit The number of results to return.
 * @return {Promise<[{}]>}  A promise to the properties.
 */
const getAllProperties = function(options, limit = 10) {

  return pool
    .query(
      `SELECT *
    FROM properties
    LIMIT $1;`, [limit]
    )
    .then((result) => result.rows)
    .catch((err)=> {
      console.log(err);
    });

  // const limitedProperties = {};
  // for (let i = 1; i <= limit; i++) {
  //   limitedProperties[i] = properties[i];
  // }
  // return Promise.resolve(limitedProperties);
};
exports.getAllProperties = getAllProperties;


/**
 * Add a property to the database
 * @param {{}} property An object containing all of the property details.
 * @return {Promise<{}>} A promise to the property.
 */
const addProperty = function(property) {
  const propertyId = Object.keys(properties).length + 1;
  property.id = propertyId;
  properties[propertyId] = property;
  return Promise.resolve(property);
};
exports.addProperty = addProperty;
