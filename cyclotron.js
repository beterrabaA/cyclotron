function cyclotron(particle,size) {
    const matrix = Array.from({ length: size }, () => Array.from({ length: size }, () => '1'));
  
    if (particle === 'e') {
      for (let i = 1; i < size; i++) {
        for (let j = 0; j < size; j++) {
          matrix[0][j] = particle;
          matrix[j][size -1] = particle
        }
      }
    } else if (particle === 'p') {
      for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
          if (i === 0 || j === 0 || i === size - 1 || j === size - 1) {
            matrix[i][j] = particle;
            matrix[size -1][size -1] = '1'
            matrix[size -2][size -2] = particle
          }
        }
      }
    } else if (particle === 'n') {
        for (let i = 0; i < size; i++) {
      matrix[0][i] = particle;
        }
    } else {
      for (let i = 1; i < size; i++) {
        for (let j = 0; j < size; j++) {
          matrix[i][j] = '1';
        }
      }
    }
  
    return matrix;
  }
  
  // Cyclotron without particles:
  console.log(cyclotron(5)); 

  // Accelerating an electron:
  console.log(cyclotron('e',4)); 

  // Accelerating a proton:
  console.log(cyclotron('p',4)); 
  // Case: 6x6
  console.log(cyclotron('p',6));

  // Accelerating a neutron:
  console.log(cyclotron('n',4)); 

  
