webpackJsonp([1,4],{

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mobx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DeckBuilderStore = (function () {
    function DeckBuilderStore() {
        var _this = this;
        this.searchResults = [];
        this.getPreviousSearch = function (key) {
            return localStorage.getItem(key);
        };
        this.setPreviousSearch = function (key, result) {
            localStorage.setItem(key, result);
            return _this.getPreviousSearch(key);
        };
    }
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["observable"], 
        __metadata('design:type', Object)
    ], DeckBuilderStore.prototype, "searchResults", void 0);
    return DeckBuilderStore;
}());
var AppStore = (function () {
    function AppStore() {
        this.deckBuilder = new DeckBuilderStore();
    }
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["observable"], 
        __metadata('design:type', Object)
    ], AppStore.prototype, "deckBuilder", void 0);
    return AppStore;
}());
/* harmony default export */ __webpack_exports__["a"] = new AppStore();
//# sourceMappingURL=/Users/Robin/Development/trials/amu-mtg-app-reload/src/app.store.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardModalService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardModalService = (function () {
    function CardModalService() {
        this.card = null;
    }
    CardModalService.prototype.show = function (card) {
        console.log('Will show ', card, this);
        this.card = card;
        console.log('set it ? ', card, this);
    };
    CardModalService.prototype.activate = function () {
        this.active = true;
    };
    CardModalService.prototype.deactivate = function () {
        this.active = false;
    };
    CardModalService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], CardModalService);
    return CardModalService;
}());
//# sourceMappingURL=/Users/Robin/Development/trials/amu-mtg-app-reload/src/card-modal.service.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_store__ = __webpack_require__(156);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardSearchService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CardSearchService = (function () {
    function CardSearchService(http) {
        this.http = http;
        this.store = __WEBPACK_IMPORTED_MODULE_4__app_store__["a" /* default */].deckBuilder;
    }
    CardSearchService.prototype.search = function (configParams) {
        var _this = this;
        console.log('search ', configParams);
        this.searchKey = JSON.stringify(configParams);
        var magicUrl = 'https://api.magicthegathering.io/v1/cards';
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        params.set('colors', configParams.colours);
        //params.set('pageSize', '5');
        params.set('page', '1');
        params.set('text', configParams.term);
        params.set('name', configParams.name);
        if (configParams.cmc && configParams.cmc > 0) {
            params.set('cmc', configParams.cmc);
        }
        //Prevent card that are missing details from being returned
        var requiredDetails = ['imageUrl'].toString();
        params.set('contains', requiredDetails);
        //https://api.magicthegathering.io/v1/cards?page=5&pageSize=500
        /*
        params.set('search', term); // the user's search value
        params.set('action', 'opensearch');
        params.set('format', 'json');
        params.set('callback', 'JSONP_CALLBACK');
        */
        /**
         * Check to see if this search has already be stored...
         * if so, return the saved one and there is no need to call the network
         */
        var previousResults = this.store.getPreviousSearch(this.searchKey);
        if (previousResults) {
            console.log('returning previousResults');
            return this.setSearchResults(JSON.parse(previousResults));
        }
        else {
            // TODO: Add error handling
            console.log('making network request', magicUrl, params);
            return this.http
                .get(magicUrl, { search: params })
                .map(function (res) {
                return _this.extractData(res);
            }).subscribe();
        }
    };
    CardSearchService.prototype.setSearchResults = function (body) {
        var _this = this;
        //clear the previous searchResults
        var previousResults = this.store.searchResults;
        this.store.searchResults.splice(0, previousResults.length - 1);
        body.cards.forEach(function (obj) {
            _this.store.searchResults.push(obj);
        });
        return this.store.searchResults;
    };
    CardSearchService.prototype.extractData = function (res) {
        console.log('extracting', res, 'for', this.searchKey, 'in', this);
        var body = res.json();
        body = body || {};
        this.store.setPreviousSearch(this.searchKey, JSON.stringify(body));
        return this.setSearchResults(body);
    };
    CardSearchService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], CardSearchService);
    return CardSearchService;
    var _a;
}());
//# sourceMappingURL=/Users/Robin/Development/trials/amu-mtg-app-reload/src/card-search.service.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__card_modal_service__ = __webpack_require__(241);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardModalComponent = (function () {
    function CardModalComponent(cardModalService) {
        this.cardModalService = cardModalService;
        this.open = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* EventEmitter */]();
        this.close = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* EventEmitter */]();
    }
    CardModalComponent.prototype.ngOnInit = function () {
    };
    CardModalComponent.prototype.cardClick = function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    CardModalComponent.prototype.swipe = function (event, card) {
        console.log('swipe event ', card, event);
    };
    CardModalComponent.prototype.drag = function (event) {
        event.preventDefault();
    };
    CardModalComponent.prototype.closeModal = function () {
        console.log('service close');
        this.close.emit({
            card: this.cardModalService.card
        });
        this.cardModalService.deactivate();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Output */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* EventEmitter */]) === 'function' && _a) || Object)
    ], CardModalComponent.prototype, "open", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Output */])(), 
        __metadata('design:type', Object)
    ], CardModalComponent.prototype, "close", void 0);
    CardModalComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
            selector: 'app-card-modal',
            template: __webpack_require__(677),
            styles: [__webpack_require__(664)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__card_modal_service__["a" /* CardModalService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__card_modal_service__["a" /* CardModalService */]) === 'function' && _b) || Object])
    ], CardModalComponent);
    return CardModalComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/Robin/Development/trials/amu-mtg-app-reload/src/card-modal.component.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_card_search_service__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_store__ = __webpack_require__(156);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchFilterDialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchFilterDialogComponent = (function () {
    function SearchFilterDialogComponent(dialogRef, cardSearchService) {
        this.dialogRef = dialogRef;
        this.cardSearchService = cardSearchService;
        this.model = {
            colours: []
        };
        this.colours = [{
                name: 'Colourless',
                value: 'colourless',
                img: 'assets/images/colourless.png',
                checked: false
            }, {
                name: 'Black',
                value: 'black',
                img: 'assets/images/black.png',
                checked: false
            }, {
                name: 'Blue',
                value: 'blue',
                img: 'assets/images/blue.png',
                checked: false
            }, {
                name: 'Green',
                value: 'green',
                img: 'assets/images/green.png',
                checked: false
            }, {
                name: 'Red',
                value: 'red',
                img: 'assets/images/red.png',
                checked: false
            }, {
                name: 'White',
                value: 'white',
                img: 'assets/images/white.png',
                checked: false
            }];
        this.cardTypesShort = ['Artifact', 'Conspiracy', 'Creature', 'Enchantment', 'Instant', 'Land', 'Phenomenon', 'Plane', 'Planeswalker', 'Scheme', 'Sorcery', 'Tribal', 'Vanguard'];
        this.cardTypes = [
            'Artifact',
            'Artifact Creature',
            'Artifact Land',
            'Basic',
            'Basic Land',
            'Basic Snow Land',
            'Conspiracy',
            'Creature',
            'Eaturecray',
            'Emblem',
            'Enchantment',
            'Enchantment Artifact Creature',
            'Enchantment Creature',
            'Instant',
            'Land',
            'Land Creature',
            'Legendary',
            'Legendary Artifact',
            'Legendary Artifact Creature',
            'Legendary Creature',
            'Legendary Enchantment',
            'Legendary Enchantment Artifact',
            'Legendary Enchantment Creature',
            'Legendary Land',
            'Legendary Snow Land',
            'Ongoing Scheme',
            'Phenomenon',
            'Plane',
            'Planeswalker',
            'Scheme',
            'Snow',
            'Snow Artifact',
            'Snow Artifact Creature',
            'Snow Creature',
            'Snow Enchantment',
            'Snow Land',
            'Sorcery',
            'Token Artifact',
            'Token Artifact Creature',
            'Token Artifact Creature',
            'Token Creature',
            'Token Enchantment Artifact Creature',
            'Token Enchantment Creature',
            'Tribal',
            'Tribal Artifact',
            'Tribal Enchantment',
            'Tribal Instant',
            'Tribal Sorcery',
            'Vanguard',
            'World Enchantment'
        ];
        this.subTypes = ['Advisor', 'Aetherborn', 'Ajani', 'Alara', 'Ally', 'Angel', 'Antelope', 'Ape', 'Arcane', 'Archer', 'Archon', 'Arkhos', 'Arlinn', 'Artificer', 'Ashiok', 'Assassin', 'Assembly-Worker', 'Atog', 'Aura', 'Aurochs', 'Avatar', 'Azgol', 'Baddest,', 'Badger', 'Barbarian', 'Basilisk', 'Bat', 'Bear', 'Beast', 'Beeble', 'Belenon', 'Berserker', 'Biggest,', 'Bird', 'Boar', 'Bolas', 'Bolas’s Meditation Realm', 'Bringer', 'Brushwagg', 'Bureaucrat', 'Camel', 'Carrier', 'Cat', 'Centaur', 'Cephalid', 'Chandra', 'Chicken', 'Child', 'Chimera', 'Clamfolk', 'Cleric', 'Cockatrice', 'Construct', 'Cow', 'Crab', 'Crocodile', 'Curse', 'Cyclops', 'Dack', 'Daretti', 'Dauthi', 'Demon', 'Desert', 'Designer', 'Devil', 'Dinosaur', 'Djinn', 'Dominaria', 'Domri', 'Donkey', 'Dovin', 'Dragon', 'Drake', 'Dreadnought', 'Drone', 'Druid', 'Dryad', 'Dwarf', 'Efreet', 'Egg', 'Elder', 'Eldrazi', 'Elemental', 'Elephant', 'Elf', 'Elk', 'Elspeth', 'Elves', 'Equilor', 'Equipment', 'Ergamon', 'Etiquette', 'Eye', 'Fabacin', 'Faerie', 'Ferret', 'Fish', 'Flagbearer', 'Forest', 'Fortification', 'Fox', 'Freyalise', 'Frog', 'Fungus', 'Gamer', 'Gargoyle', 'Garruk', 'Gate', 'Giant', 'Gideon', 'Gnome', 'Goat', 'Goblin', 'Goblins', 'God', 'Golem', 'Gorgon', 'Gremlin', 'Griffin', 'Gus', 'Hag', 'Harpy', 'Hellion', 'Hero', 'Hippo', 'Hippogriff', 'Homarid', 'Homunculus', 'Horror', 'Horse', 'Hound', 'Human', 'Hydra', 'Hyena', 'Igpay', 'Illusion', 'Imp', 'Incarnation', 'Innistrad', 'Insect', 'Iquatana', 'Ir', 'Island', 'Jace', 'Jellyfish', 'Juggernaut', 'Kaldheim', 'Kamigawa', 'Karn', 'Karsus', 'Kavu', 'Kaya', 'Kephalai', 'Kinshala', 'Kiora', 'Kirin', 'Kithkin', 'Knight', 'Kobold', 'Kolbahan', 'Kor', 'Koth', 'Kraken', 'Kyneth', 'Lady', 'Lair', 'Lamia', 'Lammasu', 'Leech', 'Legend', 'Leviathan', 'Lhurgoyf', 'Licid', 'Liliana', 'Lizard', 'Locus', 'Lord', 'Lorwyn', 'Luvion', 'Manticore', 'Masticore', 'Mercadia', 'Mercenary', 'Merfolk', 'Metathran', 'Mime', 'Mine', 'Minion', 'Minotaur', 'Mirrodin', 'Moag', 'Mole', 'Monger', 'Mongoose', 'Mongseng', 'Monk', 'Monkey', 'Moonfolk', 'Mountain', 'Mummy', 'Muraganda', 'Mutant', 'Myr', 'Mystic', 'Naga', 'Nahiri', 'Narset', 'Nastiest,', 'Nautilus', 'Nephilim', 'New Phyrexia', 'Nightmare', 'Nightstalker', 'Ninja', 'Nissa', 'Nixilis', 'Noggle', 'Nomad', 'Nymph', 'Octopus', 'Ogre', 'Ooze', 'Orc', 'Orgg', 'Ouphe', 'Ox', 'Oyster', 'Paratrooper', 'Pegasus', 'Pest', 'Phelddagrif', 'Phoenix', 'Phyrexia', 'Pilot', 'Pirate', 'Plains', 'Plant', 'Power-Plant', 'Praetor', 'Processor', 'Proper', 'Pyrulea', 'Rabbit', 'Rabiah', 'Ral', 'Rat', 'Rath', 'Ravnica', 'Rebel', 'Reflection', 'Regatha', 'Rhino', 'Rigger', 'Rogue', 'Sable', 'Saheeli', 'Salamander', 'Samurai', 'Saproling', 'Sarkhan', 'Satyr', 'Scarecrow', 'Scion', 'Scorpion', 'Scout', 'Segovia', 'Serpent', 'Serra’s Realm', 'Shade', 'Shadowmoor', 'Shaman', 'Shandalar', 'Shapeshifter', 'Sheep', 'Ship', 'Shrine', 'Siren', 'Skeleton', 'Slith', 'Sliver', 'Slug', 'Snake', 'Soldier', 'Soltari', 'Sorin', 'Spawn', 'Specter', 'Spellshaper', 'Sphinx', 'Spider', 'Spike', 'Spirit', 'Sponge', 'Squid', 'Squirrel', 'Starfish', 'Surrakar', 'Swamp', 'Tamiyo', 'Teferi', 'Tezzeret', 'Thalakos', 'The', 'Thopter', 'Thrull', 'Tibalt', 'Tower', 'Townsfolk', 'Trap', 'Treefolk', 'Troll', 'Turtle', 'Ugin', 'Ulgrotha', 'Unicorn', 'Urza’s', 'Valla', 'Vampire', 'Vedalken', 'Vehicle', 'Venser', 'Viashino', 'Volver', 'Vraska', 'Vryn', 'Waiter', 'Wall', 'Warrior', 'Weird', 'Werewolf', 'Whale', 'Wildfire', 'Wizard', 'Wolf', 'Wolverine', 'Wombat', 'Worm', 'Wraith', 'Wurm', 'Xenagos', 'Xerex', 'Yeti', 'Zendikar', 'Zombie', 'Zubera'];
        this.store = __WEBPACK_IMPORTED_MODULE_4__app_store__["a" /* default */].deckBuilder;
    }
    SearchFilterDialogComponent.prototype.ngOnInit = function () {
        this.coloursCheckBoxArray = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormArray */]([]);
        for (var c in this.colours) {
            console.log('let colour', this.colours[c]);
            this.coloursCheckBoxArray.push(new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */](this.colours[c].value));
        }
    };
    SearchFilterDialogComponent.prototype.updateCards = function () {
        console.log('in search filter version ', this.model);
        this.cardSearchService.search(this.model);
    };
    SearchFilterDialogComponent.prototype.manaClicked = function (value, event) {
        console.log('mana clicked', value, event);
        console.log('colours', this.colours);
        console.log('appStore in search-filter', __WEBPACK_IMPORTED_MODULE_4__app_store__["a" /* default */]);
        this.model.colours = this.colours
            .filter(function (obj) { return obj.checked === true; })
            .map(function (obj) { return obj.value; });
        console.log('modelColours', this.model.colours);
    };
    SearchFilterDialogComponent.prototype.setFilter = function () {
        console.log('set filter', this);
        this.updateCards();
        this.dialogRef.close();
    };
    SearchFilterDialogComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
            selector: 'app-search-filter-dialog',
            template: __webpack_require__(681),
            styles: [__webpack_require__(668)],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_card_search_service__["a" /* CardSearchService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdDialogRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdDialogRef */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_card_search_service__["a" /* CardSearchService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_card_search_service__["a" /* CardSearchService */]) === 'function' && _b) || Object])
    ], SearchFilterDialogComponent);
    return SearchFilterDialogComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/Robin/Development/trials/amu-mtg-app-reload/src/search-filter-dialog.component.js.map

