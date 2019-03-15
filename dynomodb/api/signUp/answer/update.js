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
    TableName: "answer",
    Key: {
      id: event.pathParameters.id,
    },
    ExpressionAttributeNames: {
     '#todo_studentid': 'studentid',
     '#todo_skillname': 'skillname',
     '#todo_skillrate': 'skillrate',
      
      
},
    ExpressionAttributeValues: {
    ':text': data.text,
    ':text1': data.text1,
    ':text2': data.text2


     
    },
    UpdateExpression: 'SET #todo_studentid = :text,#todo_skillname=:text1,#todo_skillrate=:text2',
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
