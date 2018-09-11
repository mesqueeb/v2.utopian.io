import axios from 'axios'
import jwt from 'jsonwebtoken'
import { Cookies } from 'quasar'

export default async ({ currentRoute, store, redirect, ssrContext }) => {
  const code = currentRoute.query.code
  if (code) {
    const cookies = process.env.SERVER ? Cookies.parseSSR(ssrContext) : Cookies
    // TODO handle errors
    const { access_token: accessToken, refresh_token: refreshToken } = (await axios.post('/oauth/token', {
      grant_type: 'authorization_code',
      code
    })).data

    const token = jwt.decode(accessToken)
    cookies.set('access_token', accessToken, {
      expires: 365
    })
    cookies.set('refresh_token', refreshToken, {
      expires: 365
    })

    await store.dispatch('api/setTokens', {
      accessToken,
      refreshToken
    })

    if (!token.username) {
      redirect('/users/create')
    }
  }
}