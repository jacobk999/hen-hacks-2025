"use client";

import Image from "next/image";
import { MultiSelect } from "~/components/ui/multi-select";
// import { aiRecommendations } from "~/lib/ai";
// import { MoviesProvider } from "~/lib/movies";

// const provider = new MoviesProvider(process.env.TMDB_API_KEY);

const COVER_WIDTH = 500;
const COVER_HEIGHT = 750;

export default function MoviesPage() {
	// const movies = await aiRecommendations({
	// 	provider,
	// 	genres: ["comedy"],
	// 	limit: 10,
	// 	media: "movie",
	// 	targetLanguage: "english"
	// });

	const movies = [{ "id": 18785, "name": "The Hangover", "description": "When three friends finally come to after a raucous night of bachelor-party revelry, they find a baby in the closet and a tiger in the bathroom. But they can't seem to locate their best friend, Doug – who's supposed to be tying the knot. Launching a frantic search for Doug, the trio perseveres through a nasty hangover to try to make it to the church on time.", "language": "en", "releaseDate": "2009-06-02", "backdropUrl": "https://image.tmdb.org/t/p/w500/ubiu5Y7nP187ZFWUzjPj7Hgw6Go.jpg", "posterUrl": "https://image.tmdb.org/t/p/w500/A0uS9rHR56FeBtpjVki16M5xxSW.jpg" }, { "id": 55721, "name": "Bridesmaids", "description": "Annie's life is a mess. But when she finds out her lifetime best friend is engaged, she simply must serve as Lillian's maid of honor. Though lovelorn and broke, Annie bluffs her way through the expensive and bizarre rituals. With one chance to get it perfect, she’ll show Lillian and her bridesmaids just how far you’ll go for someone you love.", "language": "en", "releaseDate": "2011-05-13", "backdropUrl": "https://image.tmdb.org/t/p/w500/1pkpV7a02phSfAPeGVmpHaQd99J.jpg", "posterUrl": "https://image.tmdb.org/t/p/w500/gJtA7hYsBMQ7EM3sPBMUdBfU7a0.jpg" }, { "id": 64688, "name": "21 Jump Street", "description": "When cops Schmidt and Jenko join the secret Jump Street unit, they use their youthful appearances to go undercover as high school students. They trade in their guns and badges for backpacks, and set out to shut down a dangerous drug ring. But, as time goes on, Schmidt and Jenko discover that high school is nothing like it was just a few years earlier -- and, what's more, they must again confront the teenage terror and anxiety they thought they had left behind.", "language": "en", "releaseDate": "2012-03-14", "backdropUrl": "https://image.tmdb.org/t/p/w500/lxCUDgZ54myV7goBrkpFoHRt9Ms.jpg", "posterUrl": "https://image.tmdb.org/t/p/w500/8v3Sqv9UcIUC4ebmpKWROqPBINZ.jpg" }, { "id": 8363, "name": "Superbad", "description": "Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes awry.", "language": "en", "releaseDate": "2007-03-20", "backdropUrl": "https://image.tmdb.org/t/p/w500/mFt3dvxKugYPgUQgV16M6K2nEtc.jpg", "posterUrl": "https://image.tmdb.org/t/p/w500/ek8e8txUyUwd2BNqj6lFEerJfbq.jpg" }, { "id": 546554, "name": "Knives Out", "description": "When renowned crime novelist Harlan Thrombey is found dead at his estate just after his 85th birthday, the inquisitive and debonair Detective Benoit Blanc is mysteriously enlisted to investigate. From Harlan's dysfunctional family to his devoted staff, Blanc sifts through a web of red herrings and self-serving lies to uncover the truth behind Harlan's untimely death.", "language": "en", "releaseDate": "2019-11-27", "backdropUrl": "https://image.tmdb.org/t/p/w500/4HWAQu28e2yaWrtupFPGFkdNU7V.jpg", "posterUrl": "https://image.tmdb.org/t/p/w500/pThyQovXQrw2m0s9x82twj48Jq4.jpg" }, { "id": 115, "name": "The Big Lebowski", "description": "Jeffrey 'The Dude' Lebowski, a Los Angeles slacker who only wants to bowl and drink White Russians, is mistaken for another Jeffrey Lebowski, a wheelchair-bound millionaire, and finds himself dragged into a strange series of events involving nihilists, adult film producers, ferrets, errant toes, and large sums of money.", "language": "en", "releaseDate": "1998-03-06", "backdropUrl": "https://image.tmdb.org/t/p/w500/nevS6wjzCxZESvmjJZqdyZ3RNQ6.jpg", "posterUrl": "https://image.tmdb.org/t/p/w500/9mprbw31MGdd66LR0AQKoDMoFRv.jpg" }, { "id": 762, "name": "Monty Python and the Holy Grail", "description": "King Arthur, accompanied by his squire, recruits his Knights of the Round Table, including Sir Bedevere the Wise, Sir Lancelot the Brave, Sir Robin the Not-Quite-So-Brave-As-Sir-Lancelot and Sir Galahad the Pure. On the way, Arthur battles the Black Knight who, despite having had all his limbs chopped off, insists he can still fight. They reach Camelot, but Arthur decides not  to enter, as \"it is a silly place\".", "language": "en", "releaseDate": "1975-03-14", "backdropUrl": "https://image.tmdb.org/t/p/w500/1KgXxv6tHXOnakqYvMPvFwYKWiw.jpg", "posterUrl": "https://image.tmdb.org/t/p/w500/hWx1ANiWEWWyzKPN0us35HCGnhQ.jpg" }, { "id": 10625, "name": "Mean Girls", "description": "Cady Heron is a hit with The Plastics, the A-list girl clique at her new school, until she makes the mistake of falling for Aaron Samuels, the ex-boyfriend of alpha Plastic Regina George.", "language": "en", "releaseDate": "2004-04-30", "backdropUrl": "https://image.tmdb.org/t/p/w500/nP3y0TkR6XniFs9J53qQkg4Bnnk.jpg", "posterUrl": "https://image.tmdb.org/t/p/w500/alKvY5LuVcXraRBfi5UtVV8Ii6Y.jpg" }, { "id": 8699, "name": "Anchorman: The Legend of Ron Burgundy", "description": "It's the 1970s and San Diego anchorman Ron Burgundy is the top dog in local TV, but that's all about to change when ambitious reporter Veronica Corningstone arrives as a new employee at his station.", "language": "en", "releaseDate": "2004-06-28", "backdropUrl": "https://image.tmdb.org/t/p/w500/7O1Hbf4mB1UjMxNo2kmjsTfMFgT.jpg", "posterUrl": "https://image.tmdb.org/t/p/w500/mhZIcRePT7U8viFQVjt1ZjYIsR4.jpg" }, { "id": 7446, "name": "Tropic Thunder", "description": "A group of self-absorbed actors set out to make the most expensive war film ever. After ballooning costs force the studio to cancel the movie, the frustrated director refuses to stop shooting, leading his cast into the jungles of Southeast Asia, where they encounter real bad guys.", "language": "en", "releaseDate": "2008-08-09", "backdropUrl": "https://image.tmdb.org/t/p/w500/4pLi4QMm0MZ9TSoF3l8qQmY9HNO.jpg", "posterUrl": "https://image.tmdb.org/t/p/w500/zAurB9mNxfYRoVrVjAJJwGV3sPg.jpg" }];


	return (
		<div className="flex flex-col gap-2 w-[80%] mx-auto">
			<h1 className="font-header text-4xl uppercase drop-shadow-lg">Movies</h1>
			<div className="bg-slate-700">
				<MultiSelect placeholder="Select genres" options={[
					{ label: "Comedy", value: "comedy" },
					{ label: "Thriller", value: "thriller" },
				]} />
			</div>
			<div className="flex flex-wrap gap-4">
				{movies.map(movie => (
					<div key={movie.id} className="overflow-clip group relative flex flex-col max-w-[167px] rounded-xl">
						<div className="w-full h-full absolute outline-2 outline-white/60 -outline-offset-2 mix-blend-overlay rounded-xl z-50" />
						<Image src={movie.posterUrl} width={COVER_WIDTH / 3} height={COVER_HEIGHT / 3} alt={movie.name} />
						<div className="-bottom-30 group-hover:bottom-0 duration-500 transition-all ease-in-out absolute bg-slate-800/70 backdrop-blur-md w-full text-center p-2 font-bold resize-none">
							<p >{movie.name}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}