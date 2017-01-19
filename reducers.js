const initialUserState = {
  lastUpdated: 0,
  info: {
    name: '',
    uid: '',
    avatar: ''
  }
}

function user (state = initialUserState, action) {
  switch (action.type) {
    case FETCHING_USER_SUCCESS :
      return {
        ...state,
        info: action.user,
        lastUpdated: action.timestamp
      }

    default :
      return state
  }
}

const initialUsersState = {
  isFetching: false,
  error: '',
  isAuthed: false,
  authedId: ''
}

function users (state = initialUsersState, action) {
  switch (action.type) {
    case AUTH_USER :
      return {
        ...state, // object spread - Stage 2 feature -> equivelant to Object.assing({}, state, {})
        isAuthed: true,
        authedId: action.uid,
      }

    case UNAUTH_USER :
      return {
        ...state,
        isAuthed: false,
        authedId: ''
      }

    case FETCHING_USER :
      return {
        ...state,
        isFetching: true,
      }

    case FETCHING_USER_ERROR :
      return {
        ...state,
        isFetching: false,
        error: action.error
      }

    case FETCHING_USER_SUCCESS :
      return action.user === null
      ? {
        ...state,
        error: '',
        isFetching: false
        }
      : {
        ...state,
        isFetching: false,
        error: '',
        [action.uid]: user(state[action.uid], action)
      }

    default :
      return state
  } // ends switch
} // ends users func


const initialSunnysState = {
  isFetching: true,
  error: '',
}

function sunnys (state = initialSunnysState, action ) {
  switch(action.type) {
    case FETCHING_SUNNY :
      return {
        ...state,
        isFetching: true
      }

    case ADD_SUNNY :
    case FETCHING_SUNNY_SUCCESS :
      return {
        ...state,
        isFetching: false,
        error: '',
        [action.sunny.sunnyId]: action.sunny
      }

    case FETCHING_SUNNY_ERROR :
      return {
        ...state,
        isFetching: false,
        error: action.error
      }


    case REMOVE_FETCHING :
      return {
        ...state,
        isFetching: false,
        error: ''
      }

    case ADD_MULTIPLE_SUNNYS :
      return {
        ...state,
        ...action.sunnys
      }

    default :
      return state

  } // ends switch
} // ends sunnys func

function feed (state, action) {
  switch (action.type) {
    case SETTING_FEED_LISTENER :
     return {
       ...state,
       isFetching: true
     }
    case SETTING_FEED_LISTENER_ERROR :
     return {
       ...state,
       isFetching: false,
       error: action.error
     }
    case SETTING_FEED_LISTENER_SUCCESS :
     return {
       ...state,
       isFetching: true,
       error: '',
       sunnyIds: actions.sunnyIds,
       newSunnysAvailable: false
     }
  }
}
