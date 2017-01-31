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
      return action.user === null // guest user
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

// Sunnys
const initialSunnyState = {
  isFetching: true,
  error: '',
}

function sunnys (state = initialSunnyState, action ) {
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

// feed
function feed (state, action) {
  switch (action.type) {
    case SETTING_FEED_LISTENER :  // when is this called?
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
       sunnyIds: actions.sunnyIds, // what do we do with these?
       newSunnyAvailable: false // shouldn't this be true?
     }
  }
}

// listeners
export default function listeners ( state = {}, action = {} ) {
  switch (action.type) {
    case ADD_LISTENER :
      return {
        ...state,
        [action.listenerId]: true,
      }
    default :
      return state
  }
}

// Modal
const initialState = {
  isOpen: false,
  newSunnyText: ''
}

export default function modal ( state = initialState, action = {} ) {
  switch (action.type) {
    case OPEN_MODAL :
      return {
        ...state,
        isOpen: true,
      }
    case CLOSE_MODAL :
      return {
        ...state,
        isOpen: false,
        newSunnyText: '',
      }
    case UPDATE_SUNNY_TEXT :
      return {
        ...state,
        newSunnyText: action.newSunnyText,
      }
    default:
      return state
  }
}

const initialUsersSunnyState = {
  sunnyIds: [],
  lastUpdated: 0,
}

function usersSunny (state = initialUsersSunnyState, action) {
  switch (action.type) {
    case ADD_SINGLE_USER_SUNNY :
      return {
        ...state,
        sunnyIds: [...state.sunnyIds, action.sunnyId]
      }
    default:
      return state
  }
}

const initialState = {
  isFetching: false,
  error: '',
}

// user_sunnys
export function usersSunnys ( state = initialState, action = {} ) {
  switch (action.type) {
    case FETCHING_USER_SUNNYS :
      return {
        ...state,
        isFetching: true,
      }
    case FETCHING_USER_SUNNYS_ERROR :
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    case FETCHING_USER_SUNNYS_SUCCESS :
      return {
        ...state,
        ...initialState,
        [action.sunnyId]: {
          lastUpdated: action.lastUpdated,
          sunnyIds: action.sunnyIds,
        },
      }
    case ADD_SINGLE_USER_SUNNY :
      return typeof state[action.uid] === 'undefined'
        ? state
        : {
          ...state,
          ...initialState,
          [action.uid]: usersSunny(state[action.uid], action),
        }
    default:
      return state
  }
}

// userslikes
const initialState = {
  isFetching: false,
  error: '',
}

export default function usersLikes (state = initialState, action = {}) {
  switch (action.type) {
    case FETCHING_LIKES :
      return {
        ...state,
        isFetching: true,
      }
    case FETCHING_LIKES_ERROR :
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    case FETCHING_USER_SUNNYS_SUCCESS :
      return {
        ...state,
        isFetching: false,
        ...action.likes,
        error: '',
      }
    case ADD_LIKE :
      return {
        ...state,
        [action.sunnyId]: true,
      }
    case REMOVE_LIKE :
      return Object.keys(state) // state,sunnyIds ?
        .filter(sunnyId => action.sunnyId !== sunnyId)
        .reduce((acc, curr) => {
          acc[curr] = state[curr]
          return acc
        }, {})
    default:
      return state
  }
}

// likescount
function count (state, action) {
  switch (action.type) {
    case ADD_LIKE :
      return state + 1
    case REMOVE_LIKE :
      return state - 1
    default:
      return state
  }
}


const initialState = {
  isFetching: false,
  error: ''
}

export default function likeCount (state = initialState, action = {}) {
  switch (action.type) {
    case FETCHING_COUNT :
      return {
        ...state,
        isFetching: true,
      }
    case FETCHING_COUNT_ERROR :
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    case FETCHING_COUNT_SUCCESS :
      return {
        ...state,
        ...initialState,
        [action.sunnyId]: action.count
      }
    case ADD_LIKE :
    case REMOVE_LIKE :
      return typeof state[action.sunnyId] === 'undefined'
        ? state
        : {
          ...state,
          [action.sunnyId]: count(state[action.sunnyId], action)
        }
    default:
      return state
  }
}

// replies
const initialRepliesState = {
  isFetching: false,
  error: '',
}

const initialReplyState = {
  lastUpdated: Date.now(),
  replies: {},
}

const initialSunnyReplyState = {
  name: '',
  reply: '',
  uid: '',
  timestamp: 0,
  avatar: '',
  replyId: '',
}

function sunnyReply (state = initialSunnyReplyState, action) {
  switch (action.type) {
    case ADD_REPLY :
      return {
        ...state,
        [action.reply.replyId]: action.reply,
      }
    case REMOVE_REPLY :
      return {
        ...state,
        [action.reply.replyId]: undefined,
      }
    default:
      return state
  }
}

function reply (state = initialReplyState, action) {
  switch (action.type) {
    case FETCHING_REPLIES_SUCCESS :
      return {
        ...state,
        lastUpdated: action.lastUpdated,
        replies: action.replies,
      }
    case REMOVE_REPLY :
    case NEW_REPLY :
      return {
        ...state,
        replies: sunnyReply(state.replies, action)
      }
    default:
      return state
  }
}

export default function replies (state = initialRepliesState, action) {
  switch (action.type) {
    case FETCHING_REPLIES :
      return {
        ...state,
        isFetching: true,
      }
    case FETCHING_REPLIES_ERROR :
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    case ADD_REPLY :
    case REMOVE_REPLY :
    case FETCHING_REPLIES_SUCCESS :
      return {
        ...state,
        ...initialRepliesState,
        [action.sunnyId]: reply(state[action.sunnyId], action)
      }
    default:
      return state
  }
}
