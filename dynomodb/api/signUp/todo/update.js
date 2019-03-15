'use strict';

const dynamodb = require('./dynamodb');

module.exports.update = (event, context, callback) => {
  const timestamp = new Date().getTime();
  const data = JSON.parse(event.body);



  const params = {
    TableName: "todo",
    Key: {
      id: event.pathParameters.id,
    },
    ExpressionAttributeNames: {
     '#todo_studentid': 'studentid',
     '#todo_content': 'content',
     '#todo_status': 'status',
      
      
},
    ExpressionAttributeValues: {
    ':text': data.text,
    ':text2': data.text2,
    ':text3': data.text3


     
    },
    UpdateExpression: 'SET #todo_studentid = :text,#todo_content = :text2,#todo_status=:text3',
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
