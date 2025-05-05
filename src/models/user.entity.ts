import { Column, Entity, OneToMany, ManyToMany,  } from "typeorm";
import { AbstractEntity } from "./base.entity";


@Entity('users')
export class User extends AbstractEntity {
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  refreshokenHash: string;
}