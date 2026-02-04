import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'profiles'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().defaultTo(this.raw('gen_random_uuid()'))

      table.string('firstname').notNullable()
      table.string('lastname').notNullable()
      table.string('username').nullable()
      table.datetime('birthdate').nullable()
      table.string('location').nullable()
      table.enu('gender', ['MALE', 'FEMALE']).notNullable()
      table.string('occupation').nullable()
      table.string('position').notNullable()
      table.enu('category', ['JUNIOR', 'SENIOR', 'VETERAN']).notNullable()
      table.enu('marital_status', ['SINGLE', 'MARRIED', 'DIVORCED', 'WIDOWED']).notNullable()
      table.string('photo').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
