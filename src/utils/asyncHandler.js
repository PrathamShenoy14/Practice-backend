const asyncHandler = (requestHandler)=>{
    (req,res,next)=>{
        Promise
        .resolve(requestHandler(req,res,next))
        .catch((error)=>{
            console.log(error);
        })
    }
};

export {asyncHandler}