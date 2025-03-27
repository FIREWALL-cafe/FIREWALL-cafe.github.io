import React from 'react';

function Partners() {
	const partners = [
		{
			name: "Franklin Furnace Fund",
			url: "http://www.franklinfurnace.org/",
			description: "(FFF) presents, preserves, interprets, proselytizes and advocates on behalf of avant-garde art, especially vulnerable, ephemeral, unpopular forms."
		},
		{
			name: "Asian Women Giving Circle",
			url: "http://www.asianwomengivingcircle.org/",
			description: "(AWGC) is the first and largest giving circle in the nation led by Asian American women funding the arts as a strategy for social change."
		},
		{
			name: "Lower Manhattan Cultural Council",
			url: "http://lmcc.net/",
			description: "(LMCC) empowers artists by providing them with networks, resources, and support, to create vibrant, sustainable communities in Lower Manhattan and beyond."
		},
		{
			name: "New York City Department of Cultural Affairs in partnership with the City Council",
			url: "https://www.nyc.gov/dcla",
			description: "(DCLA) is dedicated to supporting and strengthening New York City's vibrant cultural life and to ensure adequate public funding for non-profit cultural organizations."
		},
		{
			name: "Great Fire",
			url: "http://www.greatfire.org/",
			description: "An open source browser extension that lets users share their route to the Internet with each other."
		},
		{
			name: "uProxy",
			url: "https://www.uproxy.org/",
			description: "An open source browser extension that lets users share their route to the Internet with each other."
		},
		{
			name: "Oslo Freedom Forum",
			url: "https://oslofreedomforum.com/",
			description: "Annual conference where human rights advocates, artists, tech entrepreneurs, and world leaders meet to brainstorm ways to expand freedom across the globe."
		},
		{
			name: "Human Rights Foundation",
			url: "https://www.hrf.org/",
			description: "A nonpartisan nonprofit organization that promotes and protects human rights globally, with a focus on closed societies."
		}
	];

	return (
		<section className="flex overflow-hidden justify-center items-start px-32 max-md:px-5 pb-16 w-full bg-white max-md:pb-24 max-md:max-w-full">
			<div className="flex flex-wrap flex-1 shrink gap-10 justify-center w-full basis-0 min-w-[240px] max-md:max-w-full">
				<div className="flex flex-col flex-1 shrink my-auto text-2xl basis-0 min-w-[240px] max-md:max-w-full">
					<h1 className="mt-10 md:text-[56px] text-3xl font-medium leading-[58px] text-black max-md:text-4xl max-md:leading-[54px]">
						Partners
					</h1>
					
					<p className="mt-6 text-xl text-gray-600">
						Special thanks for the support of these gracious partners.
					</p>

					<div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
						{partners.map((partner, index) => (
							<div key={index} className="flex flex-col p-6 bg-gray-50 rounded-lg">
								<h3 className="text-2xl font-medium mb-3">
									<a 
										href={partner.url}
										className="text-blue-600 hover:text-blue-800"
										target="_blank"
										rel="noopener noreferrer"
									>
										{partner.name}
									</a>
								</h3>
								<p className="text-base text-gray-600">
									{partner.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Partners;