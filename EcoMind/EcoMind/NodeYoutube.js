var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.get('/send', function(req,res){
	var nodemailer = require('nodemailer');
	var transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'ecomindsu',
			pass: 'SumantranTiger'
		}
	});
	transporter.sendMail({
		from: 'ecomindsu@gmail.com',
		to: 'speerbetsy@gmail.com',
		subject: 'Node.js test',
		html: '<div style="text-align:center;background:dodgerblue;color:white">My email form</div>'
		
	});
	res.redirect('/');
});
app.listen(process.env.PORT|| 3000);



/* notes

var nodemailer = require('nodemailer');
var express = require('express');
var router = express.Router();
app.use('/community_page.html')
router.post('/', sendEmail);


//var app = express();
function sendEmail(socket, req) {
    /* Betsy you will probably not have to use socket, but the req is the information that is coming from the community page. 
       It is a dictionary. That have the following structure
       { 
            action_type: -- You are not going to use this
            message: {  -- this is the one that you are going to access, so you will do req.message to have the dictionary and then access this other dictionary
                name: $("#nameContact").val(),
                email: $("#emailContact").val(),
                msg: $("#messageContact").val()
            }, 
            user_id: getCookie().client_id  -- you are not going to use


        }
       */

        // write the code to send the email here, you can do whatever you want, import other library or create other functions, just make sure that the first place where it is going to pass it is here.
        // All the time that you modify, to test you need to reload the server. Just give CTRL C in the terminal where the server is running and then execude node app.js again
    
/*    
    console.log("hello world");
    // create reusable transporter object using the default SMTP transport
    var transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth:{
			user: 'ecomindsu@gmail.com',
			pass: 'SumantranTiger'
		}
	});

    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: 'ecomindsu@gmail.com', // sender address
        to: 'speerbetsy@gmail.com', // list of receivers
        subject: 'Hello ', // Subject line
        text: 'Hello world', // plaintext body
        html: '<b>Hello world </b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });

        console.log(req);
}

function requestListener(socket, req) {
  switch (req.action_type) {
        case 'sendEmail':
            sendEmail(socket, req);
            break;
        default:
            return false;
    }

    return true;
}

exports.requestListener = requestListener;


*/