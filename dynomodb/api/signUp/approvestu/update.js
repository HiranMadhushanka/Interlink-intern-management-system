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
    TableName: "approvestudent",
    Key: {
      id: event.pathParameters.id,
    },
    ExpressionAttributeNames: {
      '#todo_fname': 'fname',
      '#todo_lname': 'lname',
      '#todo_contact': 'contact',
      // '#todo_password': 'password',
      '#todo_github': 'github',
      '#todo_linkedin': 'linkedin',
      '#todo_facebook': 'facebook',
      '#todo_other': 'qulifications'
      // '#todo_skill1name': 'skill1name',
      // '#todo_skill1rate': 'skill1rate',
      // '#todo_skill2name': 'skill2name',
      // '#todo_skill2rate': 'skill2rate',
      // '#todo_skill3name': 'skill3name',
      // '#todo_skill3rate': 'skill3rate',
      // '#todo_skill4name': 'skill4name',
      // '#todo_skill4rate': 'skill4rate',
      // '#todo_skill5name': 'skill5name',
      // '#todo_skill5rate': 'skill5rate'
      
      
},
    ExpressionAttributeValues: {
      ':text': data.text,
      ':text1': data.text1,
      ':text2': data.text2,
      
      ':text4': data.text4,
      ':text5': data.text5,
      ':text6': data.text6,
      ':text7': data.text7
      // ':text8': data.text8,
      // ':text9': data.text9,
      // ':text10': data.text10,
      // ':text11': data.text11,
      // ':text12': data.text12,
      // ':text13': data.text13,
      // ':text14': data.text14,
      // ':text15': data.text15,
      // ':text16': data.text16,
      // ':text17': data.text17
      


     
    },
    UpdateExpression: 'SET #todo_fname = :text, #todo_lname= :text1,#todo_contact= :text2,  #todo_github= :text4, #todo_linkedin= :text5, #todo_facebook= :text6 , #todo_other= :text7',
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
