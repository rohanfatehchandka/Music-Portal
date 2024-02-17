import React from 'react'
import { useEffect } from 'react';
import {signIn, useSession} from 'next-auth/react';
import SpotifyWebApi from 'spotify-web-api-node';

const spotifyApi = new SpotifyWebApi({
    clientId: "5ec52ecbd24e476c9729e1ebba4c051a",
      clientSecret:"7a62723d76af46f2b1b46ca19285c205",
})

function useSpotify() {
    const {data: session, status} = useSession();

    useEffect(() => {
        if(session) {
            if(session.error === 'RefreshAccessTokenError') {
                signIn();
            }

            spotifyApi.setAccessToken(session.user.accessToken)
        }
    },[session])

  return spotifyApi;
}

export default useSpotify