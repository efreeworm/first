"use strict";
const fs = require("fs");
module.exports = function(app) {

    let router = [];
    //加载路由文件
    let router_path = "./router/";
    var router_files = fs.readdirSync(router_path);
    router_files.forEach(function(file) {
        let fileName = router_path + file;
        //console.log(fileName);
        let rt = require(fileName.replace(".js", ""));
        router[fileName] = new rt(app);
    });
};
