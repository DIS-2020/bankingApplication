const db = require("./db.js");
const accountModel = require("./account.js");


db.getConnection().then(async res => {
    // if a connection was successfully achieved
    // find and execute are two functions, that called in succession will first describe how to find elements, and then execute the query

    // get all accounts
    // let accounts = await accountModel.find({"firstName":"Morten"}).exec();
    // console.log(accounts);

    // get account by id
    // let accounts = await accountModel.findById("5f99889cc3ae44983b4faa9a").exec();
    // console.log(accounts);
    
    // update account, where firstname = navn
    // const upd = await accountModel.update({ "firstName": 'Navn' }, { balance: 10000 });
    // console.log(upd);
    
    
    // create account
    let create = await accountModel.create({ firstName: 'Jean-Luc Picard', lastName: "Herge" });
    console.log(create);
    


    // exit system
    process.exit(1)
}, err => {
    console.log("ERROR");
    console.log(err);
});