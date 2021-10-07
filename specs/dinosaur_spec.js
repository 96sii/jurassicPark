const assert = require('assert');
const Dinosaur = require('../models/dinosuar.js')

describe('Dinosaur', function(){
    let dinosaur;

    beforeEach(function(){
        dinosaur = new Dinosaur('Tyrannosaurus', 'Carnivore', 100);
    });

    it('should have a species', function(){
        const actual = dinosaur.species;
        assert.strictEqual(actual, 'Tyrannosaurus')
    });

    it('should have a diet', function(){
        const actual = dinosaur.diet;
        assert.strictEqual(actual, 'Carnivore')
    });

    it('should have an average number of visitors attracted per day', function(){
        const actual = dinosaur.avgVisitors;
        assert.strictEqual(actual, 100);
    });
})