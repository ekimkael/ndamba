import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'seasons'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().defaultTo(this.raw('gen_random_uuid()'))

      table.string('name').notNullable()
      table.string('slug').notNullable().unique()
      table.enu('status', ['UPCOMING', 'ACTIVE', 'COMPLETED', 'CANCELLED']).notNullable()
      table.timestamp('starts_at').notNullable()
      table.timestamp('ends_at').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
