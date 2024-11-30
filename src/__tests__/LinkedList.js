const LinkedList = require("../day1/LinkedList");

const list = new LinkedList();

list.append(1);
list.append(2);
list.append(5);
list.append(2);
list.append(9);

//list.prepend(2);

list.delete_mabq(2);

console.log(list.toArray());
//test("linked-list", function () {
//    const list = new LinkedList();
//
//    list.append(5);
//    list.append(7);
//    list.append(9);
//
//    expect(JSON.stringify(list.toString((e) => e))).toEqual(
//        JSON.stringify([5, 7, 9]),
//    );
//    //expect(list.removeAt(1)).toEqual(7);
//    //expect(list.length).toEqual(2);
//    //
//    //list.append(11);
//    //expect(list.removeAt(1)).toEqual(9);
//    //expect(list.remove(9)).toEqual(undefined);
//    //expect(list.removeAt(0)).toEqual(5);
//    //expect(list.removeAt(0)).toEqual(11);
//    //expect(list.length).toEqual(0);
//    //
//    //list.prepend(5);
//    //list.prepend(7);
//    //list.prepend(9);
//    //
//    //expect(list.get(2)).toEqual(5);
//    //expect(list.get(0)).toEqual(9);
//    //expect(list.remove(9)).toEqual(9);
//    //expect(list.length).toEqual(2);
//    //expect(list.get(0)).toEqual(7);
//});
