interface ExternalData {
    id: number;
    name: string;
}

class InternalData {
    constructor(public _id: number, public _fullname: string) {}
}

class AdapterData {
    constructor(private externalData: ExternalData) {}

    call = (): InternalData => {
        return new InternalData(this.externalData.id, this.externalData.name);
    };
}

const externalData: ExternalData = { id: 1, name: 'Hyacinth' };
const internalData: InternalData = new AdapterData(externalData).call();

console.log(internalData);
