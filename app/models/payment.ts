import { DateTime } from 'luxon'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'

import User from '#models/user'

export default class Payment extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare userId: string

  @column()
  declare type: 'REGISTRATION' | 'MEMBERSHIP' | 'EVENT' | 'DONATION' | 'MERCHANDISE' | 'OTHER'

  @column()
  declare amount: number

  @column()
  declare method: 'MOBILE_MONEY' | 'RECEIPT' | 'BANK_TRANSFER' | 'CASH'

  @column()
  declare status: 'PENDING' | 'COMPLETED' | 'FAILED' | 'REFUNDED'

  @column()
  declare transactionId: string | null

  @column()
  declare receiptPhoto: string | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  // Add any relationships or additional methods if necessary

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>
}
