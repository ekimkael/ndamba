import { DateTime } from 'luxon'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'

import User from '#models/user'
import Season from '#models/season'

export default class SeasonAward extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare seasonId: string

  @column()
  declare userId: string

  @column()
  declare type:
    | 'MVP'
    | 'TOP_SCORER'
    | 'TOP_ASSISTER'
    | 'BEST_GOALKEEPER'
    | 'BEST_DEFENDER'
    | 'BEST_MIDFIELDER'
    | 'BEST_FORWARD'

  @column()
  declare stats: Record<string, any>

  @column()
  declare photo: string | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  // Add any relationships or additional methods if necessary

  @belongsTo(() => Season)
  declare season: BelongsTo<typeof Season>

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>
}
