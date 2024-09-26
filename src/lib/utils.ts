export const isArray = Array.isArray;
export const isNumber = (value: unknown): value is number => typeof value === 'number';
export const isNullish = (value: unknown): value is null | undefined =>
	value === null || typeof value === 'undefined';
