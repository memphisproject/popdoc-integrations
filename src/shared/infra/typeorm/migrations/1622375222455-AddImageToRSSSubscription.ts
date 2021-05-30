import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddImageToRSSSubscription1622375222455
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'rss_subscription',
      new TableColumn({
        name: 'logo',
        type: 'varchar',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('rss_subscription', 'logo');
  }
}
