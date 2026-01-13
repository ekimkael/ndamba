import { DateTime } from 'luxon'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'

import User from '#models/user'
import Match from '#models/match'

export default class MatchAttendance extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare matchId: string

  @column()
  declare userId: string

  @column()
  declare status: 'PRESENT' | 'ABSENT' | 'EXCUSED'

  @column()
  declare reason: string | null

  @column.dateTime()
  declare confirmedAt: DateTime

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  // Add any relationships or additional methods if necessary

  @belongsTo(() => Match)
  declare match: BelongsTo<typeof Match>

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>
}
