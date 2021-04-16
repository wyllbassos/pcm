import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Ss extends BaseModel {
  static get table() {
    return 'sss'
  }

  @column({ isPrimary: true })
  public id: number

  @column()
  public ss: string

  @column()
  @column()
  public os: string | null

  @column()
  public tag: string

  @column()
  public nome_bem: string

  @column()
  public descricao_servico: string | null

  @column.date()
  public data: DateTime

  @column()
  public servico: string | null

  @column()
  public centro_trabalho: string | null

  @column()
  public solicitante: string

  @column()
  public responsavel: string | null

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public observacao_tratativas: string | null

  @column()
  prioridade: string | null

  @column()
  recursos: string | null

  @column()
  tempo: number | null
}
