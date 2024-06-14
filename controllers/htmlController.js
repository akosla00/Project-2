// calling the database to get info to display usind hadle bars
const { request } = require('express');
const { Requests, Heroes } = require('../Models');

module.exports = {
	home: (req, res) => {
		res.render('home', {logged_in: req.session.logged_in});
	},
    login: (req, res) => {
        res.render('login');
    },
    logout: (req, res) => {
        res.render('logout');
    },
    signUp: (req, res) => {
        res.render('signUp');
    },
    heroes: async (req, res) => {
        const heroes = await Heroes.findAll().catch((err) => res.json(err));
        heroes.sort((a, b) => {
            const nameA = a.heroName.toUpperCase(); // ignore upper and lowercase
            const nameB = b.heroName.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
          
            // names must be equal
            return 0;
          });
        const mapHeroes = heroes.map((hero) => hero.get({ plain: true }));
        res.render('heroes', { mapHeroes });
    },
	map: (req, res) => {
		res.render('map');
	},
	requests: (req, res) => {
		res.render('requests');
	},
	profile: async (req, res) => {
        // const userId = 1
        // const userRequest = await Requests.findOne({ where: { id: userId } });
        
        // const requests = userRequest.map((post) => post.get({ plain: true }));
        // console.log(req.session.logged_in);
		// res.render('profile', { requests, logged_in: req.session.logged_in});
		res.render('profile');
	},
};