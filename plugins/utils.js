import lodash from 'lodash';

export default function (context, inject) {
    inject('utils', lodash);
}