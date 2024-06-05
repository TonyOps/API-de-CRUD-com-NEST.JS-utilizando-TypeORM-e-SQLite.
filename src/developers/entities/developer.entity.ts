import { BeforeInsert, Column, Entity, PrimaryColumn } from 'typeorm';

const { nanoid } = require('nanoid');

@Entity('developers')
export class Developer {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  dateOfBirth: string;
  @BeforeInsert()
  generateid() {
    this.id = `dev_${nanoid()}`;
  }
}
