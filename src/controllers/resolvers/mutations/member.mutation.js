import {
    authGuard, 
    authneticatedUserShouldBeAdmin,
    updateAuthenticatedUser
} from '../../services/authentication.service'
import * as service from '../../services/member.service'
const mutations = {
    async signIn(parent, {data}, cnxt, info){
        service.signIn()
    },
    async signUp(parent, {data}, cnxt, info){
        service.signUp()
    },
    async updateMe(parent, {data}, cnxt, info){
        authGuard()
        updateAuthenticatedUser()
    },
    async changeMemberRole(parent, {id, role}, cnxt, info){
        authGuard()
        authneticatedUserShouldBeAdmin()
        service.changeMemberRole()
    },
    async deleteMe(parent, {}, cnxt, info){
        authGuard()
        service.deleteAuthenticatedMember()
    },
    async deleteMember(parent, {id}, cnxt, info){
        authGuard()
        authneticatedUserShouldBeAdmin() 
        service.deleteMember()
    }
}

export default mutations