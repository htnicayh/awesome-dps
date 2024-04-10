export default class Singleton {
    private static singleton: Singleton;

    constructor() {}

    public static getInstance() {
        if (!Singleton.singleton) {
            Singleton.singleton = new Singleton();
        }

        return Singleton.singleton;
    }

    public static someMethods() {
        return `Some methods of singleton`
    }
}
