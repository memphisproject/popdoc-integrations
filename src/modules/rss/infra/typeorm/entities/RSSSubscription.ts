import User from '@modules/users/infra/typeorm/entities/User';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

@Entity('rss_subscription')
class RSSSubscription {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  user_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column('text')
  url: string;

  @Column('text')
  title: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default RSSSubscription;
