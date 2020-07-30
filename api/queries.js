const config = require('./config.js')
pool = config.pool
/*****************************/
/*searches w/o Images & Votes*/
/*****************************/

//GET: All search results without images/Votes
const getAllSearches = (request, response) => {
	pool.query(`SELECT *
							FROM searches s`, (error, results) => {
	if (error) {
		throw error
	}
	response.status(200).json(results.rows)
	})
}

//GET: Individual search result without images/Votes matching a given location
const getSearchByID = (request, response) => {
	const search_id = parseInt(request.params.search_id)
	pool.query(`SELECT *
							FROM searches s
							WHERE s.search_id = ${search_id}`, (error, results) => {
	if (error) {
		console.log(error)
	}
	response.status(200).json(results.rows)
	})
}



/********/
/*Images*/
/********/

//GET: All Image Info for All search results
const getAllImages = (request, response) => {
	pool.query('SELECT s.*, i.* \
							FROM searches s FULL JOIN images i ON s.search_id = i.search_id', (error, results) => {
	if (error) {
		throw error
	}
	response.status(200).json(results.rows)
	})
}

//GET: Image Info w/ search for individual search result (BY search_id)
const getImagesAndSearchBySearchID = (request, response) => {
	const search_id = parseInt(request.params.search_id)

	pool.query(`SELECT s.*, i.*
							FROM searches s FULL JOIN images i ON s.search_id = i.search_id
							WHERE s.search_id = ${search_id}`, (error, results) => {
	if (error) {
		throw error
	}
	response.status(200).json(results.rows)
	})
}

/*******/
/*Votes*/
/*******/

//GET: All Votes with Search Info (Only contains searches with votes b/c Inner Join)
const getAllVotes = (request, response) => {
	pool.query(`SELECT v.vote_name, s.*, hv.*
							FROM searches s INNER JOIN have_votes hv ON s.search_id = hv.search_id
							INNER JOIN votes v ON hv.vote_id = v.vote_id`, (error, results) => {
	if (error) {
		throw error
	}
	response.status(200).json(results.rows)
	})
}

//GET: Individual votes for a given search (BY Search_ID)
const getVoteBySearchID = (request, response) => {
	const search_id = parseInt(request.params.search_id)

	pool.query(`SELECT v.vote_name, hv.*, s.*
							FROM searches s INNER JOIN have_votes hv ON s.search_id = hv.search_id
							INNER JOIN votes v ON hv.vote_id = v.vote_id
							WHERE s.search_id = ${search_id}`, (error, results) => {
	if (error) {
		throw error
	}
	response.status(200).json(results.rows)
	})
}

//GET: Individual votes for a given vote category (BY Vote_ID)
const getVoteByVoteID = (request, response) => {
	const vote_id = parseInt(request.params.vote_id)

	pool.query(`SELECT  v.vote_name, hv.*, s.*
							FROM searches s INNER JOIN have_votes hv ON s.search_id = hv.search_id
							INNER JOIN votes v ON hv.vote_id = v.vote_id
							WHERE hv.vote_id = ${vote_id}`,  (error, results) => {
	if (error) {
		throw error
	}
	response.status(200).json(results.rows)
	})
}

//GET: Returns all Censored searches.
const getCensoredSearches = (request, response) => {
	pool.query(`SELECT s.*, COUNT(*) as "censored_votes"
							FROM searches s INNER JOIN have_votes hv on s.search_id = hv.search_id
							WHERE hv.vote_id = 1
							GROUP BY s.search_id;`, (error, results) => {
	if (error) {
		throw error
	}
	response.status(200).json(results.rows)
	})
}

//GET: Returns all Uncensored searches.
const getUncensoredSearches = (request, response) => {
	pool.query(`SELECT s.*, COUNT(*) as "uncensored_votes"
							FROM searches s INNER JOIN have_votes hv on s.search_id = hv.search_id
							WHERE hv.vote_id = 2
							GROUP BY s.search_id;`, (error, results) => {
	if (error) {
		throw error
	}
	response.status(200).json(results.rows)
	})
}

//GET: Returns all Bad Translation searches.
const getBadTranslationSearches = (request, response) => {
	pool.query(`SELECT s.*, COUNT(*) as "bad_translation_votes"
							FROM searches s INNER JOIN have_votes hv on s.search_id = hv.search_id
							WHERE hv.vote_id = 3
							GROUP BY s.search_id;`, (error, results) => {
	if (error) {
		throw error
	}
	response.status(200).json(results.rows)
	})
}

//GET: Returns all Good Translation searches.
const getGoodTranslationSearches = (request, response) => {
	pool.query(`SELECT s.*, COUNT(*) as "good_translation_votes"
							FROM searches s INNER JOIN have_votes hv on s.search_id = hv.search_id
							WHERE hv.vote_id = 4
							GROUP BY s.search_id;`, (error, results) => {
	if (error) {
		throw error
	}
	response.status(200).json(results.rows)
	})
}

