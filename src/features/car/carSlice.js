import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cars : [ "Audi ET", "AudiA8", "AudiQ3", "AudiQ5", "AudiS5" ]
}

const carSlice = createSlice({
    name: "cars",
    initialState,
    reducers: {}
})

export const selectCars = state => state.car.cars

export default carSlice.reducer