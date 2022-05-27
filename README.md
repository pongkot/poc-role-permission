# poc-role-permission

## Notes

- การทำ relation แบบ N:N ของ typeorm ให้สร้าง entity แบบนี้

```typescript
export class ModelEntity {
  @PrimaryGeneratedColumn()
  id: number;
}

@Entity()
export class Permission extends ModelEntity {
  @Column()
  scope: string;
}

@Entity()
export class Role extends ModelEntity {
  @Column()
  title: string;

  @ManyToMany(() => Permission) // ใช้สำหรับเชื่อมไปที่ model/table ที่ต้องการ
  @JoinTable() // สั่ง join table
  permissions: Array<Permission>;
}
```

- สิ่งที่จะเกิดขึ้นคือ orm จะสร้าง table กลางขึ้นมาเพิ่มเชื่อมข้อมูล 2 model/table ที่ต้องการ table ใหม่ที่จะถูกสร้างอัตโนมัติชื่อ
  **role_permissions_permission**
- วิธี Select ก็ให้ใช้ **relation** ตามปกติ
- วิธี Insert มี 2 way
  - Insert data + join data ในครั้งเดียว
  - มี join data อยู่แล้ว แล้ว Insert data + join data
