import Roles from '#enums/roles'
import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'roles'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('name').notNullable().unique()
      table.string('slug').notNullable().unique()
      table.string('description').nullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })

    this.defer(async (db) => {
      await db.table(this.tableName).multiInsert([
        { id: Roles.PRESIDENT, name: 'President', slug: 'president' },
        { id: Roles.VICE_PRESIDENT, name: 'Vice President', slug: 'vice-president' },
        { id: Roles.INSPECTOR, name: 'Inspector', slug: 'inspector' },
        { id: Roles.TREASURER, name: 'Treasurer', slug: 'treasurer' },
        { id: Roles.MEMBER, name: 'Member', slug: 'member' },
        { id: Roles.MODERATOR, name: 'Moderator', slug: 'moderator' },
        { id: Roles.ADMIN, name: 'Admin', slug: 'admin' },
      ])
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
