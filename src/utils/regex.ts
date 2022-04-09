export function regexToValidatePlateNumber(text: string) {
	return /^([a-Z]{3}-[0-9]{4})$/.test(text); // Se o texto for aaa-0000 por exemplo, retornará true
}
