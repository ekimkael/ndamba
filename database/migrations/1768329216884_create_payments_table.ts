import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'payments'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().defaultTo(this.raw('gen_random_uuid()'))

      table.uuid('user_id').notNullable().references('id').inTable('users')
      table

        .enu('type', ['REGISTRATION', 'MEMBERSHIP', 'EVENT', 'DONATION', 'MERCHANDISE', 'OTHER'])
        .notNullable()
      table.decimal('amount', 10, 2).notNullable()
      table.enu('method', ['MOBILE_MONEY', 'RECEIPT', 'BANK_TRANSFER', 'CASH']).notNullable()
      table.enu('status', ['PENDING', 'COMPLETED', 'FAILED', 'REFUNDED']).notNullable()
      table.string('transaction_id').nullable()
      table.string('receipt_photo').nullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
