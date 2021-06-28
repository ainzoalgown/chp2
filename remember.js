/* JavaScript  — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript (стандарт ECMA-262[7]).

JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений. Наиболее широкое применение находит в браузерах как язык сценариев для придания интерактивности веб-страницам[8].
 */
// null, string, object,  typeof, undefined, boolean, number.
let emptyList = [];
let dataTypes = ['string','number','boolean','object','null','undefined','bigint','symbol'];
let dataTypesExample = [23,true,'str',null,undefined,{}];
let booleanDataType = [true,false];
let collection = [{},{},{}];
let application = {
    name: "VK",
    online: true,
    admin: "Pavel durov",
    year: 2006,
    Headquarters: "Saint Petersburg"
}
let win = "lose";
if (play == "lose") {
    console.log("нет")
} else {
    console.log("dа")
}
function startGame(playersCount) {
    return `Игра началась. Количество игроков: ${playersCount}`;
}


