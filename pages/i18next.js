import i18n from "i18next";
import {initReactI18next} from 'react-i18next';

const resources = {
	en: {
		translation: {
			features: 'Features',
			helpCenter: 'Help Center',
			blog: 'Blog',
			contact: 'Contact Us',
		}
	},
	az: {
		translation: {
			features: 'Xüsusiyyətləri',
			helpCenter: 'Yardım mərkəzi',
			blog: 'Blog',
			contact: 'Əlaqə'
		}
	},
	tr: {
		translation: {
			features: 'Özellikler',
			helpCenter: 'Yardım Merkezi',
			blog: 'Blog',
			contact: 'Bize Ulaşın'
		}
	},
	ru: {
		translation: {
			features: 'функции',
			helpCenter: 'Центр помощи',
			blog: 'блог',
			contact: 'Контакт'
		}
	}
}

i18n
	.use(initReactI18next)
	.init({
		resources,
		lng: 'en'
	})
  
export default i18n