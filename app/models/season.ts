import { DateTime } from 'luxon'
import { slugify } from '@adonisjs/lucid-slugify'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'

import Kit from '#models/kit'

export default class Season extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare name: string

  @column()
  @slugify({ strategy: 'dbIncrement', fields: ['name'] })
  declare slug: string

  @column()
  declare status: 'UPCOMING' | 'ACTIVE' | 'COMPLETED' | 'CANCELLED'

  @column()
  declare startsAt: DateTime

  @column()
  declare endsAt: DateTime

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  // Add any relationships or additional methods if necessary

  @hasMany(() => Kit)
  declare kits: HasMany<typeof Kit>
}