/***/ }),

/***/ 445:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 445;


/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(603);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(608);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/Robin/Development/trials/amu-mtg-app-reload/src/main.js.map

/***/ }),

/***/ 602:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(676),
            styles: [__webpack_require__(663)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/Robin/Development/trials/amu-mtg-app-reload/src/app.component.js.map

/***/ }),

/***/ 603:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_mobx__ = __webpack_require__(673);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__card_modal_card_modal_component__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__card_modal_card_modal_service__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__ = __webpack_require__(604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__deck_builder_deck_builder_component__ = __webpack_require__(605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__search_bar_search_bar_component__ = __webpack_require__(606);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__search_filter_dialog_search_filter_dialog_component__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__site_header_site_header_component__ = __webpack_require__(607);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'deck-builder',
        component: __WEBPACK_IMPORTED_MODULE_11__deck_builder_deck_builder_component__["a" /* DeckBuilderComponent */]
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__card_modal_card_modal_component__["a" /* CardModalComponent */],
                __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_11__deck_builder_deck_builder_component__["a" /* DeckBuilderComponent */],
                __WEBPACK_IMPORTED_MODULE_12__search_bar_search_bar_component__["a" /* SearchBarComponent */],
                __WEBPACK_IMPORTED_MODULE_13__search_filter_dialog_search_filter_dialog_component__["a" /* SearchFilterDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_14__site_header_site_header_component__["a" /* SiteHeaderComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MaterialModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6_ng2_mobx__["a" /* Ng2MobxModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(routes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__card_modal_card_modal_service__["a" /* CardModalService */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_13__search_filter_dialog_search_filter_dialog_component__["a" /* SearchFilterDialogComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/Robin/Development/trials/amu-mtg-app-reload/src/app.module.js.map

/***/ }),

/***/ 604:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__(678),
            styles: [__webpack_require__(665)]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardComponent);
    return DashboardComponent;
}());
//# sourceMappingURL=/Users/Robin/Development/trials/amu-mtg-app-reload/src/dashboard.component.js.map

