"use strict";
const express = require('express');
const router = express.Router();

router.use(express.static('public'));
router.use('/jobs', require('./api/professionsRoutes'));

router.get('/', (req, res) => {
	res.render('pages/home', {
		title: "Medical Jobs'R'Us",
		name: "The One-Stop Shop for Medical Jobs",
	});
});

router.get('*', (req, res) => {
	switch(req.url) {
		case '/favicon.ico':
			res.end();
		default:
			res.status(404).render('pages/404', {
				title: '404 Error',
				name: '404 Error!',
			});
	}
});

module.exports = router;
