function cyclotron(particle,matrixSize) {
    const matrix = Array.from({ length: matrixSize }, () => Array.from({ length: matrixSize }, () => '1'));
  
    if (particle === 'e') {
      for (let i = 1; i < matrixSize; i++) {
        for (let j = 0; j < matrixSize; j++) {
          matrix[0][j] = particle;
          matrix[j][matrixSize -1] = particle
        }
      }
    } else if (particle === 'p') {
      for (let i = 0; i < matrixSize; i++) {
        for (let j = 0; j < matrixSize; j++) {
          if (i === 0 || j === 0 || i === matrixSize - 1 || j === matrixSize - 1) {
            matrix[i][j] = particle;
            matrix[matrixSize -1][matrixSize -1] = '1'
            matrix[matrixSize -2][matrixSize -2] = particle
          }
        }
      }
    } else if (particle === 'n') {
        for (let i = 0; i < matrixSize; i++) {
      matrix[0][i] = particle;
        }
    } else {
      const matrixWithoutParticle = Array.from({ length: particle }, () => Array.from({ length: particle }, () => '1'));
      for (let i = 1; i < particle; i++) {
        for (let j = 0; j < particle; j++) {
          matrixWithoutParticle[i][j] = '1';
        }
      }
      return matrixWithoutParticle
    }
  
    return matrix;
  }
  
  // Cyclotron without particles:
  console.log(cyclotron(4)); 

  // Accelerating an electron:
  console.log(cyclotron('e', 4)); 

  // Accelerating a proton:
  console.log(cyclotron('p', 4)); 
  // Case: 6x6
  console.log(cyclotron('p', 6));

  // Accelerating a neutron:
  console.log(cyclotron('n', 4)); 

  
