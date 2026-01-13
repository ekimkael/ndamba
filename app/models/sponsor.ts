import { DateTime } from 'luxon'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'

import Season from '#models/season'

export default class Sponsor extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare name: string

  @column()
  declare logo: string

  @column()
  declare phone: string | null

  @column()
  declare email: string | null

  @column()
  declare website: string | null

  @column()
  declare description: string | null

  @column()
  declare level: 'GOLD' | 'SILVER' | 'BRONZE' | 'PARTNER'

  @column()
  declare seasonId: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  // Relationships

  @belongsTo(() => Season)
  declare season: BelongsTo<typeof Season>
}
