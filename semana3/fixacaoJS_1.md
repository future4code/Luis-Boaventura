>Atividade

> Uma revendedora de carros usados paga a seus vendedores um salário fixo de R$2000,00 por mês. Os vendedores recebem uma comissão para cada carro vendido, no valor de R$100 + 5% do valor do carro.

>Crie uma função que leia o número de carros vendidos por uma pessoa e o valor total de suas vendas do mês. Retorne o salário final do mês do funcionário.

```
function calculaSalario(carrosVendidos, valorVendas) {
  const salario = 2000
  const bonus = (carrosVendidos*100)
  const bonusPorcento = valorVendas*(5/100)
  let salarioFinal = salario + bonus + bonusPorcento
  return salarioFinal
}
```