//GET: Returns all Lost In Translation searches.
const getLostInTranslationSearches = (request, response) => {
	pool.query(`SELECT s.*, COUNT(*) as "lost_in_translation_votes"
							FROM searches s INNER JOIN have_votes hv on s.search_id = hv.search_id
							WHERE hv.vote_id = 5
							GROUP BY s.search_id;`, (error, results) => {
	if (error) {
		throw error
	}
	response.status(200).json(results.rows)
	})
}

//GET: Returns all NSFW searches.
const getNSFWSearches = (request, response) => {
	pool.query(`SELECT s.*, COUNT(*) as "nsfw_votes"
							FROM searches s INNER JOIN have_votes hv on s.search_id = hv.search_id
							WHERE hv.vote_id = 6
							GROUP BY s.search_id;`, (error, results) => {
	if (error) {
		throw error
	}
	response.status(200).json(results.rows)
	})
}

//GET: Returns all WTF searches.
const getWTFSearches = (request, response) => {
	pool.query(`SELECT s.*, COUNT(*) as "wtf_votes"
							FROM searches s INNER JOIN have_votes hv on s.search_id = hv.search_id
							WHERE hv.vote_id = 7
							GROUP BY s.search_id;`, (error, results) => {
	if (error) {
		throw error
	}
	response.status(200).json(results.rows)
	})
}

/****************************/
/*searches With Vote Counts */
/****************************/

//GET: Consolidated Counts for each type of vote_id (for ALL SEARCHES)
const getAllSearchesWithVoteCounts = (request, response) => {
	pool.query(`SELECT s.*,
								COUNT(hv.*) total,
								COUNT(case when vote_id = '1' then 1 end) AS Censored,
								COUNT(case when vote_id = '2' then 1 end) AS Uncensored,
								COUNT(case when vote_id = '3' then 1 end) AS BadTranslation,
								COUNT(case when vote_id = '4' then 1 end) AS GoodTranslation,
								COUNT(case when vote_id = '5' then 1 end) AS LostInTranslation,
								COUNT(case when vote_id = '6' then 1 end) AS NSFW,
								COUNT(case when vote_id = '7' then 1 end) AS WTF
						 FROM searches s FULL OUTER JOIN have_votes hv ON s.search_id = hv.search_id
						 GROUP BY s.search_id`, (error, results) => {
	if (error) {
		throw error
	}
	response.status(200).json(results.rows)
	})
}

//GET: Consolidated Counts for each type of vote_id (for Individual Search BY search_id)
const getSearchWithVoteCountsBySearchId = (request, response) => {
	const search_id = parseInt(request.params.search_id)
	pool.query(`SELECT s.*,
								COUNT(hv.*) total,
								COUNT(case when vote_id = '1' then 1 end) AS Censored,
								COUNT(case when vote_id = '2' then 1 end) AS Uncensored,
								COUNT(case when vote_id = '3' then 1 end) AS BadTranslation,
								COUNT(case when vote_id = '4' then 1 end) AS GoodTranslation,
								COUNT(case when vote_id = '5' then 1 end) AS LostInTranslation,
								COUNT(case when vote_id = '6' then 1 end) AS NSFW,
								COUNT(case when vote_id = '7' then 1 end) AS WTF
						 FROM searches s FULL OUTER JOIN have_votes hv ON s.search_id = hv.search_id
						 WHERE s.search_id = ${search_id}
						 GROUP BY s.search_id`, (error, results) => {
	if (error) {
		throw error
	}
	response.status(200).json(results.rows)
	})
}

/***********************************************/
/* All Available Information, With Vote Counts */
/***********************************************/

//GET: All Search Results With Vote Counts & Image Info
const getSearchesWithVoteCountsAndImageInfo = (request, response) => {
	pool.query(`SELECT s.*, i.image_id, i.image_path, i.image_source, i.image_rank,
							COUNT(hv.*) total,
							COUNT(case when vote_id = '1' then 1 end) AS Censored,
							COUNT(case when vote_id = '2' then 1 end) AS Uncensored,
							COUNT(case when vote_id = '3' then 1 end) AS BadTranslation,
							COUNT(case when vote_id = '4' then 1 end) AS GoodTranslation,
							COUNT(case when vote_id = '5' then 1 end) AS LostInTranslation,
							COUNT(case when vote_id = '6' then 1 end) AS NSFW,
							COUNT(case when vote_id = '7' then 1 end) AS WTF
							FROM searches s FULL OUTER JOIN have_votes hv ON s.search_id = hv.search_id
							FULL OUTER JOIN images i on s.search_id = i.search_id
							GROUP BY s.search_id, i.image_id, i.image_path, i.image_source, i.image_rank;`, (error, results) => {
	if (error) {
		throw error
	}
	response.status(200).json(results.rows)
	})
}

