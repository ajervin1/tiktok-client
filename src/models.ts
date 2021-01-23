const post = {
	headers: {
		'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.80 Safari/537.36',
		referer: 'https://www.tiktok.com/',
		cookie: 'tt_webid_v2=689854141086886123'
	},
	collector: [ {
		id: 'VIDEO_ID',
		text: 'CAPTION',
		createTime: '1583870600',
		authorMeta: {
			id: 'USER ID',
			name: 'USERNAME',
			following: 195,
			fans: 43500,
			heart: '1093998',
			video: 3,
			digg: 95,
			verified: false,
			private: false,
			signature: 'USER BIO',
			avatar: 'AVATAR_URL'
		},
		musicMeta: {
			musicId: '6808098113188120838',
			musicName: 'blah blah',
			musicAuthor: 'blah',
			musicOriginal: true,
			playUrl: 'SOUND/MUSIC_URL',
		},
		covers: {
			default: 'COVER_URL',
			origin: 'COVER_URL',
			dynamic: 'COVER_URL'
		},
		imageUrl: 'IMAGE_URL',
		videoUrl: 'VIDEO_URL',
		videoUrlNoWaterMark: 'VIDEO_URL_WITHOUT_THE_WATERMARK',
		videoMeta: { width: 480, height: 864, ratio: 14, duration: 14 },
		diggCount: 2104,
		shareCount: 1,
		playCount: 9007,
		commentCount: 50,
		mentions: [ '@bob', '@sam', '@bob_again', '@and_sam_again' ],
		hashtags:
				[ {
					id: '69573911',
					name: 'PlayWithLife',
					title: 'HASHTAG_TITLE',
					cover: [ Array ]
				} ],
		downloaded: true
	} ],
	//If {filetype} and {download} options are enbabled then:
	zip: '/{CURRENT_PATH}/user_1552963581094.zip',
	json: '/{CURRENT_PATH}/user_1552963581094.json',
	csv: '/{CURRENT_PATH}/user_1552963581094.csv'
}
