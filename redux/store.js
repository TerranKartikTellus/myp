import { configureStore } from "@reduxjs/toolkit"
import { paraChange1 } from "/slices/data/data1";
import counterRecuder from "/slices/counter"

export const store = configureStore({
  reducer: {  
    counter: counterRecuder ,
    data1: paraChange1,
   }
});

