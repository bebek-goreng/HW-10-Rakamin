const errorHandler = (error, req, res, next) => {

    console.log(error);

    if (error.name === 'Invalid Credentials') return res.status(400).json({
        message: 'Invalid Credentials'
    });

    if (error.name === 'Data Not Found') return res.status(404).json({
        message: 'Data Not Found'
    });

    if (error.name === 'Invalid Input') return res.status(400).json({
        message: 'Invalid Input'
    });
    
    if(error.name === 'Email Already Exist') return res.status(400).json({
        message: 'Email Already Exist'
    });

    if(error.name === 'Movies') return res.status(400).json({
        message: 'Movies Already Exist'
    });

    if (error.name === 'authentication') return res.status(401).json({
        message: 'Authentication Required'
    });

    if(error.name === 'token') return res.status(403).json({
        message: 'Token Required'
    });

    if(error.name === 'authorization') return res.status(403).json({
        message: 'You Dont Have Access'
    });

    if(error.name === 'No Access') return res.status(403).json({
        message: 'Access Denied'
    });

    if(error.name === 'Invalid File') return res.status(400).json({
        message: 'Invalid File'
    });

    if(error.name === 'Invalid Extension') return res.status(400).json({
        message: 'Invalid Extension File'
    });

    res.status(500).json({ message: "Internal Server Error" });
}

export {
    errorHandler
}