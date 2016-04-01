import React from 'react';
import { render } from 'react-dom';
import App from '../components/App';
import configureStore from '../redux/store';
import { Provider } from 'react-redux';


let initialState = {
	projects: [{
		"id": 100,
		"Name": "anvilation.github.io",
		"Desccription": "This page! Bulid using a combination React, Redux and Bootstrap 4 alpha 2 using WebPack as the build tool",
		"IconType": "svg",
		"Icon": "/img/anvilation_logo.svg",
		"smgImage": "",
		"lrgImage": "",
		"url": "https://anvilation.github.io"
	}, {
		"id": 101,
		"Name": "Content Server Upload",
		"Desccription": "A simple application detailing how to upload a document to OpenText using Content Server",
		"IconType": "fa",
		"Icon": "fa fa-github fa-1x",
		"smgImage": "",
		"lrgImage": "",
		"url": "https://anvilation.github.io"
	}, {
		"id": 102,
		"Name": "Piggles",
		"Desccription": "A simple application detailing how to upload a document to OpenText using Content Server",
		"IconType": "svg",
		"Icon": "/img/piggles_logo.svg",
		"smgImage": "",
		"lrgImage": "",
		"url": "http://www.piggles.net"
	}
			  ],
	services: [{
		"id": 200,
		"Name": "Design and Implementation",
		"Description": "Over 10 years experience in the OpenText Content Suite; let Anvilation guide you from inception through to implementation and beyond.",
		"IconType": "fa",
		"Icon": "fa fa-question",
		"smgImage": "",
		"lrgImage": "",
		"url": "http://anvilation.com/services"
	}, {
		"id": 201,
		"Name": "Extend your Investment",
		"Description": "Get the most from your investment with our range of Workflow and Web Report/ActiveView and RESTful API customisation services.",
		"IconType": "fa",
		"Icon": "fa fa-bolt",
		"smgImage": "",
		"lrgImage": "",
		"url": "http://anvilation.com/services"
	}, {
		"id": 202,
		"Name": "ERP Integration",
		"Description": "Deployed SAP, or Oracle .. Great! Bring your structured and unstructured content together, and make the best decision using the best information.",
		"IconType": "fa",
		"Icon": "fa fa-cogs",
		"smgImage": "",
		"lrgImage": "",
		"url": "http://anvilation.com/services"
	}, {
		"id": 203,
		"Name": "Support",
		"Description": "Keep the lights on and ensure that your investment performs at its best with our support services.",
		"IconType": "fa",
		"Icon": "fa fa-check-circle",
		"smgImage": "",
		"lrgImage": "",
		"url": "http://anvilation.com/services"
	}],
	contactMethods: [
		{
			"id":300,
			"name": "email",
			"href":"mailto:enquiry@anvilation.com",
			"icon":"i fa fa-envelope"
		},
		{
			"id":301,
			"name": "linkedin",
			"href":"https://au.linkedin.com/in/mbarben",
			"icon":"i fa fa-linkedin"
		},
		{
			"id":302,
			"name": "google-plus",
			"href":"//plus.google.com/u/0/108861127451259405030?prsrc=3",
			"icon":"i fa fa-google-plus"
		},
		{
			"id":303,
			"name": "twitter",
			"href":"https://twitter.com/anvilation",
			"icon":"i fa fa-twitter"
		},		
		{
			"id":304,
			"name": "github",
			"href":"https://github.com/anvilation",
			"icon":"i fa fa-github-square"
		},			
	]
};

let store = configureStore(initialState);

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
);