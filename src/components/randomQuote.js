export const quotes = [
	{
		id: 1,
		quote:
			"It is during our darkest moments that we must focus to see the light.",
		author: "Aristotle"
	},
	{
		id: 2,
		quote:
			"Don't judge each day by the harvest you reap but by the seeds that you plant.",
		author: "Robert Louis Stevenson"
	},
	{
		id: 3,
		quote:
			"Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
		author: "Buddha"
	},
	{
		id: 4,
		quote:
			"Do not go where the path may lead, go instead where there is no path and leave a trail.",
		author: "Ralph Waldo Emerson"
	},
	{
		id: 5,
		quote:
			"In three words I can sum up everything I've learned about life: it goes on.",
		author: "Robert Frost"
	}
];

export const randomItem = () => {
	return quotes[Math.floor(Math.random() * quotes.length)];
};
