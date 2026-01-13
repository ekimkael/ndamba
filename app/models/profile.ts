import { DateTime } from 'luxon'
import type { HasOne } from '@adonisjs/lucid/types/relations'
import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'

import Club from '#models/club'

export default class Profile extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare firstname: string

  @column()
  declare lastname: string

  @column()
  declare username: string | null

  @column()
  declare birthdate: DateTime | null

  @column()
  declare location: string | null

  @column()
  declare gender: 'MALE' | 'FEMALE'

  @column()
  declare occupation: string | null

  @column()
  declare position: string

  @column()
  declare category: 'JUNIOR' | 'SENIOR' | 'VETERAN'

  @column()
  declare maritalStatus: 'SINGLE' | 'MARRIED' | 'DIVORCED' | 'WIDOWED'

  @column()
  declare photo: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  // Add any relationships or additional methods if necessary

  @hasOne(() => Club)
  declare club: HasOne<typeof Club>
}
