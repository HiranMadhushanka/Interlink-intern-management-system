'use strict';

const dynamodb = require('./dynamodb');

module.exports.update = (event, context, callback) => {
  const timestamp = new Date().getTime();
  const data = JSON.parse(event.body);

  //validation
  // if (typeof data.text !== 'string' ) {
  //   console.error('Validation Failed');
  //   callback(null, {
  //     statusCode: 400,
  //     headers: { 'Content-Type': 'text/plain' },
  //     body: 'Couldn\'t update the todo item.',
  //   });
  //   return;
  // }

  const params = {
    TableName: "supervisor",
    Key: {
      name: event.pathParameters.id,
    },
    ExpressionAttributeNames: {
      '#todo_name': 'id'
    
      
},
    ExpressionAttributeValues: {
      ':text': data.text
     
     
    },
    UpdateExpression: 'SET #todo_name = :text',
    ReturnValues: 'ALL_NEW',
  };

  // update the todo in the database
  dynamodb.update(params, (error, result) => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Couldn\'t update the todo item.',
      });
      return;
    }

    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify(result.Attributes),
    };
    callback(null, response);
  });
};
