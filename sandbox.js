db.createCollection('products', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: ['name', 'price', 'manufacturerId'],
            properties: {
                name: {
                    bsonType: 'string'
                },
                price: {
                    bsonType: 'double'
                },
                manufacturerId: {
                    bsonType: 'objectId'
                },
                amount: {
                    bsonType: 'int'
                },
                expiredDate: {
                    bsonType: 'date'
                }
            }
        }
    }
});


db.products.insertOne({
    name: 'Butter',
    price: 50.5,
    manufacturerId: new ObjectId('65145dcecfcd65140bc81b1c')
});


db.createCollection('manufacturers', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: ['name'],
            properties: {
                name: {
                    bsonType: 'string'
                },
                address: {
                    bsonType: 'object',
                    required: ['country', 'city'],
                    properties: {
                        country: {
                            bsonType: 'string'
                        },
                        city: {
                            bsonType: 'string'
                        }
                    }
                }
            }
        }
    }
});


db.manufacturers.insertOne({
    name: 'Molokombinat',
    address: {
        country: 'Ukraine',
        city: 'Ternopil'
    }
});



db.products.aggregate([
    {
        $lookup: {
            from: 'manufacturers',
            localField: 'manufacturerId',
            foreignField: '_id',
            as: 'manufacturer'
        }
    },
    {
        $unwind: {
            path: '$manufacturer'
        }
    },
    {
        $unset: 'manufacturerId'
    },
    {
        $group: {
            _id: '$manufacturer.name',
            countPosition: {
                $count: {}
            }
        }
    }
]);