/***/ }),

/***/ 605:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__card_modal_card_modal_service__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_card_search_service__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__card_modal_card_modal_component__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_filter_dialog_search_filter_dialog_component__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_store__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_hammerjs__ = __webpack_require__(670);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_hammerjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeckBuilderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DeckBuilderComponent = (function () {
    function DeckBuilderComponent(cardSearchService, cardModalService, dialog) {
        this.cardSearchService = cardSearchService;
        this.cardModalService = cardModalService;
        this.dialog = dialog;
        this.modalOpen = false;
        this.allCards = [];
        this.colours = ['Black', 'Blue', 'Green', 'Red', 'White'];
        this.currentColour = 'Black';
        this.store = __WEBPACK_IMPORTED_MODULE_6__app_store__["a" /* default */].deckBuilder;
    }
    DeckBuilderComponent.prototype.ngOnInit = function () {
        //this.updateCards();
    };
    DeckBuilderComponent.prototype.openSearchDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__search_filter_dialog_search_filter_dialog_component__["a" /* SearchFilterDialogComponent */]);
        dialogRef.afterClosed().subscribe(function (result) {
            _this.selectedOption = result;
        });
    };
    DeckBuilderComponent.prototype.updateCards = function () {
        /*
        this.cardSearchService.search({
          colours: [this.currentColour]
        }).subscribe((data)=>{
          console.log('got', data);
    
          //this.allCards = data.cards;
          let previousResults = this.store.searchResults;
          this.store.searchResults.splice(0, previousResults.length - 1);
          data.cards.forEach((obj) => {
            this.store.searchResults.push(obj);
          });
        });
        */
    };
    DeckBuilderComponent.prototype.inspectCard = function (card) {
        this.cardModalService.show(card);
        this.modalOpen = true;
        this.cardModalService.activate();
    };
    DeckBuilderComponent.prototype.colourChange = function ($event) {
        console.log('colour change ', $event);
        this.currentColour = $event.target.value;
        this.updateCards();
    };
    DeckBuilderComponent.prototype.modalClosedHandler = function () {
        this.modalOpen = false;
    };
    DeckBuilderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
            selector: 'app-deck-builder',
            template: __webpack_require__(679),
            styles: [__webpack_require__(666)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_card_search_service__["a" /* CardSearchService */], __WEBPACK_IMPORTED_MODULE_3__card_modal_card_modal_component__["a" /* CardModalComponent */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_card_search_service__["a" /* CardSearchService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_card_search_service__["a" /* CardSearchService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__card_modal_card_modal_service__["a" /* CardModalService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__card_modal_card_modal_service__["a" /* CardModalService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MdDialog */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MdDialog */]) === 'function' && _c) || Object])
    ], DeckBuilderComponent);
    return DeckBuilderComponent;
    var _a, _b, _c;
}());
/*
@Component({
  selector: 'dialog-result-example-dialog',
  templateUrl: './dialog-result-example-dialog.html',
})
export class DialogResultExampleDialog {
  constructor(public dialogRef: MdDialogRef<DialogResultExampleDialog>) {}
}
*/
//# sourceMappingURL=/Users/Robin/Development/trials/amu-mtg-app-reload/src/deck-builder.component.js.map

