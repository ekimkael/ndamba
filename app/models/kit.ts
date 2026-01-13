import { DateTime } from 'luxon'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'

import Season from '#models/season'
import Campaign from '#models/campaign'

export default class Kit extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  // fournisseur
  @column()
  declare supplier: string

  @column()
  declare variant: 'HOME' | 'AWAY' | 'THIRD' | 'TRAINING' | 'GOALKEEPER'

  @column()
  declare seasonId: string

  @column()
  declare campaignId: string

  // photos des maillots(avant/arriere)

  @column()
  declare front: string | null

  @column()
  declare back: string | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  // Add any relationships or additional methods if necessary

  @belongsTo(() => Season)
  declare season: BelongsTo<typeof Season>

  @belongsTo(() => Campaign)
  declare campaign: BelongsTo<typeof Campaign>
}
