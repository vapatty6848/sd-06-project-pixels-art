function add(triggerObj, triggerType, action, colorStorage) {
  triggerObj.addEventListener(triggerType,function(event) {
        colorStoraged = action(event,colorStorage);
      })
}

function addClassEvent(triggerObj, triggerType, action) {
  triggerObj.addEventListener(triggerType, function(event) {
    action(event);
  })
}

function addButtonEvent(triggerObj, triggerType, action, target) {
  triggerObj.addEventListener(triggerType, function() {
    action(target);
  })
}

function generateRandomColor() {
  let parameters = []
  for (let i = 0 ; i < 3 ; i += 1) {
    parameters.push(RandomGenerator256Bits())
  }
  let numero =parameters.join(',');
  return `rgb(${numero})`
}

function RandomGenerator256Bits() {
  let valores = []
  let primeiroValor  = Math.ceil(Math.random()*2);
  for (let i = 0; i < 3; i += 1) {
    if(i === 0) {
      valores.push(primeiroValor);
    }
    if(i >= 1) {
      let DemaisValores = Math.ceil(Math.random()*5)
      valores.push(DemaisValores);
    }
  }
  return (valores.join(''));
}
