exports.getLandingPAge = async (req, res) => {
    res.status(200).render('overview', {
      title: `Over View`
    
    });
};

exports.getRegisterUserPage = async (req,res) =>{
    res.status(200).render('registerUser' ,{
        title:'sign up'
    })
};

exports.getLoginPage = async (req, res) =>{
    res.status(200).render('login' ,{
        title:'LogIn'
    })
}

exports.getLoanPage = async (req,res) =>{
    res.status(200).render('createLoans' ,{
        title:'loans'
    })
}