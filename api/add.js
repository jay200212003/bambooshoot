var path = require("path");
var add = function(req,res,next){
	var name = req.query.name, //接口名
		desc = "",
		json = {},
		edit = false;
	try{
		json = require(path.join(__dirname,"..","/mockdata/"+name.replace(/\//gi,"_") + ".json"));
		edit = true;
		desc = require(path.join(__dirname,"..","/mockdata/map.json")).list.filter(function(item){
			return item.name == name;
		})[0].desc;
	}catch(e){
		name = "";
	}
	res.render('add',{name: name,desc: desc,json:JSON.stringify(json),edit:edit});
}

module.exports = add;
