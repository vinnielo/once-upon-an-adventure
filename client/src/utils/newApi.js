export const getUserSprite = (id) =>{
    return fetch(`/api/user/avatar/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

 