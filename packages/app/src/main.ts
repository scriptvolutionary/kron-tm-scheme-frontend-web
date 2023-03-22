import { createApp } from 'vue'

import Accordion from 'primevue/accordion'
import AccordionTab from 'primevue/accordiontab'
import AutoComplete from 'primevue/autocomplete'
import Button from 'primevue/button'
import Calendar from 'primevue/calendar'
import Carousel from 'primevue/carousel'
import Checkbox from 'primevue/checkbox'
import ColorPicker from 'primevue/colorpicker'
import Column from 'primevue/column'
import PrimeVue from 'primevue/config'
import ContextMenu from 'primevue/contextmenu'
import DataTable from 'primevue/datatable'
import DataView from 'primevue/dataview'
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions'
import Dialog from 'primevue/dialog'
import Divider from 'primevue/divider'
import Dropdown from 'primevue/dropdown'
import Fieldset from 'primevue/fieldset'
import FileUpload from 'primevue/fileupload'
import InlineMessage from 'primevue/inlinemessage'
import Inplace from 'primevue/inplace'
import InputMask from 'primevue/inputmask'
import InputNumber from 'primevue/inputnumber'
import InputSwitch from 'primevue/inputswitch'
import InputText from 'primevue/inputtext'
import Listbox from 'primevue/listbox'
import Menu from 'primevue/menu'
import Menubar from 'primevue/menubar'
import Message from 'primevue/message'
import MultiSelect from 'primevue/multiselect'
import Paginator from 'primevue/paginator'
import Panel from 'primevue/panel'
import PanelMenu from 'primevue/panelmenu'
import Password from 'primevue/password'
import PickList from 'primevue/picklist'
import ProgressBar from 'primevue/progressbar'
import ProgressSpinner from 'primevue/progressspinner'
import RadioButton from 'primevue/radiobutton'
import Ripple from 'primevue/ripple'
import ScrollPanel from 'primevue/scrollpanel'
import SelectButton from 'primevue/selectbutton'
import Sidebar from 'primevue/sidebar'
import Slider from 'primevue/slider'
import SplitButton from 'primevue/splitbutton'
import Splitter from 'primevue/splitter'
import SplitterPanel from 'primevue/splitterpanel'
import Steps from 'primevue/steps'
import TabMenu from 'primevue/tabmenu'
import TabPanel from 'primevue/tabpanel'
import TabView from 'primevue/tabview'
import Tag from 'primevue/tag'
import Textarea from 'primevue/textarea'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'
import ToggleButton from 'primevue/togglebutton'
import Toolbar from 'primevue/toolbar'
import Tooltip from 'primevue/tooltip'
import Tree from 'primevue/tree'

import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'
import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/soho-dark/theme.css'

import App from '@App.vue'

import router from './router'
// import store from './store'

// router.beforeEach((to, from, next) => {
//     window.scrollTo(0, 0)
//     if (to.matched.some((record) => record.meta.requiresAuth)) {
//         if (!store.getters.authenticated) {
//             const query = to.fullPath.match(/^\/$/) ? {} : { redirect: to.fullPath }
//             next({
//                 path: '/login',
//                 query: query
//             })
//             return
//         } else {
//             if (to.params.id) document.title = to.meta.title + ' №' + to.params.id
//             else document.title = to.meta.title
//         }
//     }
//     next()
// })
// if (!String.prototype.format) {
//     String.prototype.format = function () {
//         const args = arguments
//         return this.replace(/{(\d+)}/g, function (match, number) {
//             return typeof args[number] != 'undefined' ? args[number] : match
//         })
//     }
// }

createApp(App)
    .use(
        PrimeVue,
        { ripple: true },
        { inputStyle: 'filled' },
        {
            locale: {
                startsWith: 'Начинается с',
                contains: 'Содержит',
                notContains: 'Не содержит',
                endsWith: 'Заканчивается с',
                equals: 'Равно',
                notEquals: 'Не равно',
                noFilter: 'Без фильтра',
                lt: 'Меньше чем',
                lte: 'Меньше чем или рано',
                gt: 'Больше чем',
                gte: 'Больше чем или равно',
                dateIs: 'Date is',
                dateIsNot: 'Date is not',
                dateBefore: 'Date is before',
                dateAfter: 'Date is after',
                clear: 'Очистить',
                apply: 'Применить',
                matchAll: 'Match All',
                matchAny: 'Match Any',
                addRule: 'Добавить правило',
                removeRule: 'Удалить правило',
                accept: 'Да',
                reject: 'Нет',
                choose: 'Выбор',
                upload: 'Загрузка',
                cancel: 'Отказ',
                dayNames: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
                dayNamesShort: ['Вос', 'Пон', 'Вто', 'Сре', 'Чет', 'Пят', 'Суб'],
                dayNamesMin: ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'],
                monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
                monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
                today: 'Сегодня',
                weekHeader: 'Wk',
                firstDayOfWeek: 0,
                dateFormat: 'mm/dd/yy',
                weak: 'Неделя',
                medium: 'Medium',
                strong: 'Strong',
                passwordPrompt: 'Введите пароль',
                emptyFilterMessage: 'Результатов нет',
                emptyMessage: 'Нет доступных опций'
            }
        }
    )
    .use(router)
    // .use(store)
    .use(ToastService)
    .directive('tooltip', Tooltip)
    .directive('ripple', Ripple)
    .component('Accordion', Accordion)
    .component('Divider', Divider)
    .component('Tag', Tag)
    .component('AccordionTab', AccordionTab)
    .component('AutoComplete', AutoComplete)
    .component('ScrollPanel', ScrollPanel)
    .component('Button', Button)
    .component('Calendar', Calendar)
    .component('Carousel', Carousel)
    .component('Checkbox', Checkbox)
    .component('Column', Column)
    .component('ContextMenu', ContextMenu)
    .component('DataTable', DataTable)
    .component('DataView', DataView)
    .component('DataViewLayoutOptions', DataViewLayoutOptions)
    .component('Dialog', Dialog)
    .component('Dropdown', Dropdown)
    .component('Fieldset', Fieldset)
    .component('FileUpload', FileUpload)
    .component('InlineMessage', InlineMessage)
    .component('Inplace', Inplace)
    .component('InputMask', InputMask)
    .component('InputNumber', InputNumber)
    .component('InputSwitch', InputSwitch)
    .component('InputText', InputText)
    .component('Listbox', Listbox)
    .component('Menu', Menu)
    .component('Menubar', Menubar)
    .component('Message', Message)
    .component('MultiSelect', MultiSelect)
    .component('Paginator', Paginator)
    .component('Panel', Panel)
    .component('PanelMenu', PanelMenu)
    .component('Password', Password)
    .component('PickList', PickList)
    .component('ProgressBar', ProgressBar)
    .component('ProgressSpinner', ProgressSpinner)
    .component('RadioButton', RadioButton)
    .component('SelectButton', SelectButton)
    .component('Slider', Slider)
    .component('Sidebar', Sidebar)
    .component('Splitter', Splitter)
    .component('SplitterPanel', SplitterPanel)
    .component('SplitButton', SplitButton)
    .component('Steps', Steps)
    .component('TabMenu', TabMenu)
    .component('TabView', TabView)
    .component('TabPanel', TabPanel)
    .component('Textarea', Textarea)
    .component('ToggleButton', ToggleButton)
    .component('Toast', Toast)
    .component('Toolbar', Toolbar)
    .component('ColorPicker', ColorPicker)
    .component('Tree', Tree)
    .mount('#app')