/***/ }),

/***/ 606:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_card_search_service__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_store__ = __webpack_require__(156);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchBarComponent = (function () {
    function SearchBarComponent(cardSearchService) {
        this.cardSearchService = cardSearchService;
        this.model = {
            colours: []
        };
        this.colours = [{
                name: 'Colourless',
                value: 'colourless',
                img: 'assets/images/colourless.png',
                checked: false
            }, {
                name: 'Black',
                value: 'black',
                img: 'assets/images/black.png',
                checked: false
            }, {
                name: 'Blue',
                value: 'blue',
                img: 'assets/images/blue.png',
                checked: false
            }, {
                name: 'Green',
                value: 'green',
                img: 'assets/images/green.png',
                checked: false
            }, {
                name: 'Red',
                value: 'red',
                img: 'assets/images/red.png',
                checked: false
            }, {
                name: 'White',
                value: 'white',
                img: 'assets/images/white.png',
                checked: false
            }];
        this.store = __WEBPACK_IMPORTED_MODULE_3__app_store__["a" /* default */].deckBuilder;
    }
    SearchBarComponent.prototype.ngOnInit = function () {
        this.coloursCheckBoxArray = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormArray */]([]);
        for (var c in this.colours) {
            console.log('let colour', this.colours[c]);
            this.coloursCheckBoxArray.push(new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControl */](this.colours[c].value));
        }
    };
    SearchBarComponent.prototype.updateCards = function () {
        console.log('in search BAR version ', this.model);
        this.cardSearchService.search(this.model);
    };
    SearchBarComponent.prototype.manaClicked = function (value, event) {
        console.log('mana clicked', value, event);
        console.log('colours', this.colours);
        console.log('appStore in search-filter', __WEBPACK_IMPORTED_MODULE_3__app_store__["a" /* default */]);
        this.model.colours = this.colours
            .filter(function (obj) { return obj.checked === true; })
            .map(function (obj) { return obj.value; });
        console.log('modelColours', this.model.colours);
    };
    SearchBarComponent.prototype.setFilter = function () {
        console.log('set filter', this);
        this.updateCards();
    };
    SearchBarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
            selector: 'app-search-bar',
            template: __webpack_require__(680),
            styles: [__webpack_require__(667)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_card_search_service__["a" /* CardSearchService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_card_search_service__["a" /* CardSearchService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_card_search_service__["a" /* CardSearchService */]) === 'function' && _a) || Object])
    ], SearchBarComponent);
    return SearchBarComponent;
    var _a;
}());
//# sourceMappingURL=/Users/Robin/Development/trials/amu-mtg-app-reload/src/search-bar.component.js.map

