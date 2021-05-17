import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddNameToRSS1621266657722 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'rss_subscription',
      new TableColumn({
        name: 'title',
        type: 'varchar',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('users', 'title');
  }
}
