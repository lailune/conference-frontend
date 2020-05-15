// @flow

import { ReducerRegistry } from '../base/redux';

import { BACKREPLACE_ENABLED, BACKREPLACE_DISABLED } from './actionTypes';


ReducerRegistry.register('features/blur', (state = {}, action) => {

    switch (action.type) {
    case BACKREPLACE_ENABLED: {
        return {
            ...state,
            blurEnabled: true
        };
    }
    case BACKREPLACE_DISABLED: {
        return {
            ...state,
            blurEnabled: false
        };
    }
    }

    return state;
});
