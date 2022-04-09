import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column,
    CreateDateColumn, 
} from "typeorm"

@Entity({name: "users"})
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: Number,
        name: "age",
        nullable: false,
    })
    age: number

    @Column({
        type: String,
        name: "name",
        nullable: false,
    })
    name: string

    @CreateDateColumn({
        type: Date,
        name: "created_at",
        nullable: false,
        default: new Date(),
    })
    createdAt: Date
}

/*
    ColumnOptions
    @Column({
        type?: ColumnType;
        // column name in database
        name?: string;
        length?: string | number;
        width?: number;
        nullable?: boolean;
        // Indicates if column value is not updated by "save" operation.
        readonly?: boolean;
        // Indicates if column value is updated by "save" operation.
        update?: boolean;
        // Indicates if column is always selected by QueryBuilder and find operations.
        select?: boolean;
        // Indicates if column is inserted by default.
        insert?: boolean;
        // Default database value.
        default?: any;
        // ON UPDATE trigger. Works only for MySQL.
        onUpdate?: string;
        // Indicates if this column is a primary key.
        primary?: boolean;
        // Specifies if column's value must be unique or not.
        unique?: boolean;
        comment?: string;
        precision?: number | null;
        scale?: number;
        zerofill?: boolean;
        unsigned?: boolean;
        charset?: string;
        collation?: string;
        enum?: (string | number)[] | Object;
        enumName?: string;
        asExpression?: string;
        generatedIdentity?: "ALWAYS" | "BY DEFAULT";
        hstoreType?: "object" | "string";
        // Indicates if this column is an array.
        array?: boolean;
        // Specifies a value transformer that is to be used to (un)marshal
        transformer?: ValueTransformer | ValueTransformer[];
        spatialFeatureType?: string;
        srid?: number;
    })
*/