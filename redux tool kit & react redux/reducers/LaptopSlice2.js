import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        price: 25000,
        spec: {
            cpu: 'i3',
            gen: '10 gen',
            ram: '8GB DDR4',
            hdd: '1TB'
        }
    },
]

const laptopSlice2 = createSlice({
    name: 'laptop2',
    initialState,
    reducers: {
        addLaptop: {
            reducer: (state, action) => {
                state.push(action.payload);
            },
            prepare: (price, cpu, gen, ram, hdd) => {
                return {
                    payload: {
                        id: nanoid(),
                        price,
                        spec: {
                            cpu,
                            gen,
                            ram,
                            hdd
                        }
                    }
                }
            }
        }
    }
});


export const laptopSliceSelector2Reduser = (store) => store.laptopSlice2
export const { addLaptop } = laptopSlice2.actions;
export default laptopSlice2.reducer;