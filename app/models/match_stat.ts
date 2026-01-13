import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class MatchStat extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare matchId: string

  @column()
  declare userId: string

  @column()
  declare goals: number

  @column()
  declare assists: number

  @column()
  declare note: number | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
