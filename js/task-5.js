class Car {
    /*
     * Добавь статический метод `getSpecs(car)`,
     * который принимает объект-машину как параметр и выводит
     * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
     */
    static getSpecs({ maxSpeed, speed, isOn, distance, price } = {}) {
        console.log(`maxSpeed: ${maxSpeed}, speed: ${speed}, isOn: ${isOn}, distance: ${distance}, price: ${price}`);
    }
    /*
     * Конструктор получает объект настроек.
     *
     * Добавь свойства будущеего экземпляра класса:
     *  speed - текущая скорость, изначально 0
     *  price - цена автомобиля
     *  maxSpeed - максимальная скорость
     *  isOn - заведен ли автомобиль, значения true или false. Изначально false
     *  distance - общий киллометраж, изначально 0
     */
    constructor({ speed = 0, price = 0, maxSpeed = 0, isOn = false, distance = 0 } = {}) {
        this.speed = speed;
        this._price = price;
        this.maxSpeed = maxSpeed;
        this.isOn = isOn;
        this.distance = distance;
    }
  
    /*
     * Добавь геттер и сеттер для свойства price,
     * который будет работать с свойством цены автомобиля.
     */

    get price () {
        return this._price;
    }

    set price (newPrice) {
        this._price = newPrice;
    }
  
    /*
     * Добавь код для того чтобы завести автомобиль
     * Записывает в свойство isOn значение true
     */
    turnOn() {
        this.isOn = true;
    }
  
    /*
     * Добавь код для того чтобы заглушить автомобиль
     * Записывает в свойство isOn значение false,
     * и сбрасывает текущую скорость в 0
     */
    turnOff() {
        this.isOn = false;
        this.speed = 0;
    }
  
    /*
     * Добавялет к свойству speed полученное значение,
     * при условии что результирующая скорость
     * не больше чем значение свойства maxSpeed
     */
    accelerate(value) {
        const totalSpeed = this.speed + value;
        if (totalSpeed <= this.maxSpeed) {
            this.speed = totalSpeed;
        } else {
            console.log('Нельзя разогнаться больше максимальной скорости!');
        }
    }
  
    /*
     * Отнимает от свойства speed полученное значение,
     * при условии что результирующая скорость не меньше нуля
     */
    decelerate(value) {
        const totalSpeed = this.speed - value;
        if (totalSpeed >= 0) {
            this.speed = totalSpeed;
        } else {
            console.log('Нельзя сбросить скорость меньше 0!');
        }
    }
  
    /*
     * Добавляет в поле distance киллометраж (hours * speed),
     * но только в том случае если машина заведена!
     */
    drive(hours) {
        if (this.isOn) {
            this.distance += hours * this.speed;
        }
    }
  }
  
  const mustang = new Car({ maxSpeed: 200, price: 2000 });

  console.log(mustang);
  
  mustang.turnOn();
  console.log(mustang);
  mustang.accelerate(50);
  console.log(mustang);
  mustang.drive(2);
  console.log(mustang);
  
  Car.getSpecs(mustang);
  // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000
  
  mustang.decelerate(20);
  console.log(mustang);
  mustang.drive(1);
  console.log(mustang);
  mustang.turnOff();
  console.log(mustang);
  
  Car.getSpecs(mustang);
  // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000
  
  console.log(mustang.price); // 2000
  mustang.price = 4000;
  console.log(mustang.price); // 4000