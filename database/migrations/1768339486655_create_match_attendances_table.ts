import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'match_attendances'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().defaultTo(this.raw('gen_random_uuid()'))

      table.uuid('match_id').notNullable().references('id').inTable('matches')
      table.uuid('user_id').notNullable().references('id').inTable('users')
      table.enu('status', ['PRESENT', 'ABSENT', 'EXCUSED']).notNullable()
      table.string('reason').nullable()
      table.timestamp('confirmed_at').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
