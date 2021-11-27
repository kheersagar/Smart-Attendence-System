const nodemailer = require("nodemailer");
const template = require('./emailTemplate');

//  nedd to enable allow less secure app from your google account
function email(username,email) {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'rahhar848@gmail.com',
      pass: 'sagar4852&'
    }
  });

  var temp = template(username, email);
  var mailOptions = {
    from: 'rahhar848@gmail.com',
    to: email,
    subject: 'Sending Email using Node.js',
    text: 'That was easy!',
    html: `${temp}`,
    attachments: [{
        filename: 'image-1.png',
        path: __dirname + '/uploads/images/image-1.png',
        cid: 'image-1.png' //same cid value as in the html img src
      },
      {
        filename: 'image-2.png',
        path: __dirname + '/uploads/images/image-2.png',
        cid: 'image-2.png' //same cid value as in the html img src
      },
      {
        filename: 'image-3.png',
        path: __dirname + '/uploads/images/image-3.png',
        cid: 'image-3.png' //same cid value as in the html img src
      },
      {
        filename: 'image-4.png',
        path: __dirname + '/uploads/images/image-4.png',
        cid: 'image-4.png' //same cid value as in the html img src
      },
      {
        filename: 'image-5.png',
        path: __dirname + '/uploads/images/image-5.png',
        cid: 'image-5.png' //same cid value as in the html img src
      },
      {
        filename: 'image-6.png',
        path: __dirname + '/uploads/images/image-6.png',
        cid: 'image-6.png' //same cid value as in the html img src
      },
      {
        filename: 'image-7.png',
        path: __dirname + '/uploads/images/image-7.png',
        cid: 'image-7.png' //same cid value as in the html img src
      }
    ]

  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  // email ends here
}

module.exports = email;