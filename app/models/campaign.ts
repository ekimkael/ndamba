import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import { slugify } from '@adonisjs/lucid-slugify'

export default class Campaign extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare name: string

  @column()
  @slugify({ strategy: 'dbIncrement', fields: ['name'] })
  declare slug: string

  @column()
  declare description: string

  @column()
  declare startsAt: DateTime

  @column()
  declare endsAt: DateTime

  @column()
  declare status: 'UPCOMING' | 'ACTIVE' | 'COMPLETED' | 'CANCELLED'

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
