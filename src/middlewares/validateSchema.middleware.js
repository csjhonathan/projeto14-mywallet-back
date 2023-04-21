export default function validateSchema( schema ){
    return ( req, res, next ) => {

        const {error} = schema.validate( req.body, { abortEarly : false } );
        if( error ){
            return res.status( 422 ).send( {message : error.details.map( er => er.message )} );
        }

        return next();
    };
}