const Express = require('express')
const appController = require('../controller')
const movie = Express()

// *** MOVIE ZONE *** //
movie.get('/', appController.movie.index)
movie.get('/list', appController.movie.getAll)
movie.post('/', appController.movie.insert)
movie.put('/:id', appController.movie.update)
movie.put('/disable/:id', appController.movie.disable)
movie.put('/activate/:id', appController.movie.activate)


// *** SAVE ZONE PLEASE *** 
movie.delete('/onlyAdmin/whalez-teknologi/:id', appController.movie.delete)
// *** END OF AUTHENTICATION ZONE *** //

// *** END OF MOVIE ZONE *** //

module.exports = movie