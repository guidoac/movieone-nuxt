import Vue from 'vue';
import _ from 'lodash';

Vue.filter('capitalize', (value) => {
    const result = _.capitalize(value);

    return result;
})