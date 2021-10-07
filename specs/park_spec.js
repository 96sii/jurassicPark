const assert = require('assert');
const Park = require('../models/park.js')
const Dinosaur = require('../models/dinosuar.js')

describe ('Park', function(){
    let park;
    beforeEach(function(){
        park = new Park('Jurassic Park', 99);
    });

    it('should have a name', function(){
        const actual = park.name;
        assert.strictEqual(actual, 'Jurassic Park');
    });

    it('should have a ticket price', function(){
        const actual = park.ticketPrice;
        assert.strictEqual(actual, 99);
    });

    it('should have an array of dinosaurs', function(){
        const actual = park.dinosaurs;
        assert.deepStrictEqual(actual, []);
    });

    it('should be able to count the the amount of dinosaurs', function(){
        const actual = park.dinosaurCount();
        assert.strictEqual(actual, 0);
    });

    it('should be able to add a dinosaur to it\'s list of dinosaurs', function(){
        const dinosaur = new Dinosaur('Tyrannosaurus', 'Carnivore', 100);
        park.addDinosaur(dinosaur);
        const actual = park.dinosaurCount();
        assert.strictEqual(actual, 1);
    });

    it('should be able to remove a dinosaur', function(){
        const dinosaur = new Dinosaur('Tyrannosaurus', 'Carnivore', 100);
        const dinosaur2 = new Dinosaur('Stegosaurus', 'Herbivore', 75);
        park.addDinosaur(dinosaur);
        park.addDinosaur(dinosaur2);
        park.removeDinosaur(dinosaur);
        const actual = park.dinosaurCount();
        assert.strictEqual(actual, 1)
    });

    it('should be able to find dinosaur that attracts most visitors', function(){
        const dinosaur1 = new Dinosaur('Tyrannosaurus', 'Carnivore', 100);
        const dinosaur2 = new Dinosaur('Stegosaurus', 'Herbivore', 200);
        const dinosaur3 = new Dinosaur('Stegosaurus', 'Herbivore', 50);
        const dinosaur4 = new Dinosaur('Stegosaurus', 'Herbivore', 1000);
        park.addDinosaur(dinosaur1);
        park.addDinosaur(dinosaur2);
        park.addDinosaur(dinosaur3);
        park.addDinosaur(dinosaur4);
        const actual = park.mostVisited();
        assert.strictEqual(actual, dinosaur4);
    });

    it('should find all dinosaurs of a particular species', function(){
        const dinosaur1 = new Dinosaur('Tyrannosaurus', 'Carnivore', 100);
        const dinosaur2 = new Dinosaur('Stegosaurus', 'Herbivore', 200);
        const dinosaur3 = new Dinosaur('Stegosaurus', 'Herbivore', 50);
        park.addDinosaur(dinosaur1);
        park.addDinosaur(dinosaur2);
        park.addDinosaur(dinosaur3);
        const actual = park.findSpecies('Stegosaurus');
        assert.deepStrictEqual(actual, [dinosaur2, dinosaur3])
    });

    it('should be able to calculate total number of visitors per day', function(){
        const dinosaur1 = new Dinosaur('Tyrannosaurus', 'Carnivore', 100);
        const dinosaur2 = new Dinosaur('Stegosaurus', 'Herbivore', 200);
        const dinosaur3 = new Dinosaur('Stegosaurus', 'Herbivore', 50);
        park.addDinosaur(dinosaur1);
        park.addDinosaur(dinosaur2);
        park.addDinosaur(dinosaur3);
        const actual = park.totalVisitorsPerDay();
        assert.strictEqual(actual, 350);
    });

    it('shold be able to calculate total number of visitors per year', function(){
        const dinosaur1 = new Dinosaur('Tyrannosaurus', 'Carnivore', 100);
        const dinosaur2 = new Dinosaur('Stegosaurus', 'Herbivore', 200);
        const dinosaur3 = new Dinosaur('Stegosaurus', 'Herbivore', 50);
        park.addDinosaur(dinosaur1);
        park.addDinosaur(dinosaur2);
        park.addDinosaur(dinosaur3);
        const actual = park.totalVisitorsPerYear();
        assert.strictEqual(actual, 127750)
    });

    it('should be able to calculate total revenue from ticket sales for one year', function(){
        const dinosaur1 = new Dinosaur('Tyrannosaurus', 'Carnivore', 100);
        const dinosaur2 = new Dinosaur('Stegosaurus', 'Herbivore', 200);
        const dinosaur3 = new Dinosaur('Stegosaurus', 'Herbivore', 50);
        park.addDinosaur(dinosaur1);
        park.addDinosaur(dinosaur2);
        park.addDinosaur(dinosaur3);
        const actual = park.revenuePerYear();
        assert.strictEqual(actual, 12647250)
    });


})
