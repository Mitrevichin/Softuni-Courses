function repainting (input) {

    let nylonQty = Number(input[0]);
    let paintingQty = Number(input[1]);
    let thinnerQty = Number(input[2]);
    let worksHour = Number(input[3]);
    
    let paintingPrice = paintingQty * 14.50;
    let extraPainting = paintingPrice * 0.10;
    let totalPaintingPrice = paintingPrice + extraPainting;

    let nylonPrice = (nylonQty + 2) * 1.50;
    let thinnerPrice = thinnerQty * 5;
    let totalMaterialExpences = nylonPrice + totalPaintingPrice + thinnerPrice + 0.40;

    let wagePerHour = 0.3 * totalMaterialExpences;
    let totalSumWage = wagePerHour *worksHour;
    let totalExpences = totalSumWage + totalMaterialExpences;

    console.log(totalExpences);

}

repainting(['10','11','4','8'])