//GET: All Search Results With Vote Counts & Image Info
const getSearchesWithVoteCountsAndImageInfoBySearchID = (request, response) => {
	const search_id = parseInt(request.params.search_id)
	pool.query(`SELECT s.*, i.image_id, i.image_path, i.image_source, i.image_rank,
							COUNT(hv.*) total,
							COUNT(case when vote_id = '1' then 1 end) AS Censored,
							COUNT(case when vote_id = '2' then 1 end) AS Uncensored,
							COUNT(case when vote_id = '3' then 1 end) AS BadTranslation,
							COUNT(case when vote_id = '4' then 1 end) AS GoodTranslation,
							COUNT(case when vote_id = '5' then 1 end) AS LostInTranslation,
							COUNT(case when vote_id = '6' then 1 end) AS NSFW,
							COUNT(case when vote_id = '7' then 1 end) AS WTF
							FROM searches s FULL OUTER JOIN have_votes hv ON s.search_id = hv.search_id
							FULL OUTER JOIN images i on s.search_id = i.search_id
							WHERE s.search_id = ${search_id}
							GROUP BY s.search_id, i.image_id, i.image_path, i.image_source, i.image_rank;`, (error, results) => {
	if (error) {
		throw error
	}
	response.status(200).json(results.rows)
	})
}

/*********************************/
/*Image Info Only & Image Subsets*/
/*********************************/

//GET: Image Info Only all search results
const getAllImagesOnly = (request, response) => {

	pool.query(`SELECT i.*
							FROM searches s FULL JOIN images i ON s.search_id = i.search_id`, (error, results) => {
	if (error) {
		throw error
	}
	response.status(200).json(results.rows)
	})
}


//GET: Image Info Only individual search result (BY search_id)
const getImagesOnlyBySearchID = (request, response) => {
	const search_id = parseInt(request.params.search_id)

	pool.query(`SELECT i.*
							FROM searches s FULL JOIN images i ON s.search_id = i.search_id
							WHERE s.search_id = ${search_id}`, (error, results) => {
	if (error) {
		throw error
	}
	response.status(200).json(results.rows)
	})
}

//GET: Image Info Only for Censored searches
const getImagesOnlyCensored = (request, response) => {

	pool.query(`SELECT i.*
							FROM images i FULL JOIN searches S ON s.search_id = i.search_id
							INNER JOIN have_votes hv ON s.search_id = hv.search_id
							WHERE hv.vote_id = 1`, (error, results) => {
	if (error) {
		throw error
	}
	response.status(200).json(results.rows)
	})
}

//GET: Image Info Only for Censored searches
const getImagesOnlyUnsensored = (request, response) => {

	pool.query(`SELECT i.*
							FROM images i FULL JOIN searches S ON s.search_id = i.search_id
							INNER JOIN have_votes hv ON s.search_id = hv.search_id
							WHERE hv.vote_id = 2`, (error, results) => {
	if (error) {
		throw error
	}
	response.status(200).json(results.rows)
	})
}

//GET: Image Info Only for Censored searches
const getImagesOnlyBadTranslation = (request, response) => {

	pool.query(`SELECT i.*
							FROM images i FULL JOIN searches S ON s.search_id = i.search_id
							INNER JOIN have_votes hv ON s.search_id = hv.search_id
							WHERE hv.vote_id = 3`, (error, results) => {
	if (error) {
		throw error
	}
	response.status(200).json(results.rows)
	})
}

//GET: Image Info Only for Censored searches
const getImagesOnlyGoodTranslation = (request, response) => {

	pool.query(`SELECT i.*
							FROM images i FULL JOIN searches S ON s.search_id = i.search_id
							INNER JOIN have_votes hv ON s.search_id = hv.search_id
							WHERE hv.vote_id = 4`, (error, results) => {
	if (error) {
		throw error
	}
	response.status(200).json(results.rows)
	})
}
//GET: Image Info Only for Censored searches
const getImagesOnlyLostInTranslation = (request, response) => {

	pool.query(`SELECT i.*
							FROM images i FULL JOIN searches S ON s.search_id = i.search_id
							INNER JOIN have_votes hv ON s.search_id = hv.search_id
							WHERE hv.vote_id = 5`, (error, results) => {
	if (error) {
		throw error
	}
	response.status(200).json(results.rows)
	})
}

