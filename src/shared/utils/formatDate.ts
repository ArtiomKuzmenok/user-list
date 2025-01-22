export const formatDate = (timestamp: number, locale: string = 'en-US') => {
	const date = new Date(timestamp);
	return date.toLocaleString(locale, {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
		hour12: false
	});
};
