const router = require('express').Router()
const {addIncome, getIncomes, deleteIncome} = require('../controllers/income');
const { addExpense, getExpense, deleteExpense } = require('../controllers/expense')

router.post('/add-incomes',addIncome)
    .get('/get-incomes', getIncomes)
    .delete('/delete-incomes/:id', deleteIncome)
    .post('/add-expense', addExpense)
    .get('/get-expense',getExpense)
    .delete('/delete-expense/:id',deleteExpense)


module.exports=router;  