const functions = require('firebase-functions');
const emailjs=require('emailjs/email');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
exports.sendmail=functions.database.ref('/sendmail/{emailkey}').onWrite(event=>{
    

    var server=emailjs.server.connect({
        user:'hiranmadhushanka123@gmail.com', 
        password:'951551317v',
        port:465,
        host: 'mail.google.com',
        ssl:true

    });
    server.send({
        text:'accept!',
        from:'hiran.16@itfac.mrt.ac.lk',
        to:'hiranmadhushanka95@gmail.com',
        subject:'you can logging'
    },(err,message)=>{
        if(err){
            return err;
        }
        else{
            return message;
        }
    }
    )

})