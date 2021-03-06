import { CaseType, FontType, NumerlaType, PhonemeType } from '@/enums';
import * as Kurdinus from '@/Kurdinus.js';

describe('Sanity tests', ()=> {
  test('it should returns the module', ()=> {
    expect(Kurdinus).not.toBe(null)
  })

  it('sould export types', () => {
    expect(Kurdinus.CaseType).toEqual(CaseType)
    expect(Kurdinus.FontType).toEqual(FontType)
    expect(Kurdinus.NumerlaType).toEqual(NumerlaType)
    expect(Kurdinus.PhonemeType).toEqual(PhonemeType)
  })
})
