import {conectar} from "./modelo/db.js";

import exp from 'express';

const app = exp();
app.set('views','./static')
app.set('view engine', 'ejs')

app.get('/',(req,res)=>{
    conectar.query('SELECT * FROM tecsup',(error,results)=>{
        if (error){
            throw error;
        }else{
            res.render('index',{resultado:results});
        }
    })
    
})

app.listen(3000)
console.log('Server onm port 3000')