

const queries = require('../../models/pokemons');


module.exports = (db)=> async (req, res, next) => {
    
   const {name} = req.params
   
    const dbRes = await queries.selectAllName(await db)(name)
     
    

    if (!dbRes.ok) {
        return next({
            statusCode:500,
            error: new Error('something went wrong')
        });
      }

    res.status(200).json({
        success : true,
        data: dbRes.response,
    })
}