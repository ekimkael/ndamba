import { DateTime } from 'luxon'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'

import User from '#models/user'
import Payment from '#models/payment'

export default class Penalty extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare userId: string

  @column()
  declare paymentId: string | null

  @column()
  declare amount: number

  @column()
  declare status: 'PENDING' | 'PAID' | 'WAIVED'

  @column()
  declare reason: 'LATE_PAYMENT' | 'MISCONDUCT' | 'RULE_VIOLATION' | 'OTHER'

  @column()
  declare description: string | null

  @column()
  declare waivedBy: string | null

  @column()
  declare waivedAt: DateTime | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  // Add any relationships or additional methods if necessary

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @belongsTo(() => Payment)
  declare payment: BelongsTo<typeof Payment>
}
