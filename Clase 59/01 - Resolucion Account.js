class Account {
  balance;  //Balance
  accountNumber;  //Numero de cuenta
  
  
  constructor(accountNumber) {    
    this.balance = 0.0;
    this.accountNumber = accountNumber;
  }
  
  deposit(sum) {
    if (sum < 0) throw new Error("No se puede hacer deposito negativo.");
    this.balance += sum;
  }
  
  withdraw(sum) { // retirar
    if (sum < 0) throw new Error("No se puede retirar una cantidad negativa.");
    this.balance -= sum;
  }
  
  toString() {
    return "Acc " + this.accountNumber + ": " + "balance = " + this.balance;    
  }
}

class SavingsAccount extends Account {
  constructor(interest, accountNumber) {
    super(accountNumber);
    this.interest = interest;
  }

  withdraw(sum) {
    if(this.balance < sum) throw new Error("No hay saldo suficiente.");
    super.withdraw(sum);
  }

  sumarInteres() {
    this.balance = this.balance * (1 + (this.interest / 100));
  }
}

class CurrentAccount extends Account {
  constructor(accountNumber) {
    super(accountNumber);
  }

  sendNegativeBalanceEmail() {
    console.warn(`El saldo actual es de ${this.balance}, por favor, paganos. Tipo ya.`)
  }
}

class Bank {
  accounts = [];
  interestRate = 10;
  _nextAccountNumber = 0;

  constructor(name) {
    this.name = name;
  }

  get nextAccountNumber() {
    return this._nextAccountNumber++;
  }

  buscarCuentaPorNumero(accountNumber) {
    const index = this.accounts.findIndex(account => account.accountNumber === accountNumber);
    if (index === -1) throw new Error("La cuenta no existe.");
    return {
      index,
      account: this.accounts[index]
    };
  }

  agregarCuenta(account) {
    if(!(account instanceof Account)) throw new Error("Debe ser instancia de Account");
    this.accounts.push(account);
  }

  eliminarCuenta(accountNumber) {
    const {index} = this.buscarCuentaPorNumero(accountNumber);
    // lo mismo que hacer
    /**
     * const objRet = this.buscarCuentaPorNumero(accountNumber);
     * const index = objRet.index;
     */
    this.accounts.splice(index, 1);
  }

  actualizacionMensual() {
    this.accounts = this.accounts.map(account => {
      if(account instanceof SavingsAccount) {
        account.sumarInteres();
      } else if(account instanceof CurrentAccount && account.balance < 0) {
        account.sendNegativeBalanceEmail();
      }
      return account;
    });
  }
}

const bancada = new Bank("Bancada");

const crearNuevaCuentaDeAhorro = (banco) => {
  const cuenta = new SavingsAccount(banco.interestRate, banco.nextAccountNumber);
  banco.agregarCuenta(cuenta);
  return cuenta;
}

const miCuentaNueva = crearNuevaCuentaDeAhorro(bancada);

const {account}  = bancada.buscarCuentaPorNumero(...);
account.deposit(4500);
bancada.saveAccountChanges(account);