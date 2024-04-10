export class UserBuilder {
    private name: string;
    private age: number;
    private phone: string;
    private address: string;

    constructor(_name: string) {
        this.name = _name;
    }

    get Name() {
        return this.name;
    }

    setAge(_age: number): UserBuilder {
        this.age = _age;
        return this;
    }

    get Age() {
        return this.age;
    }

    setPhone(_phone: string): UserBuilder {
        this.phone = _phone;
        return this;
    }

    get Phone() {
        return this.phone;
    }

    setAddress(_address: string): UserBuilder {
        this.address = _address;
        return this;
    }

    get Address() {
        return this.address;
    }

    build(): User {
        return new User(this);
    }
}

export class User {
    private name: string;
    private age: number;
    private phone: string;
    private address: string;

    constructor(builder: UserBuilder) {
        this.name = builder.Name;
        this.age = builder.Age;
        this.phone = builder.Phone;
        this.address = builder.Address;
    }

    get Name() {
        return this.name;
    }

    get Age() {
        return this.age;
    }

    get Phone() {
        return this.phone;
    }

    get Address() {
        return this.address;
    }
}
