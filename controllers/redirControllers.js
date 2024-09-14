const Redirect = require("../models/redir");

const redir_index = (req, res) => {
    Redirect.find().sort({url : 1})
    .then(function (result) {
        res.render('index',{redirs: result})
    })
    .catch(function (err) {
        console.error(err);
    })
}

const redir_index_post = (req, res) => {
    const redir = new Redirect(req.body);
    redir.save()
     .then(function (result) {
        res.redirect('/')
     })
     .catch(err => {
        console.error(err);
     });
}

const redir_short = (req, res) => {
    const short = req.params.short;
    Redirect.findOne({ short: short })
        .then((result) => {
            if (result) {
                res.redirect(result.url);
            } else {
                res.status(404).send('URL not found');
            }
        })
        .catch((err) => {
            res.status(500).send('Server error');
        });
};



module.exports = {
    redir_index,
    redir_index_post,
    redir_short
}