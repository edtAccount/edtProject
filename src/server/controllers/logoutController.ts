import { Request, Response } from "express";

export function logout(request:Request, response:Response){
    
    return request.session.save(()=> {
        request.session.destroy(err => {
            if(err) throw err;
    
            response.cookie("id", request.cookies.id, {
                maxAge: 0,
            });
    
            response.redirect(302, "http://localhost:3000/login");
            response.end();
        });
    })

}