const bcrypt = require('bcrypt');

const password = '1234Segura!';

//encripta el password
bcrypt.hash(password, 5, function(err, hash) {
    console.log(hash);

    bcrypt.compare(password, hash, function(err, res) {
        //console.log(err);
        console.log(res);
    })
})
