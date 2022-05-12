import Vue from 'vue';

import _ from 'lodash';
import { format } from 'date-fns';

Vue.filter('capitalize', (value) => {
    const result = _.capitalize(value);

    return result;
})

Vue.filter('price', (value) => {
    const result = `U$ ${value}`;

    return result;
})

Vue.filter('date', value => {
    if (value) {
        const date = format(new Date(value), 'MMM d, yyyy');
    
        return date;
    }
})