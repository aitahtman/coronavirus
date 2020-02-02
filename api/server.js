var express = require('express'),
    app = express(),
    PORT = process.env.OPENSHIFT_NODEJS_PORT || 8080
    ADRESS = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

app.get('/api/data/', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'todos retrieved successfully',
        todos: db
    })
});


app.listen(PORT,ADRESS, () => {
    console.log(`server running on port ${PORT}`)
});