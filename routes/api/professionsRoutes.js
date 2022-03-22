"use strict";
const express = require('express');
const router = express.Router();
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const API = 'https://api.sampleapis.com/health/professions'

router.get('/', (req, res) => {
	fetch(API)
		.then(res => res.json())
		.then(data => {
			res.render('pages/professions', {
				title: 'Job Listings',
				name: 'Check out our many offerings!',
				data
			});
		});
});

module.exports = router;
