import { Request, Response } from 'express';
import User from '../models/User'

// export const nome = (req: Request, res: Response) => {
//     let nome: string = req.query.nome as string;
//     let idade: string = req.query.idade as string;

//     res.render('pages/nome', {
//         nome,
//         idade
//     });
// };

// export const idadeForm = (req: Request, res: Response) => {
//     res.render('pages/idade');
// };

// export const idadeAction = (req: Request, res: Response) => {
//     let mostrarIdade: boolean = false;
//     let idade: number = 0;

//     if(req.body.ano) {
//         let anoNascimento: number = parseInt(req.body.ano as string);
//         let anoAtual: number = new Date().getFullYear();
//         idade = anoAtual - anoNascimento;
//         mostrarIdade = true;
//     }

//     res.render('pages/idade', {
//         idade,
//         mostrarIdade
//     });
// };

export const addUserAction = async (req: Request, res: Response) => {
    try {
        const { firstName, lastName, age, email, interests } = req.body
        let newUser = new User()
        newUser.name = { firstName, lastName }
        newUser.age = parseInt(age)
        newUser.email = email
        newUser.interest = interests.split(',')
        let resultado = await newUser.save() 
        console.log('NOVO USUARIO CADASTRADO COM SUCESSO', resultado)
        res.redirect('/')
    } catch (error) {
        console.log('Erro ao cadastar usuario')
    }
}
export const addAge = async (req: Request, res: Response) => {
    const id = req.params.id
    if(!id) throw new Error(`ERROR :: ${id}`)
    const user = await User.findOne({ _id: id })
    if(user?.age) user.age++
    user?.save()
    res.redirect('/')
}
