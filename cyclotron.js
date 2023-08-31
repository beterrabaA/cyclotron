function cyclotron(size,particle) {
    const matrix = Array.from({ length: size }, () => Array.from({ length: size }, () => '1'));
  
    if (particle === 'e') {
      for (let i = 1; i < size; i++) {
        for (let j = 0; j < size; j++) {
          matrix[0][j] = 'e';
          matrix[j][size -1] = 'e'
        }
      }
    } else if (particle === 'p') {
      for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
          if (i === 0 || j === 0 || i === size - 1 || j === size - 1) {
            matrix[i][j] = 'p';
            matrix[size -1][size -1] = '1'
            matrix[size -2][size -2] = 'p'
          }
        }
      }
    } else if (particle === 'n') {
        for (let i = 0; i < size; i++) {
      matrix[0][i] = 'n';
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
  
  console.log(cyclotron(5)); 
  console.log(cyclotron(4, 'e')); 
  console.log(cyclotron(4,'p')); 
  console.log(cyclotron(6,'p'));
  console.log(cyclotron(4,'n')); 

  