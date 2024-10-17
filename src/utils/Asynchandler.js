import { Promise } from "mongoose"

const AsyncHandler = (reqhandler) =>{
    (req,res,next)=>{
        Promise.resolve(reqhandler(req,res,next)).reject((err)=>{next(err)})
    }
}

export {AsyncHandler}