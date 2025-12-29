import { IUser } from "../../interface/User";

export const initialState: IUser = {
    amountOptions: 4,
    amountQuestions: 10,
    helps: 3,
    isAdd: true,
    categories: [{
        category: "Estados",
        isSelect: false,
        corrects: 0,
        questions: 0,
        isImage: true,
    }, {
        category: "Capitales",
        isSelect: false,
        corrects: 0,
        questions: 0,
        isImage: false
    }, {
        category: "Banderas",
        isSelect: false,
        corrects: 0,
        questions: 0,
        isImage: true,
    }, {
        category: "Escudos",
        isSelect: false,
        corrects: 0,
        questions: 0,
        isImage: true,
    }, {
        category: "Habitantes",
        isSelect: false,
        corrects: 0,
        questions: 0,
        isImage: false
    }, {
        category: "Superficie",
        isSelect: false,
        corrects: 0,
        questions: 0,
        isImage: false
    },
    // {
    //     category: "Ríos",
    //     isSelect: false,
    //     corrects: 0,
    //     questions: 0,
    //     isImage: true
    // }, {
    //     category: "Lagos/Lagunas",
    //     isSelect: false,
    //     corrects: 0,
    //     questions: 0,
    //     isImage: true
    // }, {
    //     category: "Montañas",
    //     isSelect: false,
    //     corrects: 0,
    //     questions: 0,
    //     isImage: true
    // }, {
    //     category: "Regiones",
    //     isSelect: false,
    //     corrects: 0,
    //     questions: 0,
    //     isImage: true
    // }, {
    //     category: "Pueblos Originarios",
    //     isSelect: false,
    //     corrects: 0,
    //     questions: 0,
    //     isImage: true
    // }, {
    //     category: "Parques Nacionales",
    //     isSelect: false,
    //     corrects: 0,
    //     questions: 0,
    //     isImage: true
    // }, {
    //     category: "Lugares Turísticos",
    //     isSelect: false,
    //     corrects: 0,
    //     questions: 0,
    //     isImage: true
    // }, {
    //     category: "Zonas de la Ciudad de Guatemala",
    //     isSelect: false,
    //     corrects: 0,
    //     questions: 0,
    //     isImage: true
    // }, {
    //     category: "Municipios Nivel 1",
    //     isSelect: false,
    //     corrects: 0,
    //     questions: 0,
    //     isImage: false
    // }, {
    //     category: "Municipios Nivel 2",
    //     isSelect: false,
    //     corrects: 0,
    //     questions: 0,
    //     isImage: false
    // }, {
    //     category: "Municipios Nivel 3",
    //     isSelect: false,
    //     corrects: 0,
    //     questions: 0,
    //     isImage: false
    // }, {
    //     category: "Municipios Nivel 4",
    //     isSelect: false,
    //     corrects: 0,
    //     questions: 0,
    //     isImage: false
    // }, {
    //     category: "Municipios Nivel 5",
    //     isSelect: false,
    //     corrects: 0,
    //     questions: 0,
    //     isImage: false
    // }, {
    //     category: "Municipios Nivel 6",
    //     isSelect: false,
    //     corrects: 0,
    //     questions: 0,
    //     isImage: false
    // }, 
    {
        category: "Ciudades Nivel ",
        isSelect: false,
        corrects: 0,
        questions: 0,
        isImage: false
    }]
}