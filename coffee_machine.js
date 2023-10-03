let water_units = 5;
while (water_units > 0) {
    let requirement = prompt("Press 'y' to get the coffee: ");
    water_units = water_units - 1;
    console.log("coffee served. " + water_units + " units of water remaining.");
}