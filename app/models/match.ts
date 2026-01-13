import { DateTime } from 'luxon'
import { slugify } from '@adonisjs/lucid-slugify'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'

import Season from '#models/season'
import MatchReward from '#models/match_reward'

export default class Match extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare seasonId: string

  @column()
  declare rewardId: string | null

  @column()
  declare title: string

  @column()
  @slugify({ strategy: 'dbIncrement', fields: ['title'] })
  declare slug: string

  @column()
  declare type: 'SATURDAY' | 'FRIENDLY' | 'TOURNAMENT' | 'CHALLENGE'

  @column()
  declare status: 'UPCOMING' | 'ONGOING' | 'COMPLETED' | 'CANCELLED'

  @column()
  declare location: string

  @column()
  declare opponent: string | null

  @column()
  declare poster: string | null

  @column()
  declare ourScore: number

  @column()
  declare theirScore: number

  @column.dateTime()
  declare date: DateTime

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  // Add any relationships or additional methods if necessary

  @belongsTo(() => Season)
  declare season: BelongsTo<typeof Season>

  @belongsTo(() => MatchReward, { foreignKey: 'rewardId' })
  declare reward: BelongsTo<typeof MatchReward>
}
