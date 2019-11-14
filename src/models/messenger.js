import {Schema, model} from 'mongoose'
import {messageSchema} from './message'
import * as member from './member'
const messengerSchema=Schema({
    firstInterlocutor:{
        type:Schema.Types.ObjectId,
        ref:'member'
    },
    secondInterlocutor:{
        type:Schema.Types.ObjectId,
        ref:'member'
    },
    messages:[{
        type:messageSchema,
    }],
    createdAt: {
        type: Date,
        default:  new Date()
    },
    updatedAt: {
        type: Date,
        default:  new Date()
    }

})

export default model('messenger', messengerSchema)