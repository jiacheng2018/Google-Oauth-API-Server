if (process.env.NODE_ENV == 'production') {
    module.exports = require('./dev');
    console.log("this is production")
} else {
    module.exports = require('./prod');
    console.log("this is dev")
}


// mongodb+srv://jiacheng:85214997@cluster0-coa2j.mongodb.net/test?retryWrites=true&w=majority
// 391412461529-mhtvm4mrciieeqt4sl621ivpo4ljbc1n.apps.googleusercontent.com
// client secret yNn2ZF5qI9_WuLw8YGL4ZOIM
