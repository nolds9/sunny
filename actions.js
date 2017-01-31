// ======== ACTIONS ==========
// users
{
  type: AUTH_USER,
  uid
}
{
  type: UNAUTH_USER
}
{
  type: FETCHING_USER,
  isFetching,
  error
}
{
  type: FETCHING_USER_ERROR,
  error: 'Error Fetching user'
}
{
  type: FETCHING_USER_SUCCESS,
  uid,
  user,
  timestamp
}

// sunnys
{
  type: FETCHING_SUNNY,
  isFetching,
  error
}
{
  type: FETCHING_SUNNY_ERROR,
  error: 'Error Fetching sunny'
}
{
  type: FETCHING_SUNNY_SUCCESS,
  sunny
}
{
  type: REMOVE_FETCHING
}
{
  type: ADD_SUNNY,
  sunny
}
{
  type: ADD_MULTIPLE_SUNNYS,
  sunnys
}

// feed
{
  type: SETTING_FEED_LISTENER
}
{
  type: SETTING_FEED_LISTENER_ERROR,
  error: 'Errpr fetching feeds'
}
{
  type: SETTING_FEED_LISTENER_SUCCESS,
  sunnyIds
}
{
  type: ADD_NEW_SUNNY_TO_FEED,
  sunnyId
}
{
  type: RESET_NEW_SUNNYS_AVAILABLE
}

// Listeners
{
  type: ADD_LISTENER,
  listenerId
}

// modal
{
  type: OPEN_MODAL,
}
{
  type: CLOSE_MODAL,
}
{
  type: UPDATE_SUNNY_TEXT,
  newSunnyText
}

// replies
{
  type: FETCHING_REPLIES
}
{
  type: FETCHING_REPLIES_ERROR,
  error: 'Error Fetching Replies'
}
{
  type: FETCHING_REPLIES_SUCCESS,
  replies,
  sunnyId,
  lastUpdated: Date.now()
}
{
  type: NEW_REPLY,
  sunnyId,
  reply
}
{
  type: NEW_REPLY_ERROR,
  error: 'Error adding reply'
}
{
  type: REMOVE_REPLY,
  replyId,
  sunnyId,
}


// likesCount
{
  type: FETCHING_COUNT
}
{
  type: FETCHING_COUNT_ERROR,
  error: 'Error fetching sunny like count'
}
{
  type: FETCHING_COUNT_SUCCESS,
  sunnyId,
  count
}

// user_sunnys
{
  type: FETCHING_USER_SUNNYS
}
{
  type: FETCHING_USER_SUNNYS_ERROR,
  error: 'Error fetching User Sunny Ids'
}
{
  type: FETCHING_USER_SUNNYS_SUCCESS,
  sunnyIds,
  lastUpdated,
  uId
}
{
  type: ADD_SINGLE_USER_SUNNY,
  uid,
  sunnyIds,
  lastUpdated
}

// userLikes
{
  type: FETCHING_LIKES
}
{
  type: FETCHING_LIKES_ERROR,
  error: 'Error fetching Likes'
}
{
  type: FETCHING_LIKES_SUCCESS,
  sunnyIds,
  lastUpdated,
  uId
}
{
  type: ADD_LIKE,
  sunnyId
}
{
  type: REMOVE_LIKE,
  sunnyId
}
