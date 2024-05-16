/* eslint-disable no-undef */
import { obj, orderByProps } from "../app";

test('should return an array with sorted properties', () => {
    const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ]; 
  expect(orderByProps(obj,['name','level'])).toEqual(expected);
});