/***/ }),

/***/ 607:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { DOCUMENT } from '@angular/platform-browser';
var SiteHeaderComponent = (function () {
    function SiteHeaderComponent(elementRef) {
        this.elementRef = elementRef;
        this.displaySmall = false;
    }
    SiteHeaderComponent.prototype.onScroll = function (event) {
        console.log('scrolll!', event, event.target.scrollTop, event.target.clientTop);
        var body = event.target.querySelector('body');
        var elementHeight = this.elementRef.nativeElement.firstChild.clientHeight;
        console.log('what about ', body.scrollTop, body.clientTop, this.elementRef, this.elementRef.nativeElement.firstChild.clientHeight, (body.scrollTop - elementHeight));
        if ((body.scrollTop - elementHeight) > (-60)) {
            this.displaySmall = true;
        }
        else {
            this.displaySmall = false;
        }
    };
    SiteHeaderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* HostListener */])('window:scroll', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], SiteHeaderComponent.prototype, "onScroll", null);
    SiteHeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
            selector: 'app-site-header',
            template: __webpack_require__(682),
            styles: [__webpack_require__(669)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */]) === 'function' && _a) || Object])
    ], SiteHeaderComponent);
    return SiteHeaderComponent;
    var _a;
}());
//# sourceMappingURL=/Users/Robin/Development/trials/amu-mtg-app-reload/src/site-header.component.js.map

/***/ }),

/***/ 608:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/Robin/Development/trials/amu-mtg-app-reload/src/environment.js.map

/***/ }),

/***/ 663:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)();
// imports


