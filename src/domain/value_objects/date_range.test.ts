import { DateRange } from './date_range';

describe('DateRange Value Object', () => {

  it('deve criar uma instância de DateRange com a data de inìcio e data de tèrmino', () => {
    const startDate = new Date('2024-12-20')
    const endDate = new Date('2024-12-21')
    const dateRange = new DateRange(startDate, endDate)

    expect(dateRange.getStartDate()).toEqual(startDate)
    expect(dateRange.getEndDate()).toEqual(endDate)
  })

  it('deve lançar um erro se a data de término for antes da data de inìcio', () => {
    expect(() => {
      new DateRange(new Date('2024-12-25'), new Date('2024-12-20'))
    }).toThrow('A data de término deve ser posterior a data de inìcio')
  })

  it('deve calcular o total de noites corretamente', () => {
    const startDate = new Date('2024-12-20')
    const endDate = new Date('2024-12-25')
    const dateRange = new DateRange(startDate, endDate)

    const totalNights = dateRange.getTotalNights()

    expect(totalNights).toBe(5)

    const startDate1 = new Date('2024-12-10')
    const endDate1 = new Date('2024-12-24')
    const dateRange1 = new DateRange(startDate1, endDate1)

    const totalNights1 = dateRange1.getTotalNights()

    expect(totalNights1).toBe(14)
  })

  it('deve verificar se dois intervalos de datas se sobrepõem', () => {
    const dateRange1 = new DateRange(
      new Date('2024-12-20'), 
      new Date('2024-12-25')
    )

    const dateRange2 = new DateRange(
      new Date('2024-12-21'), 
      new Date('2024-12-28')
    )

    const overlaps = dateRange1.overlaps(dateRange2)

    expect(overlaps).toBe(true)
  })

  it('deve lançar erro se a data de inicio e termino forem iguais', () => {
    const date = new Date('2024-12-20')
    expect(()=> {
      new DateRange(date,date)
    }).toThrow('A data de inicio e término não podem ser iguais.')
  })
})