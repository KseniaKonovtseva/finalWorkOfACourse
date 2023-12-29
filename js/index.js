import modalHeader from './modules/modalHeader'
import sliderBenefits from './modules/sliderBenefits'
import sliderServices from './modules/sliderServices'
import modalCall from './modules/modalCall'
import timer from './modules/timer'
import forms from './modules/forms'

modalHeader()
sliderBenefits()
sliderServices()
modalCall()
timer('1 January 2024', '#order_1')
timer('1 January 2024', '#order_2')
forms('#order_1 form')
forms('#order_2 form')
forms('.services-modal form')