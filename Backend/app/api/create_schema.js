const create = {
    "type": "object",
    "properties":{
        "date":{
            "description":"Is this requried?",
            "type":"string"
        },
        "exercises": {
            "type":"array",
            "items":{
                "type":"object",
                "properties":{
                    "id":{
                        "description":"no",
                        "type":"integer"
                    },
                    "weight":{
                        "type":"integer"
                    },
                    "reps": {
                        "type":"integer"
                    },
                    "sets": {
                        "type":"integer"
                    },
                    "unit": {
                        "type":"string"
                    }
                },
                "required":["id","weight","reps","sets","unit"]
            },
            
        }
    },
    "required":["date","exercises"]
}

module.exports = create