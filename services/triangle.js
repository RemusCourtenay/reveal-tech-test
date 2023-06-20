async function getTriangleType(a, b, c) {

    let a_num = Number(a)
    let b_num = Number(b)
    let c_num = Number(c)

    if (isNaN(a_num) || isNaN(b_num) || isNaN(c_num)) {
        throw new TypeError("Invalid Number Input")
    }

    if ((a_num === b_num) && (b_num === c_num)) {
        return 'EQUILATERAL';
    } else if ((a_num === b_num) || (a_num === c_num) || (b_num === c_num)) {
        return 'ISOCELES';
    } else {
        return 'SCALENE';
    }
}

module.exports = {
  getTriangleType
}