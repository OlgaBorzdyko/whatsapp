import React from 'react'
import AuthorizationResponse from '../services/fetch'



const AuthorizationPage = ({ userId, userToken }: { userId: string, userToken: string}) => {
    return (
        <div>
            <AuthorizationResponse  userId={userId} userToken={userToken} />
        </div>
    )
}

export default AuthorizationPage