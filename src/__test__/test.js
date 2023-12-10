import orderByProps from "../app";

describe('test', () => {
	const testCases = [ {
		incomingObject: orderByProps({name: 'мечник', health: 10, level: 2, attack: 80, defence: 40}, ["name", "level"]),
		expencted: [
            { key: 'name', value: 'мечник' },
            { key: 'level', value: 2 },
            { key: 'attack', value: 80 },
            { key: 'defence', value: 40 },
            { key: 'health', value: 10 }
          ]
	},
	{
		incomingObject: orderByProps({health: 10, attack: 80, defence: 40}, ["name", "level"]),
		expencted:  [
            { key: 'attack', value: 80 },
            { key: 'defence', value: 40 },
            { key: 'health', value: 10 }
          ]
	}]

    testCases.forEach(test => {
		it(`test ${test.incomingObject.type}`, () => {
			const result = test.incomingObject
			expect(result).toEqual(test.expencted)
		})
 	})
})
