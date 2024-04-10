import { User, UserBuilder } from './builder';

(() => {
    const user: User = new UserBuilder('Hyacinth')
        .setAge(20)
        .setPhone('+84362854342')
        .setAddress('22 Phan Đình Giót, Thanh Xuân, Hà Nội')
        .build();

    console.log('user', user);
})();
