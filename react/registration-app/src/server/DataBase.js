const Pool = require('pg').Pool
const pool = new Pool({
  user: 'my_user',
  host: 'localhost',
  database: 'for_react_database',
  password: '1234',
  port: 5432,
});

const getMerchants = () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM customers ORDER BY id ASC', (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results.rows);
      })
    }) 
  }

const createCustomer = (body) => {
    return new Promise(function(resolve, reject) {
      const {
        first_name, last_name, patronymic, birth_day, birth_month, 
        birth_year, gender, city, pasport_seria, pasport_number,
        day_issue , month_issue, year_issue, been_issumed, department_id
             } = body ;

      pool.query('INSERT INTO customers (first_name, last_name, patronymic, birth_day, birth_month , birth_year, gender, city, pasport_seria, pasport_number, day_issue , month_issue, year_issue, been_issumed, department_id ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) RETURNING *',
          [
        first_name, last_name, patronymic, birth_day, birth_month,
        birth_year, gender, city, pasport_seria, pasport_number,
        day_issue , month_issue, year_issue, been_issumed, department_id
          ], 
  
       (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(`A new customer has been added: ${results.rows[0]}`)
      })
    })
  }


  module.exports = {
   createCustomer,
   getMerchants
  }