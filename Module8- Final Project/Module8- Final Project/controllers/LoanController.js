const loan = require('./../Models/loanModel');

exports.applyForLoans = async (req, res) =>{
    const {LOANTYPE ,LOANNUMBER, AMOUNT ,INTERESTRATE, LOANTERM} = req.body;
    let errors = [];
    if (!LOANTYPE || !LOANNUMBER || !AMOUNT || !INTERESTRATE || !LOANTERM) {
        errors.push({ msg: 'Please enter all fields' });
    }
    const newLoan = new loan({LOANTYPE ,LOANNUMBER, AMOUNT ,INTERESTRATE, LOANTERM});
    await newLoan.save()
        .then(loans =>{
            req.flash(
                'success_msg',
                'You are now Applied for a Loan'
            );
            res.redirect('/loans')
            
        }).catch(err => console.log(err))

}

exports.getAllLoanDetails = async (req, res) =>{
    const loans = await loan.find();
    res.render('loans', {loans})
}