//GET: Image Info Only for Censored searches
const getImagesOnlyNSFW = (request, response) => {

	pool.query(`SELECT i.*
							FROM images i FULL JOIN searches S ON s.search_id = i.search_id
							INNER JOIN have_votes hv ON s.search_id = hv.search_id
							WHERE hv.vote_id = 6`, (error, results) => {
	if (error) {
		throw error
	}
	response.status(200).json(results.rows)
	})
}

//GET: Image Info Only for Censored searches
const getImagesOnlyWTF = (request, response) => {

	pool.query(`SELECT i.*
							FROM images i FULL JOIN searches S ON s.search_id = i.search_id
							INNER JOIN have_votes hv ON s.search_id = hv.search_id
							WHERE hv.vote_id = 8`, (error, results) => {
	if (error) {
		throw error
	}
	response.status(200).json(results.rows)
	})
}

/******************/
/*POST Statements*/
/****************/


//POST: createSearch -- Add searches
const createSearch = (request, response) => {
	const {search_location, search_ip_address, search_client_name,
					search_engine_initial, search_engine_translation,search_term_initial,
					search_term_initial_language_code, search_term_initial_lanuage_confidence,
					search_term_initial_language_alternate_code, search_term_translation,
					search_term_translation_language_code, search_term_status_banned,
					search_term_status_sensitive} = request.body

				console.log(search_location, search_ip_address, search_client_name,
								search_engine_initial, search_engine_translation,search_term_initial,
								search_term_initial_language_code, search_term_initial_lanuage_confidence,
								search_term_initial_language_alternate_code, search_term_translation,
								search_term_translation_language_code, search_term_status_banned,
								search_term_status_sensitive)

	pool.query(`INSERT INTO searches (search_id, search_timestamp, search_location, search_ip_address, search_client_name,
							search_engine_initial, search_engine_translation,search_term_initial,
							search_term_initial_language_code, search_term_initial_lanuage_confidence,
							search_term_initial_language_alternate_code, search_term_translation,
							search_term_translation_language_code, search_term_status_banned,
							search_term_status_sensitive) VALUES (DEFAULT, CURRENT_TIMESTAMP,
							${search_location}, ${search_ip_address}, ${search_client_name},
							${search_engine_initial}, ${search_engine_translation}, ${search_term_initial},
							${search_term_initial_language_code}, ${search_term_initial_lanuage_confidence},
							${search_term_initial_language_alternate_code}, ${search_term_translation},
							${search_term_translation_language_code}, ${search_term_status_banned},
							${search_term_status_sensitive})`, (error, results) => {
	if (error) {
		throw error

	}
	response.status(201).send(`Search added with ID: ${results.search_id}`)
	})
}

//POST: createVote -- Add searches
const createVote = (request, response) => {
	const {vote_id, search_id, vote_client_name, vote_ip_address} = request.body

				console.log(vote_id, search_id, vote_client_name, vote_ip_address)

	pool.query(`INSERT INTO have_votes (vote_id, search_id, vote_timestamp, vote_client_name,
							vote_ip_address) VALUES (${vote_id}, ${search_id}, CURRENT_TIMESTAMP,
							${vote_client_name}, ${vote_ip_address})`, (error, results) => {
	if (error) {
		throw error

	}
	response.status(201).send(`Vote added with ID: ${results.vote_id}`)
	})
}

//POST: saveImage -- Add searches
const saveImage = (request, response) => {
	const {search_id, image_source, image_path, image_rank} = request.body

				console.log(search_id, image_source, image_path, image_rank)

	pool.query(`INSERT INTO images (image_id, search_id, image_source, image_path,
							image_rank) VALUES (DEFAULT, ${search_id}, ${image_source}, ${image_path},
							${image_rank})`, (error, results) => {
	if (error) {
		throw error

	}
	response.status(201).send(`Image added with ID: ${results.image_id}`)
	})
}


module.exports = {
	getAllSearches,
	getSearchByID,
	getAllImages,
	getImagesOnlyBySearchID,
	getImagesAndSearchBySearchID,
	getAllVotes,
	getVoteBySearchID,
	getVoteByVoteID,
	getCensoredSearches,
	getUncensoredSearches,
	getBadTranslationSearches,
	getGoodTranslationSearches,
	getLostInTranslationSearches,
	getNSFWSearches,
	getWTFSearches,
	getAllSearchesWithVoteCounts,
	getSearchWithVoteCountsBySearchId,
	getSearchesWithVoteCountsAndImageInfo,
	getSearchesWithVoteCountsAndImageInfoBySearchID,
	getAllImagesOnly,
	getImagesOnlyCensored,
	getImagesOnlyUnsensored,
	getImagesOnlyBadTranslation,
	getImagesOnlyGoodTranslation,
	getImagesOnlyLostInTranslation,
	getImagesOnlyNSFW,
	getImagesOnlyWTF,
	createSearch,
	createVote,
	saveImage,
}