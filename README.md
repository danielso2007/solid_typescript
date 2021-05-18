[![.github/workflows/main.yml](https://github.com/danielso2007/solid_typescript/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/danielso2007/solid_typescript/actions/workflows/main.yml)
[![codecov](https://codecov.io/gh/danielso2007/solid_typescript/branch/main/graph/badge.svg)](https://codecov.io/gh/danielso2007/solid_typescript)


![GitHub package version](https://img.shields.io/github/package-json/v/danielso2007/solid_typescript.svg)
[![GitHub pull requests](https://img.shields.io/github/issues-pr-raw/danielso2007/solid_typescript.svg)](https://github.com/danielso2007/solid_typescript/pulls)
[![GitHub issues](https://img.shields.io/github/issues/danielso2007/solid_typescript.svg)](https://github.com/danielso2007/solid_typescript/issues?q=is%3Aopen+is%3Aissue)
![GitHub last commit](https://img.shields.io/github/last-commit/danielso2007/solid_typescript.svg)
![GitHub contributors](https://img.shields.io/github/contributors/danielso2007/solid_typescript.svg)
![GitHub top language](https://img.shields.io/github/languages/top/danielso2007/solid_typescript.svg)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

# Solid com TypeScript

Projeto simples apenas para o estudo do S.O.L.I.D.

## Configuração do webpack para typescript

Para configurar o webpack e typescript, acessar [webpack](https://webpack.js.org/guides/typescript/).

# Testes

Utilizando o [jestjs](https://jestjs.io/pt-BR/) para os testes. Jest é um poderoso Framework de Testes em JavaScript com um foco na simplicidade.

# SOLID

## Single Responsibility Principle – SRP

Single Responsibility Principle, também conhecido como Princípio da Responsabilidade Única.

Uma classe deve ter um, e somente um, motivo para mudar. Se uma classe só deve ter um motivo para ser modificada, certamente ela só deve ter uma única responsabilidade. Cada responsabilidade deve ser uma classe, porque uma responsabilidade é um eixo de mudança.

Alguns benefícios do Single Responsibility Principle:

- Complexidade do código reduzida, mais explícita e direta;
- Facilitação da legibilidade;
- Redução de acoplamento;
- Código limpo e testável;
- Facilidade de evolução.

O Single Responsibility Principle é um dos mais importantes princípios do SOLID, deve ser aplicado para obtermos classes mais coesas e de baixo acoplamento.

Este é o tipo de princípio que todo código orientado a objetos deveria possuir.
Portanto antes de construir aquela classe que cadastra o usuário e envia o e-mail, lembre-se deste princípio.

# Princípio Aberto-Fechado – OCP

Open Closed Principle, também conhecido como Princípio do Aberto Fechado. Você deve ser capaz de estender um comportamento de uma classe, sem modificá-lo.

Este é o segundo princípio do SOLID e certamente o princípio mais polêmico, desconhecido e não utilizado. Entidades de software (classes, módulos, funções, etc) devem estar abertas para extensão, mas fechadas para modificação. Este princípio nos atenta para um melhor design, tornando o software mais extensível e facilitando sua evolução sem afetar a qualidade do que já está desenvolvido. Para o uso do Open Closed Principle é muito comum utilizarmos o Strategy Pattern do GoF.

### Extensibilidade

É uma das chaves da orientação a objetos, quando um novo comportamento ou funcionalidade precisar ser adicionado é esperado que as existentes sejam estendidas e e não alteradas, assim o código original permanece intacto e confiável enquanto as novas são implementadas através de extensibilidade. Criar código extensível é uma responsabilidade do desenvolvedor maduro, utilizar design duradouro para um software de boa qualidade e manutenibilidade.

### Abstração

Quando aprendemos sobre orientação a objetos com certeza ouvimos sobre abstração, é ela que permite que este princípio funcione. Se um software possui abstrações bem definidas logo ele estará aberto para extensão.