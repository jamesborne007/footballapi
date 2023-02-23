

const notFound= (req,res) =>{
    res.status(404).send(`Route notfound try <a href = '/api/v1/teams'>FOOTBALLAPI</a>`)
};

module.exports = notFound