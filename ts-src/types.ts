export type PetData = {
	id: string,
	type: PetDataType,
	gender: PetDataGender,
	age: number,
	weight: number,
	name: string,
	isAdopted: boolean,
}

export type PetDataType = 'dog' | 'cat' | 'micropig'

export type PetDataGender = 'female' | 'male'
