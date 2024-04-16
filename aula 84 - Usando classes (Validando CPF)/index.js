// 705.484.450-52 070.987.720-03

class ValidationCPF {
  constructor(cpfSended) {
    Object.defineProperty(this, "cpfCleaned", {
      writable: false,
      enumerable: true,
      configurable: false,
      value: cpfSended.replace(/\D+/g, ""),
    });
  }

  isSequence() {
    return this.cpfCleaned.charAt(0).repeat(11) === this.cpfCleaned;
  }

  getNewCpf() {
    const cpfWithoutDigits = this.cpfCleaned.slice(0, -2);
    const digit1 = ValidationCPF.generateDigit(cpfWithoutDigits);
    const digit2 = ValidationCPF.generateDigit(cpfWithoutDigits + digit1);
    this.newCPF = cpfWithoutDigits + digit1 + digit2;
  }

  static generateDigit(cpfWithoutDigits) {
    let total = 0;
    let reverse = cpfWithoutDigits.length + 1;
    for (let stringNumeric of cpfWithoutDigits) {
      total += reverse * Number(stringNumeric);
      reverse--;
    }
    const digit = 11 - (total % 11);
    return digit <= 9 ? String(digit) : "0";
  }

  valida() {
    if (!this.cpfCleaned) return false;
    if (typeof this.cpfCleaned !== "string") return false;
    if (this.cpfCleaned.length !== 11) return false;
    if (this.isSequence()) return false;
    this.getNewCpf();
    return this.newCPF === this.cpfCleaned;
  }
}

const cpf = new ValidationCPF("705.484.450-52");

if (cpf.valida()) {
  console.log("CPF VÁLIDO");
} else {
  console.log("CPF INVÁLIDO");
}
