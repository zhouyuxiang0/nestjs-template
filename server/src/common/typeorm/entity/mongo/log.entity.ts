import { Entity, ObjectIdColumn, ObjectID, Column } from "typeorm";

@Entity()
export class Log {
  @ObjectIdColumn()
  id: ObjectID

  @Column()
  name: string
}