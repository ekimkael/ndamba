import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'penalties'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().defaultTo(this.raw('gen_random_uuid()'))

      table.uuid('user_id').notNullable().references('id').inTable('users')
      table.uuid('payment_id').nullable().references('id').inTable('payments')
      table.decimal('amount', 10, 2).notNullable()
      table.enu('status', ['PENDING', 'PAID', 'WAIVED']).notNullable()
      table.enu('reason', ['LATE_PAYMENT', 'MISCONDUCT', 'RULE_VIOLATION', 'OTHER']).notNullable()
      table.string('description').nullable()
      table.uuid('waived_by').nullable().references('id').inTable('users')
      table.timestamp('waived_at').nullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
