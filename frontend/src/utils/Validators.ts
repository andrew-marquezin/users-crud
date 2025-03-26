function validateCPF(cpf: string): boolean {
  cpf = cpf.replace(/\D/g, '');

  if (cpf.length === 11) {
    if (cpf !== "00000000000") {
      let sum = 0;
      let rest;
      for (let i = 0; i < 9; i += 1) sum += parseInt(cpf.charAt(i)) * (10 - i);
      rest = (sum * 10) % 11;

      if ((rest === 10) || (rest === 11)) rest = 0;
      if (rest === parseInt(cpf.charAt(9))) {
        sum = 0;
        for (let i = 0; i < 10; i += 1) sum += parseInt(cpf.charAt(i)) * (11 - i);
        rest = (sum * 10) % 11;

        if ((rest === 10) || (rest === 11)) rest = 0;
        if (rest === parseInt(cpf.charAt(10))) return true;
      }
    }
  }
  return false;
}

export const validateDocumentNumberInput = (_: unknown, value: string) => {
  console.log(value)
  if (!validateCPF(value)) return Promise.reject("Invalid document number input");
  return Promise.resolve();
}