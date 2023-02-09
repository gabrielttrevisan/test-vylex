export type BrazilianIso31662Code = `BR-${
  | `A${'C' | 'L' | 'M' | 'P'}`
  | 'BA'
  | 'CE'
  | 'DF'
  | 'ES'
  | `M${'A' | 'T' | 'S' | 'G'}`
  | `P${'A' | 'B' | 'R' | 'E' | 'I'}`
  | `R${'J' | 'N' | 'S' | 'O' | 'R'}`
  | `S${'C' | 'P' | 'E'}`
  | `${'T' | 'G'}O`}`

export interface IStateInfo {
  name: string
  path: string
  latitude: number
  longitude: number
}

export interface IHasBrazilianIso31662Code {
  code: BrazilianIso31662Code
}

export interface StateProps extends IHasBrazilianIso31662Code {}
