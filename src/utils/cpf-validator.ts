export function isValidCPF(cpf: string): boolean {
  const cleanCPF = cpf.replace(/\D/g, "");

  if (cleanCPF.length !== 11) return false;

  // Impede CPFs como 111.111.111-11
  if (/^(\d)\1{10}$/.test(cleanCPF)) return false;

  let sum = 0;

  // Primeiro dígito verificador
  for (let i = 0; i < 9; i++) {
    sum += Number(cleanCPF[i]) * (10 - i);
  }

  let remainder = (sum * 10) % 11;
  if (remainder === 10) remainder = 0;

  if (remainder !== Number(cleanCPF[9])) return false;

  // Segundo dígito verificador
  sum = 0;

  for (let i = 0; i < 10; i++) {
    sum += Number(cleanCPF[i]) * (11 - i);
  }

  remainder = (sum * 10) % 11;
  if (remainder === 10) remainder = 0;

  return remainder === Number(cleanCPF[10]);
}
