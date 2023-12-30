import modalHeader from './modules/modalHeader'
import sliderBenefits from './modules/sliderBenefits'
import sliderServices from './modules/sliderServices'
import modalCall from './modules/modalCall'
import timer from './modules/timer'
import forms from './modules/forms'
import popup from './modules/popup'
import scroll from './modules/scroll'
import calc from './modules/calc'

modalHeader()
sliderBenefits()
sliderServices()
modalCall()
timer('1 January 2024', '#order_1')
timer('1 January 2024', '#order_2')
forms('#order_1 form')
forms('#order_2 form')
forms('.services-modal form')
popup()
scroll()
calc()