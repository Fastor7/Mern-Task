

exports.auth = (req,res,next) =>{
	if(req.headers.Authorization == "Bearer eesdfbb.lsakdfjlaksfnlkasnfkiiwoebgb.sfawefsadfa")
		return next();
	else 
		res.send({status:"FAILED",error:"UNAUTHORIZED"});
}