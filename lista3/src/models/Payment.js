
class Payment {
  
  constructor(id_payment,status_payment = 'Pending'){
  
    this.id_payment = id_payment ;
  
    this.status_payment = status_payment;
  
  }

  showPayment() {
  
    console.log(`Código do pagamento: ${this.id_payment}`);
  
    console.log(`Status do pagamento: ${this.status_payment}`);
  
  }

}

module.exports = Payment;