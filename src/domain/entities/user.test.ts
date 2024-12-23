import { User } from './user';

describe('User Entity', () => {
  it('deve criar uma instância de User com ID e Nome', () => {
    const user = new User('1', 'Eduardo Almeida')
    expect(user.getId()).toBe('1')
    expect(user.getName()).toBe('Eduardo Almeida')
  })

  it('deve lançar um erro se o nome for vazio', () => {
    expect(()=> new User('1', '')).toThrow('O nome é obrigatório')
  })
})