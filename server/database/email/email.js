var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'hello.grampara@gmail.com',
    pass: 'rbk20212021'
  }
});

var mailOptions = {
  from: 'hello.grampara@gmail.com',
  to: 'rmadi.med1@gmail.com',
  subject: 'hello gram para',
  text: `hello its working :D`
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
