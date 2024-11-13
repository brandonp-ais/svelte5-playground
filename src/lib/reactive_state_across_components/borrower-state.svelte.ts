export type Borrower = {
	id?: number,
	name?: string,
	user?: {
		id: number,
		name: string
	},
	books?: [
		{
			id: number,
			title: string
		}
	]
}

let borrowerState = $state<Borrower>({})

export function getBorrower() {
	return borrowerState;
}

export function setBorrower(borrower: Borrower) {
	borrowerState = borrower
}