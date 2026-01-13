import { DateTime } from 'luxon'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'

import Role from '#models/role'
import Profile from '#models/profile'
import Payment from './payment.js'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})

export default class User extends compose(BaseModel, AuthFinder) {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare roleId: number

  @column()
  declare profileId: string

  @column()
  declare email: string

  @column()
  declare phone: string

  @column()
  declare status: 'ACTIVE' | 'INACTIVE' | 'PENDING' | 'BANNED'

  @column({ serializeAs: null })
  declare password: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null

  // Add any relationships or additional methods if necessary

  @belongsTo(() => Role)
  declare role: BelongsTo<typeof Role>

  @belongsTo(() => Profile)
  declare profile: BelongsTo<typeof Profile>

  @hasMany(() => Payment)
  declare payments: HasMany<typeof Payment>
}
