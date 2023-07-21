import { Router } from 'express'

export const viewRouter = Router()

viewRouter.get('/',  (req, res)=> {
    const data = 'Brajhan'

    res.render('home', {
        data
        })
})

viewRouter.get('/realTimeProducts',  (req, res)=> {
    const data = 'Brajhan'

    res.render('realTimeProducts', {
        data
        })
})