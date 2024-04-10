import Singleton from './singleton';

(() => {
    const instance1 = Singleton.getInstance();
    const instance2 = Singleton.getInstance();

    if (instance1 === instance2) {
        console.log(`2 singletons are equivalent`);
    } else {
        console.log(`2 singletons are not equivalent`);
    }
})();
