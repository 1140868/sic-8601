export class Produto {
    id: Number;
    name: String;
    description: String;
    price: Number;
    maxOccupation: Number;
    minOccupation: Number;
    occupation: Number;
    materials: [{
        id: Number,
        name: String,
        description: String,
        finishes: [{
            id: Number,
            name: String,
            description: String
        }]
    }];
    dimensionId: Number;
    dimension: {
        id: Number,
        widthId: Number,
        width: {
            id: Number,
            value: Number,
            valueMax: Number,
            isDiscrete: boolean
        }
        heightId: Number,
        height: {
            id: Number,
            value: Number,
            valueMax: Number,
            isDiscrete: boolean
        }
        depthId: Number,
        depth: {
            id: Number,
            value: Number,
            valueMax: Number,
            isDiscrete: boolean
        }
    };
    categoryId: Number;
    category: {
        id: Number,
        name: String,
        parentID: Number,
        parentCategory: String,
        subCategories: []
    };
    restrictionId: Number;
    restriction: String;
    parentId: String;
    parentProduct: Produto;
    components: [Produto];
    quantity: number;
}