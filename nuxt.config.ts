// nuxt.config.ts
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },

	nitro: {
		firebase: {
			gen: 2,
			httpsOptions: {
				region: 'asia-southeast1',
			},
		},
	},

	runtimeConfig: {
		appPassword: process.env.APP_PASSWORD,
		public: {
			firebaseApiKey: process.env.FIREBASE_API_KEY,
			firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
			firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
			firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
			firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
			firebaseAppId: process.env.FIREBASE_APP_ID,
			firebaseDatabaseURL: process.env.FIREBASE_DATABASE_URL,
		},
	},

	modules: ['@vuestic/nuxt'],

	vuestic: {
		config: {},
		css: false,
	},
});
