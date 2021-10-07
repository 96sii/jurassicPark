const Park = function(name, ticketPrice){
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = [];
}

Park.prototype.dinosaurCount = function(){
    return this.dinosaurs.length;
}

Park.prototype.addDinosaur = function(dinosaur){
    this.dinosaurs.push(dinosaur);
}

Park.prototype.removeDinosaur = function(dinosaur){
    const indexOfPassenger = this.dinosaurs.indexOf(dinosaur);
    this.dinosaurs.splice(indexOfPassenger, 1);
}

Park.prototype.mostVisited = function(){
    const sorted = this.dinosaurs.sort(function(a, b){
    return a.avgVisitors - b.avgVisitors
    });
    return sorted.reverse()[0];
}

Park.prototype.findSpecies = function(species){
    const sameSpecies =[];
    for(const dinosaur of this.dinosaurs){
        if(dinosaur.species === species){
            sameSpecies.push(dinosaur);
        }
    }
    return sameSpecies;
}

Park.prototype.totalVisitorsPerDay = function(){
    let total = 0;
    for(const dinosaur of this.dinosaurs){
        total += dinosaur.avgVisitors;
    }
    return total;
}

Park.prototype.totalVisitorsPerYear = function(){
    let total = 0;
    for(const dinosaur of this.dinosaurs){
        total += dinosaur.avgVisitors;
    }
    return total * 365;
}

Park.prototype.revenuePerYear = function(){
    let total = 0;
    for(const dinosaur of this.dinosaurs){
        total += dinosaur.avgVisitors;
    }
    const totalCustomersPerYear = total * 365;
    return totalCustomersPerYear * this.ticketPrice;
}


module.exports = Park;