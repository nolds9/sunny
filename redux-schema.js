{
  modal: {
    newSunny,
    active
  }
  users: {
    isAuthed,
    isFetching,
    error,
    authedId
    [userId]: {
      lastUpdated,
      info: {
        name,
        userId,
        avatar
      }
    }
  },
  sunnys: {
    [sunnyId]: {
      lastUpdated,
      info: {
        avatar,
        text,
        name,
        timestamp,
        userId
      }
    }
  },
  userSunnys: {
    isFetching,
    error,
    [userId]:{
      lastUpdated,
      sunnyIds: [ [sunnyId], [sunnyId]]
    }
  },
  likeCount: {
    [sunnyId]: 0
  },
  userLikes: {
    [sunnyId]: true
  },
  replies: {
    isFetching,
    error,
    [sunnyId]: {
      replies: {
        lastUpdated,
        [replyId]: {
          name,
          comment,
          userId,
          timestamp,
          avatar
        }
      }
    }
  },
  listeners: {
    [listenersId]: true
  },
  feed: {
    isFetching,
    error,
    newSunnyAvailable
    sunnyIdsToAdd: [[sunnyId], [sunnyId]]
    sunnyIds: [[sunnyId], [sunnyId], [sunnyId]]
  }
}
