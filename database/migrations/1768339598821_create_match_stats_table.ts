import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'match_stats'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().defaultTo(this.raw('gen_random_uuid()'))

      table.uuid('match_id').notNullable().references('id').inTable('matches')
      table.uuid('user_id').notNullable().references('id').inTable('users')
      table.integer('goals').notNullable()
      table.integer('assists').notNullable()
      table.decimal('note', 3, 1).nullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
