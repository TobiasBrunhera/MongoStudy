import { Request, Response } from 'express';

import { Product } from '../models/Product';
import User from '../models/User'

export const home = async (req: Request, res: Response)=>{

    let paulo = await User.findOne({ email: 'fulano@gmail.com' })
    await paulo?.deleteOne()

    let users = await User.find({}).sort({"name.firstName": 'asc'})

    res.render('pages/home', {
        users
        // name: 'Bonieky',
        // lastName: 'Lacerda',
        // showOld,
        // products: list,
        // expensives: expensiveList,
        // frasesDoDia: []
    });

    // let newUser = await User.create({
    //     name: { firstName: 'Monaliza', lastName: 'Fernandes' },
    //     email: 'mona@paris.com',
    //     age: 200,
    //     interest: ['arte', 'pizza']
    // })
    // console.log("NOVO USUARIO: ", newUser)
    
    
    // let usuarios = await User.find({ 
    //     age: { $gt: 0 }
    // }).sort({ age: 'asc' }).skip(2).limit(2)

    // let age: number = 90;
    // let showOld: boolean = false;

    // if(age > 50) {
    //     showOld = true;
    // }

    // let list = Product.getAll();
    // let expensiveList = Product.getFromPriceAfter(12);

    
};