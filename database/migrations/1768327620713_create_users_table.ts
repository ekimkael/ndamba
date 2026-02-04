import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().defaultTo(this.raw('gen_random_uuid()'))

      table.string('email', 254).notNullable().unique()
      table.string('password').notNullable()
      table.boolean('is_active').defaultTo(true)
      table.boolean('is_email_verified').defaultTo(false)

      table.integer('role_id').notNullable().references('id').inTable('roles')
      table.uuid('created_by').nullable().references('id').inTable('users')

      table.integer('failed_login_attempts').defaultTo(0)

      table.timestamp('activated_at').nullable()
      table.timestamp('last_login').nullable()

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
