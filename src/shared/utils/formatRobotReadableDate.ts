export const formatRobotReadableDate = (timestamp: number) => {
	const date = new Date(timestamp);
	return date.toISOString();
};
