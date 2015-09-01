// import {GET_OFFICE} from 'constants';

const initialState = {
  offices: [
    {abbreviation: 'JC3W', name: 'Some Office 1', id: 1},
    {abbreviation: 'DC3W', name: 'Some Office 2', id: 2},
    {abbreviation: 'J22W', name: 'Some Office 3', id: 3},
    {abbreviation: 'Rw3W', name: 'Some Office 4', id: 4}
  ]
};

export function officeState(state = initialState, action) {
    const {type} = action;

    switch (type) {
        default:
            return state;
    }
}
