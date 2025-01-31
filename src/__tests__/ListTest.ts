export function test_list(list: List<number>): void {
    list.append(5);
    list.append(7);
    list.append(9);

    expect(list.get(2)).toEqual(9);
    expect(list.removeAt(1)).toEqual(7);
    expect(list.length).toEqual(2);

    list.append(11);
    expect(list.removeAt(1)).toEqual(9);
    expect(list.remove(9)).toEqual(undefined);
    expect(list.removeAt(0)).toEqual(5);
    expect(list.removeAt(0)).toEqual(11);
    expect(list.length).toEqual(0);

    list.prepend(5);
    list.prepend(7);
    list.prepend(9);

    expect(list.get(2)).toEqual(5);
    expect(list.get(0)).toEqual(9);
    expect(list.remove(9)).toEqual(9);
    expect(list.length).toEqual(2);
    expect(list.get(0)).toEqual(7);
}

//export function test_list(list: List<number>): void {
//    list.append(5);
//    list.append(7);
//    list.append(9);
//    list.insertAt(6, 1);
//
//    expect(list.get(2)).toEqual(7);
//    expect(list.removeAt(2)).toEqual(7);
//    expect(list.length).toEqual(3);
//
//    expect(list.removeAt(1)).toEqual(6);
//    expect(list.remove(6)).toEqual(undefined);
//    expect(list.removeAt(0)).toEqual(5);
//    expect(list.removeAt(0)).toEqual(9);
//    expect(list.length).toEqual(0);
//
//    list.prepend(5);
//    list.insertAt(7, 2);
//    list.prepend(4);
//
//    expect(list.get(2)).toEqual(undefined);
//    expect(list.get(0)).toEqual(4);
//    expect(list.remove(undefined)).toEqual(undefined);
//    expect(list.length).toEqual(3);
//    expect(list.get(0)).toEqual(4);
//}
