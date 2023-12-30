import { animate } from "./helpers";

const calc = () => {
  if (document.querySelector('.calc-wrapper')) {
  const calcBlock = document.querySelector('.calc-wrapper');
  const selectType = document.getElementById('calc-type');
  const selectMaterial = document.getElementById('calc-type-material');
  const numInput = document.getElementById('calc-input');
  const total = document.getElementById('calc-total');

  numInput.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/\D/, "");
  })
  
  const countCalc = () => {
    const selectTypeValue = selectType.options[selectType.selectedIndex].value;
    const selectMaterialValue = selectMaterial.options[selectMaterial.selectedIndex].value;
    const numInputValue = numInput.value
    let totalValue = 0;
    
    if((selectTypeValue !== '--') && (selectMaterialValue !== '--') && (numInput.value !== '')) {
      totalValue = numInputValue * +selectTypeValue * +selectMaterialValue

      animate({
        duration: 1000,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          total.value = Math.round(totalValue * progress)
        }
      });
    } else {
      totalValue = 0
    }
  }
  calcBlock.addEventListener('input', () => {
    countCalc()
  })

  } else {return}

}

export default calc