// module
exports.push([module.i, "header {\n  position: fixed;\n  z-index: 850;\n  left: 0px;\n  right: 0px; }\n\n.page {\n  padding-top: 200px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 664:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)();
// imports


// module
exports.push([module.i, ".modal {\n  display: none;\n  visibility: hidden;\n  opacity: 0;\n  position: absolute; }\n\n.modal.active {\n  display: block;\n  visibility: visible;\n  opacity: 1;\n  background-color: rgba(68, 68, 68, 0.5);\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n  z-index: 9999; }\n\n/* Container div is used to center the dynamically sized image*/\n.modal-content-wrap {\n  position: fixed;\n  width: 1px;\n  height: 1px;\n  background-color: rgba(255, 0, 255, 0.5);\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  top: 50%;\n  left: 50%; }\n\n/*.modal-content, .modal.active img {*/\n.modal.active .card {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  /*min-width: 50vw;*/\n  border-radius: 6%; }\n\n.modal.active img {\n  border-radius: 6%;\n  min-height: 80vh; }\n\n.modal.active .card button.close {\n  position: absolute;\n  right: -2%;\n  top: 0%;\n  background-color: #efefef;\n  border: solid 1px #9f9f9f;\n  border-radius: 50%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 665:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 666:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)();
// imports


// module
exports.push([module.i, "/*\n  'and (device-aspect-ratio : 375/667)' +\n  'and (aspect-ratio : 375/559)' +\n  'and (device-pixel-ratio : 2)';\n  */\n.mat-checkbox-ripple {\n  background-color: pink; }\n\napp-search-bar {\n  width: 100%;\n  display: block; }\n\n.modalOpen {\n  overflow: hidden; }\n\n.noSearchYet, .noDeckYet {\n  border: solid 3px #ededed;\n  border-radius: 3px;\n  line-height: 100px;\n  text-align: center;\n  font-weight: bold;\n  font-size: 3em;\n  color: rgba(0, 0, 0, 0.38); }\n\n.cardContainer, .deckContainer {\n  height: 105px;\n  max-height: 105px;\n  width: 100%;\n  overflow-y: auto;\n  white-space: nowrap; }\n  @media only screen and (device-width: 320px) and (device-height: 640px) and (orientation: portrait), (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait), (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: portrait), (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {\n    .cardContainer, .deckContainer {\n      overflow-y: auto;\n      white-space: normal;\n      height: auto;\n      max-height: inherit;\n      width: 100%; } }\n\n.card {\n  height: 96px;\n  width: 70px;\n  display: inline-block;\n  border-radius: 5%;\n  overflow: hidden;\n  box-shadow: 2px 2px 3px 0px #aaaaaa;\n  margin-left: 5px; }\n  @media only screen and (device-width: 320px) and (device-height: 640px) and (orientation: portrait), (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait), (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: portrait), (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {\n    .card {\n      width: 80%;\n      height: auto;\n      margin-left: auto;\n      margin-right: auto;\n      display: block; } }\n\n.card > img {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: contain;\n     object-fit: contain; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 667:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)();
// imports


// module
exports.push([module.i, "/*\n  'and (device-aspect-ratio : 375/667)' +\n  'and (aspect-ratio : 375/559)' +\n  'and (device-pixel-ratio : 2)';\n  */\n.mat-checkbox-ripple {\n  background-color: pink; }\n\n.search-bar-inner {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  width: 99%;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n.block {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -ms-flex-preferred-size: 5%;\n      flex-basis: 5%;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap; }\n\n.block.search-name {\n  margin-top: 15px;\n  margin-left: 10px;\n  width: 65%;\n  -ms-flex-preferred-size: 50%;\n      flex-basis: 50%;\n  -webkit-box-flex: 4;\n      -ms-flex-positive: 4;\n          flex-grow: 4; }\n  .block.search-name md-input-container {\n    width: 100%; }\n\n.block.search {\n  -webkit-box-flex: 0.5;\n      -ms-flex-positive: 0.5;\n          flex-grow: 0.5;\n  -ms-flex-preferred-size: 2.5%;\n      flex-basis: 2.5%; }\n  .block.search button {\n    margin-top: 15px;\n    margin-left: 15px; }\n\n.block.content {\n  margin-top: 15px;\n  margin-left: 15px; }\n\n.searchButton {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  width: 15%; }\n\n@media only screen and (device-width: 320px) and (device-height: 640px) and (orientation: portrait), (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait), (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: portrait), (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {\n  .block, .block.search, .block.content {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    -ms-flex-preferred-size: 45%;\n        flex-basis: 45%;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap; }\n  .block.search-name {\n    -webkit-box-flex: 2;\n        -ms-flex-positive: 2;\n            flex-grow: 2;\n    -ms-flex-preferred-size: 100%;\n        flex-basis: 100%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 668:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)();
// imports


// module
exports.push([module.i, "/*\n  'and (device-aspect-ratio : 375/667)' +\n  'and (aspect-ratio : 375/559)' +\n  'and (device-pixel-ratio : 2)';\n  */\n.mat-checkbox-ripple {\n  background-color: pink; }\n\n.mat-checkbox-inner-container {\n  width: 50%;\n  height: 50%;\n  position: absolute;\n  left: 15px;\n  top: 20px;\n  opacity: 0.4; }\n\n.center {\n  margin-left: 50%;\n  margin-right: 50%; }\n\n.submit-section {\n  margin-top: 25px; }\n  .submit-section button {\n    float: right;\n    overflow: auto;\n    zoom: 1; }\n\nimg {\n  position: absolute;\n  left: 15px;\n  top: 20px; }\n\n.green > label {\n  background-image: url(" + __webpack_require__(725) + "); }\n\n.block.mana-block {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n.block.mana-block .manaCheckWrap {\n  -ms-flex-line-pack: center;\n      align-content: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-preferred-size: 30%;\n      flex-basis: 30%;\n  font-size: 3em;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 3vw;\n  height: 3vw;\n  margin-top: 10px; }\n\n@media only screen and (device-width: 320px) and (device-height: 640px) and (orientation: portrait), (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait), (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: portrait), (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {\n  .block.mana-block .manaCheckWrap {\n    height: 12vw; } }\n\n.manaCheckWrap label {\n  position: relative;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n  height: 100%;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n\n.manaCheckWrap img {\n  position: relative;\n  top: 0px;\n  left: 0px;\n  max-width: 100%;\n  max-height: 100%; }\n\n.manaCheckWrap input {\n  position: absolute;\n  top: 0px;\n  left: 0px; }\n\n.mana-slider-wrap {\n  margin-top: 25px; }\n\n.app-form-row {\n  margin-top: 25px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 669:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)();
// imports


// module
exports.push([module.i, "/*\n  'and (device-aspect-ratio : 375/667)' +\n  'and (aspect-ratio : 375/559)' +\n  'and (device-pixel-ratio : 2)';\n  */\n.mat-checkbox-ripple {\n  background-color: pink; }\n\n.appTitle {\n  -webkit-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n  background-color: black; }\n\n.appTitle > h1 {\n  -webkit-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n  text-align: center;\n  margin: 0px;\n  padding: 0px;\n  padding-top: 4vw;\n  padding-bottom: 4vw; }\n\n.appTitle > h1 > img {\n  -webkit-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n  position: absolute;\n  left: 50vw;\n  top: 15px;\n  right: 50%;\n  bottom: 0;\n  width: 25%;\n  margin-left: -12.5vw;\n  width: 25vw; }\n\n@media only screen and (device-width: 320px) and (device-height: 640px) and (orientation: portrait), (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait), (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: portrait), (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {\n  .appTitle > h1 {\n    background-color: pink;\n    padding-top: 5vw;\n    padding-bottom: 6vw; } }\n\n.appTitle.displaySmall > h1 {\n  -webkit-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n  text-align: left;\n  padding-top: 2vw;\n  padding-bottom: 2vw; }\n\n.appTitle.displaySmall > h1 > img {\n  width: 10%;\n  left: 15px;\n  top: 3px;\n  margin-left: 0%;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  -webkit-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 676:
/***/ (function(module, exports) {

module.exports = "<header>\n  <app-site-header>\n    \n  </app-site-header>\n  <md-toolbar color=\"primary\">\n  \n    <button class=\"\" md-icon-button [mdMenuTriggerFor]=\"menu\">\n       <md-icon>more_vert</md-icon>\n    </button>\n    <button md-menu-item routerLink=\"/dashboard\">\n      <md-icon> dashboard </md-icon>\n        Dashboard\n    </button>\n    <button md-menu-item routerLink=\"/deck-builder\">\n      <md-icon> developer_board </md-icon>\n      Deckbuilder\n    </button>\n  </md-toolbar>\n</header>\n\n<md-menu #menu=\"mdMenu\">\n  <a md-menu-item routerLink=\"/dashboard\">\n    <md-icon> dashboard </md-icon>\n    Dashboard\n  </a>\n  <a md-menu-item routerLink=\"/deck-builder\">\n    <md-icon> developer_board </md-icon>\n    Deckbuilder\n  </a>\n</md-menu>\n<div class='page'>\n  <router-outlet></router-outlet>\n</div>\n<!--\n<app-mana-checkbox imageUrl='assets/images/red.png'></app-mana-checkbox>\n-->\n<footer>\n  &#169; Amindunited 2016\n</footer>\n\n"

/***/ }),

/***/ 677:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\" [class.active]=\"cardModalService.active\"  (click)=\"closeModal()\">\n  <h2>card modal</h2>\n  <div class=\"modal-content-wrap\">\n    <div class=\"card\" *ngIf=\"cardModalService.card\"\n    (click)=\"cardClick($event)\" \n    (swipeleft)=\"swipe($event, cardModalService.card)\" \n    (swiperight)=\"swipe($event, cardModalService.card)\"\n    (drag)=\"drag($event)\">\n      <img src=\"{{cardModalService.card.imageUrl}}\"/>\n      <button class=\"close\" (click)=\"closeModal()\">X</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 678:
/***/ (function(module, exports) {

module.exports = "<p>\n  dashboard works!\n</p>\n"

/***/ }),

/***/ 679:
/***/ (function(module, exports) {

module.exports = "<div [class.modalOpen]=\"modalOpen\">\n\n  <div color=\"secondary\">\n    <!--\n    <md-toolbar-row>\n    -->\n      <app-search-bar>\n        <button class=\"more-options\" md-raised-button (click)=\"openSearchDialog()\">More Search Options</button>\n      </app-search-bar>\n    <!--\n    </md-toolbar-row>\n    <md-toolbar-row>\n\n      <button class=\"more-options\" md-raised-button (click)=\"openSearchDialog()\">More Search Options</button>\n\n    </md-toolbar-row>\n    -->\n  </div>\n  \n\n  <div class=\"cardContainer\" *mobxAutorun>\n    <div *ngIf=\"store.searchResults.length <= 0\">\n      <div class=\"noSearchYet\">\n        You haven't searched for any cards yet\n      </div>\n    </div>\n    <div *ngIf=\"store.searchResults.length > 0\" >\n      <div class=\"card\" *ngFor=\"let card of store.searchResults\" (click)=\"inspectCard(card)\">\n        <img src=\"{{card.imageUrl}}\"/>\n        {{card.name}}\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"deckContainer\">\n  <div class=\"noDeckYet\">\n    You haven't started a deck yet\n  </div>\n</div>\n\n<app-card-modal (close)=\"modalClosedHandler($event)\"></app-card-modal>\n"

/***/ }),

/***/ 680:
/***/ (function(module, exports) {

module.exports = "<div class=\"search-bar-inner\">\n  <!--\n  <div class=\"block search-text\">\n    <md-input-container class=\"searchText\">\n      <input mdInput placeholder=\"Card text\" name=\"cardText\" [(ngModel)]=\"model.term\">\n    </md-input-container>\n  </div>\n  -->\n\n  <div class=\"block search-name\">\n    <md-input-container class=\"searchName\">\n      <input mdInput placeholder=\"Card Name\" name=\"cardName\" [(ngModel)]=\"model.name\">\n    </md-input-container>\n  </div>\n  <!--\n  <div class=\"block mana-block\">\n    <div *ngFor=\"let colour of colours\" class=\"manaCheckWrap\">\n      <input type=\"checkbox\" [id]=\"colour.name\" [name]=\"colour.name\" (change)=\"manaClicked(option, $event)\" [(ngModel)]=\"colour.checked\"/>\n      <label [for]=\"colour.name\" class=\"mat-accent\">\n        <div class=\"mat-accent mat-button-ripple mat-ripple mat-button-ripple-round\" md-ripple [mdRippleColor]=\"rippleColour\"></div>\n        <img [src]=\"colour.img\">\n      </label>\n    </div>\n  </div>\n  -->\n  <div class=\"block search\">\n    <button class=\"searchButton\" md-raised-button (click)=\"setFilter()\">\n      <md-icon>search</md-icon>\n    </button>\n  </div>\n  <div class=\"block content\">\n    <ng-content></ng-content>\n  </div>\n</div>"

/***/ }),

/***/ 681:
/***/ (function(module, exports) {

module.exports = "\n<div>\n  <md-input-container class=\"example-full-width\">\n    <input mdInput placeholder=\"Card name\" name=\"cardName\" [(ngModel)]=\"model.name\" />\n  </md-input-container>\n</div>\n\n<!--\n<section class=\"example-section\">\n  <label class=\"example-margin\">Colour:</label>\n  <md-grid-list cols=\"3\">\n    <md-grid-tile *ngFor=\"let colour of colours\">\n      <md-checkbox [(ngModel)]=\"colour.checked\" [name]=\"colour.name\" (change)=\"manaClicked(option, $event)\">\n        <img src={{colour.img}}/>\n      </md-checkbox>\n    </md-grid-tile>\n  </md-grid-list>\n</section>\n-->\n<section class=\"example-section\">\n  <div class=\"block mana-block\">\n    <div *ngFor=\"let colour of colours\" class=\"manaCheckWrap\">\n      <input type=\"checkbox\" [id]=\"colour.name\" [name]=\"colour.name\" (change)=\"manaClicked(option, $event)\" [(ngModel)]=\"colour.checked\"/>\n      <label [for]=\"colour.name\" class=\"mat-accent\">\n        <div class=\"mat-accent mat-button-ripple mat-ripple mat-button-ripple-round\" md-ripple [mdRippleColor]=\"rippleColour\"></div>\n        <img [src]=\"colour.img\">\n      </label>\n    </div>\n  </div>\n</section> \n\n<section>\n  <div class=\"app-form-row mana-slider-wrap\">\n    <label class=\"example-margin\">Mana Cost:</label>\n    <md-slider\n      class=\"example-margin\"\n      [max]=\"12\"\n      [min]=\"0\"\n      [step]=\"step\"\n      [thumb-label]=true\n      [tick-interval]=\"1\"\n      [value]=\"manaCost\"\n      [vertical]=false\n      [(ngModel)]=\"model.cmc\">\n    </md-slider>\n  </div>\n\n\n  <div class=\"app-form-row\">\n    <md-input-container class=\"example-full-width\">\n      <input mdInput placeholder=\"Card text\" name=\"cardText\" [(ngModel)]=\"model.term\">\n    </md-input-container>\n  </div>\n  <div class=\"app-form-row\">\n    <md-select placeholder=\"Card Type\" [(ngModel)]=\"selectedType\" name=\"cardType\" [(ngModel)]=\"model.type\">\n      <md-option *ngFor=\"let cardType of cardTypes\" [value]=\"cardType\">\n        {{cardType}}\n      </md-option>\n    </md-select>\n  </div>\n\n  <div class=\"app-form-row\">\n    <md-select placeholder=\"Subtype\" [(ngModel)]=\"selectedSubType\" name=\"subType\" [(ngModel)]=\"model.subType\">\n      <md-option *ngFor=\"let subType of subTypes\" [value]=\"subType\">\n        {{subType}}\n      </md-option>\n    </md-select>\n  </div>\n</section>\n<section class=\"submit-section\">\n  <button md-raised-button (click)=\"setFilter()\">\n    <md-icon>search</md-icon>\n  </button>\n</section>\n\n"

/***/ }),

/***/ 682:
/***/ (function(module, exports) {

module.exports = "<div class=\"appTitle\" [ngClass]=\"{displaySmall: displaySmall}\">\n  <h1>\n    <img src=\"assets/images/Mtg_logo.png\"/>\n  </h1>\n</div>\n"

/***/ }),

/***/ 725:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "green.png";

/***/ }),

/***/ 727:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(446);


/***/ })

},[727]);
//# sourceMappingURL=main.bundle.js.map